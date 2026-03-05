"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

const gradients = [
  "linear-gradient(135deg, #8B9D77 0%, #A8B89A 50%, #D4C5B0 100%)",
  "linear-gradient(135deg, #C4704A 0%, #D4896A 50%, #E8DFD2 100%)",
  "linear-gradient(135deg, #1A2E1A 0%, #8B9D77 50%, #C4704A 100%)",
  "linear-gradient(135deg, #D4C5B0 0%, #C4704A 50%, #1A2E1A 100%)",
];

function ScrollCard({
  project,
  index,
  total,
}: {
  project: (typeof projects)[0];
  index: number;
  total: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Each card: rotates from 8deg → 0 → -8deg as it scrolls through
  const rotateY = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [12, 0, -12]);
  const rotateX = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [4, 0, -2]);
  const scale = useTransform(scrollYProgress, [0.1, 0.45, 0.55, 0.9], [0.85, 1, 1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0.05, 0.25, 0.75, 0.95], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [60, 0, -60]);

  return (
    <div
      ref={cardRef}
      className="h-[100vh] flex items-center justify-center sticky top-0"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{
          rotateY,
          rotateX,
          scale,
          opacity,
          y,
          transformPerspective: 1200,
          transformStyle: "preserve-3d",
        }}
        className="w-full max-w-[900px] mx-auto md:px-4"
      >
        <Link
          href={`/work/${project.id}`}
          className="group block"
          aria-label={`View ${project.title} case study for ${project.client}`}
        >
          {/* Full-height card */}
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl h-screen md:h-[80vh]">
            {/* Background */}
            {project.image && project.imageLayout === "cover" ? (
              <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 900px) 100vw, 900px"
                  priority={index === 0}
                />
              </div>
            ) : (
              <>
                <div
                  className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  style={{ background: project.image ? "#FFE600" : gradients[index % gradients.length] }}
                />
                {/* Floating screenshot — right side */}
                {project.image && (
                  <div className="absolute right-[-4%] top-[5%] bottom-[5%] w-[52%] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-[-8px] group-hover:scale-[1.02]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top rounded-2xl shadow-2xl shadow-black/30"
                      sizes="500px"
                      priority={index === 0}
                    />
                  </div>
                )}
              </>
            )}
            {/* Hover tint */}
            <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/20 transition-colors duration-500" />
            {/* Readability gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 via-60% to-transparent" />

            {/* Counter — top left */}
            <div className="absolute top-8 left-8 md:top-10 md:left-10">
              <span className="font-[family-name:var(--font-display)] text-6xl md:text-8xl font-light text-white/15">
                {/* {String(index + 1).padStart(2, "0")} */}
              </span>
            </div>

            {/* Client + Year — top right */}
            <div className="absolute top-8 right-8 md:top-10 md:right-10 flex items-center gap-2">
              <span
                className="bg-cream/90 backdrop-blur-md rounded-full text-[9px] font-bold tracking-[0.15em] uppercase text-forest/95 border border-forest/10"
                style={{ padding: "0.3rem 1rem" }}
              >
                {project.client}
              </span>
              {/* <span
                className="bg-cream/90 backdrop-blur-md rounded-full text-[9px] font-bold tracking-[0.15em] text-forest/95 border border-forest/10"
                style={{ padding: "0.3rem 1rem" }}
              >
                {project.year}
              </span> */}
            </div>

            {/* Bottom content — tags, title, description */}
            <div className="absolute bottom-0 left-0 right-0" style={{ padding: "0 2.5rem 3.5rem 2.5rem" }}>
              {/* Tags */}
              {/* <div className="flex flex-wrap gap-2 mb-5">
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

              {/* Title */}
              <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-medium text-white group-hover:text-cream/80 transition-colors duration-300 mb-2">
                {project.title}
              </h3>

              {/* Category */}
              <p className="text-white/75 text-xs md:text-sm uppercase tracking-widest mb-4">
                {project.category}
              </p>

              {/* Description */}
              <p className="text-white/95 text-sm md:text-base max-w-xl leading-relaxed">
                {project.description}
              </p>

              {/* CTA */}
              <div className="mt-5 flex items-center gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 translate-y-0 md:translate-y-2 md:group-hover:translate-y-0">
                <span className="text-terracotta text-xs font-bold tracking-wider uppercase">Ver trabajo</span>
                <motion.span className="inline-block text-terracotta" whileHover={{ x: 4 }} transition={{ duration: 0.3 }}>
                  →
                </motion.span>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

export function SelectedWork() {
  return (
    <section id="work" aria-label="Trabajos seleccionados">
      <div className="container-main pt-16 md:pt-24">
        <SectionHeader label="Experiencia" count={projects.length} />
      </div>

      {/* Scroll stack container — each card gets a full viewport height */}
      <div
        className="relative"
        style={{ height: `${projects.length * 100}vh` }}
      >
        {projects.map((project, i) => (
          <ScrollCard
            key={project.id}
            project={project}
            index={i}
            total={projects.length}
          />
        ))}
      </div>

      <div className="container-main" style={{ paddingTop: "2rem", paddingBottom: "12rem" }}>
        <div className="text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-3 text-fg-primary transition-colors duration-300 group"
          >
            <span className="text-terracotta font-medium tracking-wide uppercase">
              Ver toda la experiencia
            </span>
            <motion.span
              className="inline-block text-terracotta"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.span>
          </Link>
        </div>
      </div>
    </section>
  );
}
