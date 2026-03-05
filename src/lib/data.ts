import { m } from "framer-motion";

export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  tags: string[];
  description: string;
  longDescription: string;
  /** Texto para la sección "El desafío" en la página del caso */
  challenge?: string;
  /** Texto o bullets para la sección "El enfoque" en la página del caso */
  approach?: string | string[];
  /** Bullets para la sección "El impacto" en la página del caso */
  impact?: string[];
  image: string;
  imageLayout?: "cover" | "float";
  shadowColor?: string;
  year: string;
  results?: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  url: string;
}

export const siteConfig = {
  name: "Daniela Amórtegui",
  initials: "D.A.",
  title: "Content Specialist",
  tagline: "I craft stories that move people.",
  subtitle:
    "Estratega de contenidos con +7 años construyendo narrativas de marca, ecosistemas editoriales y resultados medibles. Combino data, estructura y storytelling para crear contenido que posiciona y convierte.",
  email: "daniela.amortegui@gmail.com",
  linkedin: "https://www.linkedin.com/in/danielaamorteguim/",
  instagram: "https://www.instagram.com/daniamortegui",
  twitter: "https://twitter.com/danielacreates",
};

export const projects: Project[] = [
  {
    id: "mercado-libre",
    title: "Estrategia de contenidos para Mercado Libre",
    client: "MERCADO LIBRE",
    category: "UX Writer y Content Strategist",
    tags: ["Brand Voice", "Editorial Strategy", "Wellness"],
    description:
      "Lideré y estructuré el ecosistema integral de contenidos para flujos clave del producto, alineando storytelling, data y equipos multidisciplinarios para garantizar coherencia de marca, claridad en la experiencia y resultados medibles a gran escala.",
    longDescription:
      "Luma Wellness was stuck in generic health-speak. I led a complete narrative overhaul: new brand voice guidelines, editorial calendar, content pillars, and a storytelling framework that connected their mushroom-based supplements to deeper themes of daily ritual and intentional living.",
    challenge:
      "Los vendedores dentro del ecosistema necesitaban comprender cómo construir una buena reputación y ofrecer experiencias de compra que impactaran directamente su visibilidad, crecimiento y métricas como NPS. El reto era educar, motivar y acompañar a miles de usuarios en procesos complejos, como la sección de Reputación, sin generar fricción ni saturación informativa. Debíamos transformar reglas, métricas y conceptos técnicos en herramientas claras para que los vendedores entendieran cómo “tener una vitrina atractiva” y crecer dentro del marketplace",
    approach:[
        "Lideré la estrategia de contenidos para flujos relacionados con Reputación y programas de crecimiento como el Programa de Despegue, diseñando una narrativa educativa orientada a la acción.",
        "Traduje métricas como NPS y criterios de desempeño en mensajes claros y accionables.",
        "Estructuré contenidos que enseñaban buenas prácticas para mejorar experiencia de compra y posicionamiento.",
        "Diseñé comunicaciones omnicanal (in-app, emails, notificaciones, FAQs y SEO).",
        "Trabajé transversalmente con Producto, Data y equipos comerciales para alinear contenido con objetivos de crecimiento.",
        "Definí y protegí lineamientos de tono y voz para garantizar coherencia con el ecosistema general de Mercado Libre.",
        "Coordiné y alineé entregables desarrollados por agencias externas para asegurar consistencia narrativa en todos los puntos de contacto.",
        "Documenté lineamientos editoriales para garantizar escalabilidad y estandarización.",
      ],
    impact: [
      "Mayor claridad en los criterios de reputación y desempeño para vendedores.",
      "Educación estratégica que impulsó mejores prácticas y fortaleció experiencia de compra.",
      "Alineación entre comunicación, métricas de negocio (NPS) y objetivos de crecimiento.",
      "Consistencia de tono y narrativa en múltiples flujos y colaboraciones externas.",
      "Escalamiento de una narrativa educativa adoptada transversalmente en el producto."
    ],
    image: "/images/project-1.jpg",
    imageLayout: "cover",
    shadowColor: "#FFE600",
    year: "2021-2026",
    results: [
      "340% increase in organic engagement",
      "2.1M earned impressions in Q1",
      "Brand voice adopted across 12 touchpoints",
    ],
  },
  {
    id: "triario",
    title: "Gestión de proyectos de comunicación digital para Triario",
    client: "TRIARIO",
    category: "Project Manager",
    tags: ["Community", "UGC Strategy", "Sports"],
    description:
      "Lideré la ejecución integral de proyectos de contenido y comunicación para múltiples marcas, coordinando equipos multidisciplinarios y gestionando flujos en HubSpot para asegurar cumplimiento, coherencia estratégica y resultados en todo el funnel.",
    longDescription:
      "Stride Athletics had products but no soul. I built a content system that turned their community of 50K runners into co-creators. This included a UGC framework, athlete story templates, a weekly editorial series ('Miles & Mindset'), and performance content tied to real running data.",
    challenge:
      "Las marcas (Bancolombia y Renting) necesitaban ejecutar estrategias digitales integrales en entornos dinámicos, con múltiples equipos, entregables simultáneos y plazos ajustados. El reto era estructurar un sistema operativo claro que integrara estrategia, contenido, diseño y performance, garantizando coherencia narrativa, cumplimiento y calidad en todo el funnel.",
    approach:[
        "Lideré la gestión integral de proyectos digitales para marcas como Bancolombia (Renting Colombia) y Prosalon, estructurando flujos de trabajo en HubSpot para asegurar visibilidad, control y eficiencia.",
        "Organicé y prioricé tareas, cronogramas y asignaciones entre equipos creativos, performance y cliente.",
        "Implementé seguimiento estructurado en HubSpot para gestionar el funnel completo de contenidos.",
        "Supervisé y validé cada pieza antes de producción, asegurando calidad editorial, coherencia de tono y alineación estratégica.",
        "Coordiné la comunicación entre equipos internos y stakeholders externos para mantener claridad y enfoque en objetivos de negocio.",
        "Optimicé procesos para reducir fricciones y mejorar tiempos de entrega.",
    ],
    impact: [
      "Mayor eficiencia y orden en la operación de contenidos digitales.",
      "Consistencia narrativa y control de calidad en cada entrega.",
      "Integración efectiva entre estrategia, ejecución y performance.",
      "Cumplimiento sostenido de cronogramas en entornos de alta exigencia."
    ],
    image: "/images/project-2.jpg",
    imageLayout: "cover",
    year: "2021",
    results: [
      "UGC submissions increased 580%",
      "Newsletter open rate: 48%",
      "Community grew from 50K to 120K in 8 months",
    ],
  },
  {
    id: "mesfix",
    title: "Estrategia Integral de Contenidos y Posicionamiento de Marca",
    client: "MESFIX",
    category: "Communications Specialist",
    tags: ["Launch Strategy", "Editorial", "Lifestyle"],
    description:
      "Diseñé y ejecuté la estrategia 360 de contenidos digitales (redes, blog, SEO, PR e influenciadores), liderando la narrativa de marca en momentos clave de crecimiento y optimizando el desempeño con base en métricas y resultados.",
    longDescription:
      "Terra Studio was a new concept: part yoga studio, part creative workspace, part café. I developed their editorial identity from scratch — name architecture, tone of voice, launch campaign copy, social content strategy, and an experiential content series called 'Grounded Sessions' that became their signature.",
    challenge:
      "Como startup fintech en crecimiento, Mesfix necesitaba construir posicionamiento, confianza y claridad en un mercado altamente competitivo y regulado. El reto era desarrollar una narrativa sólida que explicara un producto financiero complejo, generara credibilidad y acompañara momentos clave de crecimiento y comunicación sensible.",
    approach:[
      "Diseñé y ejecuté la estrategia integral de contenidos digitales, integrando narrativa de marca, educación financiera y posicionamiento estratégico.",
      "Definí la voz y los pilares editoriales para redes sociales, blog, SEO y PR.",
      "Traducí conceptos financieros y técnicos en mensajes claros, educativos y accionables.",
      "Lideré campañas con influenciadores y medios para fortalecer visibilidad y credibilidad.",
      "Analicé métricas de desempeño y ajusté la estrategia con base en resultados.",
      "Aporté desde comunicación y experiencia de usuario en el desarrollo y lanzamiento de nuevos productos.",
      "Gestioné eventos estratégicos para posicionar la marca en el ecosistema fintech.",
    ],
    impact: [
      "Consolidación de una narrativa clara y coherente en todos los canales digitales.",
      "Mayor posicionamiento y visibilidad en el sector fintech.",
      "Optimización continua de la estrategia basada en métricas de rendimiento.",
      "Integración efectiva entre comunicación, producto y crecimiento."
    ],
    image: "/images/project-3.jpg",
    imageLayout: "cover",
    year: "2018-2021",
    results: [
      "Sold out launch event (300 spots)",
      "12K followers in first 6 weeks",
      "Featured in 3 national wellness publications",
    ],
  },
  {
    id: "dattis",
    title: "Gestión y Análisis de Contenidos Digitales",
    client: "DATTIS",
    category: "Analista de comunicación digital",
    tags: ["Campaign", "Video Content", "Sports"],
    description:
      "Construí parrillas editoriales y realicé seguimiento de métricas para distintas marcas, optimizando contenido y campañas digitales a partir de resultados y comportamiento de audiencia.",
    longDescription:
      "Forma Running needed more than ads — they needed a narrative engine. I architected a 360° campaign built around the concept 'Every Stride Tells a Story,' producing a hero mini-documentary, athlete interview series, data-driven training content, and a content hub that unified blog, video, and community contributions into a single storytelling platform.",
    challenge:
      "Gestionar múltiples marcas (BBC, EY, Iqos, Águila, Colsanitas y Yamaha) con necesidades y audiencias distintas, asegurando coherencia en comunicación digital y cumplimiento de objetivos de alcance y engagement. El reto era estructurar parrillas de contenido estratégicas y optimizar desempeño en un entorno multitarea y de alta exigencia.",
    approach:[
      "Construí y ejecuté parrillas editoriales para diversas marcas, alineando tono, objetivos y formatos a cada audiencia.",
      "Monitoreé métricas clave como alcance, engagement y cumplimiento de metas digitales.",
      "Analicé resultados y ajusté estrategias con base en data.",
      "Elaboré reportes de desempeño para clientes y equipos internos.",
      "Apoyé campañas digitales y acciones de PR en medios digitales.",
      "Gestioné múltiples cuentas en simultáneo, organizando prioridades y entregables con enfoque estratégico.",
    ],
    impact: [
        "Optimización continua del contenido a partir de métricas reales de desempeño.",
        "Mejora en coherencia editorial entre marcas y campañas.",
        "Cumplimiento consistente de objetivos digitales en entornos multitarea.",
        "Desarrollo de una base sólida en análisis, estrategia y ejecución digital.",
    ],
    image: "/images/project-4.jpg",
    imageLayout: "cover",
    year: "2018",
    results: [
      "4.8M campaign impressions",
      "Content hub became #1 organic acquisition channel",
      "62% increase in brand search volume",
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "LUMA WELLNESS",
    role: "Lead Content Strategist",
    period: "03/25 — Current",
    location: "Los Angeles",
    url: "#",
  },
  {
    company: "STRIDE ATHLETICS",
    role: "Content Director",
    period: "06/24 — 02/25",
    location: "New York",
    url: "#",
  },
  {
    company: "TERRA STUDIO",
    role: "Brand & Content Lead",
    period: "01/24 — 05/24",
    location: "Austin",
    url: "#",
  },
  {
    company: "NOURISH COLLECTIVE",
    role: "Senior Content Specialist",
    period: "08/22 — 12/23",
    location: "San Francisco",
    url: "#",
  },
  {
    company: "KINETIC MEDIA",
    role: "Content Strategist",
    period: "03/21 — 07/22",
    location: "Remote",
    url: "#",
  },
];

export const services = [
  {
    number: "01",
    title: "Diseño de ecosistemas de contenido",
    description:
      "Construyo estrategias integrales de contenido: pilares editoriales, calendarios, frameworks de distribución y flujos operativos escalables.",
  },
  {
    number: "02",
    title: "Arquitectura de marca y voz",
    description:
      "Defino y estructuro la identidad narrativa de las marcas: tono, principios editoriales y lineamientos de comunicación que aseguran coherencia en todos los puntos de contacto.",
  },
  {
    number: "03",
    title: "Performance y optimización editorial",
    description:
      "Analizo métricas de comportamiento y negocio para optimizar narrativa, formatos y distribución.",
  },
  {
    number: "04",
    title: "Construcción de comunidad y cultura",
    description:
      "Desarrollo contenidos que trascienden la pieza individual y fortalecen pertenencia.",
  },
];

export interface PersonalProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  gradient: string;
  image?: string;
  url?: string;
}

