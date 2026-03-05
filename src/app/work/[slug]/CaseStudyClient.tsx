"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";

export function CaseStudyClient({ project }: { project: Project }) {
  return (
    <div>
      {/* ─────────────────────────────────────────
          HERO — full viewport, image + title overlay
      ───────────────────────────────────────── */}
      <div
        className="relative flex flex-col justify-end overflow-hidden"
        style={{ minHeight: "100svh", paddingTop: "var(--nav-height)" }}
      >
        {/* Full-bleed image */}
        <div className="absolute inset-0 z-0">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(145deg, #8B9D77 0%, #A8B89A 40%, #D4C5B0 70%, #C4704A 100%)",
              }}
            />
          )}
          {/* dark gradient overlay so text is readable */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.85) 100%)",
            }}
          />
        </div>

        {/* Back link top-left */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute z-10"
          style={{ top: "calc(var(--nav-height) + 2rem)", left: "clamp(1.5rem, 4vw, 4rem)" }}
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 text-xs tracking-widest uppercase"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M12 8H4M4 8l4-4M4 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Todos los trabajos
          </Link>
        </motion.div>

        {/* Title block anchored to bottom */}
        <div className="relative z-10 container-main pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-white/90 text-xs tracking-widest uppercase font-semibold">{project.client}</span>
              <span className="w-1 h-1 rounded-full bg-white/50" />
              <span className="text-white/90 text-xs tracking-widest uppercase font-semibold">{project.category}</span>
              <span className="w-1 h-1 rounded-full bg-white/50" />
              <span className="text-white/90 text-xs font-semibold">{project.year}</span>
            </div>

            {/* Main title */}
            <h1
              className="font-display font-bold leading-none tracking-tight text-white mb-8 max-w-4xl"
              style={{ fontSize: "clamp(2.2rem, 5.5vw, 5rem)", textShadow: "0 2px 24px rgba(0,0,0,0.35)" }}
            >
              {project.title}
            </h1>

            {/* Tags */}
            {/* <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-xs text-white font-medium tracking-wide"
                  style={{ border: "1px solid rgba(255,255,255,0.5)", backdropFilter: "blur(4px)", background: "rgba(255,255,255,0.08)" }}
                >
                  {tag}
                </span>
              ))}
            </div> */}
          </motion.div>
        </div>
      </div>

      {/* ─────────────────────────────────────────
          BODY CONTENT
      ───────────────────────────────────────── */}
      <article>
        <div className="container-main">

          {/* ── El desafío ── */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ padding: "clamp(5rem, 10vw, 10rem) 0", borderBottom: "1px solid var(--stone)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 lg:gap-28">
              {/* Lead */}
              <div>
                <h2
                  className="font-display font-medium leading-[1.05] tracking-tight mb-8"
                  style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)", color: "var(--fg-primary)" }}
                >
                  El desafío
                </h2>
                <p
                  className="text-fg-secondary leading-relaxed"
                  style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)" }}
                >
                  {project.challenge ?? project.description}
                </p>
              </div>

              {/* Sidebar facts */}
              <div className="flex flex-col gap-10 border-l pl-10 lg:pl-14" style={{ borderColor: "var(--stone)" }}>
                <div>
                  <p className="section-label mb-4">Cliente</p>
                  <p className="font-display text-2xl font-medium">{project.client}</p>
                </div>
                <div>
                  <p className="section-label mb-4">Rol</p>
                  <p className="text-fg-secondary text-base leading-relaxed">
                    {project.category}
                  </p>
                </div>
                <div>
                  <p className="section-label mb-4">Año</p>
                  <p className="text-fg-secondary text-base">{project.year}</p>
                </div>
                {/* <div>
                  <p className="section-label mb-4">Entregables</p>
                  <ul className="flex flex-col gap-3">
                    {["Brand Voice Guidelines", "Content Pillars Framework", "Editorial Calendar", "Campaign Narratives", "Performance Reporting"].map((d) => (
                      <li key={d} className="text-fg-secondary text-sm flex items-start gap-3">
                        <span className="mt-[0.4rem] shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--terracotta)" }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div> */}
              </div>
            </div>
          </motion.section>

          {/* ── El enfoque ── */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ padding: "clamp(5rem, 10vw, 10rem) 0", borderBottom: "1px solid var(--stone)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-16 lg:gap-28">
              <div>
                <h2
                  className="font-display font-medium leading-[1.05] tracking-tight mt-1"
                  style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)", color: "var(--fg-primary)" }}
                >
                  El enfoque
                </h2>
              </div>
              <div>
                {Array.isArray(project.approach) ? (
                  <ul className="flex flex-col gap-4 max-w-2xl">
                    {project.approach.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-fg-secondary leading-relaxed" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}>
                        <span className="shrink-0 mt-[0.55rem] w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--terracotta)" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-fg-secondary leading-relaxed max-w-2xl" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}>
                    {project.approach ?? project.longDescription}
                  </p>
                )}
              </div>
            </div>
          </motion.section>

          {/* ── El impacto ── */}
          {(project.impact ?? project.results) && (
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ padding: "clamp(5rem, 10vw, 10rem) 0", borderBottom: "1px solid var(--stone)" }}
            >
              <h2
                className="font-display font-medium leading-[1.05] tracking-tight mb-16 md:mb-20"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)", color: "var(--fg-primary)" }}
              >
                El impacto
              </h2>
              <ul className="flex flex-col" style={{ borderTop: "1px solid var(--stone)" }}>
                {(project.impact ?? project.results ?? []).map((result, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-5 py-6"
                    style={{ borderBottom: "1px solid var(--stone)" }}
                  >
                    <span
                      className="shrink-0 mt-[0.45rem] w-2 h-2 rounded-full"
                      style={{ backgroundColor: "var(--terracotta)" }}
                    />
                    <p className="text-fg-secondary leading-relaxed" style={{ fontSize: "clamp(1rem, 1.6vw, 1.2rem)" }}>
                      {result}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* ── Quote ── */}
          {/* <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ padding: "clamp(6rem, 12vw, 12rem) 0", borderBottom: "1px solid var(--stone)" }}
          >
            <div className="max-w-3xl mx-auto text-center">
              <p
                className="font-display font-medium leading-[1.15] tracking-tight mb-10"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)", color: "var(--fg-primary)" }}
              >
                &ldquo;El gran contenido no solo sirve a la marca — sirve a las personas para quienes la marca existe.&rdquo;
              </p>
              <p className="section-label">Daniela Amórtegui</p>
            </div>
          </motion.section> */}

          {/* ── Navigation ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ padding: "clamp(3rem, 6vw, 5rem) 0" }}
            className="flex items-center justify-between"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-3 text-xs font-medium tracking-widest uppercase transition-colors duration-300 hover:text-terracotta"
              style={{ color: "var(--fg-muted)" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M12 8H4M4 8l4-4M4 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Todos los proyectos
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-3 text-xs font-medium tracking-widest uppercase transition-colors duration-300 hover:text-terracotta"
              style={{ color: "var(--fg-muted)" }}
            >
              Siguiente proyecto
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 8h8M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>

        </div>
      </article>
    </div>
  );
}
