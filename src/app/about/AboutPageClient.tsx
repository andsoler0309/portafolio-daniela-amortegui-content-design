"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

const skills = {
  es: [
    "Estrategia de Producto",
    "Gestión de Proyectos y Programas",
    "Comunicación Digital",
    "Content Design y UX Writing",
    "Liderazgo Transversal",
    "Inteligencia Artificial y Prompt Engineering",
    "Research y Discovery",
    "Alineación de Stakeholders",
    "Análisis de Desempeño y Data",
  ],
  en: [
    "Product Strategy",
    "Project & Program Management",
    "Digital Communication",
    "Content Design & UX Writing",
    "Cross-functional Leadership",
    "AI & Prompt Engineering",
    "Research & Discovery",
    "Stakeholder Alignment",
    "Performance & Data Analysis",
  ],
};

export function AboutPageClient() {
  const { locale, t } = useI18n();
  const skillList = skills[locale];

  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      {/* Hero section */}
      <section className="page-section">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-bg-secondary sticky top-24">
                <Image
                  src="/images/perfil-daniela.jpg"
                  alt={siteConfig.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Content */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-sm tracking-widest uppercase mb-4 text-terracotta">
                  {t("about.eyebrow")}
                </p>
                <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] mb-6">
                  {siteConfig.name}
                </h1>
                <p className="text-fg-muted text-sm md:text-base tracking-wide uppercase mb-10">
                  {t("hero.role")}
                </p>
                <div className="space-y-6 text-fg-secondary text-base md:text-lg leading-relaxed max-w-2xl">
                  <p>{t("about.p1")}</p>
                  <p>{t("about.p2")}</p>
                  <p>{t("about.p3")}</p>
                  <p>{t("about.p4")}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS & EXPERTISE ── */}
      <section
        className="bg-bg-primary flex flex-col"
        style={{ minHeight: "100vh", paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <div className="container-main flex flex-col flex-1">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between pb-7 border-b border-stone/30 mb-16 shrink-0"
          >
            <span className="text-[11px] tracking-[0.22em] uppercase text-terracotta font-medium">
              {t("about.skillsLabel")}
            </span>
            <span className="text-[11px] tracking-[0.22em] uppercase text-fg-muted/40 font-medium">
              {skillList.length.toString().padStart(2, "0")}
            </span>
          </motion.div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-28">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-4 md:sticky md:top-32 self-start"
            >
              <p className="font-[family-name:var(--font-display)] text-2xl md:text-[2rem] lg:text-[2.4rem] font-medium leading-[1.2] text-fg-primary mb-10">
                {t("about.skillsStatement")}{" "}
                <span className="text-terracotta italic">
                  {t("about.skillsStatementAccent")}
                </span>
              </p>
              <p className="text-fg-muted text-base leading-relaxed">
                {t("about.skillsCaption")}
              </p>
            </motion.div>

            <div className="md:col-span-8 flex flex-col">
              {skillList.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 + i * 0.055, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex-1 flex items-center justify-between gap-8 border-b border-stone/20 hover:border-stone/50 transition-colors duration-400 cursor-default"
                  style={{ paddingTop: "0.9rem", paddingBottom: "0.9rem" }}
                >
                  <span className="font-[family-name:var(--font-display)] text-l md:text-xl font-normal text-fg-secondary group-hover:text-fg-primary transition-colors duration-300">
                    {skill}
                  </span>
                  <span className="text-[11px] text-fg-muted/40 group-hover:text-terracotta/60 transition-colors duration-300 tabular-nums shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
