"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { uxContentProjects, uxContentProjectsEn } from "@/lib/data";
import type { UXContentProject, ContentBlock } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

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
              <span className="text-fg-secondary" style={{ fontSize: "clamp(0.98rem, 1.35vw, 1.08rem)", lineHeight: 1.8 }}><T>{bullet}</T></span>
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

  // Split into words so we can preserve word-wrap with inline-block per word
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
      const radius = 120; // px — influence radius
      const t = Math.max(0, 1 - dist / radius);
      // Smooth easing
      const ease = t * t * (3 - 2 * t); // smoothstep
      const scale = 1 + ease * 0.22; // up to 22% bigger
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
    // Reset all letters
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

/* ─── SECTION IDs ─── */
function useSections() {
  const { t } = useI18n();
  const SECTIONS_FULL = [
    { id: "rol", label: t("ux.sectionNav.rol") },
    { id: "objetivo", label: t("ux.sectionNav.objetivo") },
    { id: "desafio", label: t("ux.sectionNav.desafio") },
    { id: "estrategia", label: t("ux.sectionNav.estrategia") },
    { id: "solucion", label: t("ux.sectionNav.solucion") },
    { id: "resultados", label: t("ux.sectionNav.resultados") },
  ];
  const SECTIONS_COMPACT = [
    { id: "desafio", label: t("ux.sectionNav.desafio") },
    { id: "enfoque", label: t("ux.sectionNav.enfoque") },
    { id: "impacto", label: t("ux.sectionNav.impacto") },
  ];
  return { SECTIONS_FULL, SECTIONS_COMPACT };
}

function getSections(project: UXContentProject, SECTIONS_FULL: { id: string; label: string }[], SECTIONS_COMPACT: { id: string; label: string }[]) {
  return project.variant === "compact" ? SECTIONS_COMPACT : SECTIONS_FULL;
}

