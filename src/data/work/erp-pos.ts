import type { WorkProject } from './types';

/* ============================================================
   TEMPLATE — NOT PUBLISHED YET.

   You asked for ERP / POS in the Enterprise list, but there was no
   case-study content for it anywhere in the repo, so nothing here is
   invented. Fill in the TODO fields with real detail, then flip
   `published` to true and it appears on the site automatically.

   This file doubles as the reference for adding any future project:
     1. copy it to src/data/work/<slug>.ts
     2. write both locales for every field
     3. register it in src/data/work/index.ts
   ============================================================ */

export const erpPos: WorkProject = {
  slug: 'erp-pos-platform',
  category: 'enterprise',
  featured: false,
  order: 5,
  period: 'TODO', // e.g. '2024 — 2025'
  published: false, // ← flip to true when the content below is real
  status: 'production',
  confidential: true,

  tech: [], // TODO e.g. ['React', 'PostgreSQL', 'Docker']

  flow: [], // TODO the architecture nodes, left to right

  metrics: [
    // TODO up to four. Use figures you can defend in an interview.
    // { value: '', label: { en: '', es: '' } },
  ],

  title: {
    en: 'ERP / POS Platform',
    es: 'Plataforma ERP / POS',
  },

  domain: {
    en: 'TODO',
    es: 'TODO',
  },

  tagline: {
    en: 'TODO — one or two sentences: what it is and who it serves.',
    es: 'TODO — una o dos frases: qué es y a quién sirve.',
  },

  role: {
    en: 'TODO — what you personally owned.',
    es: 'TODO — de qué fuiste responsable personalmente.',
  },

  context: {
    en: 'TODO — the client situation and constraints.',
    es: 'TODO — la situación del cliente y las restricciones.',
  },

  problem: {
    en: 'TODO — the hard part, stated concretely.',
    es: 'TODO — la parte difícil, planteada de forma concreta.',
  },

  solution: {
    en: 'TODO — what you built and why that shape.',
    es: 'TODO — qué construiste y por qué esa forma.',
  },

  architecture: {
    en: 'TODO — how the pieces connect.',
    es: 'TODO — cómo se conectan las piezas.',
  },

  decisions: { en: [], es: [] },
  challenges: { en: [], es: [] },
  learnings: { en: [], es: [] },
  impact: { en: [], es: [] },
};
