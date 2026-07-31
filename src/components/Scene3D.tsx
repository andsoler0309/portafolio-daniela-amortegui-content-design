"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Fondo: red de nodos conectados.
 * Los nodos flotan, se repelen del cursor y se enlazan con los vecinos cercanos
 * — una metáfora de sistemas y equipos conectados, no de escritura de contenido.
 */

const NODE_COUNT = 34;
const PALETTE = ["#8B9D77", "#A8B89A", "#C4704A", "#D4806A", "#B8C4A8"];
const LINK_COLOR = new THREE.Color("#8B9D77");

/** Ruido determinista: misma disposición en cada render y entre servidor y cliente */
function rand(seed: number): number {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

/** Punto suave con degradado radial, reutilizado por todos los nodos */
function makeDotTexture(color: string): THREE.Texture {
  const size = 128;
  const cv = document.createElement("canvas");
  cv.width = size;
  cv.height = size;
  const ctx = cv.getContext("2d")!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, color);
  g.addColorStop(0.35, color);
  g.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  ctx.fill();
  return new THREE.CanvasTexture(cv);
}

interface NodeMeta {
  home: THREE.Vector3;
  color: string;
  baseScale: number;
  phase: number;
  drift: number;
}

function NodeNetwork() {
  const { viewport } = useThree();

  const mouse = useRef(new THREE.Vector2(0, 0));
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const meta: NodeMeta[] = useMemo(() => {
    // Distribución en rejilla suelta + jitter para que no se lea como cuadrícula
    const cols = 7;
    const rows = Math.ceil(NODE_COUNT / cols);
    return Array.from({ length: NODE_COUNT }, (_, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const x =
        (col / Math.max(cols - 1, 1) - 0.5) * viewport.width * 0.95 +
        (rand(i + 1) - 0.5) * 2.2;
      const y =
        (row / Math.max(rows - 1, 1) - 0.5) * viewport.height * 0.85 +
        (rand(i + 101) - 0.5) * 1.6;
      const z = (rand(i + 211) - 0.5) * 3;
      return {
        home: new THREE.Vector3(x, y, z),
        color: PALETTE[i % PALETTE.length],
        baseScale: 0.1 + rand(i + 307) * 0.13,
        phase: i * 0.83,
        drift: 0.25 + rand(i + 401) * 0.35,
      };
    });
     
  }, [viewport.width, viewport.height]);

  const textures = useMemo(
    () => meta.map((m) => makeDotTexture(m.color)),
    [meta]
  );

  useEffect(() => {
    return () => textures.forEach((tex) => tex.dispose());
  }, [textures]);

  const spritesRef = useRef<(THREE.Sprite | null)[]>([]);
  const positions = useRef<THREE.Vector3[]>([]);
  const velocities = useRef<THREE.Vector3[]>([]);

  useEffect(() => {
    positions.current = meta.map((m) => m.home.clone());
    velocities.current = meta.map(() => new THREE.Vector3());
  }, [meta]);

  // Geometría de enlaces: se reserva el máximo de pares y se ajusta drawRange
  const maxPairs = (NODE_COUNT * (NODE_COUNT - 1)) / 2;
  const linkGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(maxPairs * 2 * 3), 3)
    );
    geo.setAttribute(
      "color",
      new THREE.BufferAttribute(new Float32Array(maxPairs * 2 * 3), 3)
    );
    return geo;
     
  }, [maxPairs]);

  useEffect(() => () => linkGeometry.dispose(), [linkGeometry]);

  const repulseRadius = Math.min(viewport.width, viewport.height) * 0.3;
  const linkRadius = Math.min(viewport.width, viewport.height) * 0.26;

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const mx = mouse.current.x * (viewport.width / 2);
    const my = mouse.current.y * (viewport.height / 2);

    meta.forEach((m, i) => {
      const sprite = spritesRef.current[i];
      const pos = positions.current[i];
      const vel = velocities.current[i];
      if (!sprite || !pos || !vel) return;

      const dx = pos.x - mx;
      const dy = pos.y - my;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < repulseRadius && dist > 0.001) {
        const force = ((repulseRadius - dist) / repulseRadius) * 0.12;
        vel.x += (dx / dist) * force;
        vel.y += (dy / dist) * force;
      }

      vel.x += (m.home.x - pos.x) * 0.026;
      vel.y += (m.home.y - pos.y) * 0.026;
      vel.z += (m.home.z - pos.z) * 0.026;
      vel.multiplyScalar(0.87);

      pos.add(vel);
      pos.x += Math.cos(time * 0.22 + m.phase) * 0.0022 * m.drift;
      pos.y += Math.sin(time * 0.3 + m.phase) * 0.0026 * m.drift;

      sprite.position.copy(pos);

      const proximity = Math.max(0, 1 - dist / repulseRadius);
      const s = m.baseScale * (1 + proximity * 0.9);
      sprite.scale.set(s, s, 1);

      const mat = sprite.material as THREE.SpriteMaterial;
      mat.opacity = 0.4 + (pos.z + 1.5) / 8 + proximity * 0.4;
    });

    // Enlaces entre nodos cercanos
    const posAttr = linkGeometry.getAttribute("position") as THREE.BufferAttribute;
    const colAttr = linkGeometry.getAttribute("color") as THREE.BufferAttribute;
    let v = 0;
    for (let i = 0; i < NODE_COUNT; i++) {
      const a = positions.current[i];
      if (!a) continue;
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const b = positions.current[j];
        if (!b) continue;
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d > linkRadius) continue;

        // Cuanto más cerca, más sólida la línea
        const strength = 1 - d / linkRadius;
        posAttr.setXYZ(v, a.x, a.y, a.z);
        colAttr.setXYZ(v, LINK_COLOR.r * strength, LINK_COLOR.g * strength, LINK_COLOR.b * strength);
        v++;
        posAttr.setXYZ(v, b.x, b.y, b.z);
        colAttr.setXYZ(v, LINK_COLOR.r * strength, LINK_COLOR.g * strength, LINK_COLOR.b * strength);
        v++;
      }
    }
    posAttr.needsUpdate = true;
    colAttr.needsUpdate = true;
    linkGeometry.setDrawRange(0, v);
  });

  return (
    <>
      <lineSegments geometry={linkGeometry}>
        <lineBasicMaterial vertexColors transparent opacity={0.32} depthWrite={false} />
      </lineSegments>

      {meta.map((m, i) => (
        <sprite
          key={i}
          ref={(el) => {
            spritesRef.current[i] = el;
          }}
          position={m.home}
          scale={[m.baseScale, m.baseScale, 1]}
        >
          <spriteMaterial
            map={textures[i]}
            transparent
            depthWrite={false}
            opacity={0.6}
          />
        </sprite>
      ))}
    </>
  );
}

export function Scene3D() {
  return (
    <div className="w-full h-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        style={{ background: "transparent" }}
        frameloop="always"
      >
        <NodeNetwork />
      </Canvas>
    </div>
  );
}
