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
    "nav.contentDesign": "Content Design",
    "nav.ai": "IA",
    "nav.other": "Otros",

    // Hero
    "hero.greeting": "Hola, soy",
    "hero.scroll": "Scroll para explorar",
    "hero.subtitle":
      "Content Designer con +7 años diseñando estrategias de contenido para productos digitales. Trabajo transformando sistemas complejos en experiencias claras que ayudan a las personas a entender, decidir y actuar.",

    // Three Pillars
    "pillars.label": "Mi trabajo",
    "pillars.ariaLabel": "Pilares de trabajo",
    "pillars.scrollDesktop": "Scroll para explorar",
    "pillars.scrollMobile": "Desliza para explorar",
    "pillars.explore": "Explorar",

    // Pillar cards
    "pillar.uxContent.title": "Content\nDesign",
    "pillar.uxContent.description":
      "Estrategia de contenido, UX Writing y sistemas de mensajes para productos digitales a gran escala.",
    "pillar.ai.title": "Proyectos\ncon IA",
    "pillar.ai.description":
      "Exploración y diseño de experiencias con inteligencia artificial aplicadas a contenido, automatización y toma de decisiones.",
    "pillar.other.title": "Otros\nProyectos",
    "pillar.other.description":
      "Otras experiencias laborales en donde trabajé con contenido y formatos digitales.",

    // About Teaser
    "about.label": "Un poco sobre mí",
    "about.p1":
      "Soy UX Writer y Content Designer con formación en periodismo y comunicación estratégica. A lo largo de mi carrera he trabajado diseñando contenido para productos digitales, plataformas tecnológicas y estrategias de comunicación orientadas a usuarios.",
    "about.p2":
      "Mi trabajo se centra en transformar sistemas complejos, como métricas, dashboards o herramientas de negocio, en experiencias claras, útiles y accionables para las personas.",
    "about.p3":
      "En Mercado Libre participé en el diseño de productos orientados a vendedores, ayudándoles a comprender su desempeño, mejorar su reputación y tomar mejores decisiones dentro de la plataforma. Esto implicó diseñar sistemas de contenido para dashboards, planes de comunicación para cambios de producto y experiencias que integran inteligencia artificial para ofrecer recomendaciones a los usuarios.",
    "about.p4":
      "En otras experiencias, desarrollé estrategias de comunicación digital, marketing de contenidos y copywriting para fintech y agencias. Esa experiencia me permitió entender el contenido desde una perspectiva más amplia: como una herramienta para explicar, posicionar productos y construir relaciones de confianza con las personas.",
    "about.p5":
      "Me interesa especialmente trabajar en productos donde el contenido puede reducir la complejidad, mejorar la comprensión y ayudar a las personas a tomar decisiones más informadas.",

    // Footer
    "footer.menu": "Menu",
    "footer.contact": "Contacto",
    "footer.backToTop": "Volver arriba",

    // UX Content Design page — UI Labels
    "ux.back": "Inicio",
    "ux.sectionNav.rol": "Rol",
    "ux.sectionNav.objetivo": "Objetivo",
    "ux.sectionNav.desafio": "Desafío",
    "ux.sectionNav.estrategia": "Estrategia",
    "ux.sectionNav.solucion": "Solución",
    "ux.sectionNav.resultados": "Resultados",
    "ux.sectionNav.enfoque": "Enfoque",
    "ux.sectionNav.impacto": "Impacto",
    "ux.sectionLabel.rol": "Rol",
    "ux.sectionLabel.objetivo": "Objetivo General",
    "ux.sectionLabel.desafio": "Desafío",
    "ux.sectionLabel.estrategia": "Estrategia",
    "ux.sectionLabel.solucion": "Solución",
    "ux.sectionLabel.resultados": "Resultados",
    "ux.sectionLabel.enfoque": "Enfoque",
    "ux.sectionLabel.impacto": "Impacto",
    "ux.challenge": "El reto",
    "ux.contentDesign": "Content Design",

    // AI page — UI Labels
    "ai.back": "Inicio",
    "ai.heroLabel": "Proyectos con IA",
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

    // Other Projects page — UI Labels
    "other.back": "Inicio",
    "other.heroLabel": "Otros Proyectos",
    "other.challenge": "El reto",
    "other.sectionNav.desafio": "Desafío",
    "other.sectionNav.enfoque": "Enfoque",
    "other.sectionNav.impacto": "Impacto",
    "other.sectionLabel.desafio": "Desafío",
    "other.sectionLabel.enfoque": "Enfoque",
    "other.sectionLabel.impacto": "Impacto",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.contentDesign": "Content Design",
    "nav.ai": "AI",
    "nav.other": "Other",

    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.scroll": "Scroll to explore",
    "hero.subtitle":
      "Content Designer with 7+ years crafting content strategies for digital products. I transform complex systems into clear experiences that help people understand, decide, and act.",

    // Three Pillars
    "pillars.label": "My work",
    "pillars.ariaLabel": "Work pillars",
    "pillars.scrollDesktop": "Scroll to explore",
    "pillars.scrollMobile": "Swipe to explore",
    "pillars.explore": "Explore",

    // Pillar cards
    "pillar.uxContent.title": "Content\nDesign",
    "pillar.uxContent.description":
      "Content strategy, UX Writing, and messaging systems for large-scale digital products.",
    "pillar.ai.title": "AI\nProjects",
    "pillar.ai.description":
      "Exploring and designing AI-powered experiences for content, automation, and decision-making.",
    "pillar.other.title": "Other\nProjects",
    "pillar.other.description":
      "Other professional experiences working with content and digital formats.",

    // About Teaser
    "about.label": "A bit about me",
    "about.p1":
      "I'm a UX Writer and Content Designer with a background in journalism and strategic communications. Throughout my career, I've designed content for digital products, technology platforms, and user-centered communication strategies.",
    "about.p2":
      "My work focuses on transforming complex systems — metrics, dashboards, and business tools — into clear, useful, and actionable experiences for people.",
    "about.p3":
      "At Mercado Libre, I participated in designing seller-facing products, helping them understand their performance, improve their reputation, and make better decisions within the platform. This involved designing content systems for dashboards, communication plans for product changes, and AI-powered experiences that deliver recommendations to users.",
    "about.p4":
      "In other roles, I developed digital communication strategies, content marketing, and copywriting for fintech companies and agencies. That experience allowed me to understand content from a broader perspective: as a tool to explain, position products, and build trust-based relationships with people.",
    "about.p5":
      "I'm especially interested in working on products where content can reduce complexity, improve understanding, and help people make more informed decisions.",

    // Footer
    "footer.menu": "Menu",
    "footer.contact": "Contact",
    "footer.backToTop": "Back to top",

    // UX Content Design page — UI Labels
    "ux.back": "Home",
    "ux.sectionNav.rol": "Role",
    "ux.sectionNav.objetivo": "Objective",
    "ux.sectionNav.desafio": "Challenge",
    "ux.sectionNav.estrategia": "Strategy",
    "ux.sectionNav.solucion": "Solution",
    "ux.sectionNav.resultados": "Results",
    "ux.sectionNav.enfoque": "Approach",
    "ux.sectionNav.impacto": "Impact",
    "ux.sectionLabel.rol": "Role",
    "ux.sectionLabel.objetivo": "General Objective",
    "ux.sectionLabel.desafio": "Challenge",
    "ux.sectionLabel.estrategia": "Strategy",
    "ux.sectionLabel.solucion": "Solution",
    "ux.sectionLabel.resultados": "Results",
    "ux.sectionLabel.enfoque": "Approach",
    "ux.sectionLabel.impacto": "Impact",
    "ux.challenge": "The challenge",
    "ux.contentDesign": "Content Design",

    // AI page — UI Labels
    "ai.back": "Home",
    "ai.heroLabel": "AI Projects",
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

    // Other Projects page — UI Labels
    "other.back": "Home",
    "other.heroLabel": "Other Projects",
    "other.challenge": "The challenge",
    "other.sectionNav.desafio": "Challenge",
    "other.sectionNav.enfoque": "Approach",
    "other.sectionNav.impacto": "Impact",
    "other.sectionLabel.desafio": "Challenge",
    "other.sectionLabel.enfoque": "Approach",
    "other.sectionLabel.impacto": "Impact",
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
