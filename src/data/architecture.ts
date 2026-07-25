/* ============================================================
   Architecture gallery.

   Slots seeded from real systems you built, deliberately without
   images: public/imagenes holds screenshots whose contents I cannot
   verify, and mislabelling an architecture diagram on a portfolio is
   worse than showing an empty slot.

   Drop a file in public/imagenes/arquitectura/ and set `image` — the
   card switches from placeholder to figure automatically.
   ============================================================ */

import type { L } from './work/types';

export interface ArchItem {
  /** Path under /public, or null while the diagram is pending. */
  image: string | null;
  /** Alt text is required whenever `image` is set. */
  alt?: L;
  title: L;
  caption: L;
  tags: string[];
  /** Slug from src/data/work, if this diagram belongs to a case study. */
  project?: string;
  /** Renders wider in the gallery grid. */
  wide?: boolean;
}

export const architectureGallery: ArchItem[] = [
  {
    image: null,
    wide: true,
    title: {
      en: 'Serverless AWS, three isolated environments',
      es: 'AWS serverless, tres ambientes aislados',
    },
    caption: {
      en: 'React SPA → Cognito → Lambda (SAM) → RDS PostgreSQL with FORCE RLS → Bedrock. One AWS account per environment, blue-green cutover by DNS.',
      es: 'SPA React → Cognito → Lambda (SAM) → RDS PostgreSQL con FORCE RLS → Bedrock. Una cuenta AWS por ambiente, cutover blue-green por DNS.',
    },
    tags: ['AWS', 'SAM', 'Cognito', 'RDS', 'Bedrock'],
    project: 'ai-capital-allocation',
  },
  {
    image: null,
    title: {
      en: 'Asynchronous issuance pipeline',
      es: 'Pipeline de emisión asíncrona',
    },
    caption: {
      en: 'Queue, worker and an explicit state machine with idempotency keys, plus a reconciliation sweep so a payment timeout never strands a record.',
      es: 'Cola, worker y máquina de estados explícita con llaves de idempotencia, más un barrido de reconciliación para que un timeout de pago nunca deje un registro a medias.',
    },
    tags: ['Cloud Run', 'Queue', 'Idempotency', 'Reconciliation'],
    project: 'financial-insurance-platform',
  },
  {
    image: null,
    title: {
      en: 'Multi-gateway payment routing',
      es: 'Ruteo de pagos multi-pasarela',
    },
    caption: {
      en: 'One centralised rule routes by currency, method and amount. Hosted checkout keeps PCI scope minimal; idempotent webhooks confirm.',
      es: 'Una regla centralizada rutea por moneda, método y monto. El checkout hospedado mantiene mínimo el alcance PCI; webhooks idempotentes confirman.',
    },
    tags: ['Express', 'PostgreSQL', 'Webhooks', 'PCI'],
    project: 'b2b-ecommerce-platform',
  },
  {
    image: null,
    title: {
      en: 'CI/CD, branch per environment',
      es: 'CI/CD, una rama por ambiente',
    },
    caption: {
      en: 'GitHub Actions and GitLab CI pipelines mapping branches to environments, with infrastructure applied from Terraform and Pulumi rather than a console.',
      es: 'Pipelines de GitHub Actions y GitLab CI que mapean ramas a ambientes, con infraestructura aplicada desde Terraform y Pulumi en lugar de una consola.',
    },
    tags: ['GitHub Actions', 'GitLab CI', 'Terraform', 'Pulumi'],
  },
  {
    image: null,
    title: {
      en: 'Geohash proximity model',
      es: 'Modelo de cercanía por geohash',
    },
    caption: {
      en: 'Denormalised Firestore indexed by geohash for 5, 10 and 20 km radii, with Cloud Functions owning every state transition the client cannot be trusted with.',
      es: 'Firestore denormalizado indexado por geohash para radios de 5, 10 y 20 km, con Cloud Functions dueñas de cada transición de estado que no se le puede confiar al cliente.',
    },
    tags: ['Firestore', 'Geohash', 'Cloud Functions'],
    project: 'amateur-football-platform',
  },
  {
    image: null,
    title: {
      en: 'Multi-tenant isolation at the database',
      es: 'Aislamiento multi-tenant en la base de datos',
    },
    caption: {
      en: 'FORCE RLS behind a non-privileged application role, so tenant separation survives a bug in the application layer instead of depending on it.',
      es: 'FORCE RLS detrás de un rol de aplicación sin privilegios, para que la separación por tenant sobreviva a un bug en la capa de aplicación en lugar de depender de ella.',
    },
    tags: ['PostgreSQL', 'RLS', 'KMS', 'Least privilege'],
    project: 'ai-capital-allocation',
  },
];