export const personalProjects: PersonalProject[] = [
  {
    id: "dani-cruza-metas",
    title: "Substack Blog: DaniCruzaMetas",
    tagline: "DaniCruzaMetas | Narrativa Larga y Storytelling Deportivo",
    description:
      "Espacio editorial donde transformo mi experiencia como maratonista amateur en reflexiones sobre disciplina, identidad y bienestar, aplicando estructura narrativa y coherencia de marca en formato long-form.",
    tags: ["Newsletter", "Editorial", "Culture"],
    gradient: "linear-gradient(135deg, #1A2E1A 0%, #8B9D77 50%, #A8B89A 100%)",
    image: "/images/personal-project-1.jpg",
    url: "https://dani-cruza-metas.substack.com",
  },
  {
    id: "instagram-crecimiento",
    title: "Instagram en Crecimiento",
    tagline: "Estrategia de Contenido y Crecimiento Orgánico en Running",
    description:
      "Desarrollo contenido en formatos cortos (reels, carruseles y guiones narrativos) optimizando storytelling, consistencia y análisis de engagement para construir comunidad en el ecosistema de deporte y bienestar.",
    tags: ["Podcast", "Interviews", "Founders"],
    gradient: "linear-gradient(135deg, #C4704A 0%, #D4896A 50%, #FAF7F2 100%)",
    image: "/images/personal-project-2.jpg",
    url: "https://www.instagram.com/daniamortegui",
  },
  {
    id: "fut-fem-colombia",
    title: "FutFem Colombia",
    tagline: "Estrategia y Creación de Contenido para Instagram Deportivo",
    description:
      "Desarrollo contenido sobre fútbol femenino para las redes sociales de FutFemColombia, aplicando estructura editorial, claridad informativa y enfoque en engagement para fortalecer comunidad y visibilidad del deporte.",
    tags: ["Zine", "Photography", "Movement"],
    gradient: "linear-gradient(135deg, #D4C5B0 0%, #8B9D77 50%, #1A2E1A 100%)",
    image: "/images/personal-project-3.jpg",
    url: "https://instagram.com/futfemcolombia",
  },
];

export interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  gradient: string;
  accentColor: string;
  pattern: "circles" | "grid" | "waves";
}

export const pillars: Pillar[] = [
  {
    id: "ux-content-design",
    title: "Content\nDesign",
    subtitle: "Proyectos",
    description:
      "Estrategia de contenidos, UX Writing y narrativa de marca para productos digitales a gran escala.",
    href: "/work/ux-content",
    gradient: "linear-gradient(160deg, #1A2E1A 0%, #2D4A2D 30%, #8B9D77 70%, #A8B89A 100%)",
    accentColor: "#A8B89A",
    pattern: "circles",
  },
  {
    id: "ai-projects",
    title: "Proyectos con IA",
    subtitle: "Proyectos",
    description:
      "Exploración y aplicación de inteligencia artificial en contenido, automatización y nuevas narrativas.",
    href: "/work/ai",
    gradient: "linear-gradient(160deg, #3A1A1A 0%, #8B4A2A 30%, #C4704A 70%, #D4896A 100%)",
    accentColor: "#D4896A",
    pattern: "grid",
  },
  {
    id: "other-projects",
    title: "Otros Proyectos",
    subtitle: "Proyectos",
    description:
      "Proyectos personales, experimentación editorial y contenido en formatos diversos.",
    href: "/work/other",
    gradient: "linear-gradient(160deg, #2A2520 0%, #4A4538 30%, #D4C5B0 70%, #E8DFD2 100%)",
    accentColor: "#D4C5B0",
    pattern: "waves",
  },
];

