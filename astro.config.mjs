import { defineConfig } from 'astro/config';

// GitHub Pages user site → served from the domain root.
export default defineConfig({
  site: 'https://karenbuenoh18.github.io',
  base: '/',
  compressHTML: true,

  // Bilingual. English is the default locale and lives unprefixed at the root
  // (`/`, `/labs`, `/work/…`) because the primary audience is international
  // recruiters and clients. Spanish is prefixed (`/es/`, `/es/labs`, …).
  // To flip the default, swap `defaultLocale` and set `prefixDefaultLocale`.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },

  redirects: {
    // The old Spanish creative page. Keep inbound links alive.
    '/creatividad': '/es/beyond',
  },
});
