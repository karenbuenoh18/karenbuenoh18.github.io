import type { WorkProject } from './types';

export const b2bEcommerce: WorkProject = {
  slug: 'b2b-ecommerce-platform',
  category: 'enterprise',
  featured: true,
  order: 4,
  period: '2025',
  published: true,
  status: 'production',
  confidential: true,

  tech: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'GCP Cloud Run', 'Pulumi'],

  flow: [
    'React SPA',
    'Express · PostgreSQL',
    'Pricing engine',
    'Checkout · multi-gateway routing',
    'Idempotent webhooks',
    'Suppliers · REST + SOAP',
  ],

  metrics: [
    {
      value: '3',
      label: {
        en: 'Supplier protocols unified: REST/OAuth2, SOAP/XML, Excel',
        es: 'Protocolos de proveedor unificados: REST/OAuth2, SOAP/XML, Excel',
      },
    },
    {
      value: 'N+1 → 1',
      label: {
        en: 'Pricing queries, via a materialised jsonb column',
        es: 'Consultas de precio, con una columna jsonb materializada',
      },
    },
    {
      value: 'Multi-gateway',
      label: {
        en: 'Payments routed by currency, method and amount',
        es: 'Pagos ruteados por moneda, método y monto',
      },
    },
    {
      value: 'Hosted',
      label: {
        en: 'Checkout redirect, keeping PCI scope minimal',
        es: 'Checkout con redirect, manteniendo mínimo el alcance PCI',
      },
    },
  ],

  title: {
    en: 'B2B/B2C Multi-Supplier E-commerce',
    es: 'E-commerce multi-proveedor B2B/B2C',
  },

  domain: {
    en: 'Web · Cloud · Payments',
    es: 'Web · Cloud · Pagos',
  },

  tagline: {
    en: 'A single storefront unifying catalogues from several industrial electrical suppliers, with tier-based dynamic pricing and multi-gateway payment routing.',
    es: 'Una sola vitrina que unifica catálogos de varios proveedores de equipo eléctrico industrial, con pricing dinámico por tier y ruteo de pagos multi-pasarela.',
  },

  role: {
    en: 'Full-stack engineer on operations and hardening: diagnosed and fixed a production outage caused by CORS, refactored the policy into a tested module, and verified the fix live.',
    es: 'Desarrolladora full-stack en operaciones y hardening: diagnostiqué y corregí una caída en producción causada por CORS, refactoricé la política a un módulo con pruebas y verifiqué el arreglo en vivo.',
  },

  context: {
    en: 'A storefront for a distributor that aggregates catalogues from several wholesalers — transformers, batteries, UPS units. It serves both public buyers and dealers, with prices that differ by fiscal classification.',
    es: 'Una vitrina para un distribuidor que agrega catálogos de varios mayoristas — transformadores, baterías, unidades UPS. Atiende tanto compradores públicos como distribuidores, con precios que difieren según clasificación fiscal.',
  },

  problem: {
    en: 'Unify heterogeneous supplier catalogues — one on REST with OAuth2, one on SOAP with XML, one delivered as an Excel upload — into a single storefront with tier-calculated prices and a checkout that routes each payment to the right gateway, all on low-cost infrastructure. Then, mid-project, the store went blank in production.',
    es: 'Unificar catálogos heterogéneos de proveedores — uno en REST con OAuth2, otro en SOAP con XML, otro entregado como carga de Excel — en una sola vitrina con precios calculados por tier y un checkout que rutea cada pago a la pasarela correcta, todo sobre infraestructura de bajo costo. Y luego, a mitad del proyecto, la tienda se puso en blanco en producción.',
  },

  solution: {
    en: 'The outage traced to CORS: an unlisted origin was throwing an error instead of returning a denial, which turned into a 500 on every static asset — invisible to curl, because curl sends no Origin header. The policy was rewritten as its own module with tests, so an unknown origin now answers "not allowed" rather than taking the application down. Alongside that, the pricing engine materialises the base price into a jsonb column to remove an N+1, and a single VM with a reserved IP proxies the one supplier that whitelists by address.',
    es: 'La caída venía de CORS: un origen no listado lanzaba una excepción en lugar de devolver una negación, lo que se convertía en un 500 en cada asset estático — invisible para curl, porque curl no envía cabecera Origin. La política se reescribió como su propio módulo con pruebas, así que un origen desconocido ahora responde "no permitido" en vez de tumbar la aplicación. Junto a eso, el motor de pricing materializa el precio base en una columna jsonb para eliminar un N+1, y una sola VM con IP reservada hace de proxy para el proveedor que hace whitelist por dirección.',
  },

  architecture: {
    en: 'A React SPA over an Express API on PostgreSQL. The pricing engine materialises the base price into a jsonb column to avoid an N+1 on every catalogue render. Checkout routes by currency, method and amount, and idempotent webhooks confirm the payment. Everything is serverless on Cloud Run except one small VM with a reserved IP, which exists solely to serve the supplier that whitelists by IP address.',
    es: 'Una SPA de React sobre una API de Express en PostgreSQL. El motor de pricing materializa el precio base en una columna jsonb para evitar un N+1 en cada render del catálogo. El checkout rutea por moneda, método y monto, y webhooks idempotentes confirman el pago. Todo es serverless en Cloud Run excepto una VM pequeña con IP reservada, que existe únicamente para atender al proveedor que hace whitelist por dirección IP.',
  },

  decisions: {
    en: [
      'Hosted checkout with a redirect to the gateways, to keep PCI scope as small as possible.',
      'One centralised payment-routing rule in a single service, instead of duplicating it across routes and the frontend where the two copies would eventually disagree.',
      'Materialised base price plus a single reserved-IP VM as a proxy, with the rest serverless — the smallest infrastructure change that solved both problems.',
      'A regression test that loads the real CORS module without mocking it, so a load-time failure can never pass CI again.',
    ],
    es: [
      'Checkout hospedado con redirect a las pasarelas, para mantener el alcance PCI lo más pequeño posible.',
      'Una sola regla centralizada de ruteo de pagos en un único servicio, en lugar de duplicarla entre rutas y frontend donde las dos copias acabarían discrepando.',
      'Precio base materializado más una única VM con IP reservada como proxy, con el resto serverless — el cambio de infraestructura más pequeño que resolvía ambos problemas.',
      'Una prueba de regresión que carga el módulo real de CORS sin mockearlo, para que una falla en tiempo de carga nunca vuelva a pasar CI.',
    ],
  },

  challenges: {
    en: [
      'A CORS bug that left the store blank: an unlisted origin threw an error, producing a 500 on every asset — and it was invisible with curl, which sends no Origin header.',
      'A CommonJS-only payment gateway package that passed the typecheck but crashed at runtime under ESM.',
      'Project scope drifting well past the contract, which required continuous, explicit change management with the client.',
    ],
    es: [
      'Un bug de CORS que dejaba la tienda en blanco: un origen no listado lanzaba una excepción, produciendo un 500 en cada asset — e invisible con curl, que no envía cabecera Origin.',
      'Un paquete de pasarela de pago solo-CommonJS que pasaba el typecheck pero crasheaba en runtime bajo ESM.',
      'Alcance del proyecto desbordado muy por encima del contrato, lo que exigió gestión de cambios continua y explícita con el cliente.',
    ],
  },

  learnings: {
    en: [
      'A 500 on static assets that reproduces in a browser but not in curl is almost always CORS.',
      'An unknown origin must be answered with "not allowed" — never with an exception that can take down the whole application.',
      'Mocking a whole module hides real load errors: one test without the mock acts as the regression guard that matters.',
    ],
    es: [
      'Un 500 en assets estáticos que se reproduce en el navegador pero no en curl es casi siempre CORS.',
      'A un origen desconocido hay que responderle "no permitido" — nunca con una excepción capaz de tumbar la aplicación completa.',
      'Mockear un módulo entero esconde errores reales de carga: una prueba sin el mock es la guardia de regresión que de verdad importa.',
    ],
  },

  impact: {
    en: [
      'Production outage diagnosed and resolved, restoring the storefront.',
      'The CORS policy became a tested module, so an unlisted origin degrades safely instead of failing the app.',
      'Catalogue rendering freed of an N+1 by materialising the base price.',
      'Three incompatible supplier protocols serving one unified catalogue.',
    ],
    es: [
      'Caída en producción diagnosticada y resuelta, restaurando la vitrina.',
      'La política de CORS se volvió un módulo con pruebas, así que un origen no listado degrada de forma segura en lugar de romper la app.',
      'Render del catálogo liberado de un N+1 al materializar el precio base.',
      'Tres protocolos de proveedor incompatibles alimentando un catálogo unificado.',
    ],
  },
};
