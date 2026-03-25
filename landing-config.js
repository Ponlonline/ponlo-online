window.PONLO_DEFAULT_CONFIG = {
  brand: {
    name: "Ponlonline",
    logoUrl: "favicon.svg",
    nav: [
      { label: "Inicio", href: "#inicio" },
      { label: "Resultados", href: "#resultados" },
      { label: "Proyectos", href: "#proyectos" },
      { label: "Precios", href: "#precios" },
      { label: "Contacto", href: "#contacto" }
    ],
    headerButton: {
      label: "WhatsApp",
      url: "https://wa.me/584121234567?text=Hola,%20quiero%20una%20web%20premium%20para%20mi%20negocio"
    }
  },
  hero: {
    eyebrow: "Ponlonline",
    title: "Tu negocio abierto 24/7, visible en Google y WhatsApp.",
    slogan: "Ponlonline crea tu web profesional, te pone en Google y conecta tus clientes directo a WhatsApp.",
    description:
      "Diseñamos páginas rápidas y profesionales para emprendedores que quieren dejar de depender solo de Instagram. Con panel admin para que edites tu contenido, analíticas para medir resultados y botón de WhatsApp para cerrar ventas.",
    primaryCta: {
      label: "Quiero mi web",
      url: "https://wa.me/584121234567?text=Hola,%20quiero%20mi%20web%20con%20Ponlonline"
    },
    secondaryCta: {
      label: "Ver paquetes",
      url: "#precios"
    }
  },
  radar: {
    title: "¿Por qué necesitas una web?",
    period: "Venezuela 2026",
    metrics: [
      { label: "PYMEs sin web que pierden ventas", value: "68%", fill: 68, color: "orange" },
      { label: "Emprendedores que planean digitalizarse", value: "99%", fill: 99, color: "pink" },
      { label: "Crecimiento e-commerce VZ 2026", value: "+7%", fill: 70, color: "cyan" }
    ]
  },
  projectsSection: {
    heading: "Nuestro portafolio",
    description:
      "Sitios web reales que hemos creado para negocios en Venezuela y Latinoamérica. Cada uno diseñado para convertir visitantes en clientes."
  },
  insightsSection: {
    heading: "Lo que incluye cada web de Ponlonline",
    description:
      "No es solo una página bonita: cada sitio viene con SEO, analíticas, panel admin, WhatsApp integrado, hosting incluido y la velocidad que tus clientes necesitan."
  },
  insightsMetrics: [
    {
      label: "Tiempo de entrega",
      value: "48 hrs",
      delta: "No semanas",
      context: "Tu web lista en 2 días, no en 2 meses como otras agencias"
    },
    {
      label: "SEO + Analytics",
      value: "Incluido",
      delta: "Aparece en Google",
      context: "SEO optimizado, Google Analytics y Meta Pixel configurados desde el día 1"
    },
    {
      label: "Velocidad de carga",
      value: "< 1 seg",
      delta: "Sitios estáticos",
      context: "Sin WordPress lento — tu web carga al instante incluso con internet lento"
    },
    {
      label: "Todo incluido",
      value: "0 sorpresas",
      delta: "Hosting + dominio + soporte",
      context: "Un solo pago mensual y nosotros nos encargamos de todo"
    }
  ],
  aiLoop: {
    title: "¿Por qué Ponlonline y no Instagram solamente?",
    period: "Datos 2026",
    actions: [
      {
        trigger: "Solo 2-3% de tus seguidores ven tus posts",
        action: "Una web aparece en Google cuando buscan lo que vendes",
        impact: "Clientes nuevos que no te siguen te encuentran"
      },
      {
        trigger: "Instagram puede cerrar tu cuenta mañana",
        action: "Tu web es tuya — nadie te la puede quitar",
        impact: "Tu negocio no depende de una red social"
      },
      {
        trigger: "Pierdes ventas a las 2am porque no contestas DMs",
        action: "Tu web muestra catálogo + precios + WhatsApp 24/7",
        impact: "Vendes mientras duermes"
      }
    ]
  },
  projects: [
    {
      id: "el-fogon-criollo",
      title: "El Fogón Criollo",
      description: "Restaurante de comida criolla venezolana con menú interactivo, galería y reservas por WhatsApp.",
      imageUrl: "images/portfolio-fogon-criollo.png",
      videoUrl: "",
      tags: ["Restaurante", "Menú digital", "WhatsApp"],
      linkUrl: "https://el-fogon-criollo.netlify.app"
    },
    {
      id: "sparklehats",
      title: "SparkleHats",
      description: "Tienda de gorras premium con piedrería Swarovski. Catálogo visual y carrito de compras.",
      imageUrl: "images/portfolio-sparklehats.png",
      videoUrl: "",
      tags: ["E-commerce", "Moda", "Catálogo"],
      linkUrl: "https://sparklehats-shop.netlify.app"
    },
    {
      id: "techzone",
      title: "TechZone",
      description: "Tienda de componentes de PC en Guayaquil. Catálogo por categorías con marcas reconocidas.",
      imageUrl: "images/portfolio-techzone.png",
      videoUrl: "",
      tags: ["Tecnología", "E-commerce", "Catálogo"],
      linkUrl: "https://techzone-ponlonline.netlify.app"
    },
    {
      id: "rafaga",
      title: "Ráfaga",
      description: "Moda femenina venezolana con colecciones elegantes y pedidos directos por WhatsApp.",
      imageUrl: "images/portfolio-rafaga.png",
      videoUrl: "",
      tags: ["Moda", "Landing", "WhatsApp"],
      linkUrl: "https://rafagavzla.netlify.app"
    }
  ],
  pricingSection: {
    heading: "Planes para cada etapa de tu negocio",
    description:
      "Empieza con lo que necesitas hoy y crece cuando estés listo. Sin contratos largos, sin sorpresas, todo incluido."
  },
  pricingPlans: [
    {
      badge: "Starter",
      title: "Presencia",
      price: "USD 150",
      priceSuffix: "único + USD 20/mes",
      description: "Para emprendedores que quieren verse profesionales y tener su link propio.",
      features: [
        "Landing page profesional (1-3 secciones)",
        "Diseño mobile-first optimizado",
        "Botón de WhatsApp integrado",
        "Hosting + dominio incluido",
        "SEO básico (meta tags + Schema.org)",
        "Google Analytics incluido",
        "Soporte por WhatsApp"
      ],
      featured: false
    },
    {
      badge: "Más vendido",
      title: "Negocio",
      price: "USD 350",
      priceSuffix: "único + USD 45/mes",
      description: "Para negocios que quieren aparecer en Google y tener su catálogo online.",
      features: [
        "Sitio completo (5-8 secciones)",
        "Panel admin — edita tú mismo sin código",
        "Catálogo de productos o servicios",
        "SEO completo + Google My Business configurado",
        "Google Analytics + Meta Pixel instalados",
        "Sitemap + robots.txt optimizados",
        "Reporte mensual de visitas"
      ],
      featured: true
    },
    {
      badge: "Pro",
      title: "Tienda",
      price: "USD 700",
      priceSuffix: "único + USD 75/mes",
      description: "Para negocios que quieren recibir pedidos y vender online 24/7.",
      features: [
        "Todo lo del plan Negocio",
        "Sistema de pedidos y cotizaciones online",
        "WhatsApp automático con detalle del pedido",
        "Galería con filtros y búsqueda",
        "Google Ads + Meta Ads tracking configurado",
        "Soporte prioritario + analíticas de ventas"
      ],
      featured: false
    }
  ],
  processSection: {
    heading: "Así de fácil es tener tu web",
    description: "Tú nos das tu info y fotos. Nosotros nos encargamos de todo lo demás."
  },
  processSteps: [
    {
      title: "Cuéntanos tu negocio",
      description: "Nos escribes por WhatsApp, nos cuentas qué vendes y nos envías tus fotos y logo."
    },
    {
      title: "Diseñamos tu web",
      description: "En 48 horas tienes tu sitio listo para revisar, con tu marca y tu catálogo."
    },
    {
      title: "Publicamos y conectamos",
      description: "Activamos tu dominio, Google Analytics, WhatsApp y tu panel para editar contenido."
    },
    {
      title: "Creces con datos",
      description: "Cada mes recibes un reporte de visitas y te ayudamos a mejorar lo que haga falta."
    }
  ],
  cta: {
    heading: "¿Listo para que tu negocio tenga su propia web profesional?",
    description:
      "Escríbenos por WhatsApp, cuéntanos qué vendes y en 48 horas tienes tu sitio listo. Sin complicaciones, sin letra pequeña.",
    primaryCta: {
      label: "WhatsApp",
      url: "https://wa.me/584121234567?text=Hola,%20quiero%20mi%20web%20con%20Ponlonline"
    },
    secondaryCta: {
      label: "Correo",
      url: "mailto:sebas@ponlonline.com"
    },
    chips: ["+58 412-123-4567", "sebas@ponlonline.com", "Venezuela"]
  },
  footerText: "Ponlonline · {{year}} · Webs profesionales para emprendedores"
};
