"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { pillars } from "@/lib/data";
import type { Pillar } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const onChange = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsMobile(e.matches);
    onChange(mql);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [breakpoint]);
  return isMobile;
}

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

  // Map pillar IDs to translation keys
  const pillarI18nMap: Record<string, { title: string; description: string }> = {
    "ux-content-design": { title: t("pillar.uxContent.title"), description: t("pillar.uxContent.description") },
    "ai-projects": { title: t("pillar.ai.title"), description: t("pillar.ai.description") },
    "other-projects": { title: t("pillar.other.title"), description: t("pillar.other.description") },
  };

  const translated = pillarI18nMap[pillar.id] || { title: pillar.title, description: pillar.description };

  return (
    <div className="w-full md:w-[55vw] lg:w-[38vw] shrink-0 h-full flex items-center">
      <Link
        href={pillar.href}
        className="group block relative w-full h-[70vh] md:h-[80vh] rounded-3xl overflow-hidden cursor-pointer"
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

        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')]" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />

        {/* Center content — large title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
          <motion.h3
            className="font-[family-name:var(--font-display)] text-6xl md:text-8xl lg:text-9xl font-bold text-white text-center leading-[0.9] tracking-tight"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.3)" }}
          >
            {translated.title.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </motion.h3>

          {/* Accent line */}
          <div
            className="w-12 h-[2px] mt-6 mb-5 rounded-full transition-all duration-500 group-hover:w-20"
            style={{ backgroundColor: pillar.accentColor }}
          />
        </div>

        {/* Bottom content */}
        <div
          className="absolute bottom-0 left-0 right-0 flex flex-col items-center text-center"
          style={{ padding: "0 2.5rem 3rem 2.5rem" }}
        >
          <p className="text-white/80 text-sm md:text-base max-w-sm leading-relaxed mb-5">
            {translated.description}
          </p>

          {/* CTA */}
          <div className="flex items-center justify-center gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-0 md:translate-y-2 group-hover:translate-y-0">
            <span className="text-white text-xs font-bold tracking-wider uppercase" style={{ color: pillar.accentColor }}>
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
    </div>
  );
}

/* ─── Mobile Dots ─── */

function MobileCarouselDots({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="flex gap-2 justify-center">
      {pillars.map((pillar, i) => (
        <div
          key={pillar.id}
          className="h-2 rounded-full bg-terracotta transition-all duration-300"
          style={{
            width: i === activeIndex ? 24 : 8,
            opacity: i === activeIndex ? 1 : 0.3,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Main Component ─── */

export function ThreePillars() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const { t } = useI18n();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Horizontal scroll: map vertical → horizontal
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-45%"]);

  // Header fade
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.15], [0, -40]);

  // Mobile scroll tracking
  useEffect(() => {
    if (!isMobile) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    const onScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.scrollWidth / pillars.length;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveCardIndex(Math.min(index, pillars.length - 1));
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  /* ─── Mobile: native horizontal swipe ─── */
  if (isMobile) {
    return (
      <section
        className="relative bg-bg-primary min-h-screen flex flex-col justify-between"
        style={{ marginBottom: "10rem" }}
        id="three-pillars"
        aria-label={t("pillars.ariaLabel")}
      >
        {/* Header */}
        <div className="px-6 pt-10 pb-4">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-fg-muted text-xs tracking-[0.2em] uppercase font-medium">
              {t("pillars.label")}
            </span>
            <span className="h-px flex-1 bg-stone/30" />
            <span className="text-fg-muted text-xs tracking-wider font-mono">
              {String(pillars.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Swipeable cards */}
        <div
          ref={scrollContainerRef}
          className="flex-1 flex items-center gap-4 px-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {pillars.map((pillar, i) => (
            <div
              key={pillar.id}
              className="snap-center shrink-0 h-full flex items-center"
              style={{ width: "85vw" }}
            >
              <PillarCard pillar={pillar} index={i} />
            </div>
          ))}
          <div className="shrink-0 w-[15vw]" aria-hidden />
        </div>

        {/* Dots */}
        <div className="px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-fg-muted text-[10px] tracking-[0.2em] uppercase">
              {t("pillars.scrollMobile")}
            </span>
            <motion.span
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="text-fg-muted text-sm"
            >
              →
            </motion.span>
          </div>
          <MobileCarouselDots activeIndex={activeCardIndex} />
        </div>
      </section>
    );
  }

  /* ─── Desktop: vertical-scroll-driven horizontal animation ─── */
  return (
    <section
      ref={sectionRef}
      className="relative bg-bg-primary"
      style={{ height: "250vh" }}
      id="three-pillars"
      aria-label={t("pillars.ariaLabel")}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* Header */}
        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="pt-10 md:pt-14 px-8 md:px-16 pb-4"
        >
          <div className="flex items-center gap-4 mb-2">
            <span className="text-fg-muted text-xs tracking-[0.2em] uppercase font-medium">
              {t("pillars.label")}
            </span>
            <span className="h-px flex-1 bg-stone/30" />
            <span className="text-fg-muted text-xs tracking-wider font-mono">
              {String(pillars.length).padStart(2, "0")}
            </span>
          </div>
        </motion.div>

        {/* Horizontal track */}
        <div className="flex-1 flex items-center">
          <motion.div
            style={{ x }}
            className="flex gap-6 md:gap-10 pl-8 md:pl-16 pr-8 md:pr-16"
          >
            {pillars.map((pillar, i) => (
              <PillarCard key={pillar.id} pillar={pillar} index={i} />
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="shrink-0 pt-5 pb-14 md:pb-10 px-8 md:px-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-fg-muted text-[10px] tracking-[0.2em] uppercase">
              {t("pillars.scrollDesktop")}
            </span>
            <motion.span
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="text-fg-muted text-sm"
            >
              →
            </motion.span>
          </div>

          {/* Progress dots */}
          <div className="flex gap-2">
            {pillars.map((_, i) => {
              const dotStart = i / pillars.length;
              const dotEnd = (i + 1) / pillars.length;
              return (
                <ProgressDot
                  key={i}
                  scrollYProgress={scrollYProgress}
                  rangeStart={dotStart}
                  rangeEnd={dotEnd}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgressDot({
  scrollYProgress,
  rangeStart,
  rangeEnd,
}: {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  rangeStart: number;
  rangeEnd: number;
}) {
  const width = useTransform(
    scrollYProgress,
    [rangeStart, rangeStart + 0.05, rangeEnd - 0.05, rangeEnd],
    [8, 24, 24, 8]
  );
  const opacity = useTransform(
    scrollYProgress,
    [rangeStart, rangeStart + 0.05, rangeEnd - 0.05, rangeEnd],
    [0.3, 1, 1, 0.3]
  );

  return (
    <motion.div
      style={{ width, opacity }}
      className="h-2 rounded-full bg-terracotta"
    />
  );
}
