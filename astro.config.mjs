import { defineConfig } from 'astro/config';

// GitHub Pages user site → served from the domain root.
export default defineConfig({
  site: 'https://karenbuenoh18.github.io',
  base: '/',
  compressHTML: true,
});
