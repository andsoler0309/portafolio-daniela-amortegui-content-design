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

export interface ContentBlock {
  title?: string;
  text?: string;
  bullets?: string[];
}

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
    bullets?: string[];
    blocks?: ContentBlock[];
  };
  objetivoGeneral: {
    text: string;
    image?: string;
    blocks?: ContentBlock[];
  };
  desafio: {
    text: string;
    bullets?: string[];
    blocks?: ContentBlock[];
    image?: string;
  };
  estrategia: {
    intro?: string;
    blocks?: ContentBlock[];
    bullets?: string[];
    image?: string;     // single phone mockup in side column
    imageSide?: boolean; // when true renders image as plain ImageSlot in side column instead of phone mockup
    images?: string[];  // multiple images shown as grid below content
  };
  solucion: {
    intro?: string;
    text?: string;
    blocks?: ContentBlock[];
    bullets?: string[];
    image?: string;
    imageSide?: boolean; // when true renders image in a side column instead of below
    images?: string[];  // multiple images shown as grid below content
  };
  resultados: {
    bullets?: string[];
    blocks?: ContentBlock[];
    image?: string;
  };
}

export const uxContentProjects: UXContentProject[] = [
  {
    id: "Proyecto-1",
    title: "Rediseño del dashboard de reputación",
    client: "Proyecto 1",
    year: "2021–2026",
    coverImage: "/images/content-design-projecto-1-imagen-1.jpg",
    gradient: "linear-gradient(160deg, #1A2E1A 0%, #2D4A2D 30%, #8B9D77 70%, #A8B89A 100%)",
    rol: {
      text: "Trabajé en el rediseño del dashboard de Reputación para vendedores en Mercado Libre. Mi rol consistió en diseñar la estrategia de contenido del producto para ayudar a los vendedores a comprender cómo se medía su desempeño dentro de la plataforma.\n\nEntre mis responsabilidades principales estuvieron:",
      bullets: [
        "Diseñar y escribir los contenidos del nuevo dashboard de reputación.",
        "Cocrear la arquitectura de información del dashboard junto al equipo de producto y diseño.",
        "Diseñar matrices de contenido para cada caso de uso y estado de reputación.",
        "Definir la estrategia de comunicación de las nuevas funcionalidades.",
        "Actualizar FAQs y documentación de ayuda.",
        "Crear contenidos educativos para el blog orientados a explicar las métricas de reputación."
      ],
    },
    objetivoGeneral: {
      text: "Ayudar a los vendedores a entender sus métricas de desempeño, identificar rápidamente sus principales áreas de mejora y tomar acciones concretas para mejorar su reputación dentro de la plataforma.",
    },
    desafio: {
      text: "Antes del rediseño, muchos vendedores no entendían cómo se calculaba su reputación ni qué acciones debían tomar para mejorarla.\n\nAlgunos de los principales problemas eran:",
      bullets: [
        "Las métricas y porcentajes no eran intuitivos ni fáciles de interpretar.",
        "Los vendedores no sabían cuál era su principal problema dentro de su desempeño.",
        "No estaba claro qué impacto tenía cada variable en su reputación.",
        "Las comunicaciones eran fragmentadas y poco accionables.",
        "El reto era transformar un sistema complejo de métricas en una experiencia clara, educativa y orientada a la acción."
      ]
    },
    estrategia: {
      image: "/images/content-design-projecto-1-imagen-3.jpg",
      intro: "Para abordar este desafío diseñé una estrategia de contenido centrada en claridad, jerarquía y acción.\n\nLa estrategia se basó en tres principios:",
      blocks: [
        {
          title: "1. Traducir métricas complejas en información comprensible",
          text: "Trabajé en simplificar el lenguaje y explicar las métricas en términos que fueran fáciles de entender para vendedores con distintos niveles de experiencia digital.",
        },
        {
          title: "2. Priorizar lo importante",
          text: "Diseñamos el dashboard para que los vendedores pudieran identificar rápidamente:",
          bullets: [
            "Su estado actual de reputación.",
            "Qué métricas estaban afectando su desempeño.",
            "Qué acciones debían tomar para mejorar.",
          ],
        },
        {
          title: "3. Convertir la información en recomendaciones accionables",
          text: "En lugar de solo mostrar métricas, cada estado del sistema incluía explicaciones claras y sugerencias concretas para mejorar.\n\nPara lograrlo desarrollé:",
          bullets: [
            "Matrices de contenido por caso de uso.",
            "Mensajes adaptados según el estado de cada métrica.",
            "Contenidos educativos complementarios fuera del producto.",
          ],
        },
      ],
    },
    solucion: {
      intro: "El resultado fue un nuevo dashboard de reputación, más claro y orientado a la acción.\n\nLa solución incluyó:",
      image: "/images/content-design-projecto-1-imagen-2.jpg",
      blocks: [
        {
          bullets: [
            "Una estructura de información reorganizada, que permitía entender rápidamente el estado de la reputación.",
            "Contenidos que explicaban cómo se calculaba cada métrica.",
            "Mensajes contextualizados según el estado del vendedor.",
            "Indicadores visuales claros (como estados en verde, amarillo o rojo) acompañados de explicaciones en lenguaje simple.",
            "Recomendaciones específicas para mejorar el desempeño en cada métrica.",
            "Recursos educativos complementarios como FAQs actualizadas y artículos en el blog.",
          ],
        },
        {
          text: "El contenido del dashboard se diseñó como una guía continua para mejorar el desempeño dentro de la plataforma.\n\nPosteriormente al rediseño, el sistema de reputación cambió los umbrales con los que se evaluaba a los vendedores. Este cambio implicaba que muchos sellers podían perder su reputación verde o su nivel de líder, lo que hacía especialmente importante comunicar el cambio de forma clara y reducir fricciones.\n\nPara esto diseñé un plan completo de comunicaciones orientado a explicar por qué se producían estos cambios y qué acciones debían tomar los vendedores para mejorar su desempeño.\n\nEl plan incluía:",
          bullets: [
            "Comunicaciones segmentadas según cada caso de uso y el impacto que el cambio tendría en cada vendedor.",
            "Recordatorios periódicos cada 15 días para acompañar el proceso de transición.",
            "Mensajes explicativos enfocados en ayudar a los sellers a entender por qué su reputación cambiaba y cómo podían mejorarla.",
          ],
        },
        {
          text: "Además, participé en el diseño de un simulador de reputación que permitía a los vendedores visualizar cómo quedaría su reputación con los nuevos umbrales. Este simulador incluía mensajes específicos según cada caso de uso para ayudar a interpretar los resultados y entender qué acciones debían priorizar.",
        },
      ],
    },
    resultados: {
      bullets: [
        "Mejorar el entendimiento de las métricas de reputación por parte de los vendedores.",
        "Facilitar la identificación de problemas en su desempeño.",
        "Promover comportamientos que mejoraran la calidad del servicio dentro de la plataforma.",
        "El dashboard pasó de ser una herramienta informativa a convertirse en una herramienta de gestión para los vendedores.",
      ],
    },
  },
  {
    id: "Proyecto-2",
    title: "Diseño del producto Experiencia de compra",
    client: "Proyecto 2",
    year: "2021–2026",
    coverImage: "/images/content-design-projecto-2-imagen-1.png",
    gradient: "linear-gradient(160deg, #1A2A2E 0%, #2D4A4A 30%, #5B8B8B 70%, #7AABAB 100%)",
    rol: {
      text: "Participé en el diseño del producto Experiencia de compra, una herramienta creada para ayudar a los vendedores a identificar y mejorar los problemas que afectan la experiencia de los compradores en sus publicaciones.\n\nTrabajé en dos fases del producto: su creación desde cero y su posterior rediseño.",
      blocks: [
        {
          title: "En la fase de creación",
          bullets: [
            "Creé el nombre del producto: \"Experiencia de compra\".",
            "Participé en la definición de la estructura del dashboard.",
            "Realicé benchmark de productos similares en otras plataformas.",
            "Diseñé los casos de uso y los mensajes en todos los puntos del journey.",
            "Definí la estrategia de comunicación para el lanzamiento.",
            "Unifiqué contenidos y flujos con otros productos del ecosistema de vendedores.",
          ],
        },
        {
          title: "En el rediseño",
          bullets: [
            "Realicé research para identificar los principales dolores de los vendedores.",
            "Participé en la redefinición de la estructura del dashboard.",
            "Trabajé en la lógica del producto y sus casos de uso.",
            "Diseñé la estrategia de contenido para todo el journey.",
            "Escribí y optimicé el prompt para un agente de IA que ofrecía recomendaciones para mejorar la experiencia de compra.",
            "Iteré el prompt en múltiples ciclos de pruebas para mejorar la calidad de las respuestas.",
          ],
        },
      ],
    },
    objetivoGeneral: {
      text: "Ayudar a los vendedores a identificar los principales problemas en sus publicaciones y entender cómo estos impactan la experiencia de compra de los usuarios.\n\nEl producto buscaba complementar el sistema de reputación, permitiendo entender qué aspectos específicos de sus publicaciones estaban generando fricción en la experiencia del comprador.",
    },
    desafio: {
      text: "Uno de los principales desafíos era diferenciar este producto de Reputación.\n\nMientras que la reputación evaluaba el desempeño del vendedor en general, la experiencia de compra analizaba la calidad de cada publicación individual.\n\nEsto generaba varios retos:",
      bullets: [
        "Los vendedores debían entender que cada publicación tenía su propia experiencia de compra.",
        "La suma de estas experiencias impactaba posteriormente la reputación del vendedor.",
        "Era necesario ayudarles a identificar rápidamente cuál era su principal problema entre múltiples variables.",
        "Además, debíamos evitar generar confusión entre ambos productos, manteniendo una narrativa clara entre ellos.",
      ],
    },
    estrategia: {
      intro: "La estrategia de contenido se centró en tres pilares:",
      blocks: [
        {
          title: "1. Diagnóstico claro del problema",
          text: "Diseñamos el producto para que el vendedor pudiera identificar cuál era el principal problema en sus publicaciones.",
        },
        {
          title: "2. Priorizar acciones",
          text: "El contenido ayudaba a entender qué problema resolver primero para mejorar su desempeño.",
        },
        {
          title: "3. Ofrecer soluciones concretas",
          text: "A través de mensajes contextuales y del agente de IA, los vendedores recibían recomendaciones claras para mejorar sus publicaciones.\n\nEl agente de IA fue diseñado como un asistente que interpretaba los problemas detectados y sugería acciones específicas.",
        },
      ],
      images: [
        "/images/content-design-projecto-2-imagen-2.png",
        "/images/content-design-projecto-2-imagen-4.png",
      ],
    },
    solucion: {
      intro: "El producto final fue un dashboard que permitía a los vendedores:",
      image: "/images/content-design-projecto-2-imagen-3.png",
      imageSide: true,
      blocks: [
        {
          bullets: [
            "Entender el estado de la experiencia de compra de cada publicación.",
            "Identificar qué métricas estaban afectando la experiencia del comprador.",
            "Recibir recomendaciones para mejorar sus publicaciones.",
          ],
        },
        {
          text: "Entre los principales componentes de la solución estuvieron:",
          bullets: [
            "Mensajes contextualizados según el estado de cada publicación.",
            "Recomendaciones accionables para mejorar la experiencia de compra.",
            "Integración con otros productos del ecosistema de vendedores.",
            "Un agente de IA diseñado con prompts iterados y optimizados, capaz de ofrecer sugerencias personalizadas.",
          ],
        },
      ],
    },
    resultados: {
      bullets: [
        "Mejorar la comprensión de los vendedores sobre los factores que afectan la experiencia de compra.",
        "Ayudarles a identificar problemas específicos en sus publicaciones.",
        "Ofrecer recomendaciones claras para mejorar su desempeño.",
        "Esto convirtió al producto en una herramienta que no solo mostraba métricas, sino que guiaba a los vendedores hacia acciones concretas de mejora.",
      ],
    },
  },
  {
    id: "Proyecto-3",
    title: "Diseño del Programa de Despegue",
    client: "Proyecto 3",
    year: "2021–2026",
    coverImage: "/images/content-design-projecto-3-imagen-1.png",
    gradient: "linear-gradient(160deg, #2E1A0E 0%, #6B3A1A 30%, #C47A3A 70%, #E8A96A 100%)",
    rol: {
      text: "Participé en el diseño del Programa de Despegue, una iniciativa creada para ayudar a nuevos vendedores a impulsar sus primeras ventas dentro de Mercado Libre.\n\nTrabajé en el producto de principio a fin, desde la conceptualización hasta la implementación del contenido en todos los puntos del journey.",
      blocks: [
        {
          title: "Entre mis responsabilidades principales estuvieron:",
          bullets: [
            "Crear el nombre del programa: \"Programa de Despegue\".",
            "Diseñar la estrategia de contenido para todo el journey del vendedor.",
            "Diseñar y escribir los mensajes de invitación al programa en distintos canales: mensajes dentro del dashboard del vendedor, banners, push notifications, WhatsApp y email.",
            "Diseñar y escribir el contenido de la landing page del programa.",
            "Crear FAQs y contenido educativo para el blog.",
            "Diseñar los mensajes dentro del dashboard del programa, adaptados a distintos estados del usuario.",
            "Crear mensajes para momentos clave: cuando el vendedor estaba en riesgo de perder el beneficio, cuando se mantenía estable y cuando lograba completarlo exitosamente.",
            "Realizar research para evaluar el entendimiento del producto.",
            "Iterar el contenido en múltiples ciclos de mejora.",
          ],
        },
        {
          text: "Este fue uno de los productos en los que más iteraciones de contenido realicé durante mi tiempo en Mercado Libre.",
        },
      ],
    },
    objetivoGeneral: {
      text: "Activar a nuevos vendedores dentro de la plataforma y ayudarles a generar sus primeras ventas, reduciendo la barrera inicial que existe al empezar a vender en un marketplace.",
      blocks: [
        {
          title: "El programa buscaba:",
          bullets: [
            "Mejorar la visibilidad de nuevos vendedores.",
            "Aumentar su confianza frente a los compradores.",
            "Acelerar el proceso de activación y generación de ventas.",
          ],
        },
      ],
    },
    desafio: {
      text: "Los nuevos vendedores enfrentan un problema común en marketplaces: no tienen historial ni reputación visible, lo que reduce la confianza de los compradores.\n\nEsto genera un círculo difícil de romper:",
      bullets: [
        "Sin reputación → menos confianza.",
        "Menos confianza → menos ventas.",
        "Menos ventas → más difícil construir reputación.",
      ],
      image: "/images/content-design-projecto-3-imagen-2.png",
      blocks: [
        {
          title: "Además, el programa tenía una lógica compleja de beneficios y condiciones, lo que hacía necesario explicar claramente:",
          bullets: [
            "Cómo funcionaba el programa.",
            "Qué beneficios ofrecía.",
            "Qué debía hacer el vendedor para mantenerlos.",
            "Qué pasaba si no cumplía las condiciones.",
          ],
        },
        {
          text: "El desafío era diseñar una experiencia que fuera fácil de entender, motivadora y transparente.",
        },
      ],
    },
    estrategia: {
      intro: "La estrategia de contenido se centró en tres principios:",
      blocks: [
        {
          title: "1. Explicar claramente el valor del programa",
          text: "Diseñé mensajes que explicaban rápidamente por qué el programa podía ayudar a impulsar las primeras ventas del vendedor.",
        },
        {
          title: "2. Acompañar al vendedor durante todo el proceso",
          text: "El contenido no se limitaba a la invitación inicial. Diseñamos un sistema de mensajes que acompañaba al vendedor durante los 180 días de duración del programa.",
        },
        {
          title: "3. Mostrar progreso y motivación",
          text: "El dashboard del programa permitía a los vendedores ver diariamente su progreso, reforzando la sensación de avance y claridad sobre lo que debían lograr.",
        },
        {
          title: "Estrategia diferenciada por versión",
          text: "También diseñé una estrategia diferenciada para la versión paga del programa y la versión gratuita, utilizada en mercados donde no era posible cobrar por el beneficio. Cada versión tenía mensajes adaptados a su lógica de beneficios.",
        },
      ],
      image: "/images/content-design-projecto-3-imagen-3.png",
      imageSide: true,
    },
    solucion: {
      intro: "El resultado fue una experiencia completa que incluía:",
      images: [
        "/images/content-design-projecto-3-imagen-4.png",
        "/images/content-design-projecto-3-imagen-5.png",
        "/images/content-design-projecto-3-imagen-6.png",
      ],
      blocks: [
        {
          title: "1. Un sistema de invitación multicanal",
          bullets: [
            "Banners en el dashboard.",
            "Mensajes in-product.",
            "Push notifications.",
            "WhatsApp.",
            "Email.",
          ],
        },
        {
          title: "2. Una landing page explicativa",
          bullets: [
            "Beneficios del programa.",
            "Condiciones.",
            "Funcionamiento.",
            "Preguntas frecuentes.",
          ],
        },
        {
          title: "3. Un dashboard del programa",
          text: "Que permitía al vendedor ver el progreso de su participación, entender su estado actual y saber qué debía hacer para mantener los beneficios.\n\nLos mensajes dentro del dashboard se adaptaban según el estado del vendedor:",
          bullets: [
            "Riesgo de perder el programa.",
            "Estado estable.",
            "Finalización exitosa.",
          ],
        },
      ],
    },
    resultados: {
      bullets: [
        "Acelerar la activación de nuevos vendedores, ayudándolos a construir reputación y generar sus primeras ventas.",
        "Mejorar el entendimiento del programa entre los participantes.",
        "Acompañar al vendedor durante todo su proceso dentro del programa.",
        "Reducir la fricción en un producto con una lógica compleja de beneficios y condiciones.",
      ],
    },
  },
  {
    id: "Proyecto-4",
    title: "Relanzamiento de Automatización de precios",
    client: "Proyecto 4",
    year: "2021–2026",
    coverImage: "",
    gradient: "linear-gradient(160deg, #1A1A2E 0%, #2D2D4A 30%, #5B5B8B 70%, #8B8BAB 100%)",
    rol: {
      text: "Participé en el relanzamiento de Automatización de precios, una herramienta para vendedores de Mercado Libre que ajusta automáticamente los precios de sus publicaciones según el mercado y la competencia.\n\nLa herramienta utilizaba un sistema automatizado que permitía al vendedor definir un precio mínimo y máximo, mientras el sistema optimizaba el precio dentro de ese rango para mejorar la competitividad de la publicación.\n\nMi trabajo consistió en rediseñar la comunicación del producto a través de una campaña de email, con el objetivo de aumentar el entendimiento de la herramienta y motivar su uso.",
      bullets: [
        "Rediseñar la comunicación del producto para explicar mejor su valor.",
        "Escribir el contenido completo del email de relanzamiento.",
        "Simplificar la explicación de cómo funciona la herramienta.",
        "Destacar los beneficios clave para incentivar la adopción.",
        "Diseñar una narrativa clara que llevara al usuario desde el problema hasta la acción.",
      ],
    },
    objetivoGeneral: {
      text: "Incrementar el uso de la herramienta Automatización de precios entre los vendedores, mejorando la claridad de la propuesta de valor y reduciendo la fricción para probarla.",
    },
    desafio: {
      text: "Aunque la herramienta ya existía, su adopción era baja porque muchos vendedores no entendían claramente cómo funcionaba o qué beneficios les ofrecía.",
      bullets: [
        "La funcionalidad era percibida como compleja o poco transparente.",
        "Muchos vendedores temían perder control sobre sus precios.",
        "El valor de la herramienta no estaba comunicado de forma clara.",
        "La comunicación previa no explicaba de forma sencilla cómo empezar a usarla.",
      ],
      blocks: [
        {
          text: "El reto era transformar una herramienta percibida como compleja en una propuesta simple, segura y beneficiosa para el vendedor.",
        },
      ],
    },
    estrategia: {
      intro: "Para abordar este desafío diseñé una estrategia de contenido centrada en tres principios:",
      blocks: [
        {
          title: "1. Explicar el valor antes que la funcionalidad",
          text: "En lugar de empezar explicando cómo funciona la herramienta, la comunicación comienza con el beneficio principal para el vendedor: vender más y ser más competitivo.\n\nEsto se refleja desde el subject y el headline:\n\n\"Gánale a la competencia y vende hasta un 37% más automatizando tus precios.\"",
        },
        {
          title: "2. Reducir el miedo a perder control",
          text: "Uno de los principales frenos para adoptar la herramienta era la percepción de que el sistema tomaría el control del precio.\n\nPara reducir esta fricción, el contenido enfatiza que el vendedor define los límites y el sistema solo optimiza dentro de ese rango.\n\nEsto se comunica claramente con frases como:\n\n\"Haz la prueba, tú defines los límites.\"",
        },
        {
          title: "3. Explicar el funcionamiento de forma simple",
          text: "La comunicación incluye una sección clara que explica cómo empezar a usar la herramienta en tres pasos, permitiendo que el vendedor entienda rápidamente que el proceso es simple y reversible.",
        },
      ],
    },
    solucion: {
      intro: "La solución fue una pieza de comunicación por email rediseñada, enfocada en explicar claramente el valor de la herramienta y facilitar su adopción.\n\nEl contenido se estructuró en cuatro bloques principales:",
      image: "/images/content-design-projecto-4-imagen-1.png",
      imageSide: true,
      blocks: [
        {
          title: "Propuesta de valor clara",
          text: "El email abre con un mensaje que comunica inmediatamente el beneficio de la herramienta: aumentar ventas automatizando los precios.",
        },
        {
          title: "Beneficios concretos",
          bullets: [
            "Mayor exposición en las publicaciones.",
            "Mayor competitividad frente a otros vendedores.",
            "Mayor probabilidad de aparecer como opción destacada.",
          ],
        },
        {
          title: "Explicación visual del funcionamiento",
          text: "La comunicación incluye una representación simple del funcionamiento de la herramienta, mostrando cómo el vendedor define un precio mínimo y máximo, mientras el sistema ajusta el precio dentro de ese rango.",
        },
        {
          title: "Instrucciones claras para comenzar",
          text: "Finalmente, se incluye una guía simple en tres pasos para activar la herramienta, acompañada de un llamado a la acción directo hacia la sección de Gestión de precios.",
        },
      ],
    },
    resultados: {
      bullets: [
        "Comunicar de forma más clara el valor de la herramienta y reducir la percepción de complejidad asociada a su uso.",
        "Explicar mejor cómo funciona la automatización de precios.",
        "Reducir la fricción para probar la herramienta.",
        "Reforzar la percepción de control por parte del vendedor.",
      ],
    },
  },
];

