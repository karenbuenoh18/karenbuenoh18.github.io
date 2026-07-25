import type { WorkProject } from './types';

export const insuranceCrm: WorkProject = {
  slug: 'insurance-crm',
  category: 'enterprise',
  featured: true,
  order: 3,
  period: '2025',
  published: true,
  status: 'production',
  confidential: true,

  tech: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'WhatsApp Business', 'GitLab CI'],

  flow: [
    'Form · canonical dropdown',
    'Firestore · normalised field',
    'Query builder',
    'Client-side filtering',
    'UI · badges + chips',
  ],

  metrics: [
    {
      value: '59',
      label: {
        en: 'Policies migrated and verified one by one',
        es: 'Pólizas migradas y verificadas una por una',
      },
    },
    {
      value: '14 → 5',
      label: {
        en: 'Free-text values consolidated into canonical categories',
        es: 'Valores de texto libre consolidados en categorías canónicas',
      },
    },
    {
      value: '0',
      label: {
        en: 'New database indexes required',
        es: 'Índices nuevos de base de datos requeridos',
      },
    },
    {
      value: '3',
      label: {
        en: 'Platforms from one codebase: web, iOS, Android',
        es: 'Plataformas desde un solo código: web, iOS, Android',
      },
    },
  ],

  title: {
    en: 'Insurance CRM',
    es: 'CRM para asesores de seguros',
  },

  domain: {
    en: 'Cross-platform · Cloud',
    es: 'Multiplataforma · Cloud',
  },

  tagline: {
    en: 'A cross-platform CRM for managing policies, payments and client communication from web and mobile — with a production data migration done policy by policy.',
    es: 'Un CRM multiplataforma para gestionar pólizas, pagos y comunicación con clientes desde web y móvil — con una migración de datos en producción hecha póliza por póliza.',
  },

  role: {
    en: 'Engineering lead, test-first: policy management, multi-select filters, WhatsApp integration, the production data migration and policy-by-policy verification.',
    es: 'Engineering lead, con pruebas primero: gestión de pólizas, filtros multi-select, integración de WhatsApp, la migración de datos en producción y la verificación póliza por póliza.',
  },

  context: {
    en: 'A product already in production with active development for a financial consultancy. A cross-platform app generated with low-code and extended with custom code, built alongside a product manager and other developers.',
    es: 'Un producto ya en producción con desarrollo activo para una consultora financiera. Una app cross-platform generada con low-code y extendida con código custom, construida junto a un product manager y otros developers.',
  },

  problem: {
    en: 'The invoice status field was free text: 14 inconsistent variants across 59 policies, impossible to filter on reliably. Advisors had no dependable view of who had paid. On top of that, combined filters were silently dropping a date range, and a contrast bug made some states unreadable.',
    es: 'El campo de estado de factura era texto libre: 14 variantes inconsistentes sobre 59 pólizas, imposible de filtrar de forma confiable. Los asesores no tenían una vista fiable de quién había pagado. Encima, los filtros combinados descartaban en silencio un rango de fechas y un bug de contraste hacía ilegibles algunos estados.',
  },

  solution: {
    en: 'The field was replaced with a canonical dropdown and the legacy values were migrated — but written into a notes subcollection first, so no advisor lost the original wording. The migration was idempotent with a JSON backup, and each of the 59 policies was verified by hand afterwards. Filtering moved to the client because the database allows only one `whereIn` per query, and that slot was already spoken for.',
    es: 'El campo se reemplazó por un dropdown canónico y los valores legacy se migraron — pero escribiéndolos primero en una subcolección de notas, para que ningún asesor perdiera el texto original. La migración fue idempotente con respaldo JSON, y después se verificó a mano cada una de las 59 pólizas. El filtrado se movió al cliente porque la base de datos solo admite un `whereIn` por consulta, y ese lugar ya estaba ocupado.',
  },

  architecture: {
    en: 'Invoice status is filtered client-side after the query, because Firestore permits a single `whereIn` operator per query and the other filters already consume it. That decision avoided creating new composite indexes entirely, while the original free-text history was preserved in a notes subcollection rather than overwritten.',
    es: 'El estado de factura se filtra del lado del cliente después de la consulta, porque Firestore permite un solo operador `whereIn` por consulta y los otros filtros ya lo consumen. Esa decisión evitó crear índices compuestos nuevos por completo, y el historial original de texto libre se preservó en una subcolección de notas en lugar de sobrescribirse.',
  },

  decisions: {
    en: [
      'Client-side filtering after the query instead of server-side, to stay inside the one-`whereIn`-per-query limit with zero new indexes.',
      'Migrate legacy values into a notes subcollection before overwriting anything, with a JSON backup and an idempotent script that can be re-run safely.',
      'Encapsulate the filter logic in pure, testable helpers rather than scattering conditionals through the UI.',
      'Commit straight to the integration branch to keep pace on a product that was already serving real advisors.',
    ],
    es: [
      'Filtrado del lado del cliente después de la consulta en lugar de servidor, para respetar el límite de un `whereIn` por consulta con cero índices nuevos.',
      'Migrar los valores legacy a una subcolección de notas antes de sobrescribir nada, con respaldo JSON y un script idempotente que se puede volver a correr sin riesgo.',
      'Encapsular la lógica de filtros en helpers puros y testeables en lugar de dispersar condicionales por la UI.',
      'Commits directos a la rama de integración para mantener el ritmo en un producto que ya atendía asesores reales.',
    ],
  },

  challenges: {
    en: [
      'Consolidating 14 free-text values into 5 canonical categories, with around 10 genuinely ambiguous cases that had to be negotiated with the client rather than guessed.',
      'A bug where a date range was silently ignored, caused by two divergent definitions of what counts as "an active search".',
      'Combined-filter performance: up to roughly 1,000 document reads per page in the worst case.',
    ],
    es: [
      'Consolidar 14 valores de texto libre en 5 categorías canónicas, con unos 10 casos genuinamente ambiguos que había que negociar con el cliente en lugar de adivinar.',
      'Un bug donde un rango de fechas se ignoraba en silencio, causado por dos definiciones divergentes de qué cuenta como "hay una búsqueda activa".',
      'Rendimiento de filtros combinados: hasta unas 1,000 lecturas de documentos por página en el peor caso.',
    ],
  },

  learnings: {
    en: [
      'The constraints of a NoSQL engine push logic toward the client — so that logic belongs in pure helpers you can unit test, not inside widgets.',
      'Migrating dirty data requires preserving the original and making the script idempotent before you write a single value.',
      'Two definitions of the same concept in one codebase is technical debt that shows up as bugs nobody can reproduce.',
    ],
    es: [
      'Las restricciones de un motor NoSQL empujan lógica al cliente — así que esa lógica pertenece a helpers puros que puedas testear, no dentro de los widgets.',
      'Migrar datos sucios exige preservar el original y hacer el script idempotente antes de escribir un solo valor.',
      'Dos definiciones del mismo concepto en un código son deuda técnica que aparece como bugs que nadie puede reproducir.',
    ],
  },

  impact: {
    en: [
      'Invoice status became reliably filterable, giving advisors a trustworthy view of payment state for the first time.',
      '59 policies migrated with zero data loss and verified individually.',
      'No new database indexes, so query costs stayed flat.',
      'The date-range filter bug fixed at its root by unifying the duplicated definition.',
    ],
    es: [
      'El estado de factura se volvió filtrable de forma confiable, dando a los asesores por primera vez una vista fiable del estado de pago.',
      '59 pólizas migradas sin pérdida de datos y verificadas una por una.',
      'Ningún índice nuevo de base de datos, así que el costo de consultas se mantuvo plano.',
      'El bug del filtro por rango de fechas corregido en su raíz al unificar la definición duplicada.',
    ],
  },
};
