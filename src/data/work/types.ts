/* ============================================================
   Work data model.

   Localised field by field (`{ en, es }`) rather than in two big
   language blocks: the translation sits next to its original, so a
   drifting or missing translation is a compile error, not a bug
   someone spots in production six months later.
   ============================================================ */

import type { Locale } from '../../i18n/ui';

/** A string in every locale. */
export type L = Record<Locale, string>;

/** A list of strings in every locale. */
export type LList = Record<Locale, string[]>;

export const workCategories = ['enterprise', 'cloud-devops', 'freelance', 'personal'] as const;
export type WorkCategory = (typeof workCategories)[number];

/** i18n keys for each category, resolved through `useTranslations`. */
export const categoryLabelKey = {
  enterprise: 'cat.enterprise',
  'cloud-devops': 'cat.cloud',
  freelance: 'cat.freelance',
  personal: 'cat.personal',
} as const;

export const categoryDescKey = {
  enterprise: 'cat.enterprise.desc',
  'cloud-devops': 'cat.cloud.desc',
  freelance: 'cat.freelance.desc',
  personal: 'cat.personal.desc',
} as const;

export type WorkStatus = 'live' | 'production' | 'shipped' | 'active';

export interface WorkMetric {
  /** Short, scannable figure. Keep it locale-neutral. */
  value: string;
  label: L;
}

export interface WorkProject {
  /** URL segment. Never change it once published — it is a permalink. */
  slug: string;
  category: WorkCategory;

  /** Surfaces on the home page's featured rail. */
  featured: boolean;

  /** Lower sorts first, within a category. */
  order: number;

  /** Display period, e.g. '2025' or '2024 — 2025'. */
  period: string;

  /** Set false to keep a draft out of the build entirely. */
  published: boolean;

  status: WorkStatus;

  /** Client identity withheld — renders the NDA note. */
  confidential?: boolean;

  /** Tech pills, in the order they should read. */
  tech: string[];

  /** Architecture flow nodes, left to right. Locale-neutral tech names. */
  flow: string[];

  /** Up to four. These are the numbers a recruiter remembers. */
  metrics: WorkMetric[];

  title: L;
  /** Short domain line above the title, e.g. 'AWS · AI · SOC 2'. */
  domain: L;
  /** One or two sentences. The elevator pitch. */
  tagline: L;

  role: L;
  context: L;
  problem: L;
  solution: L;
  architecture: L;

  decisions: LList;
  challenges: LList;
  learnings: LList;
  impact: LList;

  links?: {
    live?: string;
    repo?: string;
  };
}

/** Narrow a project's localised fields down to one locale for rendering. */
export function localize(project: WorkProject, locale: Locale) {
  return {
    ...project,
    title: project.title[locale],
    domain: project.domain[locale],
    tagline: project.tagline[locale],
    role: project.role[locale],
    context: project.context[locale],
    problem: project.problem[locale],
    solution: project.solution[locale],
    architecture: project.architecture[locale],
    decisions: project.decisions[locale],
    challenges: project.challenges[locale],
    learnings: project.learnings[locale],
    impact: project.impact[locale],
    metrics: project.metrics.map((m) => ({ value: m.value, label: m.label[locale] })),
  };
}

export type LocalizedProject = ReturnType<typeof localize>;
