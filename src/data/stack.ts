/* ============================================================
   Tech stack, grouped by the problem it solves.

   Tool names stay locale-neutral; only the group label is translated,
   through the `stack.*` keys in src/i18n/ui.ts.
   ============================================================ */

import type { UIKey } from '../i18n/ui';

export interface StackGroup {
  /** i18n key for the group heading. */
  key: UIKey;
  /** Two-character glyph shown in the group header. */
  glyph: string;
  items: string[];
}

export const stack: StackGroup[] = [
  {
    key: 'stack.cloud',
    glyph: '◇',
    items: ['AWS', 'Google Cloud', 'Azure', 'Cloud Run', 'AWS Lambda', 'Amplify', 'Firebase'],
  },
  {
    key: 'stack.devops',
    glyph: '⇄',
    items: [
      'GitHub Actions',
      'GitLab CI',
      'Jenkins',
      'Docker',
      'Kubernetes',
      'AKS',
      'GitOps',
      'Blue-green deploys',
    ],
  },
  {
    key: 'stack.infra',
    glyph: '▤',
    items: ['Terraform', 'Pulumi', 'AWS SAM', 'Infrastructure as Code', 'Cloud Build'],
  },
  {
    key: 'stack.programming',
    glyph: '⌘',
    items: ['TypeScript', 'JavaScript', 'Python', 'Dart', 'Node.js', 'React', 'Astro', 'Flutter'],
  },
  {
    key: 'stack.databases',
    glyph: '◫',
    items: ['PostgreSQL', 'Firestore', 'RDS', 'Row-Level Security', 'SQL'],
  },
  {
    key: 'stack.ai',
    glyph: '✳',
    items: ['Amazon Bedrock', 'Claude', 'Gemini', 'MCP servers', 'Prompt engineering', 'AI agents'],
  },
  {
    key: 'stack.security',
    glyph: '⛨',
    items: [
      'Cognito',
      'OAuth 2.0',
      'KMS encryption',
      'Secret Manager',
      'Least privilege IAM',
      'SOC 2 controls',
    ],
  },
  {
    key: 'stack.observability',
    glyph: '◉',
    items: ['CloudWatch', 'Grafana', 'Structured logging', 'Alerting', 'Circuit breakers'],
  },
];
