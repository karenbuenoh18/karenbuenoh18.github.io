import type { WorkProject } from './types';

/** Flagship enterprise case study. Client anonymised under NDA. */
export const aiCapitalAllocation: WorkProject = {
  slug: 'ai-capital-allocation',
  category: 'enterprise',
  featured: true,
  order: 1,
  period: '2025',
  published: true,
  status: 'live',
  confidential: true,

  tech: ['AWS Lambda', 'AWS SAM', 'Cognito', 'RDS PostgreSQL', 'Amazon Bedrock', 'React', 'Amplify'],

  flow: [
    'React SPA',
    'Cognito · OAuth',
    'Lambda · SAM',
    'RDS PostgreSQL · RLS',
    'Bedrock (Claude)',
    'Amplify',
  ],

  metrics: [
    {
      value: '21',
      label: {
        en: 'Security controls verified for SOC 2',
        es: 'Controles de seguridad verificados para SOC 2',
      },
    },
    {
      value: '3',
      label: {
        en: 'Isolated environments across separate AWS accounts',
        es: 'Ambientes aislados en cuentas AWS separadas',
      },
    },
    {
      value: 'FORCE RLS',
      label: {
        en: 'Multi-tenant isolation enforced at the database',
        es: 'Aislamiento multi-tenant aplicado en la base de datos',
      },
    },
    {
      value: 'Blue-green',
      label: {
        en: 'Migration where rollback is a DNS change',
        es: 'Migración donde el rollback es un cambio de DNS',
      },
    },
  ],

  title: {
    en: 'AI Capital Allocation Platform',
    es: 'Plataforma de asignación de capital con IA',
  },

  domain: {
    en: 'AWS · AI · SOC 2',
    es: 'AWS · IA · SOC 2',
  },

  tagline: {
    en: 'Investment proposals captured through conversation, scored deterministically, and routed to financial review with end-to-end traceability.',
    es: 'Propuestas de inversión capturadas por conversación, puntuadas de forma determinística y enviadas a revisión financiera con trazabilidad completa.',
  },

  role: {
    en: 'Grew from supporting engineer to operations lead: migrated every environment into the client AWS account with a blue-green cutover, rebuilt production encrypted for SOC 2, resolved live authentication incidents and verified 21 security controls.',
    es: 'De ingeniera de apoyo a líder de operación: migré todos los ambientes a la cuenta AWS del cliente con cutover blue-green, reconstruí producción cifrada para SOC 2, resolví incidentes de autenticación en vivo y verifiqué 21 controles de seguridad.',
  },

  context: {
    en: 'A product for an investment fund that evaluates capital initiatives, in live use. It began as a port from a previous architecture onto a serverless AWS stack, with separate accounts for the consultancy (staging) and the client (production).',
    es: 'Producto para un fondo que evalúa iniciativas de inversión, en uso real. Arrancó como port desde una arquitectura previa hacia un stack AWS serverless, con cuentas separadas entre la consultora (staging) y el cliente (producción).',
  },

  problem: {
    en: 'Take the platform from prototype to something a regulated fund can rely on: isolate the client infrastructure, harden security for SOC 2 (encryption, multi-tenant RLS, least privilege), fix a broken federated login in production, and untangle environments that were sharing a single database.',
    es: 'Llevar la plataforma de prototipo a algo en lo que un fondo regulado pueda confiar: aislar la infraestructura del cliente, endurecer la seguridad para SOC 2 (cifrado, RLS multi-tenant, mínimo privilegio), arreglar un login federado roto en producción y separar ambientes que compartían una misma base de datos.',
  },

  solution: {
    en: 'One AWS account per environment, so a mistake in staging cannot reach the fund. Production was recreated from scratch with KMS-encrypted RDS and managed secrets, then cut over blue-green: the old stack stayed warm and rollback reduced to repointing DNS. Tenant isolation moved out of application code and into the database with FORCE RLS behind a non-privileged application role.',
    es: 'Una cuenta AWS por ambiente, para que un error en staging no pueda alcanzar al fondo. Producción se recreó desde cero con RDS cifrada por KMS y secretos gestionados, y luego se hizo cutover blue-green: el stack anterior quedó caliente y el rollback se redujo a reapuntar el DNS. El aislamiento por tenant salió del código de aplicación y bajó a la base de datos con FORCE RLS detrás de un rol de aplicación sin privilegios.',
  },

  architecture: {
    en: 'A React SPA authenticates through Cognito and calls Node.js Lambdas defined as infrastructure as code with AWS SAM. Those Lambdas talk to RDS PostgreSQL 16 with Row-Level Security and a least-privilege role. An AI layer on Amazon Bedrock handles conversational capture, deterministic scoring and a multi-persona review council. Three environments deploy per branch through Amplify.',
    es: 'Una SPA de React se autentica con Cognito y llama Lambdas de Node.js definidas como infraestructura como código con AWS SAM. Esas Lambdas hablan con RDS PostgreSQL 16 con Row-Level Security y un rol de mínimo privilegio. Una capa de IA sobre Amazon Bedrock resuelve la captura conversacional, el scoring determinístico y un consejo multi-persona. Tres ambientes despliegan por rama a través de Amplify.',
  },

  decisions: {
    en: [
      'Separate AWS accounts per environment plus a blue-green migration: it shrinks the blast radius and makes rollback trivial — a single DNS change.',
      'A dedicated Google OAuth client per environment, so publishing state in one never blocks another.',
      'Rebuild production from zero with KMS-encrypted RDS and managed secrets, so it was born auditable for SOC 2 instead of being retrofitted later.',
      'Deterministic scoring kept separate from the language model: the AI captures and summarises, but the number that drives a financial decision is reproducible.',
    ],
    es: [
      'Cuentas AWS separadas por ambiente más migración blue-green: reduce el radio de daño y hace trivial el rollback — un solo cambio de DNS.',
      'Un cliente OAuth de Google dedicado por ambiente, para que el estado de publicación de uno nunca bloquee a otro.',
      'Reconstruir producción desde cero con RDS cifrada por KMS y secretos gestionados, para que naciera auditable para SOC 2 en lugar de parchearlo después.',
      'Scoring determinístico separado del modelo de lenguaje: la IA captura y resume, pero el número que mueve una decisión financiera es reproducible.',
    ],
  },

  challenges: {
    en: [
      'The Cognito trap: a profile identifier is the user pool sub, so the same person in a different pool silently becomes a duplicate profile with no membership.',
      'Federated login broken in production — a redirect mismatch between apex and www, on hosting without SPA rewrites. Resolved with HashRouter while the rewrite rules were fixed properly.',
      'The dev environment was quietly pointing at the staging database, contaminating real data.',
    ],
    es: [
      'La trampa de Cognito: el identificador de perfil es el sub del user pool, así que la misma persona en otro pool queda en silencio como perfil duplicado sin membresía.',
      'Login federado roto en producción — redirect mismatch entre apex y www, en un hosting sin reescrituras para SPA. Resuelto con HashRouter mientras se corregían las reglas de reescritura de raíz.',
      'El ambiente dev apuntaba en silencio a la base de datos de staging, contaminando datos reales.',
    ],
  },

  learnings: {
    en: [
      'Never instantiate SDK singletons at module top level: it breaks the import graph in CI. Lazy-init instead.',
      'Real multi-tenant isolation needs FORCE RLS and a non-privileged application role, not just a check in the application layer.',
      'Blue-green with a DNS cutover turns a risky migration into a reversible operation — which changes how calmly you can ship it.',
    ],
    es: [
      'Nunca instanciar singletons de SDKs en el top-level de un módulo: rompe el grafo de imports en CI. Usar lazy-init.',
      'El aislamiento multi-tenant real exige FORCE RLS y un rol de aplicación sin privilegios, no solo una comprobación en la capa de aplicación.',
      'Blue-green con cutover por DNS convierte una migración riesgosa en una operación reversible — y eso cambia la calma con la que puedes desplegarla.',
    ],
  },

  impact: {
    en: [
      'Production isolated in the client AWS account, encrypted at rest and auditable against 21 verified security controls.',
      'Environment separation ended cross-contamination between development and staging data.',
      'A federated login outage resolved live, restoring access for fund users.',
      'Rollback path reduced from a redeploy to a DNS change.',
    ],
    es: [
      'Producción aislada en la cuenta AWS del cliente, cifrada en reposo y auditable contra 21 controles de seguridad verificados.',
      'La separación de ambientes terminó con la contaminación entre datos de desarrollo y staging.',
      'Una caída de login federado resuelta en vivo, restaurando el acceso a los usuarios del fondo.',
      'Camino de rollback reducido de un redespliegue a un cambio de DNS.',
    ],
  },
};
