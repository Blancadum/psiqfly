// 1. IMPORTACIÓN ESTÁTICA: Next.js necesita saber dónde está la imagen en tiempo de compilación
import diplomaIronhack from '@/assets/images/certificates/diploma-ironhack.webp';

export const IT_EDUCATION_DATA = [
  {
    year: 'En curso',
    title: 'CFGS Desarrollo de Aplicaciones Web',
    institution: 'IOC',
    perfilProfesional: 'Capacita para crear, mantener y asegurar aplicaciones web, garantizando accesibilidad y calidad.',
    link: 'https://www.todofp.es/que-estudiar/familias-profesionales/informatica-comunicaciones/des-aplicaciones-web.html',
    salidasProfesionales:'Desarrollador Web, Ingeniero de Software, Especialista en Seguridad Informática',
    skills: [
      { icon: '⚙️', label: 'Programación Orientada a Objetos', desc: 'Java, lógica de backend y estructuración robusta. Uso intensivo de Java, Java Enterprise Edition (JEE) y Spring.' },
      { icon: '🌐', label: 'Desarrollo Fullstack', desc: 'HTML, CSS, JS, Interfaces, Bases de Datos Relacionales y despliegue.' },
      { icon: '🔧', label: 'Resolución Técnica', desc: 'Metodología de depuración e investigación autónoma.' },
      { icon: '📐', label: 'Arquitectura de Software', desc: 'Patrones MVC y buenas prácticas de código limpio.' },
      { icon: '📐', label: 'Especialización', desc: 'Modulos de diseño de interfaces web, accesibilidad y usabilidad.' },
    ],
  },
  {
    year: '2026',
    title: 'IFCD052PO - Programación en Java',
    institution: 'Defoin',
    link: 'https://sede.sepe.gob.es/especialidadesformativas/RXBuscadorEFRED/DetalleEspecialidad.do?codEspecialidad=IFCD052PO',
    skills: [
      { icon: '⚙️', label: 'Fundamentos de Java', desc: 'Introducción a la programación, algoritmos y paradigmas (imperativa, funcional, POO)' },
      { icon: '🧩', label: 'Programación Orientada a Objetos (POO)', desc: 'Clases, herencia, polimorfismo, interfaces y uso avanzado de clases.' },
      { icon: '🌐', label: 'Estructuras de Datos', desc: 'Manejo de arrays, cadenas de caracteres y colecciones de datos.' },
      { icon: '🌐', label: 'Manejo de Información', desc: 'Lectura/escritura de ficheros, flujos (streams) y creación de interfaces gráficas básicas'},
      { icon: '🌐', label: 'Persistencia y Bases de Datos', desc: 'Gestión de bases de datos relacionales, acceso mediante JDBC y mantenimiento de objetos'},
    ],
  },
    {
    year: '2025',
    title: 'IFCD0110 - Confección y publicación de páginas web',
    institution: 'Cum Laude',
    link: 'https://sede.sepe.gob.es/especialidadesformativas/RXBuscadorEFRED/DetalleEspecialidad.do?codEspecialidad=IFCD0110', 
    skills: [
      { icon: '⚙️', label: 'MF0950_2: Construcción de páginas web', desc: 'Lenguajes CSS, HTML, Javascript.' },
      { icon: '🧩', label: 'MF0951_2: Integración de componentes', desc: 'Integración de elementos software y multimedia en páginas web.' },
      { icon: '🌐', label: 'MF0952_2: Publicación de páginas web', desc: 'Subida, testeo y mantenimiento en servidores web.' },
    ],
  },
  {
    year:'2024',
    title: 'IFCT0019 - Inteligencia Artificial Aplicada a la Empresa',
    institution: 'Grupo Hedima',
    link: 'https://sede.sepe.gob.es/es/portaltrabaja/resources/pdf/especialidades/IFCT0019.pdf',
    skills: [
      { icon: '🤖', label: 'Fundamentos de IA', desc: 'Conceptos clave de Inteligencia Artificial, Machine Learning y Deep Learning aplicados al negocio.' },
      { icon: '🚀', label: 'Productividad y Automatización', desc: 'Uso de herramientas de IA generativa (ChatGPT, Copilot) para optimizar procesos corporativos.' },
      { icon: '⚖️', label: 'Estrategia y Ética de Datos', desc: 'Implementación estratégica de soluciones IA garantizando la privacidad y el uso ético de la información.' },
    ]
  },
  {
    year: '2024',
    title: 'Bootcamp Desarrollo Web Fullstack',
    institution: 'Ironhack',
    perfilProfesional: 'Especialista en desarrollo web fullstack.',
    link: 'https://www.ironhack.com/',
    // 2. CAMBIO CLAVE: Usamos la variable importada directamente
    image: diplomaIronhack,
    salidasProfesionales: 'Desarrollador Web, Ingeniero de Software, Especialista en Seguridad Informática',
    note: 'Becada por mérito',
    skills: [
      { icon: '⚛️', label: 'React & Hooks', desc: 'Componentes funcionales, useState, useEffect, Context API y SPAs con React Router.' },
      { icon: '🎨', label: 'Maquetación & Estilos', desc: 'Tailwind CSS y Bootstrap para interfaces responsivas y adaptadas a cualquier dispositivo.' },
      { icon: '🔌', label: 'Conexión con APIs', desc: 'Consumo de APIs REST externas con fetch/axios, manejo de promesas y gestión de errores.' },
      { icon: '💾', label: 'Persistencia en Local Storage', desc: 'Guardado y recuperación de datos en el navegador sin necesidad de backend.' },
      { icon: '🖥️', label: 'Backend con Node.js & Express', desc: 'Creación de servidores, rutas, middlewares y endpoints REST.' },
      { icon: '🗄️', label: 'Bases de Datos', desc: 'MongoDB con Mongoose: modelado de datos, CRUD y relaciones entre colecciones.' },
      { icon: '🔐', label: 'Autenticación', desc: 'JWT, bcrypt, sesiones y control de acceso en aplicaciones fullstack.' },
      { icon: '🚀', label: 'Metodologías Ágiles', desc: 'Sprints, pair programming, Git colaborativo y entrega iterativa de proyectos.' },
    ],
  },
  {
    year: '2024',
    title: 'Máster en SEO y Marketing Digital',
    institution: 'Bigschool',
    perfilProfesional: 'Especialista en optimización de sitios web y estrategias de marketing digital.',
    link: 'https://www.bigschool.es/',
    salidasProfesionales: 'Especialista en SEO, Community Manager, Especialista en Marketing Digital',
    skills: [
      { icon: '🔍', label: 'SEO Técnico', desc: 'Arquitectura web, velocidad de carga, rastreo e indexación.' },
      { icon: '📝', label: 'Estrategia de Contenidos', desc: 'Keyword research, clustering semántico y redacción optimizada.' },
      { icon: '📈', label: 'Analítica Digital', desc: 'Google Search Console, GA4 y métricas de rendimiento orgánico.' },
      { icon: '🔗', label: 'Link Building', desc: 'Estrategias de autoridad, perfil de enlaces y posicionamiento.' },
      { icon: '📊', label: 'Marketing Automation', desc: 'Herramientas de automatización de marketing y gestión de campañas.' },
      { icon: '📈', label: 'Auditoría web', desc: 'Evaluación y mejora del rendimiento de sitios web. Crawling profundo con herramientas especializadas.' }
    ],
  },
];