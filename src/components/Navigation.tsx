"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useI18n } from "@/lib/i18n";

export function Navigation() {
  const { t } = useI18n();

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/work/ux-content", label: t("nav.contentDesign") },
    { href: "/work/ai", label: t("nav.ai") },
    { href: "/work/other", label: t("nav.other") },
  ];
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInWorkSection, setIsInWorkSection] = useState(false);
  const [isInPersonalProjects, setIsInPersonalProjects] = useState(false);
  const [isInServices, setIsInServices] = useState(false);
  const [isInAboutTeaser, setIsInAboutTeaser] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Reset all section states on route change
  useEffect(() => {
    setIsInWorkSection(false);
    setIsInPersonalProjects(false);
    setIsInServices(false);
    setIsInAboutTeaser(false);
  }, [pathname]);

  // Single IntersectionObserver for all tracked sections
  useEffect(() => {
    const sectionMap: Record<string, (v: boolean) => void> = {
      work: setIsInWorkSection,
      "three-pillars": setIsInPersonalProjects,
      services: setIsInServices,
      "about-teaser": setIsInAboutTeaser,
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const setter = sectionMap[entry.target.id];
          if (setter) setter(entry.isIntersecting);
        });
      },
      { threshold: 0.05 }
    );

    Object.keys(sectionMap).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{
          y: ((isInWorkSection || isInPersonalProjects || isInServices) && !isInAboutTeaser) ? -80 : 0,
          opacity: ((isInWorkSection || isInPersonalProjects || isInServices) && !isInAboutTeaser) ? 0 : 1,
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "backdrop-blur-xl bg-bg-primary/80 border-b border-stone/20"
            : ""
        }`}
        style={{ height: "var(--nav-height)" }}
      >
        <div className="container-main h-full flex items-center justify-between">
          {/* Logo / Initials */}
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-fg-primary hover:text-terracotta transition-colors duration-300"
            aria-label={`${siteConfig.name} — Home`}
          >
            {siteConfig.initials}
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center"
            style={{ gap: "0.25rem" }}
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ padding: "0.5rem 1.25rem" }}
                className="link-underline text-sm font-medium text-fg-secondary hover:text-fg-primary transition-colors duration-300 tracking-widest uppercase rounded-lg hover:bg-fg-primary/5"
              >
                {link.label}
              </Link>
            ))}
            <div style={{ marginLeft: "1rem" }} className="flex items-center gap-6">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <motion.span
                animate={
                  isMobileMenuOpen
                    ? { rotate: 45, y: 5 }
                    : { rotate: 0, y: 0 }
                }
                className="block w-6 h-[1.5px] bg-fg-primary origin-center"
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-[1.5px] bg-fg-primary"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={
                  isMobileMenuOpen
                    ? { rotate: -45, y: -7 }
                    : { rotate: 0, y: 0 }
                }
                className="block w-6 h-[1.5px] bg-fg-primary origin-center"
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-bg-primary flex flex-col items-center justify-center gap-8"
            style={{ paddingTop: "var(--nav-height)" }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-[family-name:var(--font-display)] text-4xl text-fg-primary hover:text-terracotta transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
