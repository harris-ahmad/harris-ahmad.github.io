// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://harrisahmad.dev',
  integrations: [mdx()],
  // Keep the live URLs: /projects is projects.html, /blastradius/ is blastradius/index.html
  build: { format: 'preserve' },
  trailingSlash: 'ignore',
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: false,
    },
  },
  devToolbar: { enabled: false },
});
