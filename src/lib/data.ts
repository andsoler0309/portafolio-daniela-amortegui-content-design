export const siteConfig = {
  name: "Daniela Amórtegui",
  initials: "D.A.",
  title: "Product, Communication & Project Strategist",
  email: "daniela.amortegui@gmail.com",
  linkedin: "https://www.linkedin.com/in/danielaamorteguim/",
  instagram: "https://www.instagram.com/daniamortegui",
  substack: "https://dani-cruza-metas.substack.com",
  /** PDFs en public/cv/ — una versión por idioma */
  cv: {
    es: "/cv/daniela-amortegui-cv-es.pdf",
    en: "/cv/daniela-amortegui-cv-en.pdf",
  },
};

export interface PersonalProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  responsibilities: string[];
  gradient: string;
  image?: string;
  /** "contain" para capturas de pantalla que no deben recortarse */
  imageFit?: "cover" | "contain";
  url?: string;
  linkLabel?: string;
}

export const personalProjects: PersonalProject[] = [
  {
    id: "dani-cruza-metas",
    title: "Dani Cruza Metas",
    tagline: "Running, deporte y crecimiento personal",
    description:
      "Dani Cruza Metas es mi proyecto personal alrededor del running, el deporte y el crecimiento personal.\n\nA través de Instagram, artículos y contenido educativo comparto aprendizajes sobre entrenamiento, disciplina y bienestar, construyendo una comunidad interesada en el deporte desde una perspectiva cercana y auténtica.",
    responsibilities: [
      "Desarrollo la estrategia de contenido.",
      "Planifico el calendario editorial.",
      "Produzco contenido en diferentes formatos.",
      "Analizo métricas y comportamiento de la audiencia.",
      "Gestiono el crecimiento de la comunidad.",
      "Construyo la estrategia de marca personal.",
    ],
    gradient: "linear-gradient(135deg, #C4704A 0%, #D4896A 50%, #FAF7F2 100%)",
    image: "/images/dani-cruza-metas-instagram.jpg",
    imageFit: "contain",
    url: "https://www.instagram.com/daniamortegui",
    linkLabel: "Instagram",
  },
  {
    id: "substack",
    title: "Blog Dani Cruza Metas",
    tagline: "Narrativa larga sobre deporte y desarrollo personal",
    description:
      "Escribo artículos de largo formato donde combino storytelling, deporte y desarrollo personal.\n\nCada publicación parte de experiencias reales para generar reflexiones sobre disciplina, resiliencia y construcción de hábitos.",
    responsibilities: [],
    gradient: "linear-gradient(135deg, #1A2E1A 0%, #8B9D77 50%, #A8B89A 100%)",
    image: "/images/personal-project-1.jpg",
    url: "https://dani-cruza-metas.substack.com",
    linkLabel: "Substack",
  },
  {
    id: "fut-fem-colombia",
    title: "FutFem Colombia",
    tagline: "Contenido digital para el fútbol femenino colombiano",
    description:
      "Colaboro en la creación de contenido para una comunidad dedicada al fútbol femenino colombiano.\n\nParticipo en la cobertura de torneos, creación de contenido editorial y comunicación digital para acercar este deporte a nuevas audiencias.",
    responsibilities: [],
    gradient: "linear-gradient(135deg, #D4C5B0 0%, #8B9D77 50%, #1A2E1A 100%)",
    image: "/images/personal-project-3.jpg",
    url: "https://instagram.com/futfemcolombia",
    linkLabel: "Instagram",
  },
];

export const personalProjectsEn: PersonalProject[] = [
  {
    id: "dani-cruza-metas",
    title: "Dani Cruza Metas",
    tagline: "Running, sport and personal growth",
    description:
      "Dani Cruza Metas is my personal project around running, sport and personal growth.\n\nThrough Instagram, articles and educational content I share what I learn about training, discipline and wellbeing, building a community that approaches sport from a close, authentic perspective.",
    responsibilities: [
      "Develop the content strategy.",
      "Plan the editorial calendar.",
      "Produce content across formats.",
      "Analyze metrics and audience behavior.",
      "Manage community growth.",
      "Build the personal brand strategy.",
    ],
    gradient: "linear-gradient(135deg, #C4704A 0%, #D4896A 50%, #FAF7F2 100%)",
    image: "/images/dani-cruza-metas-instagram.jpg",
    imageFit: "contain",
    url: "https://www.instagram.com/daniamortegui",
    linkLabel: "Instagram",
  },
  {
    id: "substack",
    title: "Dani Cruza Metas Blog",
    tagline: "Long-form writing on sport and personal development",
    description:
      "I write long-form articles combining storytelling, sport and personal development.\n\nEvery piece starts from real experiences to spark reflection on discipline, resilience and habit building.",
    responsibilities: [],
    gradient: "linear-gradient(135deg, #1A2E1A 0%, #8B9D77 50%, #A8B89A 100%)",
    image: "/images/personal-project-1.jpg",
    url: "https://dani-cruza-metas.substack.com",
    linkLabel: "Substack",
  },
  {
    id: "fut-fem-colombia",
    title: "FutFem Colombia",
    tagline: "Digital content for Colombian women's football",
    description:
      "I collaborate creating content for a community dedicated to Colombian women's football.\n\nI take part in tournament coverage, editorial content creation and digital communication to bring the sport to new audiences.",
    responsibilities: [],
    gradient: "linear-gradient(135deg, #D4C5B0 0%, #8B9D77 50%, #1A2E1A 100%)",
    image: "/images/personal-project-3.jpg",
    url: "https://instagram.com/futfemcolombia",
    linkLabel: "Instagram",
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
    id: "work",
    title: "Work",
    subtitle: "Proyectos",
    description:
      "Producto, comunicación y gestión de proyectos digitales para Mercado Libre, Avianca, Mesfix y más.",
    href: "/work",
    gradient: "linear-gradient(160deg, #1A2E1A 0%, #2D4A2D 30%, #8B9D77 70%, #A8B89A 100%)",
    accentColor: "#A8B89A",
    pattern: "circles",
  },
  {
    id: "personal-projects",
    title: "Personal\nProjects",
    subtitle: "Proyectos",
    description:
      "Comunidad, contenido y storytelling alrededor del running y los deportes de resistencia.",
    href: "/personal-projects",
    gradient: "linear-gradient(160deg, #2A2520 0%, #4A4538 30%, #D4C5B0 70%, #E8DFD2 100%)",
    accentColor: "#D4C5B0",
    pattern: "waves",
  },
  {
    id: "ai",
    title: "AI",
    subtitle: "Proyectos",
    description:
      "Inteligencia Artificial aplicada a producto, flujos de trabajo y toma de decisiones.",
    href: "/ai",
    gradient: "linear-gradient(160deg, #3A1A1A 0%, #8B4A2A 30%, #C4704A 70%, #D4896A 100%)",
    accentColor: "#D4896A",
    pattern: "grid",
  },
];

