"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.linkedin },
  { label: "Email", href: `mailto:${siteConfig.email}` },
  { label: "Instagram", href: siteConfig.instagram },
  { label: "Substack", href: siteConfig.substack },
];

export function Footer() {
  const { t } = useI18n();

  const footerLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/work", label: t("nav.work") },
    { href: "/personal-projects", label: t("nav.personal") },
    { href: "/ai", label: t("nav.ai") },
    { href: "/resume", label: t("nav.resume") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="page-section border-t border-stone/20 origin-bottom relative z-20"
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
