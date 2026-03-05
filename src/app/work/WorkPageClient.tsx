"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";

export function WorkPageClient() {
  return (
    <div>
      {/* ──────────────────────────────────────────
          HERO — full viewport, text bottom-anchored
      ────────────────────────────────────────── */}
      <div
        className="relative flex flex-col justify-center"
        style={{ minHeight: "100svh", paddingTop: "var(--nav-height)", paddingBottom: "8rem" }}
      >
        {/* faint background counter */}
        <span
          aria-hidden="true"
          className="absolute bottom-0 right-0 select-none pointer-events-none font-display font-medium leading-none"
          style={{
            fontSize: "clamp(8rem, 30vw, 26rem)",
            color: "var(--stone)",
            opacity: 0.07,
            lineHeight: 0.85,
          }}
        >
          {String(projects.length).padStart(2, "0")}
        </span>

        <div className="container-main relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label mb-8 md:mb-12">Portafolio — {projects.length} proyectos</p>
            <h1
              className="font-display font-medium leading-[0.95] tracking-tight mb-10"
              style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
            >
              Experiencia
            </h1>
            <p className="text-fg-secondary text-lg md:text-xl max-w-md leading-relaxed">
              Estrategias de contenido, narrativas de marca y proyectos editoriales
              diseñados para mover audiencias y hacer crecer marcas.
            </p>
          </motion.div>

          {/* scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex items-center gap-3 mt-16 md:mt-24"
          >
            <div
              className="w-5 h-5 rounded-full border flex items-center justify-center"
              style={{ borderColor: "var(--stone)" }}
            >
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                className="w-1 h-1 rounded-full"
                style={{ backgroundColor: "var(--fg-muted)" }}
              />
            </div>
            <span className="section-label">Scroll para explorar</span>
          </motion.div>
        </div>
      </div>

      {/* ──────────────────────────────────────────
          PROJECTS — each one is 100vh
      ────────────────────────────────────────── */}
      {projects.map((project, i) => {
        const flip = i % 2 !== 0; // alternate image side
        return (
          <Link
            key={project.id}
            href={`/work/${project.id}`}
            className="group relative flex flex-col md:flex-row overflow-hidden"
            style={{ minHeight: "100svh" }}
            aria-label={`Ver caso: ${project.title}`}
          >
            {/* ── IMAGE PANEL ── */}
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className={`relative w-full md:w-[55%] shrink-0 order-first overflow-hidden ${flip ? "md:order-last" : "md:order-first"}`}
              style={{ minHeight: "50svh" }}
            >
              {/* image */}
              <div className="absolute inset-0 transition-transform duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 55vw"
                    priority={i === 0}
                  />
                ) : (
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        i === 0
                          ? "linear-gradient(145deg, #8B9D77 0%, #A8B89A 40%, #D4C5B0 70%, #FAF7F2 100%)"
                          : i === 1
                          ? "linear-gradient(145deg, #C4704A 0%, #D4896A 40%, #E8DFD2 70%, #FAF7F2 100%)"
                          : "linear-gradient(145deg, #1A2E1A 0%, #8B9D77 40%, #C4704A 70%, #D4C5B0 100%)",
                    }}
                  />
                )}
              </div>
              {/* hover tint */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-700" />

              {/* index watermark on image */}
              <span
                aria-hidden="true"
                className="absolute top-6 left-8 font-display font-medium leading-none select-none pointer-events-none text-white/20"
                style={{ fontSize: "clamp(4rem, 12vw, 9rem)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.div>

            {/* ── CONTENT PANEL ── */}
            <motion.div
              initial={{ opacity: 0, x: flip ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ delay: 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`flex-1 flex flex-col ${flip ? "md:order-first" : "md:order-last"}`}
              style={{
                backgroundColor: "var(--bg-primary)",
                padding: "clamp(2.5rem, 5vw, 6rem)",
                gap: "clamp(2rem, 4vw, 4rem)",
              }}
            >
              {/* top: category + year */}
              <div className="flex items-center justify-between pt-2">
                <span className="section-label">{project.category}</span>
                <span className="section-label">{project.year}</span>
              </div>

              {/* center: client label + title + description — grows to fill space */}
              <div className="flex-1 flex flex-col justify-center gap-6 md:gap-8">
                <p className="text-fg-muted text-xs tracking-widest uppercase">
                  {project.client}
                </p>
                <h2
                  className="font-display font-medium leading-[1.05] tracking-tight group-hover:text-terracotta transition-colors duration-500"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
                >
                  {project.title}
                </h2>
                <p className="text-fg-secondary text-base md:text-lg leading-relaxed max-w-sm">
                  {project.description}
                </p>
              </div>

              {/* bottom: tags + CTA — pinned to bottom with its own breathing room */}
              <div className="flex flex-col gap-6 pb-2">
                {/* <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full text-xs tracking-wide"
                      style={{
                        border: "1px solid var(--stone)",
                        color: "var(--fg-muted)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}

                <div
                  className="flex items-center gap-4 text-xs font-medium tracking-widest uppercase transition-colors duration-300 group-hover:text-terracotta"
                  style={{ color: "var(--fg-muted)" }}
                >
                  Ver caso completo
                  <span
                    className="inline-flex items-center justify-center rounded-full border transition-all duration-300 group-hover:border-terracotta group-hover:bg-terracotta group-hover:text-white shrink-0"
                    style={{
                      width: "2.25rem",
                      height: "2.25rem",
                      borderColor: "var(--stone)",
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
}