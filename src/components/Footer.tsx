"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/lib/data";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Experiencia", href: "/work" },
  { label: "Sobre mí", href: "/about" },
];

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.linkedin },
  { label: "Instagram", href: siteConfig.instagram },
  { label: "Email", href: `mailto:${siteConfig.email}` },
];

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.55"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  const y = useTransform(smoothProgress, [0, 1], ["8%", "0%"]);
  const opacity = useTransform(smoothProgress, [0, 0.4], [0, 1]);
  const scale = useTransform(smoothProgress, [0, 1], [0.97, 1]);

  return (
    <motion.footer
      ref={ref}
      style={{ y, opacity, scale }}
      className="page-section border-t border-stone/20 origin-bottom"
      aria-label="Footer"
    >
      <div className="container-main">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.05] max-w-3xl mb-8">
            Vamos a crear algo que{" "}
            <span className="text-terracotta italic">mueva personas.</span>
          </h2>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-4 px-8 py-4 bg-forest text-fg-inverse rounded-full hover:bg-sage-dark transition-colors duration-300 group"
          >
            {/* <span className="text-sm font-medium tracking-wide uppercase">
              Get in touch
            </span>
            <motion.span
              className="inline-block"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.span> */}
          </a>
        </motion.div>

        {/* Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8" style={{ marginBottom: "2rem" }}>
          {/* Initials / Credit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {/* <p className="font-[family-name:var(--font-display)] text-2xl font-semibold mb-2">
              {siteConfig.initials}
            </p> */}
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
            <p className="section-label mb-4">Menu</p>
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
            <p className="section-label mb-4">Contacto</p>
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
            Volver arriba
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
