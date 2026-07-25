/* ============================================================
   Work registry.

   To add a project: create src/data/work/<slug>.ts from erp-pos.ts,
   import it here, drop it in `registry`. Everything downstream —
   home rail, category groups, case-study routes in both locales,
   prev/next navigation — updates on its own.
   ============================================================ */

import { aiCapitalAllocation } from './ai-capital-allocation';
import { b2bEcommerce } from './b2b-ecommerce';
import { erpPos } from './erp-pos';
import { financialInsurancePlatform } from './financial-insurance-platform';
import { footballCommunity } from './football-community';
import { insuranceCrm } from './insurance-crm';
import { workCategories, type WorkCategory, type WorkProject } from './types';

/** Declaration order does not matter — sorting happens below. */
const registry: WorkProject[] = [
  aiCapitalAllocation,
  financialInsurancePlatform,
  insuranceCrm,
  b2bEcommerce,
  footballCommunity,
  erpPos,
];

const categoryRank: Record<WorkCategory, number> = {
  enterprise: 0,
  'cloud-devops': 1,
  freelance: 2,
  personal: 3,
};

function bySortOrder(a: WorkProject, b: WorkProject): number {
  const byCat = categoryRank[a.category] - categoryRank[b.category];
  return byCat !== 0 ? byCat : a.order - b.order;
}

/** Everything that should be visible on the site. */
export const projects: WorkProject[] = registry
  .filter((p) => p.published)
  .sort(bySortOrder);

/** Drafts, surfaced only so the build can warn about them. */
export const drafts: WorkProject[] = registry.filter((p) => !p.published);

export const featured: WorkProject[] = projects.filter((p) => p.featured);

/** Categories that actually have published work, in display order. */
export const populatedCategories: WorkCategory[] = workCategories.filter((c) =>
  projects.some((p) => p.category === c),
);

export function projectsIn(category: WorkCategory): WorkProject[] {
  return projects.filter((p) => p.category === category);
}

export function getProject(slug: string): WorkProject | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Wraps around, so a case study never dead-ends. */
export function nextProject(slug: string): WorkProject | undefined {
  if (projects.length < 2) return undefined;
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return undefined;
  return projects[(i + 1) % projects.length];
}

export { workCategories, categoryLabelKey, categoryDescKey, localize } from './types';
export type { WorkCategory, WorkProject, LocalizedProject } from './types';
