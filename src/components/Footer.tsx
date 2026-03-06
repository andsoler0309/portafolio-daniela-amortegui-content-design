"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.linkedin },
  { label: "Instagram", href: siteConfig.instagram },
  { label: "Email", href: `mailto:${siteConfig.email}` },
];

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { t } = useI18n();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.55"],
  });

  const footerLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/work/ux-content", label: t("nav.contentDesign") },
    { href: "/work/ai", label: t("nav.ai") },
    { href: "/work/other", label: t("nav.other") },
  ];

  const y = useTransform(scrollYProgress, [0, 1], ["8%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <motion.footer
      ref={ref}
      style={{ y, opacity }}
      className="page-section border-t border-stone/20 origin-bottom"
      aria-label="Footer"
    >
      <div className="container-main">

        {/* Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8" style={{ marginBottom: "2rem" }}>
          {/* Initials / Credit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <p className="text-fg-muted text-sm">
              © {siteConfig.initials} — {new Date().getFullYear()}
            </p>
          </motion.div>

          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="section-label mb-4">{t("footer.menu")}</p>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-fg-secondary hover:text-fg-primary transition-colors duration-300 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="section-label mb-4">{t("footer.contact")}</p>
            <nav className="flex flex-col gap-3" aria-label="Social links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg-secondary hover:text-fg-primary transition-colors duration-300 text-sm link-underline inline-block w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Back to top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-stone/20 flex justify-end"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-fg-muted hover:text-fg-primary transition-colors duration-300 text-xs tracking-widest uppercase flex items-center gap-2"
            aria-label="Back to top"
          >
            {t("footer.backToTop")}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="rotate-[-90deg]"
            >
              <path
                d="M1 11L11 1M11 1H4M11 1V8"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </motion.footer>
  );
}
