"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  count?: number;
}

export function SectionHeader({ label, count }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center gap-4 mb-12 md:mb-16"
    >
      <span className="section-label">{label}</span>
      {count !== undefined && (
        <span className="section-label opacity-50">({count})</span>
      )}
      <div className="flex-1 divider" />
    </motion.div>
  );
}
