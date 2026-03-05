"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";

const values = [
  {
    title: "Claridad sobre ruido",
    body: "Prefiero simplificar lo complejo antes que adornarlo. La estrategia empieza cuando el mensaje se entiende sin esfuerzo.",
  },
  {
    title: "Sistemas sobre improvisación",
    body: "Una pieza puede funcionar. Un sistema bien diseñado construye marca, reputación y crecimiento sostenible.",
  },
  {
    title: "Personas sobre métricas aisladas",
    body: "Las métricas importan, pero detrás de cada número hay alguien tomando decisiones reales. El contenido debe servir a esa persona primero.",
  },
  {
    title: "Movimiento sobre perfección",
    body: "Iterar, aprender y optimizar. Prefiero avanzar con intención y ajustar en el camino que esperar una versión perfecta que nunca sale.",
  },
];

const skills = [
  "Arquitectura de Marca y Voz",
  "Estrategia Integral de Contenidos",
  "Estrategia de Redes Sociales y Comunidad",
  "Diseño de Ecosistemas y Flujos Operativos",
  "Dirección Editorial y Control de Calidad",
  "Performance y Optimización Basada en Data",
  "Storytelling Multicanal",
  "Alineación de Stakeholders y Gestión de Equipos",
  "Estrategia de Crecimiento y Funnel",
];

const interests = [
  { icon: "🏃‍♀️", label: "Trail Running" },
  { icon: "🧘", label: "Breathwork & Meditation" },
  { icon: "📚", label: "Behavioral Psychology" },
  { icon: "🌿", label: "Herbalism & Wellness" },
  { icon: "✍️", label: "Creative Writing" },
  { icon: "🎧", label: "Podcast Junkie" },
];

