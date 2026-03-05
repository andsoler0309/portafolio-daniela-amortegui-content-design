"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { philosophyPoints } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.15"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.8], [40, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);

  return (
    <motion.section
      ref={sectionRef}
      style={{
        y,
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
        scale,
      }}
      className="relative z-20 bg-bg-secondary shadow-[0_-20px_60px_rgba(0,0,0,0.08)] page-section"
      id="philosophy"
      aria-label="Philosophy"
    >
      <div className="container-main">
        <SectionHeader label="Philosophy" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] mb-6">
              Content isn&#39;t decoration.
              <br />
              <span className="text-terracotta italic">
                It&#39;s the brand experience.
              </span>
            </h2>
            <p className="text-fg-secondary text-base md:text-lg leading-relaxed max-w-lg">
              I believe the best content doesn&#39;t just fill feeds — it shapes
              how people feel about a brand. Every word, every frame, every
              narrative arc is an act of strategic design.
            </p>
          </motion.div>

          {/* Right — Points */}
          <div className="space-y-8 md:space-y-10">
            {philosophyPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: 0.2 + i * 0.15,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                }}
                className="border-l-2 border-sage/40 pl-6"
              >
                <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-medium mb-3">
                  {point.title}
                </h3>
                <p className="text-fg-secondary text-sm md:text-base leading-relaxed">
                  {point.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
