"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "./SectionHeader";

export function AboutTeaser() {
  return (
    <section
      className="page-section"
      id="about-teaser"
      aria-label="About preview"
    >
      <div className="container-main">
        <SectionHeader label="Un poco sobre mí" />

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
                src="/images/about-image.jpg"
                alt="Daniela Amórtegui"
                fill
                className="object-cover"
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
            <blockquote className="font-[family-name:var(--font-display)] text-2xl md:text-3xl lg:text-4xl font-medium leading-snug mb-8 text-fg-primary">
              Creo historias que mueven personas{" "}
              <span className="text-terracotta italic">
                porque el movimiento 
              </span>{" "}
              me cambió a mí
            </blockquote>

            <p className="text-fg-secondary text-base md:text-lg leading-relaxed mb-6 max-w-xl">
              Sé lo que se siente buscar inspiración y sé el impacto que tiene una historia cuando realmente conecta.
            </p>

            <p className="text-fg-secondary text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              Soy estratega de contenidos y trabajo en la intersección entre disciplina, emoción y estructura. Creo que las marcas no necesitan hablar más fuerte, sino con más claridad, coherencia y propósito.
            </p>

            <p className="text-fg-secondary text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              Diseño ecosistemas de contenido que escalan, alineando narrativa, equipos y métricas para generar impacto real. Pero nunca olvido que al otro lado hay una persona: alguien que quiere entender, confiar y pertenecer.
            </p>

            <p className="text-fg-secondary text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              Correr me enseñó que la consistencia construye fuerza y el contenido me enseñó que la claridad construye confianza. Estoy segura de que el contenido no se trata solamete de publicar, se trata de mover algo en quien lo recibe.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-fg-primary transition-colors duration-300 group"
            >
              <span className="text-sm font-bold tracking-wide uppercase text-terracotta">
                Mas sobre mí
              </span>
              <motion.span
                className="inline-block text-terracotta font-bold"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