export function AboutPageClient() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      {/* Hero section */}
      <section className="page-section">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-bg-secondary sticky top-24">
                <Image
                  src="/images/about-image.jpg"
                  alt={siteConfig.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent" style={{ padding: "0 3rem 3.5rem 3rem" }}>
                  {/* <p className="text-white/80 text-xs tracking-widest uppercase mb-1">
                    Ubicada en Colombia 
                  </p> */}
                  <p className="text-white font-[family-name:var(--font-display)] text-xl italic">
                    Las historias son la manera en que le damos sentido al mundo.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <p className="text-sm tracking-widest uppercase mb-4 text-terracotta">
                  Sobre mí
                </p>
                <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] mb-8">
                  {siteConfig.name}
                </h1>
                <div className="space-y-6 text-fg-secondary text-base md:text-lg leading-relaxed max-w-2xl">
                  <p>
                    Profesional en Comunicación y Periodismo con más de{" "}
                    <em className="text-terracotta not-italic font-medium">
                      7 años de experiencia
                    </em>{" "}
                    en estrategia de contenidos, marketing digital y construcción de marca.
                  </p>
                  <p>
                    He liderado planes editoriales, narrativas de marca y ecosistemas de
                    contenido para productos digitales, asegurando coherencia,
                    posicionamiento y resultados medibles.
                  </p>
                  <p>
                    Combino pensamiento estratégico, análisis de métricas y{" "}
                    <em className="text-terracotta not-italic font-medium">storytelling</em>{" "}
                    para convertir información compleja en mensajes claros, educativos y
                    de alto impacto.
                  </p>
                  <p>
                    Soy maratonista, creadora de contenido de deporte y apasionada por el
                    bienestar y la nutrición. Me gusta integrar disciplina, comunidad y propósito
                    en mi forma de construir marca.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-bg-secondary flex flex-col" style={{ height: "100vh", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container-main flex flex-col flex-1">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between pb-7 border-b border-stone/40 shrink-0"
          >
            <span className="text-[11px] tracking-[0.22em] uppercase text-terracotta font-medium">
              Valores
            </span>
            <span className="text-[11px] tracking-[0.22em] uppercase text-fg-muted/40 font-medium">
              {values.length.toString().padStart(2, "0")}
            </span>
          </motion.div>

          {/* Rows stretched to fill remaining height */}
          <div className="flex-1 flex flex-col">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: i * 0.09,
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex-1 grid grid-cols-12 gap-x-4 md:gap-x-10 items-center border-b border-stone/20 hover:border-stone/50 transition-colors duration-500"
              >
                <div className="col-span-2 md:col-span-1">
                  <span className="font-[family-name:var(--font-display)] text-[3.5rem] md:text-[5rem] font-bold leading-none select-none text-fg-primary/[0.06] group-hover:text-fg-primary/[0.13] transition-colors duration-500 block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="col-span-10 md:col-span-5 lg:col-span-4">
                  <h3 className="font-[family-name:var(--font-display)] text-[1.75rem] md:text-[2.2rem] lg:text-[2.75rem] font-medium leading-[1.1] group-hover:text-terracotta transition-colors duration-400">
                    {value.title}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-7 md:pl-16 mt-4 md:mt-0">
                  <p className="text-fg-secondary text-base md:text-lg lg:text-xl leading-[1.8] max-w-prose">
                    {value.body}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-terracotta/50 group-hover:w-full transition-all duration-700 ease-out" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS & EXPERTISE ── */}
      <section className="bg-bg-primary flex flex-col" style={{ height: "100vh", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container-main flex flex-col flex-1">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between pb-7 border-b border-stone/30 mb-16 shrink-0"
          >
            <span className="text-[11px] tracking-[0.22em] uppercase text-terracotta font-medium">
              Habilidades
            </span>
            <span className="text-[11px] tracking-[0.22em] uppercase text-fg-muted/40 font-medium">
              {skills.length.toString().padStart(2, "0")}
            </span>
          </motion.div>

          {/* Content stretched to fill */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-28">
            {/* Left: editorial statement */}
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-4 md:sticky md:top-32 self-start"
            >
              <p className="font-[family-name:var(--font-display)] text-2xl md:text-[2rem] lg:text-[2.4rem] font-medium leading-[1.2] text-fg-primary mb-10">
                Estrategia, sistema y ejecución para construir marcas{" "}
                <span className="text-terracotta italic">que crecen.</span>
              </p>
              <p className="text-fg-muted text-base leading-relaxed">
                De la narrativa al performance con coherencia y propósito.
              </p>
            </motion.div>

            {/* Right: skill rows stretched */}
            <div className="md:col-span-8 flex flex-col">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.05 + i * 0.055,
                    duration: 0.55,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group flex-1 flex items-center justify-between gap-8 border-b border-stone/20 hover:border-stone/50 transition-colors duration-400 cursor-default"
                >
                  <span className="font-[family-name:var(--font-display)] text-l md:text-xl font-normal text-fg-secondary group-hover:text-fg-primary transition-colors duration-300">
                    {skill}
                  </span>
                  <span className="text-[11px] text-fg-muted/40 group-hover:text-terracotta/60 transition-colors duration-300 tabular-nums shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interests / Off-the-clock */}
      {/* <section className="page-section bg-bg-primary min-h-screen">
        <div className="container-main">
          <SectionHeader label="Off the clock" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-medium leading-snug max-w-2xl">
              The things I do outside of work{" "}
              <span className="text-terracotta italic">
                shape everything I create within it.
              </span>
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {interests.map((interest, i) => (
              <motion.div
                key={interest.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-stone/20 bg-bg-card hover:border-sage/40 transition-colors duration-300"
              >
                <span className="text-3xl" role="img" aria-label={interest.label}>
                  {interest.icon}
                </span>
                <span className="text-fg-secondary text-xs font-medium tracking-wide text-center">
                  {interest.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      {/*<section className="page-section" style={{ height: "100vh", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container-main text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-medium leading-[1.1] mb-6 max-w-2xl mx-auto">
              Want to build something{" "}
              <span className="text-terracotta italic">meaningful</span>{" "}
              together?
            </h2>
             <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-4 px-8 py-4 bg-forest text-fg-inverse rounded-full hover:bg-sage-dark transition-colors duration-300"
            >
              <span className="text-sm font-medium tracking-wide uppercase">
                Let&#39;s talk
              </span>
              <span>→</span>
            </a> 
          </motion.div>
        </div>
      </section> */}
    </div>
  );
}
