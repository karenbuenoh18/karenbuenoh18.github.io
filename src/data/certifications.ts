/* ============================================================
   Certifications.

   Intentionally empty: nothing in the repo established which
   certifications you hold, and this is the one section on a portfolio
   where a guess is genuinely damaging. The section renders a clean
   "currently studying" state until you add entries.

   Add one and it appears, grouped by status.
   ============================================================ */

import type { L } from './work/types';

export type CertStatus = 'earned' | 'in-progress' | 'planned';

export interface Certification {
  /** Official certification name — keep it verbatim, untranslated. */
  name: string;
  issuer: string;
  status: CertStatus;
  /** Year earned, or target year. */
  year?: string;
  /** Verification link (Credly, Microsoft Learn, etc.). */
  url?: string;
  note?: L;
}

export const certifications: Certification[] = [
  // {
  //   name: 'AWS Certified Solutions Architect — Associate',
  //   issuer: 'Amazon Web Services',
  //   status: 'in-progress',
  //   year: '2026',
  //   url: '',
  //   note: { en: '', es: '' },
  // },
];

export const certStatusKey = {
  earned: 'cert.earned',
  'in-progress': 'cert.inprogress',
  planned: 'cert.planned',
} as const;

/** Display order: earned first, then what is underway, then intent. */
export const certStatusOrder: CertStatus[] = ['earned', 'in-progress', 'planned'];
