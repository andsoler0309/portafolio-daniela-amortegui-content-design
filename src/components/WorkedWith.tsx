"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experiences } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function WorkedWith() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.2"],
  });

  // Section slides up from below, overlaying the previous content
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "0%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.8], [40, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ y, borderTopLeftRadius: borderRadius, borderTopRightRadius: borderRadius, scale }}
      className="relative z-10 bg-bg-primary shadow-[0_-20px_60px_rgba(0,0,0,0.06)] page-section"
      id="experience"
      aria-label="Work experience"
    >
      <div className="container-main">
        <SectionHeader label="Worked with" count={experiences.length} />

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.a
              key={exp.company}
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
              className="group flex flex-col md:flex-row md:items-center justify-between py-5 md:py-6 border-b border-stone/30 hover:border-sage/50 transition-colors duration-300 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-8">
                <span className="font-[family-name:var(--font-display)] text-lg md:text-xl font-medium text-fg-primary group-hover:text-terracotta transition-colors duration-300 min-w-[200px]">
                  {exp.company}
                </span>
                <span className="text-fg-secondary text-sm">{exp.role}</span>
              </div>
              <div className="flex items-center gap-6 mt-2 md:mt-0">
                <span className="text-fg-muted text-sm">{exp.period}</span>
                <span className="text-fg-muted text-xs tracking-wide uppercase">
                  {exp.location}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
