"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { aiProjects } from "@/lib/data";
import type { AIProject, AIProjectType1, AIProjectType2, AIProjectType3, ContentBlock } from "@/lib/data";

/* ─── CONTENT BLOCK — shared block renderer (title + text + bullets) ─── */
function ContentBlockItem({ block, index }: { block: ContentBlock; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-4"
      style={{
        paddingTop: "1.75rem",
        paddingBottom: "1.75rem",
      }}
    >
      {block.title && (
        <p className="font-semibold text-fg-primary" style={{ fontSize: "clamp(0.95rem, 1.25vw, 1.05rem)", lineHeight: 1.5 }}>
          <T>{block.title}</T>
        </p>
      )}
      {block.text && (
        <p className="text-fg-secondary" style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.05rem)", lineHeight: 1.85 }}>
          <T>{block.text}</T>
        </p>
      )}
      {block.bullets && (
        <ul>
          {block.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-4 items-start" style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}>
              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-terracotta/50" style={{ marginTop: "0.55em" }} />
              <span className="text-fg-secondary" style={{ fontSize: "clamp(0.92rem, 1.2vw, 1rem)", lineHeight: 1.8 }}><T>{bullet}</T></span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

/* ─── TEXT WITH LINE BREAKS — respects \n in data strings ─── */
function T({ children }: { children: string }) {
  return (
    <>
      {children.split("\n").map((line, i, arr) => (
        <span key={i}>
          {line}
          {i < arr.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}

/* ─── INFLATE TEXT — letters inflate on hover proximity ─── */
function InflateText({
  text,
  className,
  style,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const rafRef = useRef<number>(0);
  const mousePos = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);

  const words = text.split(" ");

  const updateLetters = useCallback(() => {
    const { x, y } = mousePos.current;
    const hovering = isHovering.current;

    lettersRef.current.forEach((el) => {
      if (!el) return;
      if (!hovering) {
        el.style.transform = "scale(1)";
        el.style.opacity = "1";
        return;
      }
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
      const radius = 120;
      const t = Math.max(0, 1 - dist / radius);
      const ease = t * t * (3 - 2 * t);
      const scale = 1 + ease * 0.22;
      el.style.transform = `scale(${scale})`;
    });
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateLetters);
    },
    [updateLetters]
  );

  const handleMouseEnter = useCallback(() => {
    isHovering.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    isHovering.current = false;
    lettersRef.current.forEach((el) => {
      if (!el) return;
      el.style.transform = "scale(1)";
    });
  }, []);

  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  let charIndex = 0;

  return (
    <span
      ref={containerRef}
      className={className}
      style={{ ...style, display: "inline", cursor: "default" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {words.map((word, wi) => (
        <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
          {word.split("").map((char) => {
            const idx = charIndex++;
            return (
              <span
                key={idx}
                ref={(el) => { lettersRef.current[idx] = el; }}
                style={{
                  display: "inline-block",
                  transition: "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
                  willChange: "transform",
                  transformOrigin: "center bottom",
                }}
              >
                {char}
              </span>
            );
          })}
          {wi < words.length - 1 && (
            <span style={{ display: "inline-block", width: "0.3em" }}>{"\u00A0"}</span>
          )}
        </span>
      ))}
    </span>
  );
}

/* ─── SECTION IDs per project type ─── */
const SECTIONS_TYPE1 = [
  { id: "rol", label: "Rol" },
  { id: "objetivo", label: "Objetivo" },
  { id: "desafio", label: "Desafío" },
  { id: "estrategia", label: "Estrategia" },
  { id: "solucion", label: "Solución" },
  { id: "resultados", label: "Resultados" },
];

const SECTIONS_TYPE2 = [
  { id: "rol", label: "Rol" },
  { id: "objetivo", label: "Objetivo" },
  { id: "desafio", label: "Desafío" },
  { id: "estrategia", label: "Estrategia" },
  { id: "iteracion", label: "Iteración" },
  { id: "herramientas", label: "Herramientas" },
];

const SECTIONS_TYPE3 = [
  { id: "descripcion", label: "Descripción" },
  { id: "herramientas", label: "Herramientas" },
];

function getSectionsForProject(project: AIProject) {
  switch (project.type) {
    case "type1": return SECTIONS_TYPE1;
    case "type2": return SECTIONS_TYPE2;
    case "type3": return SECTIONS_TYPE3;
  }
}

/* ─── IMAGE PLACEHOLDER / SLOT ─── */
function ImageSlot({ src, alt }: { src?: string; alt?: string }) {
  const [open, setOpen] = useState(false);
  if (!src) return null;
  return (
    <>
      <div
        className="relative w-full overflow-hidden rounded-2xl border border-stone/10 group cursor-zoom-in"
        onClick={() => setOpen(true)}
      >
        <Image
          src={src}
          alt={alt || ""}
          width={0}
          height={0}
          sizes="(max-width:1024px) 100vw, 50vw"
          className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-10"
            style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(8px)" }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt || ""}
                className="w-full h-full object-contain rounded-2xl"
                style={{ maxHeight: "90vh" }}
              />
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-white/20"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1l12 12M13 1L1 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── SECTION LABEL ─── */
function SectionLabel({ label }: { label: string }) {
  return (
    <div className="mb-8">
      <h2
        className="font-[family-name:var(--font-display)] font-bold text-fg-primary"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
      >
        {label}
      </h2>
    </div>
  );
}

/* ─── SECTION NAV (scroll-spy anchors) ─── */
function SectionNav({ activeSection, projectId, sections }: { activeSection: string; projectId: string; sections: { id: string; label: string }[] }) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(`${projectId}-${id}`);
    if (!el) return;
    const offset = 200;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };
  return (
    <div className="hidden md:flex items-center overflow-x-auto scrollbar-hide" style={{ gap: "0.5rem", height: "2.8rem" }}>
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => scrollTo(s.id)}
          style={{ padding: "0.5rem 1.1rem" }}
          className={`rounded-full text-[10px] tracking-[0.2em] uppercase font-semibold transition-all duration-300 whitespace-nowrap ${
            activeSection === s.id
              ? "bg-terracotta/10 text-terracotta"
              : "text-fg-muted hover:text-fg-secondary"
          }`}
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}

/* ─── ROL ─── */
function RolSection({ project }: { project: AIProjectType1 | AIProjectType2 }) {
  return (
    <div className="flex flex-col gap-14">
      <div className="space-y-8">
        <p className="text-fg-primary font-normal" style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)", lineHeight: 1.85 }}>
          <T>{project.rol.text}</T>
        </p>
        {project.rol.blocks && (
          <div>
            {project.rol.blocks.map((block, i) => (
              <div key={i} style={{ borderTop: "1px solid rgba(212,197,176,0.15)" }}>
                <ContentBlockItem block={block} index={i} />
              </div>
            ))}
          </div>
        )}
        {project.rol.bullets && (
          <ul>
            {project.rol.bullets.map((bullet, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-5 items-start"
                style={{
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                  borderBottom: i < (project.rol.bullets?.length ?? 0) - 1 ? "1px solid rgba(212,197,176,0.15)" : "none",
                }}
              >
                <span className="shrink-0 w-2 h-2 rounded-full bg-terracotta/60" style={{ marginTop: "0.45em" }} />
                <p className="text-fg-secondary" style={{ fontSize: "clamp(0.98rem, 1.35vw, 1.08rem)", lineHeight: 1.8 }}><T>{bullet}</T></p>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
      {project.rol.image && (
        <ImageSlot src={project.rol.image} alt={`Rol — ${project.client}`} />
      )}
    </div>
  );
}

/* ─── OBJETIVO ─── */
function ObjetivoSection({ project }: { project: AIProjectType1 | AIProjectType2 }) {
  return (
    <div className={`grid grid-cols-1 ${project.objetivoGeneral.image ? 'lg:grid-cols-12' : ''} gap-12 lg:gap-20 items-start`}>
      {project.objetivoGeneral.image && (
        <div className="lg:col-span-5 lg:order-2">
          <ImageSlot src={project.objetivoGeneral.image} alt={`Objetivo — ${project.client}`} />
        </div>
      )}
      <div className={`${project.objetivoGeneral.image ? 'lg:col-span-7 lg:order-1' : 'max-w-3xl'} space-y-8`}>
        <p className="text-fg-secondary font-normal" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.9 }}><T>{project.objetivoGeneral.text}</T></p>
        {project.objetivoGeneral.blocks && (
          <div>
            {project.objetivoGeneral.blocks.map((block, i) => (
              <div key={i} style={{ borderTop: "1px solid rgba(212,197,176,0.15)" }}>
                <ContentBlockItem block={block} index={i} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── DESAFÍO — dark callout card ─── */
function DesafioSection({ project }: { project: AIProjectType1 | AIProjectType2 }) {
  return (
    <div className={`grid grid-cols-1 ${project.desafio.image ? 'lg:grid-cols-12' : ''} gap-8 lg:gap-12 items-stretch`}>
      <div className={`${project.desafio.image ? 'lg:col-span-7' : ''} relative rounded-3xl overflow-hidden`} style={{ border: "1px solid rgba(212,197,176,0.25)" }}>
        <div className="relative z-10" style={{ padding: "clamp(2.5rem, 5vw, 4.5rem)" }}>
          <div className="flex items-center gap-3 mb-8">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-terracotta">
              <path d="M8 1v8M8 13v2M3 3.5L5.5 6M13 3.5L10.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="text-fg-muted text-[10px] tracking-[0.25em] uppercase font-semibold">
              El reto
            </span>
          </div>
          <div className="space-y-8">
            <p className="text-fg-secondary" style={{ fontSize: "clamp(0.98rem, 1.35vw, 1.1rem)", lineHeight: 1.9 }}>
              <T>{project.desafio.text}</T>
            </p>
            {project.desafio.blocks && (
              <div>
                {project.desafio.blocks.map((block, i) => (
                  <div key={i} style={{ borderTop: "1px solid rgba(212,197,176,0.15)" }}>
                    <ContentBlockItem block={block} index={i} />
                  </div>
                ))}
              </div>
            )}
            {project.desafio.bullets && (
              <ul>
                {project.desafio.bullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: i * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="flex gap-5 items-start"
                    style={{
                      paddingTop: "1rem",
                      paddingBottom: "1rem",
                      borderBottom: i < (project.desafio.bullets?.length ?? 0) - 1 ? "1px solid rgba(212,197,176,0.15)" : "none",
                    }}
                  >
                    <span className="shrink-0 w-2 h-2 rounded-full bg-terracotta/60" style={{ marginTop: "0.45em" }} />
                    <p className="text-fg-secondary" style={{ fontSize: "clamp(0.98rem, 1.35vw, 1.08rem)", lineHeight: 1.8 }}><T>{bullet}</T></p>
                  </motion.li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      {project.desafio.image && (
        <div className="lg:col-span-5">
          <ImageSlot src={project.desafio.image} alt={`Desafío — ${project.client}`} />
        </div>
      )}
    </div>
  );
}

/* ─── ESTRATEGIA ─── */
function EstrategiaSection({ project }: { project: AIProjectType1 | AIProjectType2 }) {
  const hasSideImage = !!project.estrategia.image && !!project.estrategia.imageSide;
  const hasPhoneMockup = !!project.estrategia.image && !project.estrategia.imageSide;
  const hasImageGrid = !!(project.estrategia.images && project.estrategia.images.length > 0);
  return (
    <div className="flex flex-col gap-14">
      <div className={`grid grid-cols-1 ${(hasPhoneMockup || hasSideImage) ? 'lg:grid-cols-12' : ''} gap-12 lg:gap-24 items-start`}>
        <div className={(hasPhoneMockup || hasSideImage) ? 'lg:col-span-7' : ''}>
          <div className="space-y-2">
            {project.estrategia.intro && (
              <p className="text-fg-secondary" style={{ fontSize: "clamp(0.98rem, 1.35vw, 1.08rem)", lineHeight: 1.9, paddingBottom: "1rem" }}>
                <T>{project.estrategia.intro}</T>
              </p>
            )}
            {project.estrategia.blocks && (
              <div>
                {project.estrategia.blocks.map((block, i) => (
                  <div key={i} style={{ borderTop: "1px solid rgba(212,197,176,0.15)" }}>
                    <ContentBlockItem block={block} index={i} />
                  </div>
                ))}
              </div>
            )}
            {project.estrategia.bullets && (
              <ul>
                {project.estrategia.bullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: i * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="flex gap-5 items-start"
                    style={{ paddingTop: "1rem", paddingBottom: "1rem", borderBottom: i < (project.estrategia.bullets?.length ?? 0) - 1 ? "1px solid rgba(212,197,176,0.15)" : "none" }}
                  >
                    <span className="shrink-0 w-2 h-2 rounded-full bg-terracotta/60" style={{ marginTop: "0.45em" }} />
                    <p className="text-fg-secondary" style={{ fontSize: "clamp(0.98rem, 1.35vw, 1.08rem)", lineHeight: 1.8 }}><T>{bullet}</T></p>
                  </motion.li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {hasSideImage && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <ImageSlot src={project.estrategia.image!} alt={`Estrategia — ${project.client}`} />
          </motion.div>
        )}
        {hasPhoneMockup && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end items-start pt-4"
          >
            <div
              className="relative"
              style={{
                width: "clamp(200px, 22vw, 280px)",
                borderRadius: "2.8rem",
                border: "2px solid rgba(212,197,176,0.3)",
                padding: "0.85rem",
                background: "var(--bg-secondary)",
                boxShadow: "0 0 0 1px rgba(212,197,176,0.07), 0 32px 64px -16px rgba(0,0,0,0.4)",
              }}
            >
              <div className="flex justify-center mb-3">
                <div style={{ width: "2.8rem", height: "0.25rem", borderRadius: "99px", background: "rgba(212,197,176,0.2)" }} />
              </div>
              <div
                className="relative w-full overflow-hidden cursor-zoom-in"
                style={{ borderRadius: "1.65rem", aspectRatio: "9/19.5" }}
                onClick={() => window.open(project.estrategia.image, "_blank")}
              >
                <Image
                  src={project.estrategia.image!}
                  alt="Estrategia — captura de pantalla"
                  fill
                  className="object-cover object-top"
                  sizes="280px"
                />
              </div>
              <div className="flex justify-center mt-3">
                <div style={{ width: "3.5rem", height: "0.24rem", borderRadius: "99px", background: "rgba(212,197,176,0.2)" }} />
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {hasImageGrid && (
        <div className={`grid gap-5 ${project.estrategia.images!.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
          {project.estrategia.images!.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <ImageSlot src={src} alt={`Estrategia imagen ${i + 1} — ${project.client}`} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── SOLUCIÓN (Type 1 only) ─── */
function SolucionSection({ project }: { project: AIProjectType1 }) {
  const imageSide = project.solucion.imageSide && project.solucion.image;
  const content = (
    <div className="space-y-8">
      {(project.solucion.intro || project.solucion.text) && (
        <p className="text-fg-primary" style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)", lineHeight: 1.85 }}>
          <T>{(project.solucion.intro ?? project.solucion.text)!}</T>
        </p>
      )}
      {project.solucion.blocks && (
        <div>
          {project.solucion.blocks.map((block, i) => (
            <div key={i} style={{ borderTop: "1px solid rgba(212,197,176,0.15)" }}>
              <ContentBlockItem block={block} index={i} />
            </div>
          ))}
        </div>
      )}
      {project.solucion.bullets && (
        <ul className="pt-2">
          {project.solucion.bullets.map((bullet, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex gap-5 items-start"
              style={{ paddingTop: "1rem", paddingBottom: "1rem", borderBottom: i < (project.solucion.bullets?.length ?? 0) - 1 ? "1px solid rgba(212,197,176,0.15)" : "none" }}
            >
              <span className="shrink-0 w-2 h-2 rounded-full bg-terracotta/60" style={{ marginTop: "0.45em" }} />
              <span className="text-fg-secondary" style={{ fontSize: "clamp(0.98rem, 1.35vw, 1.08rem)", lineHeight: 1.8 }}><T>{bullet}</T></span>
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );

  const hasImageGrid = !!(project.solucion.images && project.solucion.images.length > 0);

  if (imageSide) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-7">{content}</div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <ImageSlot src={project.solucion.image!} alt={`Solución — ${project.client}`} />
        </motion.div>
      </div>
    );
  }

  if (hasImageGrid) {
    return (
      <div className="flex flex-col gap-14">
        {content}
        <div className={`grid gap-5 ${
          project.solucion.images!.length === 1 ? 'grid-cols-1' :
          project.solucion.images!.length === 2 ? 'grid-cols-1 sm:grid-cols-2' :
          'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        }`}>
          {project.solucion.images!.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <ImageSlot src={src} alt={`Solución imagen ${i + 1} — ${project.client}`} />
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-14">
      {content}
      {project.solucion.image && (
        <ImageSlot src={project.solucion.image} alt={`Solución — ${project.client}`} />
      )}
    </div>
  );
}

/* ─── RESULTADOS — cards grid (Type 1 only) ─── */
function ResultadosSection({ project }: { project: AIProjectType1 }) {
  return (
    <div className={`grid grid-cols-1 ${project.resultados.image ? 'lg:grid-cols-12' : ''} gap-12 lg:gap-20 items-start`}>
      {project.resultados.blocks && (
        <div className={project.resultados.image ? 'lg:col-span-7' : ''}>
          {project.resultados.blocks.map((block, i) => (
            <div key={i} style={{ borderTop: "1px solid rgba(212,197,176,0.15)" }}>
              <ContentBlockItem block={block} index={i} />
            </div>
          ))}
        </div>
      )}
      {project.resultados.bullets && (
        <div className={`${project.resultados.image ? 'lg:col-span-7' : ''} grid grid-cols-1 sm:grid-cols-2 gap-5`}>
          {project.resultados.bullets.map((bullet, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-stone/20 bg-bg-card hover:border-terracotta/25 transition-all duration-500 hover:shadow-lg hover:shadow-terracotta/5"
              style={{ padding: "2rem" }}
            >
              <span className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-terracotta/10 mb-5">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="text-terracotta">
                  <path d="M2.5 7.5l3 3 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p className="relative z-10 text-fg-primary font-medium" style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", lineHeight: 1.75 }}><T>{bullet}</T></p>
            </motion.div>
          ))}
        </div>
      )}
      {project.resultados.image && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end items-start pt-4"
        >
          <ImageSlot src={project.resultados.image} alt={`Resultados — ${project.client}`} />
        </motion.div>
      )}
    </div>
  );
}

/* ─── ITERACIÓN Y PRUEBAS (Type 2 only) ─── */
function IteracionSection({ project }: { project: AIProjectType2 }) {
  const imageSide = project.iteracionPruebas.imageSide && project.iteracionPruebas.image;
  const content = (
    <div className="space-y-8">
      {project.iteracionPruebas.intro && (
        <p className="text-fg-primary" style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)", lineHeight: 1.85 }}>
          <T>{project.iteracionPruebas.intro}</T>
        </p>
      )}
      {project.iteracionPruebas.text && (
        <p className="text-fg-secondary" style={{ fontSize: "clamp(0.98rem, 1.35vw, 1.08rem)", lineHeight: 1.9 }}>
          <T>{project.iteracionPruebas.text}</T>
        </p>
      )}
      {project.iteracionPruebas.blocks && (
        <div>
          {project.iteracionPruebas.blocks.map((block, i) => (
            <div key={i} style={{ borderTop: "1px solid rgba(212,197,176,0.15)" }}>
              <ContentBlockItem block={block} index={i} />
            </div>
          ))}
        </div>
      )}
      {project.iteracionPruebas.bullets && (
        <ul className="pt-2">
          {project.iteracionPruebas.bullets.map((bullet, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex gap-5 items-start"
              style={{ paddingTop: "1rem", paddingBottom: "1rem", borderBottom: i < (project.iteracionPruebas.bullets?.length ?? 0) - 1 ? "1px solid rgba(212,197,176,0.15)" : "none" }}
            >
              <span className="shrink-0 w-2 h-2 rounded-full bg-terracotta/60" style={{ marginTop: "0.45em" }} />
              <span className="text-fg-secondary" style={{ fontSize: "clamp(0.98rem, 1.35vw, 1.08rem)", lineHeight: 1.8 }}><T>{bullet}</T></span>
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );

  const hasImageGrid = !!(project.iteracionPruebas.images && project.iteracionPruebas.images.length > 0);

  if (imageSide) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-7">{content}</div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <ImageSlot src={project.iteracionPruebas.image!} alt={`Iteración — ${project.client}`} />
        </motion.div>
      </div>
    );
  }

  if (hasImageGrid) {
    return (
      <div className="flex flex-col gap-14">
        {content}
        <div className={`grid gap-5 ${
          project.iteracionPruebas.images!.length === 1 ? 'grid-cols-1' :
          project.iteracionPruebas.images!.length === 2 ? 'grid-cols-1 sm:grid-cols-2' :
          'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        }`}>
          {project.iteracionPruebas.images!.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <ImageSlot src={src} alt={`Iteración imagen ${i + 1} — ${project.client}`} />
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-14">
      {content}
      {project.iteracionPruebas.image && (
        <ImageSlot src={project.iteracionPruebas.image} alt={`Iteración — ${project.client}`} />
      )}
    </div>
  );
}

/* ─── HERRAMIENTAS UTILIZADAS (Type 2 only) ─── */
function HerramientasSection({ project }: { project: AIProjectType2 }) {
  return (
    <div className="space-y-10">
      {project.herramientas.intro && (
        <p className="text-fg-secondary" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.9 }}>
          <T>{project.herramientas.intro}</T>
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {project.herramientas.tools.map((tool, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-2xl border border-stone/20 bg-bg-card hover:border-terracotta/25 transition-all duration-500 hover:shadow-lg hover:shadow-terracotta/5"
            style={{ padding: "1.75rem" }}
          >
            {/* Icon placeholder */}
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-terracotta/8 mb-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-terracotta">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <br />
            <h3 className="text-fg-primary font-semibold mb-2" style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)" }}>
              {tool.name}
            </h3>
            {tool.description && (
              <p className="text-fg-muted" style={{ fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)", lineHeight: 1.7 }}>
                {tool.description}
              </p>
            )}
          </motion.div>
        ))}
      </div>
      <br />
      {project.herramientas.blocks && (
        <div className="pt-6">
          {project.herramientas.blocks.map((block, i) => (
            <div key={i} style={{ borderTop: "1px solid rgba(212,197,176,0.15)" }}>
              <ContentBlockItem block={block} index={i} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   TYPE 3 — "AI in my workflow" simple view
   ═══════════════════════════════════════════════ */
function Type3DescriptionSection({ project }: { project: AIProjectType3 }) {
  return (
    <div className="space-y-10">
      <p className="text-fg-secondary font-normal" style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)", lineHeight: 1.9, maxWidth: "50ch" }}>
        <T>{project.description}</T>
      </p>
      {project.blocks && (
        <div>
          {project.blocks.map((block, i) => (
            <div key={i} style={{ borderTop: "1px solid rgba(212,197,176,0.15)" }}>
              <ContentBlockItem block={block} index={i} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Type3ToolsSection({ project }: { project: AIProjectType3 }) {
  // Group tools by category
  const categories = Array.from(new Set(project.tools.map(t => t.category || "General")));
  return (
    <div className="space-y-12">
      {categories.map((cat, ci) => (
        <div key={ci}>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.08, duration: 0.5 }}
            className="mb-6"
          >
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {project.tools
              .filter(t => (t.category || "General") === cat)
              .map((tool, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative overflow-hidden rounded-2xl border border-stone/20 bg-bg-card hover:border-terracotta/25 transition-all duration-500 hover:shadow-lg hover:shadow-terracotta/5"
                  style={{ padding: "1.75rem" }}
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-terracotta/8 mb-4">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-terracotta">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <br />
                  <h3 className="text-fg-primary font-semibold mb-2" style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)" }}>
                    {tool.name}
                  </h3>
                  {tool.description && (
                    <p className="text-fg-muted" style={{ fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)", lineHeight: 1.7 }}>
                      {tool.description}
                    </p>
                  )}
                </motion.div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── PROJECT HERO ─── */
function ProjectHero({ project }: { project: AIProject }) {
  return (
    <div className="bg-bg-primary" style={{ paddingTop: "clamp(4rem, 8vw, 7rem)", paddingBottom: "clamp(3.5rem, 6vw, 5rem)" }}>
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-12"
        >
          <span
            className="text-[10px] tracking-[0.28em] uppercase font-semibold"
            style={{ color: "var(--terracotta)" }}
          >
            Proyectos con IA
          </span>
          <span style={{ width: "2rem", height: "1px", background: "var(--stone)" }} />
          <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-fg-muted">
            {project.client}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-display)] font-bold text-fg-primary leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(2.7rem, 5.3vw, 5.4rem)", maxWidth: "17ch", lineHeight: 1.02 }}
        >
          <InflateText text={project.title} />
        </motion.h2>

        {project.coverImage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl overflow-hidden border border-stone/10"
            style={{ marginTop: "clamp(2.75rem, 5vw, 4.25rem)" }}
          >
            <Image
              src={project.coverImage}
              alt={project.title}
              width={0}
              height={0}
              sizes="(max-width:1400px) 100vw, 1400px"
              className="w-full h-auto block"
              priority
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ─── PROJECT CARD (bottom nav) ─── */
function ProjectCard({ project, isActive, onClick }: {
  project: AIProject;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`group relative text-left w-full overflow-hidden rounded-2xl transition-all duration-500 ${
        isActive ? "ring-2 ring-terracotta/60 ring-offset-2 ring-offset-bg-secondary" : "hover:ring-1 hover:ring-stone/50"
      }`}
    >
      <div className="relative aspect-[16/9]">
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width:768px) 100vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0" style={{ background: project.gradient }} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span className="block text-white/50 text-[9px] tracking-[0.2em] uppercase font-semibold mb-1">{project.client}</span>
        <span className="block text-white text-sm font-medium leading-snug line-clamp-2">{project.title}</span>
      </div>
      {isActive && (
        <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-terracotta shadow-lg" />
      )}
    </button>
  );
}

/* ═══════════════════════════════════════════════
   PROJECT VIEW — routes by project type
   ═══════════════════════════════════════════════ */
function ProjectView({ project }: { project: AIProject }) {
  const sections = getSectionsForProject(project);
  const [activeSection, setActiveSection] = useState(sections[0].id);

  const handleIntersect = useCallback((id: string, visible: boolean) => {
    if (visible) setActiveSection(id);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((s) => {
      const el = document.getElementById(`${project.id}-${s.id}`);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => handleIntersect(s.id, entry.isIntersecting),
        { rootMargin: "-35% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [project.id, handleIntersect, sections]);

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ProjectHero project={project} />

      {/* Sticky section anchor nav */}
      <div
        className="sticky z-20 bg-bg-primary/85 backdrop-blur-xl border-b border-stone/15"
        style={{ top: "calc(var(--nav-height) + 68px)" }}
      >
        <div className="container-main py-5">
          <SectionNav activeSection={activeSection} projectId={project.id} sections={sections} />
        </div>
      </div>

      {/* Sections based on type */}
      <div className="container-main">
        {project.type === "type1" && <Type1Sections project={project} />}
        {project.type === "type2" && <Type2Sections project={project} />}
        {project.type === "type3" && <Type3Sections project={project} />}
      </div>
    </motion.div>
  );
}

/* ─── TYPE 1 SECTIONS: Rol → Objetivo → Desafío → Estrategia → Solución → Resultados ─── */
function Type1Sections({ project }: { project: AIProjectType1 }) {
  return (
    <>
      <section id={`${project.id}-rol`} className="scroll-mt-52" style={{ padding: "5rem 0 5rem" }}>
        <SectionLabel label="Rol" />
        <br />
        <RolSection project={project} />
      </section>

      <div className="border-t border-stone/20" />

      <section id={`${project.id}-objetivo`} className="scroll-mt-52" style={{ padding: "5rem 0 5rem" }}>
        <SectionLabel label="Objetivo General" />
        <br />
        <ObjetivoSection project={project} />
      </section>

      <div className="border-t border-stone/20" />

      <section id={`${project.id}-desafio`} className="scroll-mt-52" style={{ padding: "5rem 0 5rem" }}>
        <SectionLabel label="Desafío" />
        <br />
        <DesafioSection project={project} />
      </section>

      <div className="border-t border-stone/20" />

      <section id={`${project.id}-estrategia`} className="scroll-mt-52" style={{ padding: "5rem 0 5rem" }}>
        <SectionLabel label="Estrategia" />
        <br />
        <EstrategiaSection project={project} />
      </section>

      <div className="border-t border-stone/20" />

      <section id={`${project.id}-solucion`} className="scroll-mt-52" style={{ padding: "5rem 0 5rem" }}>
        <SectionLabel label="Solución" />
        <br />
        <SolucionSection project={project} />
      </section>

      <div className="border-t border-stone/20" />

      <section id={`${project.id}-resultados`} className="scroll-mt-52" style={{ padding: "5rem 0 6rem" }}>
        <SectionLabel label="Resultados" />
        <br />
        <ResultadosSection project={project} />
      </section>
    </>
  );
}

/* ─── TYPE 2 SECTIONS: Rol → Objetivo → Desafío → Estrategia → Iteración → Herramientas ─── */
function Type2Sections({ project }: { project: AIProjectType2 }) {
  return (
    <>
      <section id={`${project.id}-rol`} className="scroll-mt-52" style={{ padding: "5rem 0 5rem" }}>
        <SectionLabel label="Rol" />
        <br />
        <RolSection project={project} />
      </section>

      <div className="border-t border-stone/20" />

      <section id={`${project.id}-objetivo`} className="scroll-mt-52" style={{ padding: "5rem 0 5rem" }}>
        <SectionLabel label="Objetivo General" />
        <br />
        <ObjetivoSection project={project} />
      </section>

      <div className="border-t border-stone/20" />

      <section id={`${project.id}-desafio`} className="scroll-mt-52" style={{ padding: "5rem 0 5rem" }}>
        <SectionLabel label="Desafío" />
        <br />
        <DesafioSection project={project} />
      </section>

      <div className="border-t border-stone/20" />

      <section id={`${project.id}-estrategia`} className="scroll-mt-52" style={{ padding: "5rem 0 5rem" }}>
        <SectionLabel label="Estrategia" />
        <br />
        <EstrategiaSection project={project} />
      </section>

      <div className="border-t border-stone/20" />

      <section id={`${project.id}-iteracion`} className="scroll-mt-52" style={{ padding: "5rem 0 5rem" }}>
        <SectionLabel label="Iteración y Pruebas" />
        <br />
        <IteracionSection project={project} />
      </section>

      <div className="border-t border-stone/20" />

      <section id={`${project.id}-herramientas`} className="scroll-mt-52" style={{ padding: "5rem 0 6rem" }}>
        <SectionLabel label="Herramientas Utilizadas" />
        <br />
        <HerramientasSection project={project} />
      </section>
    </>
  );
}

/* ─── TYPE 3 SECTIONS: Descripción → Herramientas ─── */
function Type3Sections({ project }: { project: AIProjectType3 }) {
  return (
    <>
      <section id={`${project.id}-descripcion`} className="scroll-mt-52" style={{ padding: "5rem 0 5rem" }}>
        <SectionLabel label="Descripción" />
        <br />
        <Type3DescriptionSection project={project} />
      </section>

      <div className="border-t border-stone/20" />

      <section id={`${project.id}-herramientas`} className="scroll-mt-52" style={{ padding: "5rem 0 6rem" }}>
        <SectionLabel label="Herramientas de IA" />
        <br />
        <Type3ToolsSection project={project} />
      </section>
    </>
  );
}

/* ═══════════════════════════════════════════════
   PAGE FRAME
   ═══════════════════════════════════════════════ */
export function AIPageClient() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const activeProject = aiProjects[activeProjectIndex];

  const switchProject = (i: number) => {
    setActiveProjectIndex(i);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* ── Top strip: back + project tabs + counter ── */}
      <div
        className="fixed left-0 right-0 z-40 bg-bg-primary/95 backdrop-blur-xl border-b border-stone/20"
        style={{ top: "var(--nav-height)", height: "68px" }}
      >
        <div className="container-main h-full flex items-center justify-between gap-6">
          {/* Back */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-fg-muted hover:text-fg-primary transition-colors duration-300 text-[10px] tracking-widest uppercase font-semibold shrink-0"
          >
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path d="M12 8H4M4 8l4-4M4 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Inicio
          </Link>

          <span className="h-4 w-px bg-stone/40 hidden sm:block" />

          {/* Project tabs */}
          <div className="flex items-center overflow-x-auto scrollbar-hide flex-1" style={{ gap: 0 }}>
            {aiProjects.map((project, i) => (
              <button
                key={project.id}
                onClick={() => switchProject(i)}
                style={{ height: "68px", padding: "0 2.25rem", borderRight: "1px solid rgba(212,197,176,0.25)" }}
                className={`relative text-[11px] tracking-[0.2em] uppercase font-bold whitespace-nowrap transition-colors duration-300 ${
                  i === activeProjectIndex
                    ? "text-fg-primary"
                    : "text-fg-muted hover:text-fg-secondary"
                }`}
              >
                {project.client}
                {i === activeProjectIndex && (
                  <motion.span
                    layoutId="aiProjectTab"
                    className="absolute bg-terracotta rounded-full"
                    style={{ bottom: 0, left: "1.5rem", right: "1.5rem", height: "2px" }}
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Counter */}
          <span className="text-fg-muted text-[10px] font-mono shrink-0 hidden sm:block">
            {String(activeProjectIndex + 1).padStart(2, "0")} / {String(aiProjects.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Main content */}
      <div style={{ paddingTop: "calc(var(--nav-height) + 68px)" }}>
        <AnimatePresence mode="wait">
          <ProjectView key={activeProject.id} project={activeProject} />
        </AnimatePresence>
      </div>
    </div>
  );
}
