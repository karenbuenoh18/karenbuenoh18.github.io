/* ============================================================
   Single source of truth for identity and outbound links.
   ============================================================ */

export const site = {
  /** Public brand name. */
  name: 'Mel Bueno',

  /**
   * Legal / previously-published name. Not shown in the interface, but
   * emitted as `alternateName` in JSON-LD so recruiters searching either
   * name still land here — the site and LinkedIn stay findable together.
   */
  alternateName: 'Karen Bueno',

  wordmark: 'MEL BUENO',
  universe: 'Universe of Mel',

  email: 'karenbuenoh1809@gmail.com',
  linkedin: 'https://www.linkedin.com/in/karenbuenoh18/',
  github: 'https://github.com/karenbuenoh18',

  /** Drop the file at public/cv/… and point here. null hides the button. */
  cv: null as string | null,

  /** Used for JSON-LD and Open Graph. */
  origin: 'https://karenbuenoh18.github.io',
  ogImage: '/imagenes/foto.jpg',
  avatar: '/imagenes/foto.jpg',
  favicon: '/imagenes/LogotipoKB.png',
} as const;
