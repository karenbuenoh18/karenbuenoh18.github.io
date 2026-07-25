/* ============================================================
   Experience timeline.

   Newest first. `end: null` renders as the localised "Present".
   ============================================================ */

import type { L, LList } from './work/types';

export interface Role {
  company: string;
  /** Optional link to the company site. */
  url?: string;
  title: L;
  start: string;
  /** null → ongoing. */
  end: string | null;
  location: L;
  summary: L;
  responsibilities: LList;
  /** Slugs from src/data/work — renders as links to those case studies. */
  relatedWork: string[];
  stack: string[];
}

export const experience: Role[] = [
  {
    company: 'Zulunity',
    url: 'https://zulunity.cloud',
    title: {
      en: 'Cloud Engineer',
      es: 'Cloud Engineer',
    },
    start: '2023',
    end: null,
    location: {
      en: 'Remote',
      es: 'Remoto',
    },
    summary: {
      en: 'Design and operate the cloud infrastructure behind client platforms: multi-account AWS environments, infrastructure as code, CI/CD, and the security hardening that makes an audit survivable.',
      es: 'Diseño y opero la infraestructura cloud detrás de plataformas de cliente: ambientes AWS multi-cuenta, infraestructura como código, CI/CD y el endurecimiento de seguridad que hace sobrevivible una auditoría.',
    },
    responsibilities: {
      en: [
        'Migrated production environments into isolated client AWS accounts with blue-green cutovers, reducing rollback to a DNS change.',
        'Hardened platforms for SOC 2: KMS encryption at rest, managed secrets, least-privilege IAM and PostgreSQL Row-Level Security for real multi-tenant isolation.',
        'Built and maintained CI/CD across GitHub Actions and GitLab CI, with branch-per-environment deploys.',
        'Led engineering on client platforms end to end — technical design document, implementation, deployment and live incident response.',
        'Integrated AI capabilities on Amazon Bedrock, keeping model output separate from the deterministic logic that drives financial decisions.',
      ],
      es: [
        'Migré ambientes de producción a cuentas AWS aisladas del cliente con cutovers blue-green, reduciendo el rollback a un cambio de DNS.',
        'Endurecí plataformas para SOC 2: cifrado en reposo con KMS, secretos gestionados, IAM de mínimo privilegio y Row-Level Security en PostgreSQL para aislamiento multi-tenant real.',
        'Construí y mantuve CI/CD en GitHub Actions y GitLab CI, con despliegue por rama y ambiente.',
        'Lideré ingeniería en plataformas de cliente de extremo a extremo — documento de diseño técnico, implementación, despliegue y respuesta a incidentes en vivo.',
        'Integré capacidades de IA sobre Amazon Bedrock, manteniendo la salida del modelo separada de la lógica determinística que mueve decisiones financieras.',
      ],
    },
    relatedWork: ['ai-capital-allocation', 'financial-insurance-platform', 'insurance-crm', 'b2b-ecommerce-platform'],
    stack: ['AWS', 'GCP', 'Terraform', 'Pulumi', 'Docker', 'PostgreSQL', 'Bedrock', 'GitHub Actions'],
  },
  {
    company: 'Freelance',
    title: {
      en: 'Software & Cloud Engineer',
      es: 'Ingeniera de software y cloud',
    },
    // TODO verify these dates — the repo only established "Zulunity, 2023 —
    // Present", so this range is a placeholder for you to correct.
    start: '2022',
    end: '2023',
    location: {
      en: 'Independent',
      es: 'Independiente',
    },
    summary: {
      en: 'Delivered web platforms, mobile apps and internal tools for small businesses and communities — owning the whole path from architecture to app store.',
      es: 'Entregué plataformas web, apps móviles y herramientas internas para pequeñas empresas y comunidades — siendo dueña de todo el camino, de la arquitectura a la tienda de apps.',
    },
    responsibilities: {
      en: [
        'Designed and shipped cross-platform mobile applications with Flutter, published to both the iOS and Android stores.',
        'Built multi-role authorisation models with granular permissions, centralised from the first commit rather than retrofitted.',
        'Delivered corporate sites, landing pages and internal tools with a focus on maintainability over novelty.',
        'Worked directly with clients on scope, change management and handover documentation.',
      ],
      es: [
        'Diseñé y publiqué aplicaciones móviles cross-platform con Flutter, en las tiendas de iOS y Android.',
        'Construí modelos de autorización multi-rol con permisos granulares, centralizados desde el primer commit en lugar de añadidos después.',
        'Entregué sitios corporativos, landing pages y herramientas internas con foco en mantenibilidad antes que en novedad.',
        'Trabajé directamente con clientes en alcance, gestión de cambios y documentación de entrega.',
      ],
    },
    relatedWork: ['amateur-football-platform'],
    stack: ['Flutter', 'Firebase', 'Astro', 'React', 'TypeScript'],
  },
];
