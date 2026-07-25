/* ============================================================
   Labs — tracks, not fake projects.

   Scaffolded as the four areas you actually experiment in. Each entry
   starts as `soon` and becomes a real card the moment you fill in
   `body` with something you built. Add `href` to link out to a repo.
   ============================================================ */

import type { L } from './work/types';

export interface LabTrack {
  id: string;
  glyph: string;
  title: L;
  body: L;
  tags: string[];
  soon?: boolean;
  href?: string;
}

export const labTracks: LabTrack[] = [
  {
    id: 'agents',
    glyph: '✳',
    title: {
      en: 'Agents & MCP servers',
      es: 'Agentes y servidores MCP',
    },
    body: {
      en: 'Model Context Protocol servers, tool definitions and agent harnesses — the plumbing that lets a model act on real systems safely.',
      es: 'Servidores de Model Context Protocol, definiciones de tools y arneses de agentes — la plomería que le permite a un modelo actuar sobre sistemas reales de forma segura.',
    },
    tags: ['MCP', 'Claude', 'Python', 'Cloud Run'],
    soon: true,
  },
  {
    id: 'infra',
    glyph: '▤',
    title: {
      en: 'Infrastructure spikes',
      es: 'Pruebas de infraestructura',
    },
    body: {
      en: 'Small Terraform and Pulumi experiments: importing existing resources into code, module design, and finding out what a stack actually costs before committing to it.',
      es: 'Experimentos pequeños de Terraform y Pulumi: importar recursos existentes a código, diseño de módulos y averiguar cuánto cuesta de verdad un stack antes de comprometerse.',
    },
    tags: ['Terraform', 'Pulumi', 'IaC'],
    soon: true,
  },
  {
    id: 'automation',
    glyph: '⇄',
    title: {
      en: 'Automation & pipelines',
      es: 'Automatización y pipelines',
    },
    body: {
      en: 'CI/CD patterns worth reusing: reproducible builds, end-to-end tests that produce video evidence, and release flows that do not need a human to remember a step.',
      es: 'Patrones de CI/CD que vale la pena reutilizar: builds reproducibles, pruebas end-to-end que dejan evidencia en video y flujos de release que no necesitan que un humano recuerde un paso.',
    },
    tags: ['GitHub Actions', 'Playwright', 'Docker'],
    soon: true,
  },
  {
    id: 'prompts',
    glyph: '❯',
    title: {
      en: 'Prompt & tooling notes',
      es: 'Notas de prompting y herramientas',
    },
    body: {
      en: 'What actually works when a language model sits inside a production workflow — and the failure modes that only show up once real users are involved.',
      es: 'Lo que de verdad funciona cuando un modelo de lenguaje vive dentro de un flujo de producción — y los modos de falla que solo aparecen cuando hay usuarios reales.',
    },
    tags: ['Prompt engineering', 'Evals', 'Bedrock'],
    soon: true,
  },
];
