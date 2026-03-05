"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// ─── data ────────────────────────────────────────────────────────────────────
const CHARS = [
  "C", "O", "N", "T", "E", "N", "T",
  "B", "R", "A", "N", "D",
  "S", "T", "O", "R", "Y",
  "✦", "◦", "·", "—",
  "D", ".", "R",
];

const PALETTE = ["#8B9D77", "#A8B89A", "#C4704A", "#7A8C68", "#D4806A", "#B8C4A8"];

// Pre-build a canvas texture for each letter at load time
function makeLetterTexture(char: string, color: string): THREE.Texture {
  const size = 256;
  const cv = document.createElement("canvas");
  cv.width = size;
  cv.height = size;
  const ctx = cv.getContext("2d")!;
  const fs = char.match(/[A-Z]/i) ? 180 : 140;
  ctx.font = `400 ${fs}px Georgia, 'Times New Roman', serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.9;
  ctx.fillText(char, size / 2, size / 2);
  const tex = new THREE.CanvasTexture(cv);
  tex.needsUpdate = true;
  return tex;
}

// ─── letter field ─────────────────────────────────────────────────────────────
interface LetterMeta {
  home: THREE.Vector3;
  color: string;
  baseScale: number;
  phase: number;
}

function LetterField() {
  const { viewport } = useThree();

  // Global mouse in normalized [-1,1] tracked via window event
  const mouse = useRef(new THREE.Vector2(0, 0));
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const meta: LetterMeta[] = useMemo(() => {
    const cols = 6;
    const rows = Math.ceil(CHARS.length / cols);
    return CHARS.map((_, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const x =
        (col / Math.max(cols - 1, 1) - 0.5) * viewport.width * 0.88 +
        (Math.random() - 0.5) * 1.8;
      const y =
        (row / Math.max(rows - 1, 1) - 0.5) * viewport.height * 0.72 +
        (Math.random() - 0.5) * 1.2;
      const z = (Math.random() - 0.5) * 4;
      return {
        home: new THREE.Vector3(x, y, z),
        color: PALETTE[i % PALETTE.length],
        baseScale: 0.28 + Math.random() * 0.36,
        phase: i * 0.71,
      };
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewport.width, viewport.height]);

  const textures = useMemo(
    () => CHARS.map((ch, i) => makeLetterTexture(ch, meta[i]?.color ?? PALETTE[i % PALETTE.length])),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [meta]
  );

  const spritesRef = useRef<(THREE.Sprite | null)[]>([]);
  const positions = useRef<THREE.Vector3[]>([]);
  const velocities = useRef<THREE.Vector3[]>([]);

  // Initialise positions/velocities once meta is ready
  useMemo(() => {
    positions.current = meta.map((m) => m.home.clone());
    velocities.current = meta.map(() => new THREE.Vector3());
  }, [meta]);

  const repulseRadius = Math.min(viewport.width, viewport.height) * 0.35;

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const mx = mouse.current.x * (viewport.width / 2);
    const my = mouse.current.y * (viewport.height / 2);

    meta.forEach((m, i) => {
      const sprite = spritesRef.current[i];
      if (!sprite) return;
      const pos = positions.current[i];
      const vel = velocities.current[i];
      if (!pos || !vel) return;

      // Repulsion
      const dx = pos.x - mx;
      const dy = pos.y - my;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < repulseRadius && dist > 0.001) {
        const force = ((repulseRadius - dist) / repulseRadius) * 0.14;
        vel.x += (dx / dist) * force;
        vel.y += (dy / dist) * force;
      }

      // Spring home
      vel.x += (m.home.x - pos.x) * 0.028;
      vel.y += (m.home.y - pos.y) * 0.028;
      vel.z += (m.home.z - pos.z) * 0.028;

      // Damping
      vel.multiplyScalar(0.86);

      // Update
      pos.add(vel);
      pos.y += Math.sin(time * 0.38 + m.phase) * 0.003;

      sprite.position.copy(pos);

      // Scale with proximity pulse
      const proximity = Math.max(0, 1 - dist / repulseRadius);
      const s = m.baseScale * (1 + proximity * 0.5) + Math.sin(time * 0.45 + m.phase) * 0.008;
      sprite.scale.set(s, s, 1);

      // Opacity fade by z depth
      const mat = sprite.material as THREE.SpriteMaterial;
      mat.opacity = 0.55 + (pos.z + 2) / 8 + proximity * 0.3;
    });
  });

  return (
    <>
      {CHARS.map((_, i) => (
        <sprite
          key={i}
          ref={(el) => {
            spritesRef.current[i] = el;
          }}
          position={meta[i]?.home ?? [0, 0, 0]}
          scale={[meta[i]?.baseScale ?? 0.3, meta[i]?.baseScale ?? 0.3, 1]}
        >
          <spriteMaterial
            map={textures[i]}
            transparent
            depthWrite={false}
            opacity={0.7}
          />
        </sprite>
      ))}
    </>
  );
}

// ─── ambient dot particles ────────────────────────────────────────────────────
function Particles() {
  const count = 80;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, []);
  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * 0.015;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.018} color="#8B9D77" transparent opacity={0.35} sizeAttenuation />
    </points>
  );
}

// ─── export ───────────────────────────────────────────────────────────────────
export function Scene3D() {
  return (
    <div className="w-full h-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <LetterField />
        <Particles />
      </Canvas>
    </div>
  );
}
