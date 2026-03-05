"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalProjects } from "@/lib/data";

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

function ProjectCard({
  project,
  index,
}: {
  project: (typeof personalProjects)[0];
  index: number;
}) {
  return (
    <div className="w-full md:w-[60vw] lg:w-[45vw] shrink-0 h-full flex items-center">
      <div className="relative w-full h-[65vh] md:h-[80vh] rounded-3xl overflow-hidden group cursor-default">
        {/* Background: image if provided, else gradient */}
        <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 85vw, (max-width: 1024px) 60vw, 45vw"
            />
          ) : (
            <div className="absolute inset-0" style={{ background: project.gradient }} />
          )}
        </div>

        {/* Subtle noise overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')]" />

        {/* Strong bottom gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 via-50% to-transparent" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />

        {/* Counter — top left */}
        <div className="absolute top-8 left-8 md:top-10 md:left-10">
          <span className="font-display text-7xl md:text-9xl font-light text-white/10">
            {/* {String(index + 1).padStart(2, "0")} */}
          </span>
        </div>

        {/* Tags — top right */}
        {/* <div className="absolute top-8 right-8 md:top-10 md:right-10 flex flex-wrap gap-2 justify-end max-w-50">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-cream/90 backdrop-blur-md rounded-full text-[9px] font-bold tracking-[0.15em] uppercase text-forest/95 border border-forest/10"
              style={{ padding: "0.3rem 1rem" }}
            >
              {tag}
            </span>
          ))}
        </div> */}

        {/* Bottom content */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ padding: "0 2.5rem 3.5rem 2.5rem" }}
        >
          {/* Tagline */}
          <p className="text-white/70 text-xs md:text-sm uppercase tracking-widest mb-3">
            {project.tagline}
          </p>

          {/* Title row */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="font-display text-3xl md:text-5xl font-medium text-white leading-[1.1]">
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-white/90 text-sm md:text-base max-w-lg leading-relaxed">
            {project.description}
          </p>

          {/* Link CTA */}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="mt-5 flex items-center gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-0 md:translate-y-2 group-hover:translate-y-0"
              aria-label={`Visitar ${project.title}`}
            >
              <span className="text-terracotta text-xs font-bold tracking-wider uppercase">Ver más</span>
              <motion.span className="inline-block text-terracotta" whileHover={{ x: 4 }} transition={{ duration: 0.3 }}>
                →
              </motion.span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function MobileCarouselDots({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="flex gap-2 justify-center">
      {personalProjects.map((_, i) => (
        <div
          key={i}
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

export function PersonalProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Map vertical scroll (0→1) to horizontal translation
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  // Subtle parallax for header
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.15], [0, -40]);

  // Track active card on mobile via native scroll
  useEffect(() => {
    if (!isMobile) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    const onScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.scrollWidth / personalProjects.length;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveCardIndex(Math.min(index, personalProjects.length - 1));
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  /* ─── Mobile: native horizontal swipe carousel ─── */
  if (isMobile) {
    return (
      <section
        className="relative bg-bg-primary min-h-screen flex flex-col justify-between"
        style={{ marginBottom: "10rem" }}
        id="personal-projects"
        aria-label="Proyectos personales"
      >
        {/* Header */}
        <div className="px-6 pt-10 pb-4">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-fg-muted text-xs tracking-[0.2em] uppercase font-medium">
              Proyectos personales
            </span>
            <span className="h-px flex-1 bg-stone/30" />
            <span className="text-fg-muted text-xs tracking-wider font-mono">
              {String(personalProjects.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Swipeable card track */}
        <div
          ref={scrollContainerRef}
          className="flex-1 flex items-center gap-4 px-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {personalProjects.map((project, i) => (
            <div
              key={project.id}
              className="snap-center shrink-0 h-full flex items-center"
              style={{ width: "85vw" }}
            >
              <ProjectCard project={project} index={i} />
            </div>
          ))}
          {/* Right padding spacer so last card can center */}
          <div className="shrink-0 w-[15vw]" aria-hidden />
        </div>

        {/* Swipe hint + dots */}
        <div className="px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-fg-muted text-[10px] tracking-[0.2em] uppercase">
              Desliza para explorar
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
      style={{ height: "300vh" }}
      id="personal-projects"
      aria-label="Proyectos personales"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* Header — pinned at top, fades out */}
        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="pt-10 md:pt-14 px-8 md:px-16 pb-4"
        >
          <div className="flex items-center gap-4 mb-2">
            <span className="text-fg-muted text-xs tracking-[0.2em] uppercase font-medium">
              Proyectos personales
            </span>
            <span className="h-px flex-1 bg-stone/30" />
            <span className="text-fg-muted text-xs tracking-wider font-mono">
              {String(personalProjects.length).padStart(2, "0")}
            </span>
          </div>
        </motion.div>

        {/* Horizontal scroll track */}
        <div className="flex-1 flex items-center">
          <motion.div
            style={{ x }}
            className="flex gap-6 md:gap-10 pl-8 md:pl-16 pr-8 md:pr-16"
          >
            {personalProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator at bottom */}
        <div className="shrink-0 pt-5 pb-14 md:pb-10 px-8 md:px-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-fg-muted text-[10px] tracking-[0.2em] uppercase">
              Scroll para explorar
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
            {personalProjects.map((_, i) => {
              const dotStart = i / personalProjects.length;
              const dotEnd = (i + 1) / personalProjects.length;
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
