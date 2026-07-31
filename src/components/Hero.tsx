"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const letterVariants = {
  hidden: { y: 80, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4 + i * 0.04,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export function Hero() {
  const { t } = useI18n();
  const greeting = t("hero.greeting");

  return (
    <section
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
      style={{ paddingTop: "var(--nav-height)" }}
      aria-label="Introduction"
    >
      <div className="container-main w-full relative z-10">
        <div className="grid grid-cols-1 gap-8 items-center">
          {/* Text content */}
          <div>
            {/* Greeting line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-fg-muted text-sm md:text-base font-medium tracking-widest uppercase mb-4 md:mb-6"
            >
              {greeting}
            </motion.p>

            {/* Name — large display */}
            <h1 className="font-[family-name:var(--font-display)] font-medium tracking-tight leading-[0.95] mb-6 md:mb-8">
              {["Daniela", "Amórtegui"].map((word, wi) => (
                <span key={word} className="overflow-hidden block text-[clamp(2.8rem,7vw,7.5rem)] lg:text-[clamp(2.8rem,4.5vw,5.5rem)] leading-[1.25] pb-1">
                  {word.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      custom={wi * 10 + i}
                      initial="hidden"
                      animate="visible"
                      variants={letterVariants}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-terracotta text-sm md:text-base font-semibold tracking-wide uppercase mt-2 mb-7 md:mb-9 max-w-xl"
            >
              {t("hero.role")}
            </motion.p>

            {/* Positioning statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-fg-primary text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed text-justify"
            >
              {t("hero.p1")}
            </motion.p>

            {/* Supporting paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 md:mt-8 flex flex-col gap-5 max-w-2xl"
            >
              <p className="text-fg-secondary text-base md:text-lg leading-relaxed text-justify">
                {t("hero.p2")}
              </p>
              <p className="text-fg-secondary text-base md:text-lg leading-relaxed text-justify">
                {t("hero.p3")}
              </p>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="mt-12 md:mt-16 flex items-center gap-3"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-[1px] h-8 bg-stone"
              />
              <span className="text-terracotta text-xs tracking-widest uppercase font-bold">
                {t("hero.scroll")}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