/* ──────────────────────────────────────────────
   AI PROJECTS — Pillar detail projects
   ────────────────────────────────────────────── */

/** Project type 1 — same sections as Content Design */
export interface AIProjectType1 {
  type: "type1";
  id: string;
  title: string;
  client: string;
  year: string;
  coverImage: string;
  gradient: string;
  rol: {
    text: string;
    image?: string;
    bullets?: string[];
    blocks?: ContentBlock[];
  };
  objetivoGeneral: {
    text: string;
    image?: string;
    blocks?: ContentBlock[];
  };
  desafio: {
    text: string;
    bullets?: string[];
    blocks?: ContentBlock[];
    image?: string;
  };
  estrategia: {
    intro?: string;
    blocks?: ContentBlock[];
    bullets?: string[];
    image?: string;
    imageSide?: boolean;
    images?: string[];
  };
  solucion: {
    intro?: string;
    text?: string;
    blocks?: ContentBlock[];
    bullets?: string[];
    image?: string;
    imageSide?: boolean;
    images?: string[];
  };
  resultados: {
    bullets?: string[];
    blocks?: ContentBlock[];
    image?: string;
  };
}

/** Project type 2 — with Iteración y pruebas + Herramientas */
export interface AIProjectType2 {
  type: "type2";
  id: string;
  title: string;
  client: string;
  year: string;
  coverImage: string;
  gradient: string;
  rol: {
    text: string;
    image?: string;
    bullets?: string[];
    blocks?: ContentBlock[];
  };
  objetivoGeneral: {
    text: string;
    image?: string;
    blocks?: ContentBlock[];
  };
  desafio: {
    text: string;
    bullets?: string[];
    blocks?: ContentBlock[];
    image?: string;
  };
  estrategia: {
    intro?: string;
    blocks?: ContentBlock[];
    bullets?: string[];
    image?: string;
    imageSide?: boolean;
    images?: string[];
  };
  iteracionPruebas: {
    intro?: string;
    text?: string;
    blocks?: ContentBlock[];
    bullets?: string[];
    image?: string;
    imageSide?: boolean;
    images?: string[];
  };
  herramientas: {
    intro?: string;
    tools: { name: string; description?: string; icon?: string }[];
    blocks?: ContentBlock[];
  };
}

