import type { WorkProject } from './types';

export const financialInsurancePlatform: WorkProject = {
  slug: 'financial-insurance-platform',
  category: 'enterprise',
  featured: true,
  order: 2,
  period: '2024 — 2025',
  published: true,
  status: 'production',
  confidential: true,

  tech: ['Astro', 'React', 'TypeScript', 'Puppeteer', 'GCP Cloud Run', 'Vitest'],

  flow: [
    'Capture',
    'Progressive quoting · API + headless browser',
    'Comparison',
    'Async issuance · queue + worker',
    'Reconciliation',
  ],

  metrics: [
    {
      value: '100%',
      label: {
        en: 'Technical design document approved before build',
        es: 'Documento de diseño técnico aprobado antes de construir',
      },
    },
    {
      value: '0',
      label: {
        en: 'Orphaned policies, by design',
        es: 'Pólizas huérfanas, por diseño',
      },
    },
    {
      value: 'Multi-carrier',
      label: {
        en: 'Quoting across several insurers in one flow',
        es: 'Cotización en varias aseguradoras en un solo flujo',
      },
    },
    {
      value: 'Idempotent',
      label: {
        en: 'Issuance state machine with periodic reconciliation',
        es: 'Máquina de estados de emisión con reconciliación periódica',
      },
    },
  ],

  title: {
    en: 'Financial Consulting & Insurance Quoting Platform',
    es: 'Plataforma de consultoría financiera y cotizador de seguros',
  },

  domain: {
    en: 'Web · Automation · Cloud',
    es: 'Web · Automatización · Cloud',
  },

  tagline: {
    en: 'A financial consulting site with end-to-end car insurance quoting and issuance, built on top of a third-party aggregator that had no public API.',
    es: 'Un sitio de consultoría financiera con cotización y contratación de seguro de auto de extremo a extremo, sobre un agregador externo que no tenía API pública.',
  },

  role: {
    en: 'Engineering lead: architecture and technical design document, frontend implementation, the hybrid integration strategy and the deployment infrastructure.',
    es: 'Engineering lead: arquitectura y documento de diseño técnico, implementación del frontend, la estrategia de integración híbrida y la infraestructura de despliegue.',
  },

  context: {
    en: 'An insurance consultancy operating as a broker. The site offers financial tools — a retirement simulator, contact flows — and a complete car insurance journey running on an external aggregator that fronts multiple insurers.',
    es: 'Una consultora de seguros que opera como agente. El sitio ofrece herramientas financieras — simulador de retiro, flujos de contacto — y un recorrido completo de seguro de auto sobre un agregador externo que agrupa varias aseguradoras.',
  },

  problem: {
    en: 'The aggregator exposed no public API and its latency swung wildly. The platform had to quote across several insurers and issue real policies without ever leaving an orphaned record behind when something timed out mid-payment — and it had to deliver transactional email reliably.',
    es: 'El agregador no exponía API pública y su latencia variaba enormemente. La plataforma tenía que cotizar en varias aseguradoras y emitir pólizas reales sin dejar nunca un registro huérfano cuando algo hacía timeout a mitad del pago — y tenía que entregar correo transaccional de forma confiable.',
  },

  solution: {
    en: 'Issuance was made asynchronous instead of synchronous: a queue plus a worker driving an explicit state machine, with idempotency keys and a reconciliation job that sweeps for records stuck between states. Integration is deliberately hybrid — the documented endpoints go over HTTP, and only the steps locked behind a WebSocket handshake fall back to a headless browser.',
    es: 'La emisión se volvió asíncrona en lugar de síncrona: una cola más un worker que maneja una máquina de estados explícita, con llaves de idempotencia y un trabajo de reconciliación que barre registros atorados entre estados. La integración es híbrida a propósito — los endpoints documentados van por HTTP y solo los pasos bloqueados tras un handshake de WebSocket caen a un navegador headless.',
  },

  architecture: {
    en: 'A frontend of interactive islands over server-side rendering, running in containers on Cloud Run. Quoting is progressive so the user sees the first carriers while the slower ones are still responding. Issuance runs as an asynchronous job with a state machine, idempotency and periodic reconciliation, so a payment timeout can never strand a policy.',
    es: 'Un frontend de islas interactivas sobre renderizado en servidor, corriendo en contenedores en Cloud Run. La cotización es progresiva para que la persona vea las primeras aseguradoras mientras las más lentas siguen respondiendo. La emisión corre como trabajo asíncrono con máquina de estados, idempotencia y reconciliación periódica, para que un timeout de pago nunca deje una póliza a medias.',
  },

  decisions: {
    en: [
      'Asynchronous issuance rather than synchronous: a timeout during payment would otherwise leave orphaned policies and an unhappy regulator.',
      'A hybrid API-plus-browser-automation approach, after discarding pure API (blocked by a WebSocket handshake) and full automation (fragile and slow).',
      'Migrated to a transactional email provider with a permanent free tier and simple domain verification, after deliverability problems with the original one.',
      'Wrote the test suite before migrating the critical services, so a large change could be made with evidence rather than hope.',
    ],
    es: [
      'Emisión asíncrona en vez de síncrona: un timeout durante el pago dejaría pólizas huérfanas y un regulador molesto.',
      'Enfoque híbrido de API más automatización de navegador, tras descartar API pura (bloqueada por un handshake de WebSocket) y automatización total (frágil y lenta).',
      'Migración a un proveedor de correo transaccional con free tier permanente y verificación de dominio simple, después de problemas de entrega con el original.',
      'Escribir la batería de pruebas antes de migrar los servicios críticos, para poder hacer un cambio grande con evidencia en lugar de esperanza.',
    ],
  },

  challenges: {
    en: [
      'Unpredictable aggregator latency, handled with per-tier timeouts, retries with backoff and jitter, a circuit breaker and graceful degradation.',
      'Integrating a service with no documented API, which meant reverse-engineering its endpoints and request shapes.',
      'Email reliability: getting SPF and DKIM right and surviving a provider change without losing deliverability.',
    ],
    es: [
      'Latencia impredecible del agregador, atendida con timeouts por tier, retries con backoff y jitter, circuit breaker y degradación elegante.',
      'Integrar un servicio sin API documentada, lo que implicó ingeniería inversa de sus endpoints y formas de request.',
      'Fiabilidad del correo: acertar con SPF y DKIM y sobrevivir a un cambio de proveedor sin perder entregabilidad.',
    ],
  },

  learnings: {
    en: [
      'Never leave credentials or personal data in code or documentation — not even in an example payload.',
      'Any flow that moves money or state has to be idempotent, asynchronous and reconciled. Those three together, not one of them.',
      'Standing up the test suite before touching a critical service is what makes a big migration a calm afternoon.',
    ],
    es: [
      'Nunca dejar credenciales ni datos personales en el código o la documentación — ni en un payload de ejemplo.',
      'Todo flujo que mueve dinero o estado tiene que ser idempotente, asíncrono y reconciliado. Los tres juntos, no uno de ellos.',
      'Montar la batería de pruebas antes de tocar un servicio crítico es lo que convierte una migración grande en una tarde tranquila.',
    ],
  },

  impact: {
    en: [
      'A complete quote-to-issuance journey live on top of an aggregator that offered no integration path.',
      'Payment timeouts stopped producing orphaned policies, because reconciliation resolves anything stuck mid-flight.',
      'Transactional email restored to reliable delivery after the provider migration.',
      'Technical design document approved in full before implementation started.',
    ],
    es: [
      'Un recorrido completo de cotización a emisión en vivo sobre un agregador que no ofrecía ninguna vía de integración.',
      'Los timeouts de pago dejaron de producir pólizas huérfanas, porque la reconciliación resuelve todo lo que queda a medio vuelo.',
      'Correo transaccional recuperado a entrega confiable tras la migración de proveedor.',
      'Documento de diseño técnico aprobado por completo antes de empezar la implementación.',
    ],
  },
};
