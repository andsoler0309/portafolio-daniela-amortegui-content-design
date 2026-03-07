"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { pillars } from "@/lib/data";
import type { Pillar } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

/* ─── SVG Pattern Backgrounds ─── */

function CirclesPattern({ color }: { color: string }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.07]"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id="circles-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <circle cx="40" cy="40" r="30" fill="none" stroke={color} strokeWidth="0.5" />
          <circle cx="40" cy="40" r="18" fill="none" stroke={color} strokeWidth="0.3" />
          <circle cx="40" cy="40" r="6" fill={color} fillOpacity="0.15" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circles-pattern)" />
    </svg>
  );
}

function GridPattern({ color }: { color: string }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.06]"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id="grid-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke={color} strokeWidth="0.5" />
          <rect x="15" y="15" width="30" height="30" fill="none" stroke={color} strokeWidth="0.3" rx="2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  );
}

function WavesPattern({ color }: { color: string }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.07]"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id="waves-pattern" x="0" y="0" width="200" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 20 Q50 0 100 20 Q150 40 200 20" fill="none" stroke={color} strokeWidth="0.6" />
          <path d="M0 30 Q50 10 100 30 Q150 50 200 30" fill="none" stroke={color} strokeWidth="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#waves-pattern)" />
    </svg>
  );
}

function PatternOverlay({ pattern, color }: { pattern: Pillar["pattern"]; color: string }) {
  switch (pattern) {
    case "circles":
      return <CirclesPattern color={color} />;
    case "grid":
      return <GridPattern color={color} />;
    case "waves":
      return <WavesPattern color={color} />;
  }
}

/* ─── Pillar Card ─── */

function PillarCard({ pillar, index }: { pillar: Pillar; index: number }) {
  const { t } = useI18n();

  const pillarI18nMap: Record<string, { title: string; description: string }> = {
    "ux-content-design": { title: t("pillar.uxContent.title"), description: t("pillar.uxContent.description") },
    "ai-projects":       { title: t("pillar.ai.title"),        description: t("pillar.ai.description") },
    "other-projects":    { title: t("pillar.other.title"),     description: t("pillar.other.description") },
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
        className="group block relative w-full rounded-3xl overflow-hidden cursor-pointer"
        style={{ height: "clamp(380px, 48vw, 560px)" }}
        aria-label={`${t("pillars.explore")} ${translated.title} ${pillar.subtitle}`}
      >
        {/* Gradient background */}
        <div
          className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          style={{ background: pillar.gradient }}
        />

        {/* Pattern overlay */}
        <div className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-80">
          <PatternOverlay pattern={pillar.pattern} color={pillar.accentColor} />
        </div>

        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')]" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
          <h3
            className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center leading-[0.9] tracking-tight"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.3)" }}
          >
            {translated.title.split("\n").map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h3>

          <div
            className="w-10 h-[2px] mt-5 mb-4 rounded-full transition-all duration-500 group-hover:w-16"
            style={{ backgroundColor: pillar.accentColor }}
          />
        </div>

        {/* Bottom content */}
        <div
          className="absolute bottom-0 left-0 right-0 flex flex-col items-center text-center"
          style={{ padding: "0 2rem 2.5rem 2rem" }}
        >
          <p className="text-white/80 text-sm leading-relaxed mb-4 max-w-xs">
            {translated.description}
          </p>

          <div className="flex items-center justify-center gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-0 md:translate-y-2 group-hover:translate-y-0">
            <span className="text-xs font-bold tracking-wider uppercase" style={{ color: pillar.accentColor }}>
              {t("pillars.explore")}
            </span>
            <motion.span
              className="inline-block font-bold"
              style={{ color: pillar.accentColor }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.span>
          </div>
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
        <br />
        {/* Cards — 3-col desktop, 1-col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.id} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