/* ──────────────────────────────────────────────
   WORK — case studies
   ────────────────────────────────────────────── */

export interface ContentBlock {
  title?: string;
  text?: string;
  bullets?: string[];
}

export interface WorkSection {
  intro?: string;
  text?: string;
  bullets?: string[];
  blocks?: ContentBlock[];
  image?: string;
  /** Renderiza la imagen en columna lateral en vez de debajo del contenido */
  imageSide?: boolean;
  images?: string[];
}

/**
 * Cada caso se arma con las secciones que tenga definidas, en este orden:
 * Desafío → Mi rol → Enfoque → Solución → Impacto.
 * `enfoque` y `solucion` son opcionales (Triario y Dattis no las usan).
 */
export interface WorkProject {
  id: string;
  title: string;
  /** Frase de una línea que acompaña al título en el hero */
  subtitle: string;
  /** Empresa / contexto del proyecto */
  client: string;
  /** Etiqueta corta usada en la barra de pestañas */
  tabLabel: string;
  year: string;
  coverImage: string;
  gradient: string;
  desafio: WorkSection;
  rol: WorkSection;
  enfoque?: WorkSection;
  solucion?: WorkSection;
  impacto: WorkSection;
}

export const workProjects: WorkProject[] = [
  {
    id: "reputation-dashboard",
    title: "Transformación del dashboard de reputación",
    subtitle:
      "Ayudar a millones de vendedores a entender y mejorar el desempeño de su negocio.",
    client: "Mercado Libre",
    tabLabel: "Reputación",
    year: "2021–2026",
    coverImage: "/images/content-design-projecto-1-imagen-1.jpg",
    gradient: "linear-gradient(160deg, #1A2E1A 0%, #2D4A2D 30%, #8B9D77 70%, #A8B89A 100%)",
    desafio: {
      text: "El sistema de reputación de Mercado Libre es una de las herramientas más importantes para los vendedores, ya que impacta directamente su visibilidad, confianza y oportunidades de venta.\n\nSin embargo, la experiencia existente presentaba información compleja y dispersa, dificultando que los usuarios comprendieran cómo mejorar su desempeño y qué acciones debían priorizar.\n\nEl reto consistía en transformar un tablero basado en métricas en una herramienta que ayudara a los vendedores a tomar mejores decisiones para hacer crecer su negocio.",
    },
    rol: {
      text: "Participé en el rediseño integral del Dashboard de Reputación trabajando de manera transversal con equipos de Producto, Diseño, Desarrollo, Analytics y Negocio.\n\nMi trabajo combinó estrategia de producto, experiencia de usuario y coordinación entre equipos para garantizar que las necesidades del negocio y de los usuarios estuvieran alineadas durante todo el proyecto.",
      blocks: [
        {
          title: "Responsabilidades",
          bullets: [
            "Liderar la estrategia de comunicación del proyecto.",
            "Participar en sesiones de discovery e investigación.",
            "Traducir reglas de negocio complejas en experiencias simples.",
            "Coordinar el trabajo entre Producto, Diseño y Desarrollo.",
            "Priorizar necesidades de usuarios y objetivos del negocio.",
            "Definir la arquitectura de información del dashboard.",
            "Participar en pruebas, iteraciones y mejoras continuas.",
            "Analizar resultados para optimizar la experiencia.",
          ],
        },
      ],
    },
    enfoque: {
      text: "El proyecto se desarrolló mediante un proceso iterativo basado en investigación, colaboración y validación continua.\n\nTrabajamos junto a diferentes equipos para comprender las necesidades reales de los vendedores, identificar los principales puntos de fricción y priorizar las oportunidades con mayor impacto para el negocio.",
      image: "/images/content-design-projecto-1-imagen-3.jpg",
      imageSide: true,
    },
    solucion: {
      intro:
        "Diseñamos un nuevo Dashboard de Reputación centrado en la toma de decisiones.\n\nLa nueva experiencia permitió:",
      bullets: [
        "Organizar la información según prioridades.",
        "Explicar claramente el impacto de cada métrica.",
        "Mostrar acciones concretas para mejorar la reputación.",
        "Simplificar conceptos complejos mediante una mejor arquitectura de información.",
        "Crear una experiencia escalable para futuras evoluciones del producto.",
      ],
      image: "/images/content-design-projecto-1-imagen-2.jpg",
    },
    impacto: {
      bullets: [
        "Mejor comprensión de los indicadores de reputación.",
        "Reducción de la carga cognitiva para los vendedores.",
        "Mayor alineación entre Producto, Diseño y Desarrollo.",
        "Base escalable para nuevas funcionalidades del dashboard.",
        "Experiencia más clara y orientada a la acción.",
      ],
    },
  },
  {
    id: "buying-experience",
    title: "Optimización de la experiencia de compra",
    subtitle:
      "Ayudar a los vendedores a entender cómo sus acciones impactan la experiencia de compra.",
    client: "Mercado Libre",
    tabLabel: "Exp. de compra",
    year: "2021–2026",
    coverImage: "/images/content-design-projecto-2-imagen-1.png",
    gradient: "linear-gradient(160deg, #1A2A2E 0%, #2D4A4A 30%, #5B8B8B 70%, #7AABAB 100%)",
    desafio: {
      text: "Mercado Libre necesitaba ayudar a los vendedores a comprender cómo la experiencia de compra impactaba directamente el desempeño de sus publicaciones y la satisfacción de los compradores.\n\nLa información estaba distribuida en diferentes puntos del producto y muchos usuarios no lograban identificar qué acciones debían realizar para mejorar la experiencia que ofrecían.\n\nEl desafío consistía en transformar información compleja en una experiencia clara que guiara a los vendedores hacia acciones concretas de mejora.",
    },
    rol: {
      text: "Participé en el diseño de una nueva experiencia para vendedores, colaborando con equipos de Producto, Diseño, Desarrollo, Analytics y Negocio.\n\nAdemás de definir la estrategia de comunicación, participé en la priorización de funcionalidades, estructuración de la información y coordinación entre diferentes áreas para asegurar una implementación consistente.",
      blocks: [
        {
          title: "Responsabilidades",
          bullets: [
            "Participar en procesos de discovery e investigación.",
            "Identificar oportunidades de mejora a partir de insights de usuarios.",
            "Definir la estrategia de comunicación del producto.",
            "Estructurar la arquitectura de información.",
            "Coordinar decisiones entre Producto, Diseño y Desarrollo.",
            "Facilitar la comprensión de funcionalidades complejas.",
            "Acompañar la implementación y evolución del producto.",
          ],
        },
      ],
    },
    enfoque: {
      text: "Trabajamos de forma colaborativa para comprender los principales problemas que enfrentaban los vendedores durante la gestión de sus publicaciones.\n\nA partir de investigación y análisis de datos, priorizamos las oportunidades con mayor impacto y diseñamos una experiencia que permitiera comprender fácilmente el estado de cada publicación y las acciones recomendadas.",
      images: [
        "/images/content-design-projecto-2-imagen-2.png",
        "/images/content-design-projecto-2-imagen-4.png",
      ],
    },
    solucion: {
      intro:
        "Creamos una experiencia más intuitiva que conectaba el estado de las publicaciones con recomendaciones claras para mejorar la experiencia del comprador.\n\nLa solución permitió:",
      bullets: [
        "Priorizar problemas según su impacto.",
        "Mostrar recomendaciones accionables.",
        "Simplificar información técnica.",
        "Mejorar la navegación entre funcionalidades.",
        "Facilitar la toma de decisiones.",
      ],
      image: "/images/content-design-projecto-2-imagen-3.png",
      imageSide: true,
    },
    impacto: {
      bullets: [
        "Mayor claridad sobre la experiencia de compra.",
        "Mejor comprensión de las acciones prioritarias.",
        "Experiencia más intuitiva para vendedores.",
        "Mayor alineación entre equipos durante el desarrollo.",
        "Base escalable para futuras funcionalidades.",
      ],
    },
  },
  {
    id: "launch-program",
    title: "Programa de Despegue para nuevos vendedores",
    subtitle:
      "Diseñar una experiencia de onboarding que ayudara a los nuevos vendedores a tener éxito desde el primer día.",
    client: "Mercado Libre",
    tabLabel: "Despegue",
    year: "2021–2026",
    coverImage: "/images/content-design-projecto-3-imagen-1.png",
    gradient: "linear-gradient(160deg, #2E1A0E 0%, #6B3A1A 30%, #C47A3A 70%, #E8A96A 100%)",
    desafio: {
      text: "Miles de nuevos vendedores llegaban cada mes a Mercado Libre, pero muchos no lograban completar las acciones necesarias para comenzar a vender exitosamente.\n\nEl desafío consistía en diseñar un programa que guiara a los usuarios durante sus primeros pasos, facilitando la adopción de funcionalidades y aumentando las probabilidades de éxito dentro de la plataforma.",
      image: "/images/content-design-projecto-3-imagen-2.png",
    },
    rol: {
      text: "Lideré la estrategia de comunicación y participé en la coordinación transversal del programa de onboarding para nuevos vendedores.\n\nTrabajé junto a equipos de Producto, Marketing, Diseño, Desarrollo y Negocio para construir una experiencia consistente a través de múltiples canales de comunicación.",
      blocks: [
        {
          title: "Responsabilidades",
          bullets: [
            "Diseñar la estrategia integral de onboarding.",
            "Coordinar iniciativas entre diferentes equipos.",
            "Definir hitos críticos del recorrido del usuario.",
            "Priorizar comunicaciones según comportamiento.",
            "Diseñar recorridos omnicanal.",
            "Participar en pruebas e iteraciones.",
            "Analizar resultados para optimizar el programa.",
          ],
        },
      ],
    },
    enfoque: {
      text: "El programa fue construido alrededor de las principales necesidades detectadas durante los primeros días del vendedor dentro de la plataforma.\n\nCada comunicación fue diseñada para acompañar una acción específica y reducir la incertidumbre durante el proceso de activación.",
      image: "/images/content-design-projecto-3-imagen-3.png",
      imageSide: true,
    },
    solucion: {
      intro:
        "Creamos un programa estructurado de onboarding que acompañaba al vendedor desde su registro hasta sus primeras ventas mediante mensajes personalizados y experiencias coordinadas.",
      images: [
        "/images/content-design-projecto-3-imagen-4.png",
        "/images/content-design-projecto-3-imagen-5.png",
        "/images/content-design-projecto-3-imagen-6.png",
      ],
    },
    impacto: {
      bullets: [
        "Mayor claridad durante el proceso de incorporación.",
        "Mejor adopción de funcionalidades.",
        "Experiencia consistente entre canales.",
        "Mayor coordinación entre áreas involucradas.",
        "Base para futuras evoluciones del programa.",
      ],
    },
  },
  {
    id: "price-automation",
    title: "Impulsar la adopción de la automatización de precios",
    subtitle: "Ayudar a los vendedores a adoptar precios automatizados con confianza.",
    client: "Mercado Libre",
    tabLabel: "Precios",
    year: "2021–2026",
    coverImage: "",
    gradient: "linear-gradient(160deg, #1A1A2E 0%, #2D2D4A 30%, #5B5B8B 70%, #8B8BAB 100%)",
    desafio: {
      text: "Mercado Libre contaba con una herramienta de automatización de precios que permitía a los vendedores mantener sus publicaciones competitivas de manera automática. Sin embargo, muchos usuarios no comprendían claramente su funcionamiento, desconfiaban de la automatización o abandonaban el proceso antes de activarla.\n\nEl reto consistía en aumentar la adopción del producto, generar confianza y simplificar la comprensión de una funcionalidad técnicamente compleja.",
    },
    rol: {
      text: "Participé en la estrategia de relanzamiento del producto trabajando con equipos de Producto, Diseño, Desarrollo, Analytics y Negocio.\n\nMi rol fue ayudar a transformar una funcionalidad compleja en una propuesta de valor fácil de entender, coordinando la experiencia completa desde el descubrimiento del producto hasta su adopción.",
      blocks: [
        {
          title: "Responsabilidades",
          bullets: [
            "Definir la estrategia de comunicación del relanzamiento.",
            "Identificar barreras de adopción mediante investigación y análisis.",
            "Coordinar iniciativas con Producto, Diseño y Desarrollo.",
            "Diseñar recorridos orientados a aumentar la activación.",
            "Participar en pruebas e iteraciones.",
            "Analizar métricas de adopción para identificar oportunidades de mejora.",
            "Alinear objetivos de negocio con necesidades de los usuarios.",
          ],
        },
      ],
    },
    enfoque: {
      text: "El proyecto se enfocó en comprender por qué los vendedores no utilizaban la funcionalidad y qué información necesitaban para confiar en ella.\n\nA partir de investigación, datos y trabajo colaborativo entre equipos, rediseñamos la experiencia priorizando claridad, transparencia y orientación a la acción.",
    },
    solucion: {
      intro:
        "Creamos una estrategia integral de adopción que combinó una experiencia de producto más intuitiva con comunicaciones contextualizadas y orientadas al beneficio para el usuario.\n\nLa solución permitió:",
      bullets: [
        "Explicar claramente el funcionamiento de la automatización.",
        "Reducir la incertidumbre durante la activación.",
        "Mejorar la comprensión del valor del producto.",
        "Facilitar la toma de decisiones.",
        "Generar una experiencia más confiable.",
      ],
      image: "/images/content-design-projecto-4-imagen-1.png",
      imageSide: true,
    },
    impacto: {
      bullets: [
        "Fortalecimiento de la estrategia de adopción del producto.",
        "Mayor claridad sobre los beneficios de la automatización.",
        "Mejor alineación entre Producto, Diseño y Desarrollo.",
        "Base escalable para futuras iniciativas de activación.",
        "Experiencia más simple y centrada en el usuario.",
      ],
    },
  },
  {
    id: "mesfix",
    title: "Productos financieros que la gente sí entiende",
    subtitle:
      "Traducir productos financieros complejos en experiencias digitales simples.",
    client: "Mesfix — Fintech",
    tabLabel: "Mesfix",
    year: "2018–2021",
    coverImage: "/images/other-projecto-1-imagen-1.jpg",
    gradient: "linear-gradient(160deg, #2A2520 0%, #4A4538 30%, #D4C5B0 70%, #E8DFD2 100%)",
    desafio: {
      text: "Mesfix buscaba acercar productos financieros complejos a pequeñas y medianas empresas mediante una plataforma digital sencilla, clara y confiable.\n\nEl desafío consistía en traducir conceptos financieros especializados en experiencias fáciles de comprender, al mismo tiempo que se acompañaban nuevos lanzamientos y la evolución del producto.",
    },
    rol: {
      text: "Trabajé como estratega de comunicación y experiencia digital, colaborando estrechamente con equipos de Producto, Tecnología, Negocio y Marketing.\n\nAdemás de diseñar la estrategia de comunicación del producto, participé en la definición de funcionalidades, documentación de requerimientos, creación de contenido educativo y lanzamiento de nuevas iniciativas digitales.",
      blocks: [
        {
          title: "Responsabilidades",
          bullets: [
            "Diseñar la estrategia de comunicación para productos financieros digitales.",
            "Participar en la definición y evolución de funcionalidades.",
            "Traducir conceptos financieros complejos en experiencias simples.",
            "Crear contenidos educativos para usuarios.",
            "Liderar la estrategia editorial del blog corporativo.",
            "Entrevistar clientes y expertos para generar contenido especializado.",
            "Coordinar lanzamientos junto a equipos de Producto y Tecnología.",
            "Documentar procesos y requerimientos funcionales.",
          ],
        },
      ],
    },
    enfoque: {
      text: "Cada iniciativa comenzaba comprendiendo las necesidades reales de los usuarios y los objetivos del negocio.\n\nTrabajando junto a Producto y Tecnología, transformábamos procesos financieros complejos en experiencias claras que facilitaran la adopción del producto.",
    },
    solucion: {
      intro:
        "Construimos una estrategia integral de comunicación y educación que acompañaba al usuario durante todo el recorrido dentro de la plataforma.\n\nLa combinación entre contenido, experiencia de usuario y colaboración transversal permitió fortalecer la comprensión de los productos financieros y apoyar el crecimiento del negocio.",
    },
    impacto: {
      bullets: [
        "Mayor claridad sobre productos financieros complejos.",
        "Lanzamientos coordinados entre áreas de negocio y tecnología.",
        "Mejor experiencia para nuevos usuarios.",
        "Fortalecimiento de la estrategia editorial y educativa.",
        "Mayor alineación entre comunicación y producto.",
      ],
    },
  },
  {
    id: "avianca-cms",
    title: "Liderando una migración web global",
    subtitle:
      "Coordinar una de las mayores iniciativas de transformación digital multilingüe de Avianca.",
    client: "Avianca",
    tabLabel: "Avianca",
    year: "",
    coverImage: "/images/avianca-gestiona-tu-reserva.jpg",
    gradient: "linear-gradient(160deg, #1A2A2E 0%, #2D4A4A 30%, #5B8B8B 70%, #7AABAB 100%)",
    desafio: {
      text: "Avianca inició la migración completa de su sitio web hacia un nuevo CMS, un proyecto que involucraba miles de contenidos, cuatro idiomas y múltiples equipos distribuidos en diferentes áreas del negocio.\n\nEl principal reto consistía en coordinar la transición garantizando continuidad operativa, calidad del contenido y cumplimiento de los cronogramas.",
    },
    rol: {
      text: "Lideré la coordinación del proyecto de migración desde la perspectiva de contenidos y experiencia digital, actuando como punto de conexión entre Producto Digital, Diseño, Desarrollo, Negocio y equipos de localización.",
      blocks: [
        {
          title: "Responsabilidades",
          bullets: [
            "Liderar el plan general de migración.",
            "Definir cronogramas y entregables.",
            "Coordinar equipos multidisciplinarios.",
            "Gestionar prioridades y dependencias.",
            "Alinear contenidos en cuatro idiomas.",
            "Administrar evolutivos posteriores a la migración.",
            "Realizar control de calidad antes de cada publicación.",
            "Asegurar consistencia en toda la experiencia digital.",
          ],
        },
      ],
    },
    enfoque: {
      text: "La migración fue organizada por fases para minimizar riesgos y asegurar la continuidad del negocio.\n\nCada entrega implicó coordinación entre múltiples stakeholders, validaciones técnicas y controles de calidad antes de su publicación.",
    },
    solucion: {
      intro:
        "Se implementó un proceso estructurado de migración que permitió gestionar miles de contenidos de manera organizada, manteniendo consistencia editorial y experiencia de usuario durante toda la transición.",
    },
    impacto: {
      bullets: [
        "Migración exitosa del sitio web corporativo.",
        "Coordinación eficiente entre áreas técnicas y de negocio.",
        "Consistencia de contenidos en cuatro idiomas.",
        "Reducción de riesgos mediante procesos estructurados.",
        "Gestión continua de nuevas evoluciones del sitio.",
      ],
    },
  },
  {
    id: "triario",
    title: "Gestión de operaciones digitales",
    subtitle:
      "Coordinar equipos multidisciplinarios para entregar proyectos digitales a escala.",
    client: "Triario",
    tabLabel: "Triario",
    year: "2021",
    coverImage: "/images/other-projecto-1-imagen-3.jpg",
    gradient: "linear-gradient(160deg, #2E1A0E 0%, #6B3A1A 30%, #C47A3A 70%, #E8A96A 100%)",
    desafio: {
      text: "Marcas como Bancolombia (Renting Colombia) y Prosalon necesitaban ejecutar estrategias digitales complejas involucrando múltiples equipos, clientes y entregables simultáneos.\n\nEl reto consistía en estructurar un modelo operativo que permitiera mantener visibilidad, calidad y cumplimiento de tiempos en un entorno de alta demanda.",
    },
    rol: {
      text: "Lideré la gestión integral de proyectos digitales, coordinando equipos creativos, clientes y especialistas para asegurar la ejecución exitosa de cada iniciativa.",
      blocks: [
        {
          title: "Responsabilidades",
          bullets: [
            "Gestionar proyectos de principio a fin.",
            "Diseñar flujos de trabajo en HubSpot.",
            "Coordinar equipos internos y clientes.",
            "Administrar cronogramas y prioridades.",
            "Supervisar calidad antes de publicación.",
            "Optimizar procesos operativos.",
            "Facilitar comunicación entre stakeholders.",
          ],
        },
      ],
    },
    impacto: {
      bullets: [
        "Mayor eficiencia operativa.",
        "Mejor coordinación entre equipos.",
        "Procesos más organizados.",
        "Cumplimiento constante de cronogramas.",
        "Mayor calidad en las entregas.",
      ],
    },
  },
  {
    id: "dattis",
    title: "Estrategia digital a escala para múltiples marcas",
    subtitle: "Gestionar varias marcas simultáneamente en un entorno de agencia.",
    client: "Dattis Comunicaciones",
    tabLabel: "Dattis",
    year: "2018",
    coverImage: "/images/other-projecto-1-imagen-2.jpg",
    gradient: "linear-gradient(160deg, #1A2E1A 0%, #2D4A2D 30%, #8B9D77 70%, #A8B89A 100%)",
    desafio: {
      text: "Gestionar simultáneamente las estrategias digitales de marcas como Bavaria, EY, IQOS, BBC, Yamaha y Colsanitas requería coordinar múltiples campañas, clientes y objetivos de negocio en un entorno altamente dinámico.",
    },
    rol: {
      text: "Gestioné proyectos digitales para diferentes marcas, coordinando estrategia, comunicación, campañas, análisis de resultados y relación con clientes.",
      blocks: [
        {
          title: "Responsabilidades",
          bullets: [
            "Planificar estrategias digitales.",
            "Coordinar campañas.",
            "Gestionar múltiples cuentas simultáneamente.",
            "Monitorear métricas de desempeño.",
            "Elaborar reportes para clientes.",
            "Ajustar estrategias con base en datos.",
            "Apoyar campañas de comunicación y relaciones públicas.",
          ],
        },
      ],
    },
    impacto: {
      bullets: [
        "Ejecución exitosa de múltiples proyectos simultáneos.",
        "Optimización continua basada en métricas.",
        "Mayor consistencia entre campañas.",
        "Desarrollo de procesos escalables para la operación digital.",
      ],
    },
  },
];

