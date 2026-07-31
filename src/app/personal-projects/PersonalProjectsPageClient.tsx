"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { personalProjects, personalProjectsEn } from "@/lib/data";
import type { PersonalProject } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

/* Respeta los \n\n de los textos en data.ts */
function Paragraphs({ text, className, style }: { text: string; className?: string; style?: React.CSSProperties }) {
  return (
    <>
      {text.split("\n\n").map((p, i) => (
        <p key={i} className={className} style={{ ...style, marginTop: i === 0 ? 0 : "1.25rem" }}>
          {p}
        </p>
      ))}
    </>
  );
}

function ProjectBlock({ project, index }: { project: PersonalProject; index: number }) {
  const { t } = useI18n();
  const flip = index % 2 !== 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start"
      style={{ paddingTop: "clamp(3rem, 6vw, 5rem)", paddingBottom: "clamp(3rem, 6vw, 5rem)" }}
    >
      {/* Visual — las capturas conservan su proporción real; las fotos van en
          un marco vertical fijo para que las tarjetas queden parejas. */}
      <div className={`lg:col-span-5 ${flip ? "lg:order-2" : ""}`}>
        {project.image && project.imageFit === "contain" ? (
          <div className="rounded-3xl overflow-hidden border border-stone/15">
            <Image
              src={project.image}
              alt={project.title}
              width={0}
              height={0}
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="w-full h-auto block"
            />
          </div>
        ) : (
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-stone/15">
            <div className="absolute inset-0" style={{ background: project.gradient }} />
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            )}
          </div>
        )}
      </div>

      {/* Text */}
      <div className={`lg:col-span-7 ${flip ? "lg:order-1" : ""}`}>
        <p className="text-[10px] tracking-[0.28em] uppercase font-semibold mb-5" style={{ color: "var(--terracotta)" }}>
          {String(index + 1).padStart(2, "0")}
        </p>
        <h2
          className="font-[family-name:var(--font-display)] font-bold text-fg-primary tracking-tight mb-4"
          style={{ fontSize: "clamp(1.9rem, 3.4vw, 3rem)", lineHeight: 1.1 }}
        >
          {project.title}
        </h2>
        <p className="text-fg-muted text-sm md:text-base mb-8">{project.tagline}</p>

        <Paragraphs
          text={project.description}
          className="text-fg-secondary"
          style={{ fontSize: "clamp(0.98rem, 1.35vw, 1.08rem)", lineHeight: 1.9 }}
        />

        {project.responsibilities.length > 0 && (
          <>
            <p className="section-label" style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>
              {t("personal.responsibilities")}
            </p>
            <ul>
              {project.responsibilities.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 items-start"
                  style={{
                    paddingTop: "0.75rem",
                    paddingBottom: "0.75rem",
                    borderBottom:
                      i < project.responsibilities.length - 1
                        ? "1px solid rgba(212,197,176,0.15)"
                        : "none",
                  }}
                >
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-terracotta/60" style={{ marginTop: "0.6em" }} />
                  <span className="text-fg-secondary" style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.05rem)", lineHeight: 1.75 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </>
        )}

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase text-fg-muted hover:text-terracotta transition-colors duration-300"
            style={{ marginTop: "2.5rem" }}
          >
            {project.linkLabel ?? t("personal.visit")}
            <span
              className="inline-flex items-center justify-center rounded-full border shrink-0"
              style={{ width: "2.25rem", height: "2.25rem", borderColor: "var(--stone)" }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        )}
      </div>
    </motion.article>
  );
}

export function PersonalProjectsPageClient() {
  const { locale, t } = useI18n();
  const projects = locale === "en" ? personalProjectsEn : personalProjects;

  return (
    <div className="min-h-screen bg-bg-primary" style={{ paddingTop: "var(--nav-height)" }}>
      <div className="container-main">
        {/* Hero */}
        <section style={{ paddingTop: "clamp(3.5rem, 7vw, 6rem)", paddingBottom: "clamp(2rem, 4vw, 3rem)" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] tracking-[0.28em] uppercase font-semibold mb-8" style={{ color: "var(--terracotta)" }}>
              {t("personal.eyebrow")}
            </p>
            <h1
              className="font-[family-name:var(--font-display)] font-bold text-fg-primary tracking-tight"
              style={{ fontSize: "clamp(2.7rem, 6vw, 5.4rem)", lineHeight: 1.02 }}
            >
              {t("personal.title")}
            </h1>
            <p
              className="text-fg-secondary max-w-2xl"
              style={{ marginTop: "2rem", fontSize: "clamp(1rem, 1.4vw, 1.15rem)", lineHeight: 1.85 }}
            >
              {t("personal.intro")}
            </p>
          </motion.div>
        </section>

        <div className="border-t border-stone/20" />

        {projects.map((project, i) => (
          <div key={project.id}>
            <ProjectBlock project={project} index={i} />
            {i < projects.length - 1 && <div className="border-t border-stone/20" />}
          </div>
        ))}
      </div>
    </div>
  );
}
