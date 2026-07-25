/* ============================================================
   Beyond Technology — the creative half of the universe.

   Deliberately a separate data file from src/data/work: this content
   must never be able to leak into the professional pages.
   ============================================================ */

import type { UIKey } from '../i18n/ui';

/** Rhythms are proper nouns — same in both locales. */
export const rhythms: string[] = [
  'Salsa Cubana & Casino',
  'Bachata',
  'Salsa en Línea',
  'Bachazouk',
  'Zouk',
];

export interface BeyondFacet {
  id: string;
  /** i18n key for the facet name. */
  titleKey: UIKey;
  /** i18n key for the body copy. */
  bodyKey: UIKey;
  glyph: string;
  /** Renders the "coming soon" badge instead of full content. */
  soon?: boolean;
  /** Renders across two columns in the grid. */
  wide?: boolean;
}

export const facets: BeyondFacet[] = [
  { id: 'music', titleKey: 'beyond.music', bodyKey: 'beyond.music.body', glyph: '♪' },
  { id: 'art', titleKey: 'beyond.art', bodyKey: 'beyond.art.body', glyph: '◐' },
  {
    id: 'photography',
    titleKey: 'beyond.photography',
    bodyKey: 'beyond.photography.body',
    glyph: '⬡',
    soon: true,
  },
  {
    id: 'learning',
    titleKey: 'beyond.learning',
    bodyKey: 'beyond.learning.body',
    glyph: '✦',
    soon: true,
  },
  {
    id: 'writing',
    titleKey: 'beyond.writing',
    bodyKey: 'beyond.writing.body',
    glyph: '❯',
    soon: true,
    wide: true,
  },
];
