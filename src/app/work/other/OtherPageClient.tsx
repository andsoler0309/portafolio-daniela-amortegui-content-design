"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { experiencias } from "@/lib/data";
import type { Experiencia, ContentBlock } from "@/lib/data";

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
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(updateLetters);
  }, [updateLetters]);

  let letterIdx = 0;

  return (
    <span
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ cursor: "default", ...style }}
    >
      {words.map((word, wi) => {
        const letters = word.split("");
        const startIdx = letterIdx;
        letterIdx += letters.length;
        return (
          <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
            {letters.map((char, ci) => (
              <span
                key={ci}
                ref={(el) => { lettersRef.current[startIdx + ci] = el; }}
                style={{
                  display: "inline-block",
                  transition: "transform 0.18s ease-out",
                  willChange: "transform",
                }}
              >
                {char}
              </span>
            ))}
            {wi < words.length - 1 && <span style={{ display: "inline-block" }}>&nbsp;</span>}
          </span>
        );
      })}
    </span>
  );
}

/* ─── SECTIONS — scroll-spy anchors ─── */
const SECTIONS = [
  { id: "desafio", label: "Desafío" },
  { id: "enfoque", label: "Enfoque" },
  { id: "impacto", label: "Impacto" },
];

/* ─── IMAGE SLOT (with lightbox) ─── */
function ImageSlot({ src, alt, aspect }: { src?: string; alt?: string; aspect?: string }) {
  const [open, setOpen] = useState(false);
  if (!src) return null;
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full overflow-hidden rounded-2xl cursor-zoom-in border border-stone/10"
        style={{ aspectRatio: aspect ?? "16/10" }}
        onClick={() => setOpen(true)}
      >
        <Image src={src} alt={alt || ""} fill className="object-cover" sizes="(max-width:1400px) 100vw, 1400px" />
      </motion.div>

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
function SectionNav({ activeSection, experienciaId }: { activeSection: string; experienciaId: string }) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(`${experienciaId}-${id}`);
    if (!el) return;
    const offset = 200;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };
  return (
    <div className="hidden md:flex items-center overflow-x-auto scrollbar-hide" style={{ gap: "0.5rem", height: "2.8rem" }}>
      {SECTIONS.map((s) => (
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

/* ─── DESAFÍO SECTION — dark callout card ─── */
function DesafioSection({ experiencia }: { experiencia: Experiencia }) {
  return (
    <div className={`grid grid-cols-1 ${experiencia.desafio.image ? 'lg:grid-cols-12' : ''} gap-8 lg:gap-12 items-stretch`}>
      <div className={`${experiencia.desafio.image ? 'lg:col-span-7' : ''} relative rounded-3xl overflow-hidden`} style={{ border: "1px solid rgba(212,197,176,0.25)" }}>
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
            <p
              className="text-fg-secondary"
              style={{ fontSize: "clamp(0.98rem, 1.35vw, 1.1rem)", lineHeight: 1.9 }}
            >
              <T>{experiencia.desafio.text}</T>
            </p>
            {experiencia.desafio.blocks && (
              <div>
                {experiencia.desafio.blocks.map((block, i) => (
                  <div key={i} style={{ borderTop: "1px solid rgba(212,197,176,0.15)" }}>
                    <ContentBlockItem block={block} index={i} />
                  </div>
                ))}
              </div>
            )}
            {experiencia.desafio.bullets && (
              <ul>
                {experiencia.desafio.bullets.map((bullet, i) => (
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
                      borderBottom: i < (experiencia.desafio.bullets?.length ?? 0) - 1 ? "1px solid rgba(212,197,176,0.15)" : "none",
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
      {experiencia.desafio.image && (
        <div className="lg:col-span-5">
          <ImageSlot src={experiencia.desafio.image} alt={`Desafío — ${experiencia.client}`} aspect="1/1" />
        </div>
      )}
    </div>
  );
}

/* ─── ENFOQUE SECTION — strategy / approach ─── */
function EnfoqueSection({ experiencia }: { experiencia: Experiencia }) {
  const hasSideImage = !!experiencia.enfoque.image && !!experiencia.enfoque.imageSide;
  const hasBottomImage = !!experiencia.enfoque.image && !experiencia.enfoque.imageSide;
  const hasImageGrid = !!(experiencia.enfoque.images && experiencia.enfoque.images.length > 0);

  return (
    <div className="flex flex-col gap-14">
      <div className={`grid grid-cols-1 ${hasSideImage ? 'lg:grid-cols-12' : ''} gap-12 lg:gap-24 items-start`}>
        <div className={hasSideImage ? 'lg:col-span-7' : ''}>
          <div className="space-y-2">
            {(experiencia.enfoque.intro || experiencia.enfoque.text) && (
              <p className="text-fg-secondary" style={{ fontSize: "clamp(0.98rem, 1.35vw, 1.08rem)", lineHeight: 1.9, paddingBottom: "1rem" }}>
                <T>{(experiencia.enfoque.intro ?? experiencia.enfoque.text)!}</T>
              </p>
            )}
            {experiencia.enfoque.blocks && (
              <div>
                {experiencia.enfoque.blocks.map((block, i) => (
                  <div key={i} style={{ borderTop: "1px solid rgba(212,197,176,0.15)" }}>
                    <ContentBlockItem block={block} index={i} />
                  </div>
                ))}
              </div>
            )}
            {experiencia.enfoque.bullets && (
              <ul>
                {experiencia.enfoque.bullets.map((bullet, i) => (
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
                      borderBottom: i < (experiencia.enfoque.bullets?.length ?? 0) - 1 ? "1px solid rgba(212,197,176,0.15)" : "none",
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
            <ImageSlot src={experiencia.enfoque.image!} alt={`Enfoque — ${experiencia.client}`} />
          </motion.div>
        )}
      </div>

      {hasBottomImage && (
        <ImageSlot src={experiencia.enfoque.image!} alt={`Enfoque — ${experiencia.client}`} />
      )}

      {hasImageGrid && (
        <div className={`grid gap-5 ${experiencia.enfoque.images!.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
          {experiencia.enfoque.images!.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <ImageSlot src={src} alt={`Enfoque imagen ${i + 1} — ${experiencia.client}`} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── IMPACTO SECTION — results cards ─── */
function ImpactoSection({ experiencia }: { experiencia: Experiencia }) {
  return (
    <div className={`grid grid-cols-1 ${experiencia.impacto.image ? 'lg:grid-cols-12' : ''} gap-12 lg:gap-20 items-start`}>
      {experiencia.impacto.blocks && (
        <div className={experiencia.impacto.image ? 'lg:col-span-7' : ''}>
          {experiencia.impacto.blocks.map((block, i) => (
            <div key={i} style={{ borderTop: "1px solid rgba(212,197,176,0.15)" }}>
              <ContentBlockItem block={block} index={i} />
            </div>
          ))}
        </div>
      )}
      {experiencia.impacto.bullets && (
        <div className={`${experiencia.impacto.image ? 'lg:col-span-7' : ''} grid grid-cols-1 sm:grid-cols-2 gap-5`}>
          {experiencia.impacto.bullets.map((bullet, i) => (
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
      {experiencia.impacto.image && (
        <div className="lg:col-span-5">
          <ImageSlot src={experiencia.impacto.image} alt={`Impacto — ${experiencia.client}`} />
        </div>
      )}
    </div>
  );
}

/* ─── EXPERIENCIA HERO — clean editorial with cover image ─── */
function ExperienciaHero({ experiencia }: { experiencia: Experiencia }) {
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
            Otros Proyectos
          </span>
          <span style={{ width: "2rem", height: "1px", background: "var(--stone)" }} />
          <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-fg-muted">
            {experiencia.client}
          </span>
        </motion.div>

        {/* Giant title — letters inflate on hover */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-display)] font-bold text-fg-primary leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(2.7rem, 5.3vw, 5.4rem)", maxWidth: "17ch", lineHeight: 1.02 }}
        >
          <InflateText text={experiencia.title} />
        </motion.h2>

        {/* Cover image */}
        {experiencia.coverImage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl overflow-hidden border border-stone/10"
            style={{ marginTop: "clamp(2.75rem, 5vw, 4.25rem)" }}
          >
            <Image
              src={experiencia.coverImage}
              alt={experiencia.title}
              width={0}
              height={0}
              sizes="(max-width:1400px) 100vw, 1400px"
              className="w-full h-auto block"
              priority
            />
          </motion.div>
        )}

        {/* Gradient fallback when no cover image */}
        {!experiencia.coverImage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl overflow-hidden border border-stone/10"
            style={{
              marginTop: "clamp(2.75rem, 5vw, 4.25rem)",
              aspectRatio: "16/6",
              background: experiencia.gradient,
            }}
          />
        )}
      </div>
    </div>
  );
}

/* ─── EXPERIENCIA CARD (bottom nav) ─── */
function ExperienciaCard({ experiencia, isActive, onClick }: {
  experiencia: Experiencia;
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
        {experiencia.coverImage ? (
          <Image
            src={experiencia.coverImage}
            alt={experiencia.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width:768px) 100vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0" style={{ background: experiencia.gradient }} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span className="block text-white/50 text-[9px] tracking-[0.2em] uppercase font-semibold mb-1">{experiencia.client}</span>
        <span className="block text-white text-sm font-medium leading-snug line-clamp-2">{experiencia.title}</span>
      </div>
      {isActive && (
        <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-terracotta shadow-lg" />
      )}
    </button>
  );
}

/* ─── SINGLE EXPERIENCIA VIEW ─── */
function ExperienciaView({ experiencia }: { experiencia: Experiencia }) {
  const [activeSection, setActiveSection] = useState("desafio");

  const handleIntersect = useCallback((id: string, visible: boolean) => {
    if (visible) setActiveSection(id);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach((s) => {
      const el = document.getElementById(`${experiencia.id}-${s.id}`);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => handleIntersect(s.id, entry.isIntersecting),
        { rootMargin: "-35% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [experiencia.id, handleIntersect]);

  return (
    <motion.div
      key={experiencia.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero */}
      <ExperienciaHero experiencia={experiencia} />

      {/* Sticky section anchor nav */}
      <div
        className="sticky z-20 bg-bg-primary/85 backdrop-blur-xl border-b border-stone/15"
        style={{ top: "calc(var(--nav-height) + 68px)" }}
      >
        <div className="container-main py-5">
          <SectionNav activeSection={activeSection} experienciaId={experiencia.id} />
        </div>
      </div>

      {/* 3 sections */}
      <div className="container-main">

        <section id={`${experiencia.id}-desafio`} className="scroll-mt-52" style={{ padding: "5rem 0 5rem" }}>
          <SectionLabel label="Desafío" />
          <br/>
          <DesafioSection experiencia={experiencia} />
        </section>

        <div className="border-t border-stone/20" />

        <section id={`${experiencia.id}-enfoque`} className="scroll-mt-52" style={{ padding: "5rem 0 5rem" }}>
          <SectionLabel label="Enfoque" />
          <br/>
          <EnfoqueSection experiencia={experiencia} />
        </section>

        <div className="border-t border-stone/20" />

        <section id={`${experiencia.id}-impacto`} className="scroll-mt-52" style={{ padding: "5rem 0 6rem" }}>
          <SectionLabel label="Impacto" />
          <br/>
          <ImpactoSection experiencia={experiencia} />
        </section>

      </div>
    </motion.div>
  );
}

/* ─── PAGE FRAME ─── */
export function OtherPageClient() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExperiencia = experiencias[activeIndex];

  const switchExperiencia = (i: number) => {
    setActiveIndex(i);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* ── Top strip: back + experiencia tabs + counter ── */}
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

          {/* Experiencia tabs */}
          <div className="flex items-center overflow-x-auto scrollbar-hide flex-1" style={{ gap: 0 }}>
            {experiencias.map((exp, i) => (
              <button
                key={exp.id}
                onClick={() => switchExperiencia(i)}
                style={{ height: "68px", padding: "0 2.25rem", borderRight: "1px solid rgba(212,197,176,0.25)" }}
                className={`relative text-[11px] tracking-[0.2em] uppercase font-bold whitespace-nowrap transition-colors duration-300 ${
                  i === activeIndex
                    ? "text-fg-primary"
                    : "text-fg-muted hover:text-fg-secondary"
                }`}
              >
                {exp.client}
                {i === activeIndex && (
                  <motion.span
                    layoutId="experienciaTab"
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
            {String(activeIndex + 1).padStart(2, "0")} / {String(experiencias.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Main content */}
      <div style={{ paddingTop: "calc(var(--nav-height) + 68px)" }}>
        <AnimatePresence mode="wait">
          <ExperienciaView key={activeExperiencia.id} experiencia={activeExperiencia} />
        </AnimatePresence>
      </div>
    </div>
  );
}
