"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./Scene3D").then((m) => m.Scene3D), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-sage/10 to-terracotta/5 rounded-3xl animate-pulse" />
  ),
});

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
  const greeting = "Hola, soy";
  const name = siteConfig.name;

  return (
    <section
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
      style={{ paddingTop: "var(--nav-height)" }}
      aria-label="Introduction"
    >
      {/* Letters canvas — covers the full hero with no clipping box */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.8 }}
        className="absolute inset-0 z-0"
        aria-hidden="true"
      >
        <Scene3D />
      </motion.div>

      <div className="container-main w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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
                <span key={word} className="overflow-hidden block text-[clamp(2.8rem,7vw,7.5rem)] leading-[1.25] pb-1">
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

            {/* Title accent */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 md:mb-8"
            >
              <span className="inline-block px-4 py-2 rounded-full border border-sage/40 text-sage-dark text-xs md:text-sm font-medium tracking-wide uppercase">
                {siteConfig.title}
              </span>
            </motion.div> */}

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-fg-secondary text-base md:text-lg lg:text-xl max-w-xl leading-relaxed"
            >
              {siteConfig.subtitle}
            </motion.p>

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
                Scroll para explorar
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