export const workProjectsEn: WorkProject[] = [
  {
    id: "reputation-dashboard",
    title: "Reputation Dashboard Transformation",
    subtitle:
      "Helping millions of sellers better understand and improve their business performance.",
    client: "Mercado Libre",
    tabLabel: "Reputation",
    year: "2021–2026",
    coverImage: "/images/content-design-projecto-1-imagen-1.jpg",
    gradient: "linear-gradient(160deg, #1A2E1A 0%, #2D4A2D 30%, #8B9D77 70%, #A8B89A 100%)",
    desafio: {
      text: "Mercado Libre's Reputation System is one of the platform's most critical seller tools, directly influencing visibility, trust and business growth.\n\nThe existing experience presented complex information in a fragmented way, making it difficult for sellers to understand how to improve their performance or which actions would have the greatest impact.\n\nThe challenge was to transform a metrics-driven dashboard into a decision-making tool that empowered sellers to grow their businesses.",
    },
    rol: {
      text: "I contributed to the end-to-end redesign of Mercado Libre's Reputation Dashboard, collaborating closely with Product Managers, Designers, Engineers, Analytics and Business stakeholders.\n\nMy role combined product strategy, user experience and cross-functional collaboration to ensure both business goals and user needs were addressed throughout the project.",
      blocks: [
        {
          title: "Responsibilities",
          bullets: [
            "Led the communication strategy for the initiative.",
            "Participated in product discovery and research.",
            "Translated complex business rules into intuitive experiences.",
            "Coordinated cross-functional collaboration.",
            "Prioritized user needs and business objectives.",
            "Defined the dashboard information architecture.",
            "Supported testing and iterative improvements.",
            "Analyzed insights to continuously optimize the experience.",
          ],
        },
      ],
    },
    enfoque: {
      text: "The project followed an iterative process driven by research, collaboration and continuous validation.\n\nWorking alongside multiple teams, we identified sellers' main pain points, prioritized high-impact opportunities and aligned business and user objectives throughout the redesign.",
      image: "/images/content-design-projecto-1-imagen-3.jpg",
      imageSide: true,
    },
    solucion: {
      intro:
        "We redesigned the Reputation Dashboard around decision-making rather than data visualization.\n\nThe new experience:",
      bullets: [
        "Organized information by priority.",
        "Explained the impact of each metric.",
        "Recommended actionable next steps.",
        "Simplified complex concepts through better information architecture.",
        "Created a scalable foundation for future product evolution.",
      ],
      image: "/images/content-design-projecto-1-imagen-2.jpg",
    },
    impacto: {
      bullets: [
        "Improved understanding of reputation metrics.",
        "Reduced cognitive load for sellers.",
        "Strengthened collaboration across Product, Design and Engineering.",
        "Established a scalable framework for future improvements.",
        "Delivered a clearer and more actionable product experience.",
      ],
    },
  },
  {
    id: "buying-experience",
    title: "Buying Experience Optimization",
    subtitle:
      "Helping sellers understand how their actions impact the buying experience.",
    client: "Mercado Libre",
    tabLabel: "Buying Exp.",
    year: "2021–2026",
    coverImage: "/images/content-design-projecto-2-imagen-1.png",
    gradient: "linear-gradient(160deg, #1A2A2E 0%, #2D4A4A 30%, #5B8B8B 70%, #7AABAB 100%)",
    desafio: {
      text: "Mercado Libre needed to help sellers better understand how the buying experience directly affected the performance of their listings and customer satisfaction.\n\nInformation was scattered across multiple product areas, making it difficult for users to identify which actions would have the greatest impact.\n\nThe challenge was to transform complex operational information into an intuitive experience that guided sellers toward meaningful improvements.",
    },
    rol: {
      text: "I contributed to designing a new seller experience in collaboration with Product Managers, Designers, Engineers, Analytics and Business stakeholders.\n\nBeyond defining the communication strategy, I helped prioritize opportunities, structure information and coordinate implementation across multiple teams.",
      blocks: [
        {
          title: "Responsibilities",
          bullets: [
            "Participated in product discovery and research.",
            "Identified opportunities based on user insights.",
            "Defined product communication strategy.",
            "Structured information architecture.",
            "Coordinated cross-functional decision-making.",
            "Simplified complex product concepts.",
            "Supported implementation and continuous improvements.",
          ],
        },
      ],
    },
    enfoque: {
      text: "Working closely with multidisciplinary teams, we analyzed seller pain points, reviewed behavioral insights and prioritized the opportunities with the greatest business impact.\n\nThe project focused on simplifying decision-making while making the buying experience easier to understand and improve.",
      images: [
        "/images/content-design-projecto-2-imagen-2.png",
        "/images/content-design-projecto-2-imagen-4.png",
      ],
    },
    solucion: {
      intro:
        "We designed a more intuitive experience that connected listing performance with actionable recommendations.\n\nThe new solution:",
      bullets: [
        "Prioritized issues based on impact.",
        "Provided clear recommendations.",
        "Simplified technical information.",
        "Improved navigation.",
        "Supported better decision-making.",
      ],
      image: "/images/content-design-projecto-2-imagen-3.png",
      imageSide: true,
    },
    impacto: {
      bullets: [
        "Improved understanding of buyer experience metrics.",
        "Increased clarity around recommended actions.",
        "More intuitive seller experience.",
        "Stronger cross-functional alignment.",
        "Scalable foundation for future product improvements.",
      ],
    },
  },
  {
    id: "launch-program",
    title: "Seller Launch Program",
    subtitle:
      "Designing an onboarding experience that helped new sellers succeed from day one.",
    client: "Mercado Libre",
    tabLabel: "Launch",
    year: "2021–2026",
    coverImage: "/images/content-design-projecto-3-imagen-1.png",
    gradient: "linear-gradient(160deg, #2E1A0E 0%, #6B3A1A 30%, #C47A3A 70%, #E8A96A 100%)",
    desafio: {
      text: "Thousands of new sellers joined Mercado Libre every month, yet many struggled to complete the key steps required to successfully start selling.\n\nThe challenge was to design an onboarding program that simplified activation, increased product adoption and helped users achieve early success.",
      image: "/images/content-design-projecto-3-imagen-2.png",
    },
    rol: {
      text: "I led the communication strategy and supported cross-functional coordination for Mercado Libre's Seller Launch Program.\n\nI collaborated with Product, Marketing, Design, Engineering and Business teams to deliver a consistent onboarding experience across multiple touchpoints.",
      blocks: [
        {
          title: "Responsibilities",
          bullets: [
            "Designed the onboarding communication strategy.",
            "Coordinated cross-functional initiatives.",
            "Defined key user milestones.",
            "Prioritized communications based on behavior.",
            "Structured omnichannel journeys.",
            "Supported testing and iterations.",
            "Analyzed performance and optimization opportunities.",
          ],
        },
      ],
    },
    enfoque: {
      text: "The program was designed around the key challenges new sellers face during their first days on the platform.\n\nEach communication was mapped to a specific milestone, helping users progress confidently while reducing uncertainty.",
      image: "/images/content-design-projecto-3-imagen-3.png",
      imageSide: true,
    },
    solucion: {
      intro:
        "We created a structured onboarding experience that guided sellers from registration through their first successful sales using coordinated communications across multiple channels.",
      images: [
        "/images/content-design-projecto-3-imagen-4.png",
        "/images/content-design-projecto-3-imagen-5.png",
        "/images/content-design-projecto-3-imagen-6.png",
      ],
    },
    impacto: {
      bullets: [
        "Improved onboarding clarity.",
        "Increased product adoption.",
        "More consistent user journeys.",
        "Stronger alignment across teams.",
        "Scalable foundation for future onboarding initiatives.",
      ],
    },
  },
  {
    id: "price-automation",
    title: "Driving Product Adoption Through Price Automation",
    subtitle: "Helping sellers adopt automated pricing with confidence.",
    client: "Mercado Libre",
    tabLabel: "Pricing",
    year: "2021–2026",
    coverImage: "",
    gradient: "linear-gradient(160deg, #1A1A2E 0%, #2D2D4A 30%, #5B5B8B 70%, #8B8BAB 100%)",
    desafio: {
      text: "Mercado Libre offered an automated pricing solution that helped sellers keep their listings competitive. However, many users struggled to understand how it worked, hesitated to trust automation or abandoned the activation process.\n\nThe challenge was to increase product adoption by building trust, simplifying complexity and clearly communicating the value of automation.",
    },
    rol: {
      text: "I contributed to the product relaunch strategy, collaborating with Product Managers, Designers, Engineers, Analytics and Business stakeholders.\n\nMy role focused on turning a technically complex feature into an intuitive value proposition while coordinating the end-to-end user experience from discovery through adoption.",
      blocks: [
        {
          title: "Responsibilities",
          bullets: [
            "Defined the communication strategy for the relaunch.",
            "Identified adoption barriers through research and analytics.",
            "Coordinated initiatives across Product, Design and Engineering.",
            "Designed activation journeys.",
            "Supported testing and iterative improvements.",
            "Analyzed adoption metrics.",
            "Aligned business objectives with user needs.",
          ],
        },
      ],
    },
    enfoque: {
      text: "The project began by understanding why sellers were not adopting the feature and identifying the information they needed to trust automated pricing.\n\nResearch, analytics and cross-functional collaboration guided the redesign toward greater clarity, transparency and usability.",
    },
    solucion: {
      intro:
        "We developed a comprehensive adoption strategy that combined a more intuitive product experience with contextual communication focused on customer value.\n\nThe redesigned experience:",
      bullets: [
        "Clearly explained how automation worked.",
        "Reduced uncertainty during activation.",
        "Increased understanding of the product.",
        "Simplified decision-making.",
        "Built greater user confidence.",
      ],
      image: "/images/content-design-projecto-4-imagen-1.png",
      imageSide: true,
    },
    impacto: {
      bullets: [
        "Strengthened the product adoption strategy.",
        "Increased clarity around automation benefits.",
        "Improved alignment across Product, Design and Engineering.",
        "Created a scalable framework for future activation initiatives.",
        "Delivered a more intuitive user experience.",
      ],
    },
  },
  {
    id: "mesfix",
    title: "Building Financial Products People Can Understand",
    subtitle: "Translating complex financial products into simple digital experiences.",
    client: "Mesfix — Fintech",
    tabLabel: "Mesfix",
    year: "2018–2021",
    coverImage: "/images/other-projecto-1-imagen-1.jpg",
    gradient: "linear-gradient(160deg, #2A2520 0%, #4A4538 30%, #D4C5B0 70%, #E8DFD2 100%)",
    desafio: {
      text: "Mesfix aimed to make financial products more accessible to small and medium-sized businesses through a simple, trustworthy digital platform.\n\nThe challenge was to translate complex financial concepts into intuitive experiences while supporting product evolution and new feature launches.",
    },
    rol: {
      text: "I worked as a communication and digital experience strategist, partnering with Product, Engineering, Business and Marketing teams.\n\nBeyond defining communication strategies, I contributed to feature definition, functional documentation, educational content and product launches.",
      blocks: [
        {
          title: "Responsibilities",
          bullets: [
            "Designed communication strategies for financial products.",
            "Contributed to feature definition.",
            "Simplified complex financial concepts.",
            "Created educational content.",
            "Led the corporate blog strategy.",
            "Interviewed customers and industry experts.",
            "Coordinated product launches.",
            "Documented requirements and processes.",
          ],
        },
      ],
    },
    enfoque: {
      text: "Every initiative started with understanding customer needs and business priorities.\n\nWorking closely with Product and Engineering teams, we transformed financial complexity into intuitive digital experiences.",
    },
    solucion: {
      intro:
        "We created an integrated communication and education strategy that supported users throughout their product journey.\n\nBy combining UX, communication and cross-functional collaboration, we strengthened product understanding and supported business growth.",
    },
    impacto: {
      bullets: [
        "Simplified complex financial products.",
        "Improved collaboration across Product and Business.",
        "Enhanced customer education.",
        "Supported product growth initiatives.",
        "Strengthened editorial strategy.",
      ],
    },
  },
  {
    id: "avianca-cms",
    title: "Leading a Global Website Migration",
    subtitle:
      "Coordinating one of Avianca's largest multilingual digital transformation initiatives.",
    client: "Avianca",
    tabLabel: "Avianca",
    year: "",
    coverImage: "/images/avianca-gestiona-tu-reserva.jpg",
    gradient: "linear-gradient(160deg, #1A2A2E 0%, #2D4A4A 30%, #5B8B8B 70%, #7AABAB 100%)",
    desafio: {
      text: "Avianca launched a full migration of its corporate website to a new CMS, involving thousands of content assets, four languages and multiple business and technical teams.\n\nThe challenge was to coordinate the transition while maintaining operational continuity, content quality and delivery timelines.",
    },
    rol: {
      text: "I led the coordination of the migration from the digital experience perspective, acting as the bridge between Digital Product, Design, Engineering, Business and localization teams.",
      blocks: [
        {
          title: "Responsibilities",
          bullets: [
            "Led the migration roadmap.",
            "Defined project timelines.",
            "Coordinated multidisciplinary teams.",
            "Managed priorities and dependencies.",
            "Aligned multilingual content.",
            "Oversaw post-launch improvements.",
            "Conducted quality assurance.",
            "Ensured consistency across the digital experience.",
          ],
        },
      ],
    },
    enfoque: {
      text: "The migration was organized into multiple phases to reduce risk and maintain business continuity.\n\nEach delivery required stakeholder alignment, technical validation and rigorous quality assurance.",
    },
    solucion: {
      intro:
        "We implemented a structured migration process that enabled the successful transition of thousands of digital assets while maintaining consistency across languages and markets.",
    },
    impacto: {
      bullets: [
        "Successful enterprise CMS migration.",
        "Strong cross-functional collaboration.",
        "Consistent multilingual experience.",
        "Reduced delivery risks.",
        "Continuous improvement after launch.",
      ],
    },
  },
  {
    id: "triario",
    title: "Managing Enterprise Digital Operations",
    subtitle: "Coordinating multidisciplinary teams to deliver digital projects at scale.",
    client: "Triario",
    tabLabel: "Triario",
    year: "2021",
    coverImage: "/images/other-projecto-1-imagen-3.jpg",
    gradient: "linear-gradient(160deg, #2E1A0E 0%, #6B3A1A 30%, #C47A3A 70%, #E8A96A 100%)",
    desafio: {
      text: "Brands such as Bancolombia (Renting Colombia) and Prosalon needed to execute complex digital strategies involving multiple teams, clients and simultaneous deliverables.\n\nThe challenge was to structure an operating model that maintained visibility, quality and on-time delivery in a high-demand environment.",
    },
    rol: {
      text: "I led end-to-end digital project management, coordinating creative teams, clients and specialists to ensure the successful execution of every initiative.",
      blocks: [
        {
          title: "Responsibilities",
          bullets: [
            "Managed projects end to end.",
            "Designed workflows in HubSpot.",
            "Coordinated internal teams and clients.",
            "Managed timelines and priorities.",
            "Oversaw quality before publication.",
            "Optimized operational processes.",
            "Facilitated stakeholder communication.",
          ],
        },
      ],
    },
    impacto: {
      bullets: [
        "Greater operational efficiency.",
        "Better coordination across teams.",
        "More organized processes.",
        "Consistent timeline compliance.",
        "Higher quality deliverables.",
      ],
    },
  },
  {
    id: "dattis",
    title: "Scaling Digital Strategy Across Multiple Brands",
    subtitle: "Managing multiple brands in a fast-paced agency environment.",
    client: "Dattis Comunicaciones",
    tabLabel: "Dattis",
    year: "2018",
    coverImage: "/images/other-projecto-1-imagen-2.jpg",
    gradient: "linear-gradient(160deg, #1A2E1A 0%, #2D4A2D 30%, #8B9D77 70%, #A8B89A 100%)",
    desafio: {
      text: "Simultaneously managing the digital strategies of brands such as Bavaria, EY, IQOS, BBC, Yamaha and Colsanitas required coordinating multiple campaigns, clients and business objectives in a highly dynamic environment.",
    },
    rol: {
      text: "I managed digital projects for different brands, coordinating strategy, communication, campaigns, performance analysis and client relationships.",
      blocks: [
        {
          title: "Responsibilities",
          bullets: [
            "Planned digital strategies.",
            "Coordinated campaigns.",
            "Managed multiple accounts simultaneously.",
            "Monitored performance metrics.",
            "Prepared client reports.",
            "Adjusted strategies based on data.",
            "Supported communication and PR campaigns.",
          ],
        },
      ],
    },
    impacto: {
      bullets: [
        "Successful execution of multiple simultaneous projects.",
        "Continuous optimization based on metrics.",
        "Greater consistency across campaigns.",
        "Scalable processes for digital operations.",
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
  tabLabel: string;
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
  tabLabel: string;
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
  tabLabel: string;
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
    client: "Mercado Libre",
    tabLabel: "Biblioteca de conocimiento",
    year: "",
    coverImage: "",
    gradient: "linear-gradient(160deg, #3A1A1A 0%, #8B4A2A 30%, #C4704A 70%, #D4896A 100%)",
    rol: {
      text: "Diseñé una biblioteca de conocimiento para un agente interno de reputación, con el objetivo de centralizar toda la información necesaria para que equipos internos pudieran entender cómo funciona el sistema de reputación dentro de Mercado Libre.\n\nEl proyecto consistió en estructurar y documentar la información clave del producto para que pudiera ser utilizada tanto por personas como por herramientas de Inteligencia Artificial.",
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
        "Preparar la información para su uso en herramientas de Inteligencia Artificial internas.",
      ],
    },
  },
  {
    type: "type2",
    id: "ai-proyecto-2",
    title: "Diseño de prompt para recomendaciones",
    client: "Mercado Libre",
    tabLabel: "Diseño de prompt",
    year: "2024–2025",
    coverImage: "",
    gradient: "linear-gradient(160deg, #1A1A2E 0%, #2D2D4A 30%, #5B5B8B 70%, #8B8BAB 100%)",
    rol: {
      text: "Diseñé el prompt utilizado por un agente de Inteligencia Artificial dentro del producto Experiencia de compra, cuyo objetivo era ofrecer a los vendedores recomendaciones para mejorar el desempeño de sus publicaciones.\n\nEl trabajo incluyó definir cómo debía interpretar la información del producto y cómo debía comunicar las recomendaciones a los vendedores.",
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
    title: "La IA en mi trabajo",
    client: "IA en mi workflow",
    tabLabel: "IA en mi workflow",
    year: "",
    coverImage: "",
    gradient: "linear-gradient(160deg, #2A1A2E 0%, #4A2D4A 30%, #8B5B8B 70%, #AB8BAB 100%)",
    description: "Uso Inteligencia Artificial para mejorar flujos de trabajo, acelerar la investigación, elevar la calidad de la comunicación y optimizar la ejecución de proyectos.\n\nAlgunos ejemplos:",
    blocks: [
      {
        bullets: [
          "Diseño e iteración de prompts.",
          "Evaluación de respuestas generadas por modelos.",
          "Generación de contenido y primeros borradores.",
          "Automatización de flujos de trabajo.",
          "Gestión y estructuración de conocimiento.",
          "Síntesis de research de usuarios.",
          "Documentación de producto y procesos.",
          "Colaboración entre equipos multidisciplinarios.",
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

export const aiProjectsEn: AIProject[] = [
  {
    type: "type1",
    id: "ai-proyecto-1",
    title: "Internal Agent – Knowledge Library",
    client: "Mercado Libre",
    tabLabel: "Knowledge Library",
    year: "",
    coverImage: "",
    gradient: "linear-gradient(160deg, #3A1A1A 0%, #8B4A2A 30%, #C4704A 70%, #D4896A 100%)",
    rol: {
      text: "I designed a knowledge library for an internal reputation agent, aiming to centralize all the information needed for internal teams to understand how the reputation system works within Mercado Libre.\n\nThe project involved structuring and documenting key product information so it could be used by both people and Artificial Intelligence tools.",
    },
    objetivoGeneral: {
      text: "Create a single source of knowledge about the reputation system that would allow:",
      blocks: [
        {
          bullets: [
            "Quickly looking up concepts and metrics.",
            "Understanding how related products work.",
            "Accessing previous content and design decisions.",
            "Enabling internal AI tools to use this information.",
          ],
        },
      ],
    },
    desafio: {
      text: "Information about reputation was spread across multiple documents and teams, making it difficult to:",
      blocks: [
        {
          bullets: [
            "Quickly understand the system.",
            "Reuse existing content.",
            "Maintain communication consistency.",
          ],
        },
        {
          text: "Additionally, to use this information in AI tools, the knowledge needed to be organized in a structured and clear way.",
        },
      ],
    },
    estrategia: {
      intro: "I designed a knowledge library structured in different layers:",
      blocks: [
        {
          title: "1. Product content",
          text: "Documentation of messages, use cases, and existing content within the reputation system.",
        },
        {
          title: "2. Glossary and terms",
          text: "Definition of key concepts used in the product.",
        },
        {
          title: "3. Voice and tone manual",
          text: "Guide for maintaining consistency in the reputation system's communication.",
        },
        {
          title: "4. Project registry",
          text: "Documentation of initiatives and product evolutions.",
        },
        {
          text: "This structure made it easy to navigate the information and reuse content across different contexts.",
        },
      ],
    },
    solucion: {
      intro: "The result was a centralized reputation library that included:",
      blocks: [
        {
          bullets: [
            "Product content.",
            "Definitions and glossary.",
            "Voice and tone manual.",
            "Project registry.",
            "Reusable resources.",
          ],
        },
        {
          text: "This system enabled different teams to quickly and consistently access information, and laid the foundation for using this knowledge in AI tools.",
        },
      ],
    },
    resultados: {
      bullets: [
        "Quick access to reputation information.",
        "Content reuse across teams.",
        "Greater consistency in product communication.",
        "Preparing information for use in internal AI tools.",
      ],
    },
  },
  {
    type: "type2",
    id: "ai-proyecto-2",
    title: "Prompt Design for Recommendations",
    client: "Mercado Libre",
    tabLabel: "Prompt Design",
    year: "2024–2025",
    coverImage: "",
    gradient: "linear-gradient(160deg, #1A1A2E 0%, #2D2D4A 30%, #5B5B8B 70%, #8B8BAB 100%)",
    rol: {
      text: "I designed the prompt used by an AI agent within the Buyer Experience product, whose goal was to provide sellers with recommendations to improve their listing performance.\n\nThe work included defining how the model should interpret the product information and how it should communicate recommendations to sellers.",
    },
    objetivoGeneral: {
      text: "Use AI to help sellers understand their main issues and receive actionable suggestions to improve the buyer experience of their listings.",
    },
    desafio: {
      text: "The main challenge was to get the AI to generate responses that were:",
      blocks: [
        {
          bullets: [
            "Clear.",
            "Actionable.",
            "Consistent with the product's voice.",
          ],
        },
        {
          title: "Additionally, it needed to avoid:",
          bullets: [
            "Unnecessary technical jargon.",
            "Ambiguous answers.",
            "Unhelpful recommendations.",
          ],
        },
      ],
    },
    estrategia: {
      intro: "I designed a prompt that included:",
      blocks: [
        {
          title: "1. Behavioral instructions",
          text: "I defined how the model should behave, prioritizing clear and useful responses for sellers.",
        },
        {
          title: "2. Language guidelines",
          text: "I included:",
          bullets: [
            "Recommended wording.",
            "Terms that should be avoided.",
            "Response structure.",
          ],
        },
        {
          title: "3. Product context",
          text: "The prompt included information about:",
          bullets: [
            "Buyer experience metrics.",
            "Common seller issues.",
            "Possible recommendations.",
          ],
        },
      ],
      images: [
        "/images/ai-projecto-2-imagen-1.png",
        "/images/ai-projecto-2-imagen-2.png",
      ],
    },
    iteracionPruebas: {
      intro: "I ran multiple prompt iterations using real seller cases, evaluating:",
      blocks: [
        {
          bullets: [
            "Response clarity.",
            "Recommendation usefulness.",
            "Tone consistency.",
          ],
        },
        {
          text: "I also worked on adapting the prompt to English.",
        },
      ],
    },
    herramientas: {
      intro: "During the process I used AI tools such as:",
      tools: [
        { name: "Gemini", description: "Prompt testing and response evaluation." },
        { name: "Claude", description: "Prompt testing and model behavior evaluation." },
        { name: "Cursor", description: "Rapid iteration and prompt adjustment in a development environment." },
        { name: "NotebookLM", description: "Knowledge organization and context testing." },
      ],
      blocks: [
        {
          text: "These tools allowed me to test different prompt approaches and evaluate model behavior.",
        },
      ],
    },
  },
  {
    type: "type3",
    id: "ai-en-mi-flujo",
    title: "AI in my workflow",
    client: "AI in my workflow",
    tabLabel: "AI in my workflow",
    year: "",
    coverImage: "",
    gradient: "linear-gradient(160deg, #2A1A2E 0%, #4A2D4A 30%, #8B5B8B 70%, #AB8BAB 100%)",
    description: "I use AI to improve workflows, accelerate research, enhance communication quality and optimize project execution.\n\nExamples include:",
    blocks: [
      {
        bullets: [
          "Prompt engineering.",
          "AI evaluation.",
          "Content generation.",
          "Workflow automation.",
          "Knowledge management.",
          "User research synthesis.",
          "Documentation.",
          "Cross-functional collaboration.",
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