/* ─── IMAGE PLACEHOLDER / SLOT ─── */
function ImageSlot({ src, alt }: { src?: string; alt?: string; aspect?: string }) {
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
function RolSection({ project }: { project: UXContentProject }) {
  if (!project.rol) return null;
  const rol = project.rol;
  return (
    <div className="flex flex-col gap-14">
      <div className="space-y-8">
        <p className="text-fg-primary font-normal" style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)", lineHeight: 1.85 }}>
          <T>{rol.text}</T>
        </p>
        {/* Rich blocks */}
        {rol.blocks && (
          <div>
            {rol.blocks.map((block, i) => (
              <div key={i} style={{ borderTop: "1px solid rgba(212,197,176,0.15)" }}>
                <ContentBlockItem block={block} index={i} />
              </div>
            ))}
          </div>
        )}
        {rol.bullets && (
          <ul className="">
            {rol.bullets.map((bullet, i) => (
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
                  borderBottom: i < (rol.bullets?.length ?? 0) - 1 ? "1px solid rgba(212,197,176,0.15)" : "none",
                }}
              >
                <span className="shrink-0 w-2 h-2 rounded-full bg-terracotta/60" style={{ marginTop: "0.45em" }} />
                <p className="text-fg-secondary" style={{ fontSize: "clamp(0.98rem, 1.35vw, 1.08rem)", lineHeight: 1.8 }}><T>{bullet}</T></p>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
      {rol.image && (
        <ImageSlot src={rol.image} alt={`Rol — ${project.client}`} />
      )}
    </div>
  );
}

/* ─── OBJETIVO ─── */
function ObjetivoSection({ project }: { project: UXContentProject }) {
  if (!project.objetivoGeneral) return null;
  const obj = project.objetivoGeneral;
  return (
    <div className={`grid grid-cols-1 ${obj.image ? 'lg:grid-cols-12' : ''} gap-12 lg:gap-20 items-start`}>
      {obj.image && (
        <div className="lg:col-span-5 lg:order-2">
          <ImageSlot src={obj.image} alt={`Objetivo — ${project.client}`} aspect="3/4" />
        </div>
      )}
      <div className={`${obj.image ? 'lg:col-span-7 lg:order-1' : 'max-w-3xl'} space-y-8`}>
        <p className="text-fg-secondary font-normal" style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.9 }}><T>{obj.text}</T></p>
        {/* Rich blocks */}
        {obj.blocks && (
          <div>
            {obj.blocks.map((block, i) => (
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
function DesafioSection({ project }: { project: UXContentProject }) {
  const { t } = useI18n();
  return (
    <div className={`grid grid-cols-1 ${project.desafio.image ? 'lg:grid-cols-12' : ''} gap-8 lg:gap-12 items-stretch`}>
      <div className={`${project.desafio.image ? 'lg:col-span-7' : ''} relative rounded-3xl overflow-hidden`} style={{ border: "1px solid rgba(212,197,176,0.25)" }}>
        <div className="relative z-10" style={{ padding: "clamp(2.5rem, 5vw, 4.5rem)" }}>
          <div className="flex items-center gap-3 mb-8">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-terracotta">
              <path d="M8 1v8M8 13v2M3 3.5L5.5 6M13 3.5L10.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="text-fg-muted text-[10px] tracking-[0.25em] uppercase font-semibold">
              {t("ux.challenge")}
            </span>
          </div>
          <div className="space-y-8">
            <p
              className="text-fg-secondary"
              style={{ fontSize: "clamp(0.98rem, 1.35vw, 1.1rem)", lineHeight: 1.9 }}
            >
              <T>{project.desafio.text}</T>
            </p>
            {/* Rich blocks */}
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
              <ul className="">
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
          <ImageSlot src={project.desafio.image} alt={`Desafío — ${project.client}`} aspect="1/1" />
        </div>
      )}
    </div>
  );
}

/* ─── ESTRATEGIA — numbered list ─── */
function EstrategiaSection({ project }: { project: UXContentProject }) {
  if (!project.estrategia) return null;
  const est = project.estrategia;
  const hasPhoneMockup = !!est.image && !est.imageSide;
  const hasSideImage = !!est.image && !!est.imageSide;
  const hasImageGrid = !!(est.images && est.images.length > 0);
  return (
    <div className="flex flex-col gap-14">
      <div className={`grid grid-cols-1 ${(hasPhoneMockup || hasSideImage) ? 'lg:grid-cols-12' : ''} gap-12 lg:gap-24 items-start`}>
        <div className={(hasPhoneMockup || hasSideImage) ? 'lg:col-span-7' : ''}>
          <div className="space-y-2">
            {/* Intro paragraph */}
            {est.intro && (
              <p className="text-fg-secondary" style={{ fontSize: "clamp(0.98rem, 1.35vw, 1.08rem)", lineHeight: 1.9, paddingBottom: "1rem" }}>
                <T>{est.intro}</T>
              </p>
            )}
            {/* Rich blocks */}
            {est.blocks && (
              <div>
                {est.blocks.map((block, i) => (
                  <div key={i} style={{ borderTop: "1px solid rgba(212,197,176,0.15)" }}>
                    <ContentBlockItem block={block} index={i} />
                  </div>
                ))}
              </div>
            )}
            {/* Legacy plain bullets */}
            {est.bullets && (
              <ul className="">
                {est.bullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: i * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="flex gap-5 items-start"
                    style={{ paddingTop: "1rem", paddingBottom: "1rem", borderBottom: i < (est.bullets?.length ?? 0) - 1 ? "1px solid rgba(212,197,176,0.15)" : "none" }}
                  >
                    <span className="shrink-0 w-2 h-2 rounded-full bg-terracotta/60" style={{ marginTop: "0.45em" }} />
                    <p className="text-fg-secondary" style={{ fontSize: "clamp(0.98rem, 1.35vw, 1.08rem)", lineHeight: 1.8 }}><T>{bullet}</T></p>
                  </motion.li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {/* Phone mockup — side column (single image, e.g. Proyecto-1) */}
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
                onClick={() => window.open(est.image, "_blank")}
              >
                <Image
                  src={est.image!}
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
        {/* Plain ImageSlot — side column (when imageSide: true, e.g. Proyecto-3) */}
        {hasSideImage && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <ImageSlot src={est.image!} alt={`Estrategia — ${project.client}`} />
          </motion.div>
        )}
      </div>

      {/* Image grid — full width below content (multiple images, e.g. Proyecto-2) */}
      {hasImageGrid && (
        <div className={`grid gap-5 ${est.images!.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
          {est.images!.map((src, i) => (
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

/* ─── SOLUCIÓN ─── */
function SolucionSection({ project }: { project: UXContentProject }) {
  if (!project.solucion) return null;
  const sol = project.solucion;
  const imageSide = sol.imageSide && sol.image;
  const content = (
    <div className="space-y-8">
      {/* Intro / statement text */}
      {(sol.intro || sol.text) && (
        <p
          className="text-fg-primary"
          style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)", lineHeight: 1.85 }}
        >
          <T>{(sol.intro ?? sol.text)!}</T>
        </p>
      )}
      {/* Rich blocks */}
      {sol.blocks && (
        <div>
          {sol.blocks.map((block, i) => (
            <div key={i} style={{ borderTop: "1px solid rgba(212,197,176,0.15)" }}>
              <ContentBlockItem block={block} index={i} />
            </div>
          ))}
        </div>
      )}
      {/* Legacy plain bullets */}
      {sol.bullets && (
        <ul className="pt-2">
          {sol.bullets.map((bullet, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex gap-5 items-start"
              style={{ paddingTop: "1rem", paddingBottom: "1rem", borderBottom: i < (sol.bullets?.length ?? 0) - 1 ? "1px solid rgba(212,197,176,0.15)" : "none" }}
            >
              <span className="shrink-0 w-2 h-2 rounded-full bg-terracotta/60" style={{ marginTop: "0.45em" }} />
              <span className="text-fg-secondary" style={{ fontSize: "clamp(0.98rem, 1.35vw, 1.08rem)", lineHeight: 1.8 }}><T>{bullet}</T></span>
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );

  const hasImageGrid = !!(sol.images && sol.images.length > 0);

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
          <ImageSlot src={sol.image!} alt={`Solución — ${project.client}`} />
        </motion.div>
      </div>
    );
  }

  if (hasImageGrid) {
    return (
      <div className="flex flex-col gap-14">
        {content}
        <div className={`grid gap-5 ${
          sol.images!.length === 1 ? 'grid-cols-1' :
          sol.images!.length === 2 ? 'grid-cols-1 sm:grid-cols-2' :
          'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        }`}>
          {sol.images!.map((src, i) => (
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
      {sol.image && (
        <ImageSlot src={sol.image} alt={`Solución — ${project.client}`} />
      )}
    </div>
  );
}

/* ─── RESULTADOS — cards grid ─── */
function ResultadosSection({ project }: { project: UXContentProject }) {
  if (!project.resultados) return null;
  const res = project.resultados;
  return (
    <div className={`grid grid-cols-1 ${res.image ? 'lg:grid-cols-12' : ''} gap-12 lg:gap-20 items-start`}>
      {/* Rich blocks (alternative to cards) */}
      {res.blocks && (
        <div className={res.image ? 'lg:col-span-7' : ''}>
          {res.blocks.map((block, i) => (
            <div key={i} style={{ borderTop: "1px solid rgba(212,197,176,0.15)" }}>
              <ContentBlockItem block={block} index={i} />
            </div>
          ))}
        </div>
      )}
      {/* Cards */}
      {res.bullets && (
      <div className={`${res.image ? 'lg:col-span-7' : ''} grid grid-cols-1 sm:grid-cols-2 gap-5`}>
        {res.bullets.map((bullet, i) => (
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

      {/* Phone mockup — side column */}
      {res.image && (
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
            {/* Speaker notch */}
            <div className="flex justify-center mb-3">
              <div style={{ width: "2.8rem", height: "0.25rem", borderRadius: "99px", background: "rgba(212,197,176,0.2)" }} />
            </div>
            {/* Screen — clickable */}
            <div
              className="relative w-full overflow-hidden cursor-zoom-in"
              style={{ borderRadius: "1.65rem", aspectRatio: "9/19.5" }}
              onClick={() => window.open(res.image, '_blank')}
            >
              <Image
                src={res.image!}
                alt="Resultados — captura de pantalla"
                fill
                className="object-cover object-top"
                sizes="280px"
              />
            </div>
            {/* Home indicator */}
            <div className="flex justify-center mt-3">
              <div style={{ width: "3.5rem", height: "0.24rem", borderRadius: "99px", background: "rgba(212,197,176,0.2)" }} />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

/* ─── ENFOQUE SECTION (compact variant) ─── */
function EnfoqueSection({ project }: { project: UXContentProject }) {
  if (!project.enfoque) return null;
  const enf = project.enfoque;
  const hasSideImage = !!enf.image && !!enf.imageSide;
  const hasImageGrid = !!(enf.images && enf.images.length > 0);

  return (
    <div className="flex flex-col gap-14">
      <div className={`grid grid-cols-1 ${hasSideImage ? 'lg:grid-cols-12' : ''} gap-12 lg:gap-24 items-start`}>
        <div className={hasSideImage ? 'lg:col-span-7' : ''}>
          <div className="space-y-2">
            {(enf.intro || enf.text) && (
              <p className="text-fg-secondary" style={{ fontSize: "clamp(0.98rem, 1.35vw, 1.08rem)", lineHeight: 1.9, paddingBottom: "1rem" }}>
                <T>{(enf.intro ?? enf.text)!}</T>
              </p>
            )}
            {enf.blocks && (
              <div>
                {enf.blocks.map((block, i) => (
                  <div key={i} style={{ borderTop: "1px solid rgba(212,197,176,0.15)" }}>
                    <ContentBlockItem block={block} index={i} />
                  </div>
                ))}
              </div>
            )}
            {enf.bullets && (
              <ul>
                {enf.bullets.map((bullet, i) => (
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
                      borderBottom: i < (enf.bullets?.length ?? 0) - 1 ? "1px solid rgba(212,197,176,0.15)" : "none",
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
        {hasSideImage && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <ImageSlot src={enf.image!} alt={`Enfoque — ${project.client}`} />
          </motion.div>
        )}
      </div>

      {!hasSideImage && enf.image && (
        <ImageSlot src={enf.image} alt={`Enfoque — ${project.client}`} />
      )}

      {hasImageGrid && (
        <div className={`grid gap-5 ${enf.images!.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
          {enf.images!.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <ImageSlot src={src} alt={`Enfoque imagen ${i + 1} — ${project.client}`} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── IMPACTO SECTION (compact variant) — cards grid ─── */
function ImpactoSection({ project }: { project: UXContentProject }) {
  if (!project.impacto) return null;
  return (
    <div className={`grid grid-cols-1 ${project.impacto.image ? 'lg:grid-cols-12' : ''} gap-12 lg:gap-20 items-start`}>
      {project.impacto.blocks && (
        <div className={project.impacto.image ? 'lg:col-span-7' : ''}>
          {project.impacto.blocks.map((block, i) => (
            <div key={i} style={{ borderTop: "1px solid rgba(212,197,176,0.15)" }}>
              <ContentBlockItem block={block} index={i} />
            </div>
          ))}
        </div>
      )}
      {project.impacto.bullets && (
        <div className={`${project.impacto.image ? 'lg:col-span-7' : ''} grid grid-cols-1 sm:grid-cols-2 gap-5`}>
          {project.impacto.bullets.map((bullet, i) => (
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
      {project.impacto.image && (
        <div className="lg:col-span-5">
          <ImageSlot src={project.impacto.image} alt={`Impacto — ${project.client}`} />
        </div>
      )}
    </div>
  );
}

/* ─── PROJECT HERO — clean editorial, no background image ─── */
function ProjectHero({ project }: { project: UXContentProject }) {
  const { t } = useI18n();
  return (
    <div className="bg-bg-primary" style={{ paddingTop: "clamp(4rem, 8vw, 7rem)", paddingBottom: "clamp(3.5rem, 6vw, 5rem)" }}>
      <div className="container-main">
        {/* Top label row */}
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
            {t("ux.contentDesign")}
          </span>
          <span style={{ width: "2rem", height: "1px", background: "var(--stone)" }} />
          <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-fg-muted">
            {project.client}
          </span>
          {/* <span className="text-[10px] text-fg-muted" style={{ opacity: 0.5 }}>{project.year}</span> */}
        </motion.div>

        {/* Giant title — letters inflate on hover */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-display)] font-bold text-fg-primary leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(2.7rem, 5.3vw, 5.4rem)", maxWidth: "17ch", lineHeight: 1.02 }}
        >
          <InflateText text={project.title} />
        </motion.h2>

        {/* Cover image */}
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
  project: UXContentProject;
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

/* ─── SINGLE PROJECT VIEW ─── */
function ProjectView({ project }: { project: UXContentProject }) {
  const { SECTIONS_FULL, SECTIONS_COMPACT } = useSections();
  const { t } = useI18n();
  const sections = getSections(project, SECTIONS_FULL, SECTIONS_COMPACT);
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

  const isCompact = project.variant === "compact";

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero */}
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

      {/* Sections */}
      <div className="container-main">

        {isCompact ? (
          <>
            <section id={`${project.id}-desafio`} className="scroll-mt-52" style={{ padding: "5rem 0 5rem" }}>
              <SectionLabel label={t("ux.sectionLabel.desafio")} />
              <br/>
              <DesafioSection project={project} />
            </section>

            <div className="border-t border-stone/20" />

            <section id={`${project.id}-enfoque`} className="scroll-mt-52" style={{ padding: "5rem 0 5rem" }}>
              <SectionLabel label={t("ux.sectionLabel.enfoque")} />
              <br/>
              <EnfoqueSection project={project} />
            </section>

            <div className="border-t border-stone/20" />

            <section id={`${project.id}-impacto`} className="scroll-mt-52" style={{ padding: "5rem 0 6rem" }}>
              <SectionLabel label={t("ux.sectionLabel.impacto")} />
              <br/>
              <ImpactoSection project={project} />
            </section>
          </>
        ) : (
          <>
            <section id={`${project.id}-rol`} className="scroll-mt-52" style={{ padding: "5rem 0 5rem" }}>
              <SectionLabel label={t("ux.sectionLabel.rol")} />
              <br/>
              <RolSection project={project} />
            </section>

            <div className="border-t border-stone/20" />

            <section id={`${project.id}-objetivo`} className="scroll-mt-52" style={{ padding: "5rem 0 5rem" }}>
              <SectionLabel label={t("ux.sectionLabel.objetivo")} />
              <br/>
              <ObjetivoSection project={project} />
            </section>

            <div className="border-t border-stone/20" />

            <section id={`${project.id}-desafio`} className="scroll-mt-52" style={{ padding: "5rem 0 5rem" }}>
              <SectionLabel label={t("ux.sectionLabel.desafio")} />
              <br/>
              <DesafioSection project={project} />
            </section>

            <div className="border-t border-stone/20" />

            <section id={`${project.id}-estrategia`} className="scroll-mt-52" style={{ padding: "5rem 0 5rem" }}>
              <SectionLabel label={t("ux.sectionLabel.estrategia")} />
              <br/>
              <EstrategiaSection project={project} />
            </section>

            <div className="border-t border-stone/20" />

            <section id={`${project.id}-solucion`} className="scroll-mt-52" style={{ padding: "5rem 0 5rem" }}>
              <SectionLabel label={t("ux.sectionLabel.solucion")} />
              <br/>
              <SolucionSection project={project} />
            </section>

            <div className="border-t border-stone/20" />

            <section id={`${project.id}-resultados`} className="scroll-mt-52" style={{ padding: "5rem 0 6rem" }}>
              <SectionLabel label={t("ux.sectionLabel.resultados")} />
              <br/>
              <ResultadosSection project={project} />
            </section>
          </>
        )}

      </div>
    </motion.div>
  );
}

/* ─── PAGE FRAME ─── */
export function UXContentPageClient() {
  const { locale, t } = useI18n();
  const projects = locale === "en" ? uxContentProjectsEn : uxContentProjects;
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const activeProject = projects[activeProjectIndex];

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
            {t("ux.back")}
          </Link>

          <span className="h-4 w-px bg-stone/40 hidden sm:block" />

          {/* Project tabs */}
          <div className="flex items-center overflow-x-auto scrollbar-hide flex-1" style={{ gap: 0 }}>
            {projects.map((project, i) => (
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
                    layoutId="projectTab"
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
            {String(activeProjectIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
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
