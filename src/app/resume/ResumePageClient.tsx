"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

const companies = [
  "Mercado Libre",
  "Avianca",
  "Mesfix",
  "Triario",
  "Dattis",
];

export function ResumePageClient() {
  const { t, locale } = useI18n();
  const primaryCv = locale === "en" ? siteConfig.cv.en : siteConfig.cv.es;
  const secondaryCv = locale === "en" ? siteConfig.cv.es : siteConfig.cv.en;

  return (
    <div className="min-h-screen bg-bg-primary" style={{ paddingTop: "var(--nav-height)" }}>
      <div className="container-main">
        <section style={{ paddingTop: "clamp(4rem, 8vw, 7rem)", paddingBottom: "clamp(4rem, 8vw, 7rem)" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <p className="text-[10px] tracking-[0.28em] uppercase font-semibold mb-8" style={{ color: "var(--terracotta)" }}>
              {t("resume.eyebrow")}
            </p>
            <h1
              className="font-[family-name:var(--font-display)] font-bold text-fg-primary tracking-tight"
              style={{ fontSize: "clamp(2.7rem, 6vw, 5.4rem)", lineHeight: 1.02 }}
            >
              {t("resume.title")}
            </h1>
            <p
              className="text-fg-secondary"
              style={{ marginTop: "2rem", fontSize: "clamp(1rem, 1.4vw, 1.15rem)", lineHeight: 1.85 }}
            >
              {t("resume.intro")}
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ marginTop: "3rem" }}>
              <a
                href={primaryCv}
                download
                className="inline-flex items-center gap-4 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:opacity-85"
                style={{
                  padding: "1.1rem 2rem",
                  background: "var(--terracotta)",
                  color: "#fff",
                }}
              >
                {t("resume.download")}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 1v9M3.5 6.5L7 10l3.5-3.5M1.5 12.5h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <a
                href={secondaryCv}
                download
                className="inline-flex items-center gap-4 rounded-full text-xs font-semibold tracking-widest uppercase text-fg-secondary transition-all duration-300 hover:opacity-85"
                style={{
                  padding: "1.1rem 2rem",
                  border: "1px solid var(--stone)",
                }}
              >
                {t("resume.downloadAlt")}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 1v9M3.5 6.5L7 10l3.5-3.5M1.5 12.5h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div style={{ marginTop: "4rem" }}>
              <p className="section-label" style={{ marginBottom: "1.5rem" }}>
                {t("resume.companies")}
              </p>
              <div className="flex flex-wrap gap-3">
                {companies.map((company) => (
                  <span
                    key={company}
                    className="rounded-full text-xs tracking-wide text-fg-secondary"
                    style={{ padding: "0.6rem 1.25rem", border: "1px solid var(--stone)" }}
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