/** Project type 3 — AI in my workflow (simple) */
export interface AIProjectType3 {
  type: "type3";
  id: string;
  title: string;
  client: string;
  year: string;
  coverImage: string;
  gradient: string;
  description: string;
  blocks?: ContentBlock[];
  tools: { name: string; description?: string; category?: string }[];
}

export type AIProject = AIProjectType1 | AIProjectType2 | AIProjectType3;

export const aiProjects: AIProject[] = [
  {
    type: "type1",
    id: "ai-proyecto-1",
    title: "Agente interno – Biblioteca de conocimiento",
    client: "Proyecto 1",
    year: "",
    coverImage: "",
    gradient: "linear-gradient(160deg, #3A1A1A 0%, #8B4A2A 30%, #C4704A 70%, #D4896A 100%)",
    rol: {
      text: "Diseñé una biblioteca de conocimiento para un agente interno de reputación, con el objetivo de centralizar toda la información necesaria para que equipos internos pudieran entender cómo funciona el sistema de reputación dentro de Mercado Libre.\n\nEl proyecto consistió en estructurar y documentar la información clave del producto para que pudiera ser utilizada tanto por personas como por herramientas de inteligencia artificial.",
    },
    objetivoGeneral: {
      text: "Crear una fuente única de conocimiento sobre el sistema de reputación que permitiera:",
      blocks: [
        {
          bullets: [
            "Consultar rápidamente conceptos y métricas.",
            "Entender cómo funcionan los productos relacionados.",
            "Acceder a contenidos y decisiones de diseño previas.",
            "Facilitar el uso de esta información por herramientas de IA internas.",
          ],
        },
      ],
    },
    desafio: {
      text: "La información sobre reputación estaba distribuida en múltiples documentos y equipos, lo que hacía difícil:",
      blocks: [
        {
          bullets: [
            "Entender rápidamente el sistema.",
            "Reutilizar contenidos existentes.",
            "Mantener consistencia en la comunicación.",
          ],
        },
        {
          text: "Además, para poder usar esta información en herramientas de IA era necesario organizar el conocimiento de forma estructurada y clara.",
        },
      ],
    },
    estrategia: {
      intro: "Diseñé una biblioteca de conocimiento estructurada en distintas capas:",
      blocks: [
        {
          title: "1. Contenidos del producto",
          text: "Documentación de mensajes, casos de uso y contenidos existentes dentro del sistema de reputación.",
        },
        {
          title: "2. Glosario y términos",
          text: "Definición de conceptos clave utilizados en el producto.",
        },
        {
          title: "3. Manual de voz y tono",
          text: "Guía para mantener consistencia en la comunicación del sistema de reputación.",
        },
        {
          title: "4. Registro de proyectos",
          text: "Documentación de iniciativas y evoluciones del producto.",
        },
        {
          text: "Esta estructura permitía navegar fácilmente la información y reutilizar contenidos en distintos contextos.",
        },
      ],
    },
    solucion: {
      intro: "El resultado fue una biblioteca centralizada de reputación que incluía:",
      blocks: [
        {
          bullets: [
            "Contenidos del producto.",
            "Definiciones y glosario.",
            "Manual de voz y tono.",
            "Registro de proyectos.",
            "Recursos reutilizables.",
          ],
        },
        {
          text: "Este sistema permitió que distintos equipos pudieran consultar información de forma rápida y consistente, y sentó las bases para utilizar este conocimiento en herramientas de IA.",
        },
      ],
    },
    resultados: {
      bullets: [
        "La consulta rápida de información sobre reputación.",
        "La reutilización de contenidos.",
        "Mayor consistencia en la comunicación del producto.",
        "Preparar la información para su uso en herramientas de inteligencia artificial internas.",
      ],
    },
  },
  {
    type: "type2",
    id: "ai-proyecto-2",
    title: "Diseño de prompt para recomendaciones",
    client: "Proyecto 2",
    year: "2024–2025",
    coverImage: "",
    gradient: "linear-gradient(160deg, #1A1A2E 0%, #2D2D4A 30%, #5B5B8B 70%, #8B8BAB 100%)",
    rol: {
      text: "Diseñé el prompt utilizado por un agente de inteligencia artificial dentro del producto Experiencia de compra, cuyo objetivo era ofrecer a los vendedores recomendaciones para mejorar el desempeño de sus publicaciones.\n\nEl trabajo incluyó definir cómo debía interpretar la información del producto y cómo debía comunicar las recomendaciones a los vendedores.",
    },
    objetivoGeneral: {
      text: "Utilizar IA para ayudar a los vendedores a entender sus principales problemas y recibir sugerencias concretas para mejorar la experiencia de compra de sus publicaciones.",
    },
    desafio: {
      text: "El principal desafío era lograr que la IA generara respuestas que fueran:",
      blocks: [
        {
          bullets: [
            "Claras.",
            "Accionables.",
            "Consistentes con la voz del producto.",
          ],
        },
        {
          title: "Además, debía evitar:",
          bullets: [
            "Lenguaje técnico innecesario.",
            "Respuestas ambiguas.",
            "Recomendaciones poco útiles.",
          ],
        },
      ],
    },
    estrategia: {
      intro: "Diseñé un prompt que incluía:",
      blocks: [
        {
          title: "1. Instrucciones de comportamiento",
          text: "Definí cómo debía actuar el modelo, priorizando respuestas claras y útiles para vendedores.",
        },
        {
          title: "2. Guías de lenguaje",
          text: "Incluí:",
          bullets: [
            "Palabras recomendadas.",
            "Términos que debían evitarse.",
            "Estructura de las respuestas.",
          ],
        },
        {
          title: "3. Contexto del producto",
          text: "El prompt incluía información sobre:",
          bullets: [
            "Métricas de experiencia de compra.",
            "Problemas frecuentes de los vendedores.",
            "Posibles recomendaciones.",
          ],
        },
      ],
      images: [
        "/images/ai-projecto-2-imagen-1.png",
        "/images/ai-projecto-2-imagen-2.png",
      ],
    },
    iteracionPruebas: {
      intro: "Realicé múltiples iteraciones del prompt utilizando casos reales de vendedores, evaluando:",
      blocks: [
        {
          bullets: [
            "Claridad de las respuestas.",
            "Utilidad de las recomendaciones.",
            "Consistencia en el tono.",
          ],
        },
        {
          text: "También trabajé en la adaptación del prompt al inglés.",
        },
      ],
    },
    herramientas: {
      intro: "Durante el proceso utilicé herramientas de IA como:",
      tools: [
        { name: "Gemini", description: "Pruebas de prompts y evaluación de respuestas del modelo." },
        { name: "Claude", description: "Pruebas de prompts y evaluación de comportamiento del modelo." },
        { name: "Cursor", description: "Iteración rápida y ajuste de prompts en entorno de desarrollo." },
        { name: "NotebookLM", description: "Organización de conocimiento y pruebas de contexto." },
      ],
      blocks: [
        {
          text: "Estas herramientas me permitieron probar distintos enfoques de prompts y evaluar el comportamiento de los modelos.",
        },
      ],
    },
  },
  {
    type: "type3",
    id: "ai-en-mi-flujo",
    title: "IA en mi workflow",
    client: "Mi Workflow",
    year: "",
    coverImage: "",
    gradient: "linear-gradient(160deg, #2A1A2E 0%, #4A2D4A 30%, #8B5B8B 70%, #AB8BAB 100%)",
    description: "Además de diseñar prompts y sistemas de contenido para productos que utilizan inteligencia artificial, también incorporo herramientas de IA en mi proceso de trabajo para optimizar investigación, ideación y producción de contenido.\n\nUsé IA para:",
    blocks: [
      {
        bullets: [
          "Acelerar procesos de research y exploración de información.",
          "Generar primeros borradores de contenido.",
          "Probar variaciones de microcopy.",
          "Estructurar documentación y sistemas de contenido.",
          "Analizar casos de uso y escenarios de usuario.",
          "Evaluar respuestas generadas por modelos de lenguaje.",
        ],
      },
    ],
    tools: [
      { name: "OpenAI – GPT", description: "Research.", category: "AI Tools" },
      { name: "Anthropic – Claude", description: "Prompt testing.", category: "AI Tools" },
      { name: "Google – Gemini", description: "Content ideation.", category: "AI Tools" },
      { name: "Cursor", description: "Prompt iteration.", category: "AI Tools" },
      { name: "NotebookLM", description: "Documentation.", category: "AI Tools" },
    ],
  },
];