export const philosophyPoints = [
  {
    title: "Words are movement",
    body: "The right story doesn't just inform — it changes behavior. I write content that moves people from awareness to action, from consumer to advocate.",
  },
  {
    title: "Data shapes intuition",
    body: "I don't guess. Every narrative decision is grounded in audience data, performance insights, and cultural research. Strategy is where creativity meets evidence.",
  },
  {
    title: "Brands are living systems",
    body: "A brand isn't a logo file — it's an evolving conversation. I build content systems that grow, adapt, and stay authentic as the brand scales.",
  },
];

/* ──────────────────────────────────────────────
   UX CONTENT DESIGN — Pillar detail projects
   ────────────────────────────────────────────── */

export interface UXContentProject {
  id: string;
  title: string;
  client: string;
  year: string;
  coverImage: string;
  gradient: string;
  rol: {
    text: string;
    image?: string;
  };
  objetivoGeneral: {
    text: string;
    image?: string;
  };
  desafio: {
    text: string;
    image?: string;
  };
  estrategia: {
    bullets: string[];
    image?: string;
  };
  solucion: {
    text: string;
    bullets?: string[];
    image?: string;
  };
  resultados: {
    bullets: string[];
    image?: string;
  };
}

export const uxContentProjects: UXContentProject[] = [
  {
    id: "mercado-libre",
    title: "Estrategia de contenidos para Mercado Libre",
    client: "MERCADO LIBRE",
    year: "2021–2026",
    coverImage: "/images/content-design-projecto-1-imagen-1.jpg",
    gradient: "linear-gradient(160deg, #1A2E1A 0%, #2D4A2D 30%, #8B9D77 70%, #A8B89A 100%)",
    rol: {
      text: "UX Writer y Content Strategist dentro del equipo de producto, responsable de la narrativa y estructura de contenidos para flujos clave de la experiencia de vendedores en el marketplace.",
    },
    objetivoGeneral: {
      text: "Diseñar y estructurar un ecosistema integral de contenidos que educara, motivara y acompañara a vendedores en su crecimiento dentro de Mercado Libre, alineando storytelling, data y equipos multidisciplinarios para garantizar coherencia de marca, claridad en la experiencia y resultados medibles a gran escala.",
    },
    desafio: {
      text: "Los vendedores dentro del ecosistema necesitaban comprender cómo construir una buena reputación y ofrecer experiencias de compra que impactaran directamente su visibilidad, crecimiento y métricas como NPS. El reto era educar, motivar y acompañar a miles de usuarios en procesos complejos, como la sección de Reputación, sin generar fricción ni saturación informativa. Debíamos transformar reglas, métricas y conceptos técnicos en herramientas claras para que los vendedores entendieran cómo 'tener una vitrina atractiva' y crecer dentro del marketplace.",
    },
    estrategia: {
      image: "/images/content-design-projecto-1-imagen-3.jpg",
      bullets: [
        "Lideré la estrategia de contenidos para flujos relacionados con Reputación y programas de crecimiento como el Programa de Despegue, diseñando una narrativa educativa orientada a la acción.",
        "Traduje métricas como NPS y criterios de desempeño en mensajes claros y accionables.",
        "Estructuré contenidos que enseñaban buenas prácticas para mejorar experiencia de compra y posicionamiento.",
        "Diseñé comunicaciones omnicanal (in-app, emails, notificaciones, FAQs y SEO).",
        "Trabajé transversalmente con Producto, Data y equipos comerciales para alinear contenido con objetivos de crecimiento.",
      ],
    },
    solucion: {
      text: "Construí un sistema narrativo escalable que transformó conceptos técnicos en contenidos educativos claros, integrando múltiples canales y equipos bajo una misma voz.",
      image: "/images/content-design-projecto-1-imagen-2.jpg",
      bullets: [
        "Definí y protegí lineamientos de tono y voz para garantizar coherencia con el ecosistema general de Mercado Libre.",
        "Coordiné y alineé entregables desarrollados por agencias externas para asegurar consistencia narrativa en todos los puntos de contacto.",
        "Documenté lineamientos editoriales para garantizar escalabilidad y estandarización.",
      ],
    },
    resultados: {
      bullets: [
        "Mayor claridad en los criterios de reputación y desempeño para vendedores.",
        "Educación estratégica que impulsó mejores prácticas y fortaleció experiencia de compra.",
        "Alineación entre comunicación, métricas de negocio (NPS) y objetivos de crecimiento.",
        "Consistencia de tono y narrativa en múltiples flujos y colaboraciones externas.",
        "Escalamiento de una narrativa educativa adoptada transversalmente en el producto.",
      ],
    },
  },
  {
    id: "triario",
    title: "Gestión de proyectos de comunicación digital",
    client: "TRIARIO",
    year: "2021",
    coverImage: "/images/project-2.jpg",
    gradient: "linear-gradient(160deg, #3A1A1A 0%, #8B4A2A 30%, #C4704A 70%, #D4896A 100%)",
    rol: {
      text: "Project Manager de comunicación digital, liderando la ejecución integral de proyectos de contenido para múltiples marcas, coordinando equipos multidisciplinarios y gestionando flujos en HubSpot.",
    },
    objetivoGeneral: {
      text: "Asegurar la ejecución eficiente de proyectos de comunicación digital para marcas como Bancolombia (Renting Colombia) y Prosalon, integrando estrategia, contenido, diseño y performance con coherencia narrativa y cumplimiento en todo el funnel.",
    },
    desafio: {
      text: "Las marcas necesitaban ejecutar estrategias digitales integrales en entornos dinámicos, con múltiples equipos, entregables simultáneos y plazos ajustados. El reto era estructurar un sistema operativo claro que integrara estrategia, contenido, diseño y performance, garantizando coherencia narrativa, cumplimiento y calidad en todo el funnel.",
    },
    estrategia: {
      bullets: [
        "Estructuré flujos de trabajo en HubSpot para asegurar visibilidad, control y eficiencia.",
        "Organicé y prioricé tareas, cronogramas y asignaciones entre equipos creativos, performance y cliente.",
        "Implementé seguimiento estructurado para gestionar el funnel completo de contenidos.",
        "Supervisé y validé cada pieza antes de producción, asegurando calidad editorial y coherencia de tono.",
      ],
    },
    solucion: {
      text: "Implementé un sistema de gestión que conectó equipos, procesos y entregables bajo una operación ordenada y eficiente.",
      bullets: [
        "Coordiné la comunicación entre equipos internos y stakeholders externos para mantener claridad y enfoque en objetivos de negocio.",
        "Optimicé procesos para reducir fricciones y mejorar tiempos de entrega.",
      ],
    },
    resultados: {
      bullets: [
        "Mayor eficiencia y orden en la operación de contenidos digitales.",
        "Consistencia narrativa y control de calidad en cada entrega.",
        "Integración efectiva entre estrategia, ejecución y performance.",
        "Cumplimiento sostenido de cronogramas en entornos de alta exigencia.",
      ],
    },
  },
  {
    id: "mesfix",
    title: "Estrategia integral de contenidos y posicionamiento de marca",
    client: "MESFIX",
    year: "2018–2021",
    coverImage: "/images/project-3.jpg",
    gradient: "linear-gradient(160deg, #2A2520 0%, #4A4538 30%, #D4C5B0 70%, #E8DFD2 100%)",
    rol: {
      text: "Communications Specialist, responsable de diseñar y ejecutar la estrategia 360 de contenidos digitales incluyendo redes, blog, SEO, PR e influenciadores.",
    },
    objetivoGeneral: {
      text: "Construir posicionamiento, confianza y claridad para una fintech en crecimiento, desarrollando una narrativa sólida que explicara un producto financiero complejo y acompañara momentos clave de crecimiento y comunicación sensible.",
    },
    desafio: {
      text: "Como startup fintech en crecimiento, Mesfix necesitaba construir posicionamiento, confianza y claridad en un mercado altamente competitivo y regulado. El reto era desarrollar una narrativa sólida que explicara un producto financiero complejo, generara credibilidad y acompañara momentos clave de crecimiento y comunicación sensible.",
    },
    estrategia: {
      bullets: [
        "Diseñé y ejecuté la estrategia integral de contenidos digitales, integrando narrativa de marca, educación financiera y posicionamiento estratégico.",
        "Definí la voz y los pilares editoriales para redes sociales, blog, SEO y PR.",
        "Traduje conceptos financieros y técnicos en mensajes claros, educativos y accionables.",
        "Lideré campañas con influenciadores y medios para fortalecer visibilidad y credibilidad.",
      ],
    },
    solucion: {
      text: "Creé un ecosistema de contenidos coherente que posicionó a Mesfix como referente confiable en su sector.",
      bullets: [
        "Analicé métricas de desempeño y ajusté la estrategia con base en resultados.",
        "Aporté desde comunicación y experiencia de usuario en el desarrollo y lanzamiento de nuevos productos.",
        "Gestioné eventos estratégicos para posicionar la marca en el ecosistema fintech.",
      ],
    },
    resultados: {
      bullets: [
        "Consolidación de una narrativa clara y coherente en todos los canales digitales.",
        "Mayor posicionamiento y visibilidad en el sector fintech.",
        "Optimización continua de la estrategia basada en métricas de rendimiento.",
        "Integración efectiva entre comunicación, producto y crecimiento.",
      ],
    },
  },
];
