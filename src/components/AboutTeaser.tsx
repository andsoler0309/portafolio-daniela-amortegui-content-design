"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/lib/i18n";

export function AboutTeaser() {
  const { t } = useI18n();

  return (
    <section
      className="page-section"
      id="about-teaser"
      aria-label="About preview"
    >
      <div className="container-main">
        <SectionHeader label={t("about.label")} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-bg-secondary">
              <Image
                src="/images/about-image.JPG"
                alt="Daniela Amórtegui"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                loading="lazy"
                placeholder="empty"
              />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-7"
          >
            <p className="text-fg-secondary text-base md:text-lg leading-relaxed mb-6 max-w-xl">
              {t("about.p1")}
            </p>
            <br />
            <p className="text-fg-secondary text-base md:text-lg leading-relaxed mb-6 max-w-xl">
              {t("about.p2")}
            </p>
            <br />  
            <p className="text-fg-secondary text-base md:text-lg leading-relaxed mb-6 max-w-xl">
              {t("about.p3")}
            </p>
            <br />
            <p className="text-fg-secondary text-base md:text-lg leading-relaxed mb-6 max-w-xl">
              {t("about.p4")}
            </p>
            <br />
            <p className="text-fg-secondary text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              {t("about.p5")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