/* ──────────────────────────────────────────────
   OTHER PROJECTS (Experiencias) — Pillar detail
   ────────────────────────────────────────────── */

export interface Experiencia {
  id: string;
  title: string;
  client: string;
  year: string;
  coverImage: string;
  gradient: string;
  desafio: {
    text: string;
    bullets?: string[];
    blocks?: ContentBlock[];
    image?: string;
  };
  enfoque: {
    intro?: string;
    text?: string;
    blocks?: ContentBlock[];
    bullets?: string[];
    image?: string;
    imageSide?: boolean;
    images?: string[];
  };
  impacto: {
    bullets?: string[];
    blocks?: ContentBlock[];
    image?: string;
  };
}

export const experiencias: Experiencia[] = [
  {
    id: "experiencia-1",
    title: "Estrategia Integral de Contenidos y Posicionamiento de Marca",
    client: "MESFIX",
    year: "2018-2021",
    coverImage: "/images/other-projecto-1-imagen-1.jpg",
    gradient: "linear-gradient(160deg, #2A2520 0%, #4A4538 30%, #D4C5B0 70%, #E8DFD2 100%)",
    desafio: {
      text: "Como startup fintech en crecimiento, Mesfix necesitaba construir posicionamiento, confianza y claridad en un mercado altamente competitivo y regulado. El reto era desarrollar una narrativa sólida que explicara un producto financiero complejo, generara credibilidad y acompañara momentos clave de crecimiento y comunicación sensible.",
    },
    enfoque: {
      intro: "Diseñé y ejecuté la estrategia integral de contenidos digitales, integrando narrativa de marca, educación financiera y posicionamiento estratégico.",
      bullets: [
        "Definí la voz y los pilares editoriales para redes sociales, blog, SEO y PR.",
        "Traducí conceptos financieros y técnicos en mensajes claros, educativos y accionables.",
        "Lideré campañas con influenciadores y medios para fortalecer visibilidad y credibilidad.",
        "Analicé métricas de desempeño y ajusté la estrategia con base en resultados.",
        "Aporté desde comunicación y experiencia de usuario en el desarrollo y lanzamiento de nuevos productos.",
        "Gestioné eventos estratégicos para posicionar la marca en el ecosistema fintech.",
      ],
    },
    impacto: {
      bullets: [
        "Consolidación de una narrativa clara y coherente en todos los canales digitales.",
        "Mayor posicionamiento y visibilidad en el sector fintech.",
        "Optimización continua de la estrategia basada en métricas de rendimiento.",
        "Integración efectiva entre comunicación, producto y crecimiento.",
      ],
    },
  },
  {
    id: "experiencia-2",
    title: "Gestión y Análisis de Contenidos Digitales",
    client: "DATTIS",
    year: "2018",
    coverImage: "/images/other-projecto-1-imagen-2.jpg",
    gradient: "linear-gradient(160deg, #1A2E1A 0%, #2D4A2D 30%, #8B9D77 70%, #A8B89A 100%)",
    desafio: {
      text: "Gestionar múltiples marcas (BBC, EY, Iqos, Águila, Colsanitas y Yamaha) con necesidades y audiencias distintas, asegurando coherencia en comunicación digital y cumplimiento de objetivos de alcance y engagement. El reto era estructurar parrillas de contenido estratégicas y optimizar desempeño en un entorno multitarea y de alta exigencia.",
    },
    enfoque: {
      intro: "Construí y ejecuté parrillas editoriales para diversas marcas, alineando tono, objetivos y formatos a cada audiencia.",
      bullets: [
        "Monitoreé métricas clave como alcance, engagement y cumplimiento de metas digitales.",
        "Analicé resultados y ajusté estrategias con base en data.",
        "Elaboré reportes de desempeño para clientes y equipos internos.",
        "Apoyé campañas digitales y acciones de PR en medios digitales.",
        "Gestioné múltiples cuentas en simultáneo, organizando prioridades y entregables con enfoque estratégico.",
      ],
    },
    impacto: {
      bullets: [
        "Optimización continua del contenido a partir de métricas reales de desempeño.",
        "Mejora en coherencia editorial entre marcas y campañas.",
        "Cumplimiento consistente de objetivos digitales en entornos multitarea.",
        "Desarrollo de una base sólida en análisis, estrategia y ejecución digital.",
      ],
    },
  },
  {
    id: "experiencia-3",
    title: "Gestión de proyectos de comunicación digital",
    client: "TRIARIO",
    year: "2021",
    coverImage: "/images/other-projecto-1-imagen-3.jpg",
    gradient: "linear-gradient(160deg, #2E1A0E 0%, #6B3A1A 30%, #C47A3A 70%, #E8A96A 100%)",
    desafio: {
      text: "Las marcas (Bancolombia y Renting) necesitaban ejecutar estrategias digitales integrales en entornos dinámicos, con múltiples equipos, entregables simultáneos y plazos ajustados. El reto era estructurar un sistema operativo claro que integrara estrategia, contenido, diseño y performance, garantizando coherencia narrativa, cumplimiento y calidad en todo el funnel.",
    },
    enfoque: {
      intro: "Lideré la gestión integral de proyectos digitales para marcas como Bancolombia (Renting Colombia) y Prosalon, estructurando flujos de trabajo en HubSpot para asegurar visibilidad, control y eficiencia.",
      bullets: [
        "Organicé y prioricé tareas, cronogramas y asignaciones entre equipos creativos, performance y cliente.",
        "Implementé seguimiento estructurado en HubSpot para gestionar el funnel completo de contenidos.",
        "Supervisé y validé cada pieza antes de producción, asegurando calidad editorial, coherencia de tono y alineación estratégica.",
        "Coordiné la comunicación entre equipos internos y stakeholders externos para mantener claridad y enfoque en objetivos de negocio.",
        "Optimicé procesos para reducir fricciones y mejorar tiempos de entrega.",
      ],
    },
    impacto: {
      bullets: [
        "Mayor eficiencia y orden en la operación de contenidos digitales.",
        "Consistencia narrativa y control de calidad en cada entrega.",
        "Integración efectiva entre estrategia, ejecución y performance.",
        "Cumplimiento sostenido de cronogramas en entornos de alta exigencia.",
      ],
    },
  },
];
