"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

const links = [
  { label: "LinkedIn", value: "linkedin.com/in/danielaamorteguim", href: siteConfig.linkedin },
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: "Instagram", value: "@daniamortegui", href: siteConfig.instagram },
  { label: "Substack", value: "dani-cruza-metas.substack.com", href: siteConfig.substack },
];

export function ContactPageClient() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-bg-primary" style={{ paddingTop: "var(--nav-height)" }}>
      <div className="container-main">
        <section style={{ paddingTop: "clamp(4rem, 8vw, 7rem)", paddingBottom: "clamp(4rem, 8vw, 7rem)" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] tracking-[0.28em] uppercase font-semibold mb-8" style={{ color: "var(--terracotta)" }}>
              {t("contact.eyebrow")}
            </p>
            <h1
              className="font-[family-name:var(--font-display)] font-bold text-fg-primary tracking-tight"
              style={{ fontSize: "clamp(2.7rem, 6vw, 5.4rem)", lineHeight: 1.02 }}
            >
              {t("contact.title")}
            </h1>
            <p
              className="text-fg-secondary max-w-2xl"
              style={{ marginTop: "2rem", fontSize: "clamp(1rem, 1.4vw, 1.15rem)", lineHeight: 1.85 }}
            >
              {t("contact.intro")}
            </p>
          </motion.div>

          <div style={{ marginTop: "4rem" }}>
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center justify-between gap-6 border-t border-stone/20 last:border-b"
                style={{ paddingTop: "1.75rem", paddingBottom: "1.75rem" }}
              >
                <span className="flex flex-col gap-1">
                  <span className="font-[family-name:var(--font-display)] font-bold text-fg-primary group-hover:text-terracotta transition-colors duration-300"
                    style={{ fontSize: "clamp(1.4rem, 2.6vw, 2.2rem)", lineHeight: 1.15 }}>
                    {link.label}
                  </span>
                  <span className="text-fg-muted text-sm">{link.value}</span>
                </span>
                <span
                  className="inline-flex items-center justify-center rounded-full border shrink-0 transition-all duration-300 group-hover:border-terracotta group-hover:text-terracotta"
                  style={{ width: "2.75rem", height: "2.75rem", borderColor: "var(--stone)", color: "var(--fg-muted)" }}
                >
                  <svg width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </motion.a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
