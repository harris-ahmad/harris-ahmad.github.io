import { pages } from './pages';
import { site } from './site';
import { getPosts, postPath, isoDay } from './writing';

/** sitemap.xml body listing every indexable page and post */
export async function sitemapXml(): Promise<string> {
  const posts = await getPosts();
  const entries = [
    ...pages.map((p) => ({ loc: `${site.url}${p.path}`, lastmod: p.lastmod })),
    ...posts.map((post) => ({
      loc: `${site.url}${postPath(post)}`,
      lastmod: isoDay(post.data.updated ?? post.data.date),
    })),
  ];
  const urls = entries.map((e) => `  <url><loc>${e.loc}</loc><lastmod>${e.lastmod}</lastmod></url>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}
