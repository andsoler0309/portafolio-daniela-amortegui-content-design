"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { pillars } from "@/lib/data";
import type { Pillar } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

/* ─── Pillar Card ─── */

function PillarCard({ pillar, index }: { pillar: Pillar; index: number }) {
  const { t } = useI18n();

  const pillarI18nMap: Record<string, { title: string; description: string }> = {
    "work":              { title: t("pillar.work.title"),     description: t("pillar.work.description") },
    "personal-projects": { title: t("pillar.personal.title"), description: t("pillar.personal.description") },
    "ai":                { title: t("pillar.ai.title"),       description: t("pillar.ai.description") },
  };

  const translated = pillarI18nMap[pillar.id] || { title: pillar.title, description: pillar.description };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
    >
      <Link
        href={pillar.href}
        className="group relative flex flex-col justify-between h-full rounded-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1"
        style={{
          minHeight: "clamp(300px, 32vw, 380px)",
          padding: "2rem",
          background: "var(--bg-card)",
          border: "1px solid var(--stone)",
        }}
        aria-label={`${t("pillars.explore")} ${translated.title}`}
      >
        {/* Regla de acento superior — crece en hover */}
        <span
          className="absolute top-0 left-0 h-[3px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ width: "3.5rem", background: pillar.accentColor }}
        />
        <span
          className="absolute top-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ background: pillar.accentColor }}
        />

        {/* Halo suave del color del pilar */}
        <span
          className="absolute -top-24 -right-24 w-56 h-56 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-700 blur-3xl pointer-events-none"
          style={{ background: pillar.accentColor }}
        />

        {/* Índice */}
        <div className="relative flex items-start justify-between">
          <span className="text-[11px] tracking-[0.22em] uppercase text-fg-muted tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className="w-2 h-2 rounded-full transition-transform duration-500 group-hover:scale-150"
            style={{ background: pillar.accentColor }}
          />
        </div>

        {/* Título + descripción */}
        <div className="relative" style={{ marginTop: "2.5rem" }}>
          <h3
            className="font-[family-name:var(--font-display)] font-medium text-fg-primary tracking-tight leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 3.2vw, 2.9rem)" }}
          >
            {translated.title.split("\n").map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h3>

          <p
            className="text-fg-secondary text-sm md:text-base leading-relaxed"
            style={{ marginTop: "1rem", maxWidth: "26rem" }}
          >
            {translated.description}
          </p>
        </div>

        {/* Pie */}
        <div
          className="relative flex items-center gap-3 border-t border-stone/40"
          style={{ marginTop: "2rem", paddingTop: "1.25rem" }}
        >
          <span
            className="text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors duration-300"
            style={{ color: pillar.accentColor }}
          >
            {t("pillars.explore")}
          </span>
          <span
            className="inline-block transition-transform duration-500 group-hover:translate-x-2"
            style={{ color: pillar.accentColor }}
            aria-hidden="true"
          >
            →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── Main Component ─── */

export function ThreePillars() {
  const { t } = useI18n();

  return (
    <section
      className="relative"
      style={{ padding: "clamp(5rem, 10vw, 8rem) 0" }}
      id="three-pillars"
      aria-label={t("pillars.ariaLabel")}
    >
      <div className="container-main">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10 md:mb-14">
          <span className="text-fg-muted text-xs tracking-[0.2em] uppercase font-medium">
            {t("pillars.label")}
          </span>
          <span className="h-px flex-1 bg-stone/30" />
          <span className="text-fg-muted text-xs tracking-wider font-mono">
            {String(pillars.length).padStart(2, "0")}
          </span>
        </div>

        {/* Cards — 3-col desktop, 1-col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-stretch">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.id} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
