"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
              Soy UX Writer y Content Designer con formación en periodismo y comunicación estratégica. A lo largo de mi carrera he trabajado diseñando contenido para productos digitales, plataformas tecnológicas y estrategias de comunicación orientadas a usuarios.
            </p>
            <br />
            <p className="text-fg-secondary text-base md:text-lg leading-relaxed mb-6 max-w-xl">
              Mi trabajo se centra en transformar sistemas complejos, como métricas, dashboards o herramientas de negocio, en experiencias claras, útiles y accionables para las personas.
            </p>
            <br />  
            <p className="text-fg-secondary text-base md:text-lg leading-relaxed mb-6 max-w-xl">
              En Mercado Libre participé en el diseño de productos orientados a vendedores, ayudándoles a comprender su desempeño, mejorar su reputación y tomar mejores decisiones dentro de la plataforma. Esto implicó diseñar sistemas de contenido para dashboards, planes de comunicación para cambios de producto y experiencias que integran inteligencia artificial para ofrecer recomendaciones a los usuarios.
            </p>
            <br />
            <p className="text-fg-secondary text-base md:text-lg leading-relaxed mb-6 max-w-xl">
              En otras experiencias, desarrollé estrategias de comunicación digital, marketing de contenidos y copywriting para fintech y agencias. Esa experiencia me permitió entender el contenido desde una perspectiva más amplia: como una herramienta para explicar, posicionar productos y construir relaciones de confianza con las personas.
            </p>
            <br />
            <p className="text-fg-secondary text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              Me interesa especialmente trabajar en productos donde el contenido puede reducir la complejidad, mejorar la comprensión y ayudar a las personas a tomar decisiones más informadas.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
