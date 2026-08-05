export const texts = {
navbar: {
  es: {
    home: "Inicio",
    services: "Proceso",
    projects: "Proyectos",
    contact: "Contacto",
  },
  en: {
    home: "Home",
    services: "Process",
    projects: "Projects",
    contact: "Contact",
  },
},

 hero: {
  es: {
    title: "Diseño productos digitales que conectan usuarios, negocio y tecnología.",
    subtitle:
      "Soy Product Designer especializada en crear experiencias digitales claras, escalables y centradas en el usuario. Diseño desde la estrategia hasta la interfaz final, colaborando con equipos de producto y desarrollo.",
    cta_primary: "Ver proyectos",
    cta_secondary: "Descargar CV",
  },

  en: {
    title: "I design digital products that connect users, business and technology.",
    subtitle:
      "I’m a Product Designer focused on creating clear, scalable and user-centered digital experiences. I design from strategy to final interface, collaborating with product and engineering teams.",
    cta_primary: "View projects",
    cta_secondary: "Download CV",
  },
},


services:{
es:[
{
icon:"FiLayers",
title:"Product Design",
desc:"Diseño productos digitales desde la definición del problema hasta soluciones listas para desarrollo, alineando usuarios y objetivos de negocio."
},

{
icon:"FiSmartphone",
title:"Apps y experiencias digitales",
desc:"Diseño experiencias móviles y web enfocadas en mejorar tareas frecuentes, usabilidad y adopción del producto."
},

{
icon:"FiRefreshCw",
title:"Optimización de productos",
desc:"Analizo productos existentes para identificar oportunidades, reducir fricción y mejorar la experiencia del usuario."
},

{
icon:"FiSettings",
title:"Design Systems",
desc:"Creo componentes y patrones escalables que permiten construir productos consistentes y eficientes."
}
],


en:[
{
icon:"FiLayers",
title:"Product Design",
desc:"I design digital products from problem definition to development-ready solutions, connecting users and business goals."
},

{
icon:"FiSmartphone",
title:"Apps & Digital Experiences",
desc:"I design mobile and web experiences focused on usability, adoption and improving frequent user tasks."
},

{
icon:"FiRefreshCw",
title:"Product Optimization",
desc:"I analyze existing products to identify opportunities, reduce friction and improve user experience."
},

{
icon:"FiSettings",
title:"Design Systems",
desc:"I create scalable components and patterns that help teams build consistent digital products."
}
]
},
projects: {
  es: {
    title: "Casos de estudio",
    subtitle:
      "Productos digitales diseñados desde la investigación, definición de problemas y creación de soluciones escalables.",
    view_case: "Ver caso de estudio →",

    list: [
      

      {
        title: "Sabores del Istmo — Plataforma POS",
        desc:
          "Diseño de una herramienta digital para ventas, inventario y operaciones, optimizada para uso diario en tablet.",
        tag: "Enterprise · POS",
      },

      
      {
        title: "Monix — Producto financiero móvil",
        desc:
          "Diseño de una experiencia móvil para gestión financiera personal, enfocada en claridad, automatización y reducción de fricción.",
        tag: "Mobile App · Fintech",
      },
      {
        title: "TicTeams — Rediseño de experiencia digital",
        desc:
          "Rediseño de plataforma web para mejorar estructura, navegación y comunicación del valor del producto.",
        tag: "Web Experience",
      },
    ],
  },


  en: {
    title: "Product Case Studies",
    subtitle:
      "Digital products designed through research, problem definition and scalable solutions.",
    view_case: "View case study →",

    list: [
      {
        title: "Monix — Mobile Finance Product",
        desc:
          "Design of a personal finance experience focused on clarity, automation and reducing friction in daily tasks.",
        tag: "Mobile App · Fintech",
      },

      {
        title: "Sabores del Istmo — POS Platform",
        desc:
          "Design of a digital tool for sales, inventory and operations, optimized for daily tablet usage.",
        tag: "Enterprise · POS",
      },

      {
        title: "TicTeams — Digital Experience Redesign",
        desc:
          "Website redesign focused on improving structure, navigation and value communication.",
        tag: "Web Experience",
      },
    ],
  },
},
testimonials: {
es:{
title:"Colaboraciones",
subtitle:"Experiencias trabajando con equipos y organizaciones en productos digitales.",
    list: [
      {
        logo: "/ticteams/logo-removebg-preview.png",
        name: "Ticteams",
        role: "Gerencia General",
        text: "“Yeraldin ha demostrado un nivel excepcional de profesionalismo, dedicación y atención al detalle en cada proyecto. Sus propuestas de diseño y su visión para mejorar la experiencia de usuario fueron clave para optimizar nuestra marca y renovar nuestro sitio web. Además, aportó mejoras significativas en los diseños de nuestros proyectos de desarrollo. Recomendamos completamente su trabajo y experiencia en proyectos de UX/UI.”",
      },
      {
        logo: "/sabores/logo-sabores.svg",
        name: "Sabores del Istmo",
        role: "Transformación Digital",
        text: "“Gracias al diseño logramos una experiencia más intuitiva y mayor adopción móvil.”",
      },
      {
        logo: "/logos/shaik.png",
        name: "Shaik Asesores",
        role: "CEO",
        text: "“Una web moderna, clara y funcional. Ahora transmitimos confianza y profesionalismo.”",
      },
    ],
  },

  en:{
title:"Collaborations",
subtitle:"Experiences working with teams and organizations on digital products.",
    list: [
      {
        logo: "/ticteams/logo-removebg-preview.png",
        name: "Ticteams",
        role: "General Management",
        text: "“She has shown an exceptional level of professionalism, dedication, and attention to detail in every project. Her design proposals and vision for enhancing the user experience were key in improving our brand and redesigning our website. She also contributed meaningful improvements to the design of our development projects. We fully recommend her work and expertise in UX/UI projects”",
      },
      {
        logo: "/logos",
        name: "Coopeve",
        role: "Digital Transformation",
        text: "“The redesign led to a more intuitive experience and increased mobile adoption.”",
      },
      {
        logo: "/logos/regeneration.png",
        name: "Regeneration Clinic",
        role: "CEO",
        text: "“A modern and clear website that communicates trust and professionalism.”",
      },
    ],
  },
},


cases: {
sabores:{
es:{
title:"Diseño de producto: Sistema POS para optimizar operaciones comerciales",

subtitle:
"Creación de una solución digital para ventas, inventario y gestión operativa enfocada en mejorar eficiencia y reducir fricción en tareas diarias.",


ctx_title:"Contexto del producto",

contexto:
"Sabores del Istmo necesitaba evolucionar sus procesos operativos mediante una herramienta digital que permitiera centralizar ventas, productos e inventario. El reto consistía en diseñar una experiencia simple para usuarios que realizan tareas repetitivas durante su jornada.",


prob_title:"Desafío",

problema:[
"Los procesos manuales generaban errores y poca visibilidad operativa.",
"Las tareas frecuentes requerían demasiado tiempo.",
"Era necesario crear una experiencia rápida para usuarios no técnicos.",
"El sistema debía adaptarse a un entorno de uso con tablet."
],


biz_title:"Objetivo del producto",

objetivo:
"Diseñar un sistema POS intuitivo que permitiera gestionar ventas e inventario de manera eficiente, reduciendo esfuerzo operativo y facilitando la adopción del producto.",


role_title:"Mi rol como Product Designer",

role:
"Responsable del diseño de experiencia del producto, definición de flujos principales, arquitectura de información y diseño de interfaces orientadas a las necesidades reales del negocio.",


process_title:"Proceso de diseño",

process:[
"Análisis de necesidades operativas y principales usuarios.",
"Definición de flujos críticos del producto.",
"Organización de información y jerarquía de acciones.",
"Diseño de interfaz optimizada para interacción táctil.",
"Preparación de componentes reutilizables."
],


decisions_title:"Decisiones de producto",

decisions:[
"Se priorizaron las acciones más frecuentes para reducir tiempo operativo.",
"Se simplificaron flujos con múltiples pasos.",
"Se creó una estructura modular para permitir crecimiento futuro.",
"Se diseñaron patrones consistentes para facilitar aprendizaje."
],


ux_title:"Objetivos de experiencia",

ux:[
"Reducir fricción en tareas diarias.",
"Facilitar aprendizaje del sistema.",
"Mejorar velocidad de operación.",
"Crear una experiencia escalable."
],


gallery_title:"Diseño de la solución",

gallery_intro:
"Las pantallas muestran la evolución del producto desde acceso, operación de venta, administración y gestión interna.",


results_title:"Impacto esperado",

results:[
"Mayor eficiencia operativa.",
"Reducción de errores manuales.",
"Menor curva de aprendizaje.",
"Mejor control sobre procesos comerciales."
],


closing_title:"Conclusión",

closing:
"Este proyecto demuestra mi enfoque como Product Designer: transformar necesidades operativas en experiencias digitales funcionales que generan valor tanto para usuarios como para negocio."
}
},
 ticteams:{
es:{
title:
"Product Design: Evolución de experiencia digital para TicTeams",

subtitle:
"Rediseño estratégico de plataforma web para mejorar comprensión de servicios, percepción de marca y conversión de usuarios.",


contexto_title:"Contexto del producto",

contexto:
"TicTeams necesitaba fortalecer su presencia digital para comunicar soluciones tecnológicas de forma más clara. El desafío era transformar una experiencia informativa en una plataforma más estructurada y orientada a usuarios potenciales.",


prob_title:"Desafío",

problema:[
"La información estaba distribuida sin una jerarquía clara.",
"Los usuarios tenían dificultad para comprender la propuesta de valor.",
"La experiencia visual no reflejaba el posicionamiento tecnológico.",
"Existían oportunidades para mejorar navegación y conversión."
],


biz_title:"Objetivo del producto",

objetivo:
"Crear una experiencia digital más clara que ayudara a los usuarios a entender los servicios, aumentar confianza y facilitar la toma de decisión.",


role_title:"Mi rol como Product Designer",

role:
"Trabajé en la definición de estructura, experiencia de navegación, jerarquía de contenido y diseño visual para construir una experiencia digital alineada con objetivos comerciales.",


ux_title:"Objetivos UX",

ux:[
"Mejorar comprensión de servicios.",
"Reducir carga cognitiva.",
"Crear una navegación más intuitiva.",
"Fortalecer percepción profesional."
],


process_title:"Proceso",

process:[
"Auditoría de experiencia existente.",
"Análisis de problemas de estructura y contenido.",
"Redefinición de arquitectura de información.",
"Diseño de nueva interfaz y componentes."
],


decisions_title:"Decisiones de diseño",

decisions:[
"Se reorganizó contenido según necesidades del usuario.",
"Se creó una jerarquía visual más clara.",
"Se utilizaron patrones consistentes para generar confianza.",
"Se optimizó la comunicación del valor del producto."
]
}
},
monix:{
es:{
title:
"Diseño de producto fintech: Gestión inteligente de finanzas personales",

subtitle:
"Diseño de una aplicación móvil enfocada en simplificar registro de gastos, visualización financiera y automatización de tareas.",


context_title:"Contexto del producto",

context:
"Monix nace como una exploración de producto enfocada en resolver una necesidad frecuente: ayudar a las personas a comprender y controlar mejor sus finanzas personales.",


problem_title:"Problema",

problem:[
"Registrar gastos manualmente puede generar abandono.",
"Los usuarios necesitan información financiera fácil de interpretar.",
"Las tareas repetitivas representan oportunidades de automatización.",
"Existe necesidad de mayor control financiero."
],


product_goal_title:"Objetivo del producto",

product_goal:
"Diseñar una experiencia móvil que permita registrar movimientos financieros rápidamente, visualizar información relevante y reducir esfuerzo mediante automatización.",


role_title:"Mi rol como Product Designer",

role:
"Diseñé la experiencia end-to-end del producto, definiendo flujos, arquitectura de información, interacción y diseño visual de la aplicación.",


decisions_title:"Decisiones de producto",

decisions:[
"Se priorizaron acciones frecuentes desde el dashboard.",
"Se redujo fricción en registro de gastos.",
"Se incorporó automatización mediante lectura de recibos.",
"Se diseñaron estados claros para generar confianza."
],


flow_title:"Flujo principal del producto",

flow_intro:
"El flujo representa la experiencia completa del usuario desde acceso hasta registro automático y actualización financiera.",


results_title:"Impacto esperado",

results:[
"Menor tiempo para registrar gastos.",
"Mayor claridad financiera.",
"Experiencia más simple y automatizada.",
"Mayor sensación de control."
],


closing_title:"Conclusión",

closing:
"Este caso representa mi enfoque de Product Design: crear soluciones digitales donde experiencia, tecnología y objetivos de negocio trabajan juntos."
}
}
},
footer: {
  es: {
    about: "Diseño UX/UI profesional para apps móviles, dashboards y sistemas digitales.",
    nav_title: "Navegación",
    contact_title: "Contacto",
    location: "Panamá, PA",
    email: "Correo: contacto@yerux.com",
    rights: "Todos los derechos reservados.",
  },
  en: {
    about: "Professional UX/UI design for mobile apps, dashboards and digital systems.",
    nav_title: "Navigation",
    contact_title: "Contact",
    location: "Panama, PA",
    email: "Email: contacto@yerux.com",
    rights: "All rights reserved.",
  },
},
contact: {
  es: {
    title: "Hablemos sobre tu proyecto",
    subtitle: "Cuéntame qué necesitas y te responderé en menos de 24 horas.",
    name: "Nombre completo",
    email: "Correo electrónico",
    message: "Cuéntame sobre tu proyecto...",
    cta: "Enviar mensaje",
    success: "Mensaje enviado correctamente",
  },
  en: {
    title: "Let's talk about your project",
    subtitle: "Tell me what you need and I’ll reply in less than 24 hours.",
    name: "Full name",
    email: "Email address",
    message: "Tell me about your project...",
    cta: "Send message",
    success: "Message sent successfully",
  },
},
about: {

es: {

sectionLabel: "Sobre mí",

title:
"Soy Product Designer enfocada en crear experiencias digitales simples para productos complejos.",


p1:
"Diseño productos digitales combinando estrategia, investigación, experiencia de usuario e interfaces visuales. Mi enfoque busca conectar las necesidades del usuario con los objetivos del negocio.",


p2:
"Tengo experiencia diseñando aplicaciones móviles, dashboards, sistemas POS y plataformas digitales. Trabajo desde la definición del problema hasta la entrega de soluciones listas para desarrollo.",


p3:
"Me interesa crear productos claros, escalables y fáciles de usar, colaborando con equipos multidisciplinarios para transformar ideas en experiencias digitales funcionales.",


ctaProjects:
"Ver proyectos",

ctaWhatsapp:
"Contactar",


sideTitle:
"Especialidades",

sideList:[
"Product Design",
"UX Research",
"Interaction Design",
"Design Systems",
"Prototipado en Figma",
"Colaboración con desarrollo"
],


sideFooter:
"Diseño productos digitales con enfoque estratégico, claridad visual y soluciones escalables.",


whatsappMessage:
"Hola, vi tu portafolio y me gustaría conocer más sobre tu experiencia como Product Designer."
},



en: {

sectionLabel:"About me",

title:
"I’m a Product Designer focused on creating simple experiences for complex products.",


p1:
"I design digital products by combining strategy, research, user experience and visual design. My approach connects user needs with business goals.",


p2:
"I have experience designing mobile apps, dashboards, POS systems and digital platforms. I work from problem definition to development-ready solutions.",


p3:
"I enjoy creating clear, scalable and easy-to-use products while collaborating with multidisciplinary teams to transform ideas into meaningful experiences.",


ctaProjects:
"View projects",

ctaWhatsapp:
"Contact me",


sideTitle:
"Expertise",

sideList:[
"Product Design",
"UX Research",
"Interaction Design",
"Design Systems",
"Figma Prototyping",
"Developer Collaboration"
],


sideFooter:
"I design digital products with strategic thinking, visual clarity and scalable solutions.",


whatsappMessage:
"Hi, I saw your portfolio and would like to know more about your Product Designer experience."
}

},
  differentials: {
  es: {
    title: "¿Por qué trabajar conmigo?",
    subtitle:
      "Aporto claridad, estrategia y diseño profesional para elevar tu producto digital con enfoque en resultados.",
    list: [
      "Diseño estratégico enfocado en objetivos reales.",
      "Experiencia creando webs, apps y sistemas internos.",
      "Interfaces modernas, limpias y fáciles de usar.",
      "Entregables organizados y listos para desarrollo.",
      "Design systems escalables y componentes en Figma.",
      "Comunicación clara, rápida y profesional.",
    ],
  },

  en: {
    title: "Why work with me?",
    subtitle:
      "I bring clarity, strategy and professional UX/UI design to elevate your digital product with a results-driven approach.",
    list: [
      "Strategic design aligned with real business goals.",
      "Experience designing websites, apps and internal systems.",
      "Modern, clean and easy-to-use interfaces.",
      "Organized deliverables ready for development.",
      "Scalable design systems and Figma components.",
      "Clear, fast and professional communication.",
    ],
  },
},

};