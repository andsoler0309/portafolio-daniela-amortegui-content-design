"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { whatIDo, whatIDoEn } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function WhatIDo() {
  const { locale } = useI18n();
  const content = locale === "en" ? whatIDoEn : whatIDo;
  const [activeId, setActiveId] = useState(content.tabs[0].id);

  const active = content.tabs.find((tab) => tab.id === activeId) ?? content.tabs[0];

  return (
    <section className="page-section" id="what-i-do" aria-label={content.eyebrow}>
      <div className="container-main">
        <SectionHeader label={content.eyebrow} />

        {/* Statement + stat */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end" style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="lg:col-span-8 font-[family-name:var(--font-display)] font-medium text-fg-primary tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 3.4vw, 3rem)", lineHeight: 1.15 }}
          >
            {content.title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15, duration: 0.7, ease: EASE }}
            className="lg:col-span-4"
          >
            <p
              className="font-[family-name:var(--font-display)] font-bold leading-none"
              style={{ fontSize: "clamp(3.5rem, 7vw, 5.5rem)", color: "var(--terracotta)" }}
            >
              {content.statValue}
            </p>
            <p className="text-fg-secondary text-sm md:text-base" style={{ marginTop: "0.75rem", maxWidth: "20rem" }}>
              {content.statLabel}
            </p>
          </motion.div>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-wrap items-center gap-2 md:gap-3"
          role="tablist"
          aria-label={content.eyebrow}
        >
          {content.tabs.map((tab) => {
            const isActive = tab.id === active.id;
            return (
              <button
                key={tab.id}
                role="tab"
                id={`what-i-do-tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`what-i-do-panel-${tab.id}`}
                onClick={() => setActiveId(tab.id)}
                className="relative rounded-full text-xs font-semibold tracking-widest uppercase transition-colors duration-300"
                style={{
                  padding: "0.85rem 1.5rem",
                  color: isActive ? "var(--fg-inverse)" : "var(--fg-secondary)",
                  border: "1px solid var(--stone)",
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="what-i-do-tab-pill"
                    transition={{ duration: 0.4, ease: EASE }}
                    className="absolute inset-0 rounded-full"
                    style={{ background: "var(--terracotta)" }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Panel */}
        <div
          className="border-t border-stone/30"
          style={{ marginTop: "2.5rem", paddingTop: "2.5rem", minHeight: "18rem" }}
        >
          {/* keyed remount: la entrada anima sin depender de una salida */}
          <motion.div
            key={active.id}
            role="tabpanel"
            id={`what-i-do-panel-${active.id}`}
            aria-labelledby={`what-i-do-tab-${active.id}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
              {active.intro && (
                <p className="text-fg-secondary text-base md:text-lg" style={{ marginBottom: "2rem" }}>
                  {active.intro}
                </p>
              )}

              <div className="flex flex-col" style={{ gap: "3rem" }}>
                {active.groups.map((group, gi) => (
                  <div
                    key={group.label ?? "single"}
                    className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10"
                  >
                    {group.label && (
                      <p className="section-label md:col-span-3 md:pt-3 self-start">
                        {group.label}
                      </p>
                    )}
                    <ul
                      className={`grid grid-cols-1 sm:grid-cols-2 gap-x-10 ${
                        group.label ? "md:col-span-9" : "md:col-span-12 lg:grid-cols-3"
                      }`}
                    >
                      {group.items.map((item, i) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.05 + (gi * 4 + i) * 0.035,
                            duration: 0.45,
                            ease: EASE,
                          }}
                          className="group relative flex items-baseline justify-between gap-6 border-b border-stone/25 hover:border-stone/60 transition-colors duration-400 cursor-default"
                          style={{ paddingTop: "0.9rem", paddingBottom: "0.9rem" }}
                        >
                          <span className="font-[family-name:var(--font-display)] text-base md:text-lg text-fg-secondary group-hover:text-fg-primary transition-colors duration-300">
                            {item}
                          </span>
                          <span className="text-[11px] tabular-nums text-fg-muted/40 group-hover:text-terracotta/70 transition-colors duration-300 shrink-0">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="absolute bottom-0 left-0 h-px w-0 bg-terracotta/50 group-hover:w-full transition-all duration-500 ease-out" />
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
