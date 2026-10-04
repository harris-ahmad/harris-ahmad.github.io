# harrisahmad.dev

Personal site of Harris Ahmad, built with [Astro](https://astro.build) and deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `master`.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
npm run preview  # serve dist/
```

## Where things live

| What | Where |
| --- | --- |
| Homepage | `src/pages/index.astro` |
| Other pages | `src/pages/*.astro` (`/projects` is `projects.astro`, `/blastradius/` is `blastradius/index.astro`) |
| Posts | `src/content/writing/<slug>.md`, served at `/writing/<slug>/` |
| News, profile links, booking link | `src/data/news.ts`, `src/data/site.ts` |
| Architecture diagrams | `src/data/diagrams/*.json`, drawn by `src/components/ArchDiagram.astro` |
| Theme tokens and shared styles | `src/styles/global.css` |
| Résumé, paper PDFs, images | `public/files/`, `public/images/` |
| Sitemap pages | `src/data/pages.ts` (posts are added automatically) |

`build.format: 'preserve'` in `astro.config.mjs` keeps the existing URLs: a page file becomes
`name.html` and an `index` page becomes `name/index.html`.

To add a post, create `src/content/writing/<slug>.md` with `title`, `date`, `description`, `excerpt`
and `tags` in its front matter.

Light and dark themes follow the OS until a visitor uses the toggle; the choice is stored in
`localStorage` under `theme`.

`public/googlec2c95757179be286.html` verifies the site in Google Search Console; keep it.
