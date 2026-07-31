"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Locale = "es" | "en";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const translations: Record<Locale, Record<string, string>> = {
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.work": "Proyectos",
    "nav.personal": "Proyectos personales",
    "nav.ai": "IA",
    "nav.resume": "CV",
    "nav.contact": "Contacto",

    // Hero
    "hero.greeting": "Hola, soy",
    "hero.scroll": "Scroll para explorar",
    "hero.role": "Estrategia de Producto, Comunicación y Proyectos Digitales",
    "hero.p1":
      "Diseño soluciones que convierten productos complejos en experiencias claras para las personas y en resultados para los negocios.",
    "hero.p2":
      "Durante los últimos años he liderado proyectos digitales para compañías como Mercado Libre, Avianca, Bancolombia, Bavaria, EY e IQOS, coordinando equipos multidisciplinarios y conectando producto, diseño, tecnología, negocio y comunicación.",
    "hero.p3":
      "Mi experiencia combina estrategia de producto, gestión de proyectos, comunicación digital e Inteligencia Artificial para diseñar soluciones que generan impacto.",

    // Pillars (home)
    "pillars.label": "Mi trabajo",
    "pillars.ariaLabel": "Áreas de trabajo",
    "pillars.explore": "Explorar",
    "pillar.work.title": "Proyectos",
    "pillar.work.description":
      "Producto, comunicación y gestión de proyectos digitales para Mercado Libre, Avianca, Mesfix y más.",
    "pillar.personal.title": "Proyectos\npersonales",
    "pillar.personal.description":
      "Comunidad, contenido y storytelling alrededor del running y los deportes de resistencia.",
    "pillar.ai.title": "IA",
    "pillar.ai.description":
      "Inteligencia Artificial aplicada a producto, flujos de trabajo y toma de decisiones.",

    // About
    "about.label": "Un poco sobre mí",
    "about.eyebrow": "Sobre mí",
    "about.p1":
      "Soy comunicadora con más de ocho años de experiencia liderando proyectos digitales, estrategias de comunicación y experiencias de producto.",
    "about.p2":
      "A lo largo de mi carrera he trabajado desde distintos frentes: estrategia de contenido, UX, gestión de proyectos, coordinación entre equipos, transformación digital, Inteligencia Artificial y comunicación corporativa.",
    "about.p3":
      "Lo que más disfruto es conectar personas, procesos y objetivos para que proyectos complejos puedan ejecutarse de manera organizada y generar resultados reales.",
    "about.p4":
      "Creo en la comunicación como una herramienta estratégica para resolver problemas, alinear equipos y facilitar la adopción de productos.",
    "about.valuesLabel": "Valores",
    "about.skillsLabel": "Habilidades",
    "about.skillsStatement":
      "Estrategia, sistema y ejecución para construir productos",
    "about.skillsStatementAccent": "que crecen.",
    "about.skillsCaption":
      "De la definición del producto a la ejecución, con coherencia y propósito.",
    "about.quote": "Las historias son la manera en que le damos sentido al mundo.",

    // Footer
    "footer.menu": "Menu",
    "footer.contact": "Contacto",
    "footer.backToTop": "Volver arriba",

    // Work page — UI Labels
    "work.back": "Inicio",
    "work.eyebrow": "Proyectos",
    "work.challenge": "El reto",
    "work.sectionNav.rol": "Mi rol",
    "work.sectionNav.desafio": "Desafío",
    "work.sectionNav.solucion": "Solución",
    "work.sectionNav.enfoque": "Enfoque",
    "work.sectionNav.impacto": "Impacto",
    "work.sectionLabel.rol": "Mi rol",
    "work.sectionLabel.desafio": "Desafío",
    "work.sectionLabel.solucion": "Solución",
    "work.sectionLabel.enfoque": "Enfoque",
    "work.sectionLabel.impacto": "Impacto",

    // Personal projects page
    "personal.eyebrow": "Proyectos personales",
    "personal.title": "Construyendo comunidad a través de historias",
    "personal.intro":
      "Fuera del trabajo construyo comunidad alrededor del running y el deporte, creo contenido educativo y escribo sobre disciplina, resiliencia y hábitos.",
    "personal.responsibilities": "Lo que hago",
    "personal.visit": "Ver proyecto",

    // Resume page
    "resume.eyebrow": "CV",
    "resume.title": "Hoja de vida",
    "resume.intro":
      "Más de ocho años liderando proyectos digitales, estrategias de comunicación y experiencias de producto. Descarga el CV completo en PDF.",
    "resume.download": "Descargar CV (Español)",
    "resume.downloadAlt": "Descargar CV (Inglés)",
    "resume.companies": "Empresas",

    // Contact page
    "contact.eyebrow": "Contacto",
    "contact.title": "Hablemos",
    "contact.intro":
      "¿Tienes un proyecto, una vacante o una idea en mente? Escríbeme por cualquiera de estos canales.",

    // AI page — UI Labels
    "ai.back": "Inicio",
    "ai.heroLabel": "IA",
    "ai.challenge": "El reto",
    "ai.sectionNav.rol": "Rol",
    "ai.sectionNav.objetivo": "Objetivo",
    "ai.sectionNav.desafio": "Desafío",
    "ai.sectionNav.estrategia": "Estrategia",
    "ai.sectionNav.solucion": "Solución",
    "ai.sectionNav.resultados": "Resultados",
    "ai.sectionNav.iteracion": "Iteración",
    "ai.sectionNav.herramientas": "Herramientas",
    "ai.sectionNav.descripcion": "Descripción",
    "ai.sectionLabel.rol": "Rol",
    "ai.sectionLabel.objetivo": "Objetivo General",
    "ai.sectionLabel.desafio": "Desafío",
    "ai.sectionLabel.estrategia": "Estrategia",
    "ai.sectionLabel.solucion": "Solución",
    "ai.sectionLabel.resultados": "Resultados",
    "ai.sectionLabel.iteracion": "Iteración y Pruebas",
    "ai.sectionLabel.herramientas": "Herramientas Utilizadas",
    "ai.sectionLabel.herramientasIA": "Herramientas de IA",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.work": "Work",
    "nav.personal": "Personal Projects",
    "nav.ai": "AI",
    "nav.resume": "Resume",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.scroll": "Scroll to explore",
    "hero.role": "Product Strategy, Communications & Digital Projects",
    "hero.p1":
      "I design solutions that transform complex products into clear user experiences and meaningful business outcomes.",
    "hero.p2":
      "Over the past several years, I have led digital initiatives for companies including Mercado Libre, Avianca, Bancolombia, Bavaria, EY and IQOS, coordinating cross-functional teams and connecting Product, Design, Engineering, Business and Communications.",
    "hero.p3":
      "My experience combines product strategy, project management, digital communication and Artificial Intelligence to deliver solutions that create real impact.",

    // Pillars (home)
    "pillars.label": "My work",
    "pillars.ariaLabel": "Work areas",
    "pillars.explore": "Explore",
    "pillar.work.title": "Work",
    "pillar.work.description":
      "Product, communication and digital project management for Mercado Libre, Avianca, Mesfix and more.",
    "pillar.personal.title": "Personal\nProjects",
    "pillar.personal.description":
      "Community, content and storytelling around running and endurance sports.",
    "pillar.ai.title": "AI",
    "pillar.ai.description":
      "Artificial Intelligence applied to product, workflows and decision-making.",

    // About
    "about.label": "A bit about me",
    "about.eyebrow": "About",
    "about.p1":
      "I'm a communication professional with over eight years of experience leading digital products, communication strategies and cross-functional projects.",
    "about.p2":
      "Throughout my career I've worked across product strategy, UX, project management, AI initiatives and digital transformation.",
    "about.p3":
      "I enjoy bringing together people, processes and business goals to turn complex initiatives into organized execution and measurable results.",
    "about.p4":
      "I believe communication is much more than words — it's a strategic tool that helps products succeed.",
    "about.valuesLabel": "Values",
    "about.skillsLabel": "Skills",
    "about.skillsStatement": "Strategy, systems and execution to build products",
    "about.skillsStatementAccent": "that grow.",
    "about.skillsCaption":
      "From product definition to delivery, with coherence and purpose.",
    "about.quote": "Stories are how we make sense of the world.",

    // Footer
    "footer.menu": "Menu",
    "footer.contact": "Contact",
    "footer.backToTop": "Back to top",

    // Work page — UI Labels
    "work.back": "Home",
    "work.eyebrow": "Work",
    "work.challenge": "The challenge",
    "work.sectionNav.rol": "My role",
    "work.sectionNav.desafio": "Challenge",
    "work.sectionNav.solucion": "Solution",
    "work.sectionNav.enfoque": "Approach",
    "work.sectionNav.impacto": "Impact",
    "work.sectionLabel.rol": "My Role",
    "work.sectionLabel.desafio": "Challenge",
    "work.sectionLabel.solucion": "Solution",
    "work.sectionLabel.enfoque": "Approach",
    "work.sectionLabel.impacto": "Impact",

    // Personal projects page
    "personal.eyebrow": "Personal Projects",
    "personal.title": "Building Communities Through Storytelling",
    "personal.intro":
      "Outside of work I build communities around running and sport, create educational content and write about discipline, resilience and habits.",
    "personal.responsibilities": "What I do",
    "personal.visit": "Visit project",

    // Resume page
    "resume.eyebrow": "Resume",
    "resume.title": "Resume",
    "resume.intro":
      "Over eight years leading digital projects, communication strategies and product experiences. Download the full resume as a PDF.",
    "resume.download": "Download resume (English)",
    "resume.downloadAlt": "Download resume (Spanish)",
    "resume.companies": "Companies",

    // Contact page
    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk",
    "contact.intro":
      "Have a project, a role or an idea in mind? Reach out through any of these channels.",

    // AI page — UI Labels
    "ai.back": "Home",
    "ai.heroLabel": "AI",
    "ai.challenge": "The challenge",
    "ai.sectionNav.rol": "Role",
    "ai.sectionNav.objetivo": "Objective",
    "ai.sectionNav.desafio": "Challenge",
    "ai.sectionNav.estrategia": "Strategy",
    "ai.sectionNav.solucion": "Solution",
    "ai.sectionNav.resultados": "Results",
    "ai.sectionNav.iteracion": "Iteration",
    "ai.sectionNav.herramientas": "Tools",
    "ai.sectionNav.descripcion": "Description",
    "ai.sectionLabel.rol": "Role",
    "ai.sectionLabel.objetivo": "General Objective",
    "ai.sectionLabel.desafio": "Challenge",
    "ai.sectionLabel.estrategia": "Strategy",
    "ai.sectionLabel.solucion": "Solution",
    "ai.sectionLabel.resultados": "Results",
    "ai.sectionLabel.iteracion": "Iteration & Testing",
    "ai.sectionLabel.herramientas": "Tools Used",
    "ai.sectionLabel.herramientasIA": "AI Tools",
  },
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && (saved === "es" || saved === "en")) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const t = (key: string): string => {
    return translations[locale][key] ?? key;
  };

  // During SSR / before hydration, default to Spanish
  if (!mounted) {
    return (
      <I18nContext.Provider
        value={{
          locale: "es",
          setLocale,
          t: (key: string) => translations.es[key] ?? key,
        }}
      >
        {children}
      </I18nContext.Provider>
    );
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
