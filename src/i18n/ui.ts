/* ============================================================
   UNIVERSE OF MEL — UI copy, both locales side by side.

   Every user-facing string that is NOT project content lives here.
   Keeping en/es adjacent makes a missing translation a type error
   instead of a silent English leak on the Spanish site.
   ============================================================ */

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
};

/** Short label used inside the locale switch. */
export const localeShort: Record<Locale, string> = {
  en: 'EN',
  es: 'ES',
};

export const ui = {
  en: {
    /* ---- Global ---- */
    'site.name': 'Mel Bueno',
    'site.role': 'Cloud & DevOps Engineer',
    'site.title': 'Mel Bueno — Cloud, DevOps & Platform Engineer',
    'site.description':
      'Mel Bueno builds scalable cloud infrastructure, automation platforms and AI-powered products. Case studies in AWS, GCP, Azure, Terraform, Kubernetes and CI/CD.',
    'site.universe': 'Universe of Mel',

    /* ---- Navigation ---- */
    'nav.work': 'Work',
    'nav.expertise': 'Expertise',
    'nav.experience': 'Experience',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.labs': 'Labs',
    'nav.beyond': 'Beyond',
    'nav.menu': 'Menu',
    'nav.open': 'Open menu',
    'nav.close': 'Close menu',
    'nav.language': 'Language',
    'nav.skip': 'Skip to content',

    /* ---- Hero ---- */
    'hero.eyebrow': 'Universe of Mel — Technology',
    'hero.roles': 'Cloud Engineer · DevOps Engineer · Platform Engineer · AI Solutions',
    'hero.lead':
      'Building scalable cloud infrastructure, automation and intelligent digital products.',
    'hero.cta.primary': 'Explore my work',
    'hero.cta.secondary': 'Discover the universe',
    'hero.scroll': 'Scroll',

    /* ---- Proof strip ---- */
    'proof.eyebrow': 'At a glance',
    'proof.years.value': '3+',
    'proof.years.label': 'Years shipping to production',
    'proof.clouds.value': '3',
    'proof.clouds.label': 'Clouds in production: AWS · GCP · Azure',
    'proof.projects.value': '6',
    'proof.projects.label': 'Platforms designed and delivered',
    'proof.controls.value': '21',
    'proof.controls.label': 'Security controls verified for SOC 2',

    /* ---- About ---- */
    'about.eyebrow': 'About',
    'about.title': 'Engineering that holds up in production.',
    'about.p1':
      'I build cloud infrastructure, automation platforms and AI-powered applications — from serverless backends on AWS to multi-tenant data isolation and CI/CD pipelines teams actually trust.',
    'about.p2':
      'I enjoy solving complex operational problems with elegant engineering solutions: blue-green migrations that make rollback a DNS change, idempotent flows that never leave orphaned records, and infrastructure described entirely as code.',
    'about.p3':
      'Outside technology I teach dance, study music and document everything I learn. That world has its own space —',
    'about.p3.link': 'the Universe',
    'about.p3.end': '.',

    /* ---- Featured work ---- */
    'work.eyebrow': 'Selected work',
    'work.title': 'Case studies, not screenshots.',
    'work.lead':
      'Every project below shows the problem, the architecture and the decisions behind it — so you can judge how I think, not just what I shipped.',
    'work.filter.all': 'All',
    'work.problem': 'Problem',
    'work.solution': 'Solution',
    'work.architecture': 'Architecture',
    'work.stack': 'Stack',
    'work.impact': 'Impact',
    'work.role': 'Role',
    'work.context': 'Context',
    'work.decisions': 'Key decisions',
    'work.challenges': 'Challenges',
    'work.learnings': 'What I learned',
    'work.cta': 'View case study',
    'work.back': 'All work',
    'work.next': 'Next case study',
    'work.confidential': 'Client details anonymised under NDA.',

    /* ---- Categories ---- */
    'cat.enterprise': 'Enterprise solutions',
    'cat.enterprise.desc': 'Production platforms for funds, insurers and distributors.',
    'cat.cloud': 'Cloud & DevOps',
    'cat.cloud.desc': 'Infrastructure as code, pipelines, security and observability.',
    'cat.freelance': 'Freelance websites',
    'cat.freelance.desc': 'Landing pages, corporate sites and internal tools.',
    'cat.personal': 'Personal projects',
    'cat.personal.desc': 'Things I build to learn in public.',

    /* ---- Cloud & DevOps capability ---- */
    'cloud.eyebrow': 'Cloud & DevOps',
    'cloud.title': 'Infrastructure as a product, not a side effect.',
    'cloud.lead':
      'Environments that are reproducible, isolated per stage and safe to change on a Friday afternoon.',
    'cloud.iac.title': 'Infrastructure as Code',
    'cloud.iac.desc':
      'Terraform, Pulumi and AWS SAM. Every environment reproducible from a repository, never from a console click.',
    'cloud.cicd.title': 'CI/CD & GitOps',
    'cloud.cicd.desc':
      'GitHub Actions, GitLab CI and Jenkins. Branch-per-environment deploys, blue-green cutovers, trivial rollback.',
    'cloud.containers.title': 'Containers & orchestration',
    'cloud.containers.desc':
      'Docker, Kubernetes, AKS and Cloud Run. Serverless first, containers when the workload earns them.',
    'cloud.security.title': 'Security & compliance',
    'cloud.security.desc':
      'KMS encryption at rest, managed secrets, least-privilege roles and PostgreSQL Row-Level Security for real multi-tenant isolation.',
    'cloud.observability.title': 'Observability',
    'cloud.observability.desc':
      'CloudWatch and Grafana dashboards, structured logs and alerts that point at a cause instead of a symptom.',
    'cloud.reliability.title': 'Reliability patterns',
    'cloud.reliability.desc':
      'Retries with backoff and jitter, circuit breakers, idempotency keys and reconciliation jobs for anything that moves money.',

    /* ---- Experience ---- */
    'exp.eyebrow': 'Experience',
    'exp.title': 'Where I have been building.',
    'exp.present': 'Present',
    'exp.responsibilities': 'Responsibilities',

    /* ---- Tech stack ---- */
    'stack.eyebrow': 'Tech stack',
    'stack.title': 'The tools I reach for.',
    'stack.lead': 'Grouped by what they solve, not by how trendy they are.',
    'stack.cloud': 'Cloud',
    'stack.devops': 'DevOps',
    'stack.infra': 'Infrastructure',
    'stack.programming': 'Programming',
    'stack.databases': 'Databases',
    'stack.ai': 'AI',
    'stack.security': 'Security',
    'stack.observability': 'Observability',

    /* ---- Architecture gallery ---- */
    'arch.eyebrow': 'Architecture',
    'arch.title': 'Systems, drawn.',
    'arch.lead':
      'Diagrams and infrastructure from real deliveries. Client-identifying details removed.',
    'arch.soon': 'Diagram coming soon',

    /* ---- Certifications ---- */
    'cert.eyebrow': 'Certifications',
    'cert.title': 'Credentials and continuous study.',
    'cert.inprogress': 'In progress',
    'cert.planned': 'Planned',
    'cert.earned': 'Earned',
    'cert.empty': 'Currently studying. This section grows as exams get passed.',

    /* ---- Contact ---- */
    'contact.eyebrow': 'Contact',
    'contact.title': 'Let us build something that scales.',
    'contact.lead':
      'Open to cloud and platform engineering roles, and to freelance work on infrastructure, automation and AI products.',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.cv': 'Download CV',
    'contact.copied': 'Copied',

    /* ---- Universe portal ---- */
    'portal.eyebrow': 'Beyond technology',
    'portal.title': 'There is a second half to this universe.',
    'portal.lead':
      'Dance, music, art, photography and everything I am currently learning. A separate world, on purpose.',
    'portal.cta': 'Enter the Universe',
    'portal.labs': 'Visit the Labs',

    /* ---- Labs ---- */
    'labs.title': 'Labs',
    'labs.description':
      'Experiments, agents, MCP servers, prompts and tools. A living laboratory by Mel Bueno.',
    'labs.eyebrow': 'Labs',
    'labs.heading': 'A living laboratory.',
    'labs.lead':
      'Experiments that are too small to be case studies and too interesting to throw away: agents, MCP servers, prompt tooling and infrastructure spikes.',
    'labs.soon': 'Coming soon',
    'labs.back': 'Back to Technology',

    /* ---- Beyond ---- */
    'beyond.title': 'Beyond Technology — Universe of Mel',
    'beyond.description':
      'The creative half of the Universe of Mel: dance, music, visual art, photography, writing and continuous learning.',
    'beyond.eyebrow': 'Beyond technology',
    'beyond.heading': 'The other half of the universe.',
    'beyond.lead':
      'The same curiosity that makes me design systems makes me move, compose and create. This is where those practices live.',
    'beyond.back': 'Back to Technology',
    'beyond.dance': 'Dance',
    'beyond.dance.lead': 'Movement as a language.',
    'beyond.dance.body':
      'Dance taught me another kind of precision: rhythm, listening, presence. Dancing and teaching is designing experiences in real time, with the body.',
    'beyond.dance.rhythms': 'Rhythms I dance and teach',
    'beyond.dance.practice': 'My practice',
    'beyond.dance.practiceBody':
      'I mainly teach Cuban salsa and casino. Teaching is how I share joy, rhythm and connection — a space where technique and authenticity coexist.',
    'beyond.music': 'Music',
    'beyond.music.body':
      'Guitar, keyboard and composition. I write songs to process emotions and ideas. Music is my language when words fall short.',
    'beyond.art': 'Visual art',
    'beyond.art.body':
      'Drawing and painting as visual exploration. I experiment with shapes, colour and technique. A meditative, discovery-driven practice.',
    'beyond.photography': 'Photography',
    'beyond.photography.body':
      'Looking twice at ordinary things. Light, geometry and the details most people walk past.',
    'beyond.learning': 'Learning',
    'beyond.learning.body':
      'Reading notes, mental maps and concepts in progress. A public second brain, updated as I go.',
    'beyond.writing': 'Writing',
    'beyond.writing.body':
      'A log of what I am thinking about: engineering, creativity and the overlap between them.',
    'beyond.soon': 'Coming soon',

    /* ---- Footer ---- */
    'footer.quote': 'If I can imagine it, I can build it.',
    'footer.rights': 'All rights reserved.',
    'footer.technology': 'Technology',
    'footer.built': 'Built with Astro. Deployed on GitHub Pages.',
  },

  es: {
    /* ---- Global ---- */
    'site.name': 'Mel Bueno',
    'site.role': 'Cloud & DevOps Engineer',
    'site.title': 'Mel Bueno — Ingeniera Cloud, DevOps y Platform',
    'site.description':
      'Mel Bueno construye infraestructura cloud escalable, plataformas de automatización y productos con IA. Casos de estudio en AWS, GCP, Azure, Terraform, Kubernetes y CI/CD.',
    'site.universe': 'Universe of Mel',

    /* ---- Navigation ---- */
    'nav.work': 'Proyectos',
    'nav.expertise': 'Especialidad',
    'nav.experience': 'Experiencia',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
    'nav.labs': 'Labs',
    'nav.beyond': 'Universo',
    'nav.menu': 'Menú',
    'nav.open': 'Abrir menú',
    'nav.close': 'Cerrar menú',
    'nav.language': 'Idioma',
    'nav.skip': 'Ir al contenido',

    /* ---- Hero ---- */
    'hero.eyebrow': 'Universe of Mel — Tecnología',
    'hero.roles': 'Cloud Engineer · DevOps Engineer · Platform Engineer · Soluciones de IA',
    'hero.lead':
      'Construyo infraestructura cloud escalable, automatización y productos digitales inteligentes.',
    'hero.cta.primary': 'Ver mis proyectos',
    'hero.cta.secondary': 'Descubrir el universo',
    'hero.scroll': 'Explora',

    /* ---- Proof strip ---- */
    'proof.eyebrow': 'En resumen',
    'proof.years.value': '3+',
    'proof.years.label': 'Años entregando a producción',
    'proof.clouds.value': '3',
    'proof.clouds.label': 'Clouds en producción: AWS · GCP · Azure',
    'proof.projects.value': '6',
    'proof.projects.label': 'Plataformas diseñadas y entregadas',
    'proof.controls.value': '21',
    'proof.controls.label': 'Controles de seguridad verificados para SOC 2',

    /* ---- About ---- */
    'about.eyebrow': 'Sobre mí',
    'about.title': 'Ingeniería que aguanta en producción.',
    'about.p1':
      'Construyo infraestructura cloud, plataformas de automatización y aplicaciones con IA — desde backends serverless en AWS hasta aislamiento multi-tenant y pipelines de CI/CD en los que los equipos realmente confían.',
    'about.p2':
      'Me gusta resolver problemas operativos complejos con soluciones de ingeniería elegantes: migraciones blue-green donde el rollback es un cambio de DNS, flujos idempotentes que nunca dejan registros huérfanos e infraestructura descrita por completo como código.',
    'about.p3':
      'Fuera de la tecnología enseño danza, estudio música y documento todo lo que aprendo. Ese mundo tiene su propio espacio —',
    'about.p3.link': 'el Universo',
    'about.p3.end': '.',

    /* ---- Featured work ---- */
    'work.eyebrow': 'Proyectos destacados',
    'work.title': 'Casos de estudio, no capturas de pantalla.',
    'work.lead':
      'Cada proyecto muestra el problema, la arquitectura y las decisiones detrás — para que juzgues cómo pienso, no solo qué entregué.',
    'work.filter.all': 'Todos',
    'work.problem': 'Problema',
    'work.solution': 'Solución',
    'work.architecture': 'Arquitectura',
    'work.stack': 'Stack',
    'work.impact': 'Impacto',
    'work.role': 'Rol',
    'work.context': 'Contexto',
    'work.decisions': 'Decisiones clave',
    'work.challenges': 'Retos',
    'work.learnings': 'Aprendizajes',
    'work.cta': 'Ver caso de estudio',
    'work.back': 'Todos los proyectos',
    'work.next': 'Siguiente caso',
    'work.confidential': 'Datos del cliente anonimizados por NDA.',

    /* ---- Categories ---- */
    'cat.enterprise': 'Soluciones empresariales',
    'cat.enterprise.desc': 'Plataformas en producción para fondos, aseguradoras y distribuidores.',
    'cat.cloud': 'Cloud & DevOps',
    'cat.cloud.desc': 'Infraestructura como código, pipelines, seguridad y observabilidad.',
    'cat.freelance': 'Sitios freelance',
    'cat.freelance.desc': 'Landing pages, sitios corporativos y herramientas internas.',
    'cat.personal': 'Proyectos personales',
    'cat.personal.desc': 'Cosas que construyo para aprender en público.',

    /* ---- Cloud & DevOps capability ---- */
    'cloud.eyebrow': 'Cloud & DevOps',
    'cloud.title': 'La infraestructura como producto, no como efecto secundario.',
    'cloud.lead':
      'Ambientes reproducibles, aislados por etapa y seguros de cambiar un viernes por la tarde.',
    'cloud.iac.title': 'Infraestructura como código',
    'cloud.iac.desc':
      'Terraform, Pulumi y AWS SAM. Cada ambiente reproducible desde un repositorio, nunca desde un clic en la consola.',
    'cloud.cicd.title': 'CI/CD y GitOps',
    'cloud.cicd.desc':
      'GitHub Actions, GitLab CI y Jenkins. Despliegue por rama y ambiente, cutovers blue-green, rollback trivial.',
    'cloud.containers.title': 'Contenedores y orquestación',
    'cloud.containers.desc':
      'Docker, Kubernetes, AKS y Cloud Run. Serverless primero, contenedores cuando la carga los justifica.',
    'cloud.security.title': 'Seguridad y cumplimiento',
    'cloud.security.desc':
      'Cifrado en reposo con KMS, secretos gestionados, roles de mínimo privilegio y Row-Level Security en PostgreSQL para aislamiento multi-tenant real.',
    'cloud.observability.title': 'Observabilidad',
    'cloud.observability.desc':
      'Dashboards en CloudWatch y Grafana, logs estructurados y alertas que apuntan a una causa en lugar de a un síntoma.',
    'cloud.reliability.title': 'Patrones de fiabilidad',
    'cloud.reliability.desc':
      'Retries con backoff y jitter, circuit breakers, llaves de idempotencia y trabajos de reconciliación para todo lo que mueve dinero.',

    /* ---- Experience ---- */
    'exp.eyebrow': 'Experiencia',
    'exp.title': 'Dónde he estado construyendo.',
    'exp.present': 'Actualidad',
    'exp.responsibilities': 'Responsabilidades',

    /* ---- Tech stack ---- */
    'stack.eyebrow': 'Stack técnico',
    'stack.title': 'Las herramientas que uso.',
    'stack.lead': 'Agrupadas por lo que resuelven, no por lo de moda que estén.',
    'stack.cloud': 'Cloud',
    'stack.devops': 'DevOps',
    'stack.infra': 'Infraestructura',
    'stack.programming': 'Programación',
    'stack.databases': 'Bases de datos',
    'stack.ai': 'IA',
    'stack.security': 'Seguridad',
    'stack.observability': 'Observabilidad',

    /* ---- Architecture gallery ---- */
    'arch.eyebrow': 'Arquitectura',
    'arch.title': 'Sistemas, dibujados.',
    'arch.lead':
      'Diagramas e infraestructura de entregas reales. Sin datos que identifiquen al cliente.',
    'arch.soon': 'Diagrama en camino',

    /* ---- Certifications ---- */
    'cert.eyebrow': 'Certificaciones',
    'cert.title': 'Credenciales y estudio continuo.',
    'cert.inprogress': 'En curso',
    'cert.planned': 'Planeada',
    'cert.earned': 'Obtenida',
    'cert.empty': 'Estudiando ahora. Esta sección crece conforme paso exámenes.',

    /* ---- Contact ---- */
    'contact.eyebrow': 'Contacto',
    'contact.title': 'Construyamos algo que escale.',
    'contact.lead':
      'Abierta a roles de cloud y platform engineering, y a trabajo freelance en infraestructura, automatización y productos con IA.',
    'contact.email': 'Correo',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.cv': 'Descargar CV',
    'contact.copied': 'Copiado',

    /* ---- Universe portal ---- */
    'portal.eyebrow': 'Más allá de la tecnología',
    'portal.title': 'Este universo tiene una segunda mitad.',
    'portal.lead':
      'Danza, música, arte, fotografía y todo lo que estoy aprendiendo. Un mundo aparte, a propósito.',
    'portal.cta': 'Entrar al Universo',
    'portal.labs': 'Visitar los Labs',

    /* ---- Labs ---- */
    'labs.title': 'Labs',
    'labs.description':
      'Experimentos, agentes, servidores MCP, prompts y herramientas. Un laboratorio vivo de Mel Bueno.',
    'labs.eyebrow': 'Labs',
    'labs.heading': 'Un laboratorio vivo.',
    'labs.lead':
      'Experimentos demasiado pequeños para ser casos de estudio y demasiado interesantes para tirarlos: agentes, servidores MCP, herramientas de prompting y pruebas de infraestructura.',
    'labs.soon': 'Próximamente',
    'labs.back': 'Volver a Tecnología',

    /* ---- Beyond ---- */
    'beyond.title': 'Más allá de la tecnología — Universe of Mel',
    'beyond.description':
      'La mitad creativa del Universe of Mel: danza, música, artes visuales, fotografía, escritura y aprendizaje continuo.',
    'beyond.eyebrow': 'Más allá de la tecnología',
    'beyond.heading': 'La otra mitad del universo.',
    'beyond.lead':
      'La misma curiosidad que me lleva a diseñar sistemas me lleva a moverme, componer y crear. Aquí viven esas prácticas.',
    'beyond.back': 'Volver a Tecnología',
    'beyond.dance': 'Danza',
    'beyond.dance.lead': 'El movimiento como lenguaje.',
    'beyond.dance.body':
      'La danza me enseñó otra forma de precisión: el ritmo, la escucha, la presencia. Bailar y enseñar es diseñar experiencias en tiempo real, con el cuerpo.',
    'beyond.dance.rhythms': 'Ritmos que bailo y enseño',
    'beyond.dance.practice': 'Mi práctica',
    'beyond.dance.practiceBody':
      'Enseño principalmente salsa cubana y casino. La enseñanza es mi forma de compartir alegría, ritmo y conexión — un espacio donde la técnica y la autenticidad conviven.',
    'beyond.music': 'Música',
    'beyond.music.body':
      'Guitarra, teclado y composición. Escribo canciones para procesar emociones e ideas. La música es mi lenguaje cuando las palabras no alcanzan.',
    'beyond.art': 'Artes visuales',
    'beyond.art.body':
      'Dibujo y pintura como exploración visual. Experimento con formas, color y técnica. Una práctica meditativa y de descubrimiento.',
    'beyond.photography': 'Fotografía',
    'beyond.photography.body':
      'Mirar dos veces las cosas ordinarias. Luz, geometría y los detalles que la mayoría pasa de largo.',
    'beyond.learning': 'Aprendizaje',
    'beyond.learning.body':
      'Notas de lectura, mapas mentales y conceptos en proceso. Un segundo cerebro público, actualizado conforme avanzo.',
    'beyond.writing': 'Bitácora',
    'beyond.writing.body':
      'Un registro de lo que estoy pensando: ingeniería, creatividad y el cruce entre ambas.',
    'beyond.soon': 'Próximamente',

    /* ---- Footer ---- */
    'footer.quote': 'Si lo puedo imaginar, lo puedo programar.',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.technology': 'Tecnología',
    'footer.built': 'Hecho con Astro. Desplegado en GitHub Pages.',
  },
} as const;

/** Every key must exist in every locale — enforced at compile time. */
export type UIKey = keyof (typeof ui)['en'];

type _EnsureComplete = Record<Locale, Record<UIKey, string>>;
const _check: _EnsureComplete = ui;
void _check;
