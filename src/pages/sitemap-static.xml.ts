import type { APIRoute } from 'astro';
import { sitemapXml } from '../data/sitemap';

// Kept because robots.txt and Search Console already point at it; same list as /sitemap.xml.
export const GET: APIRoute = async () =>
  new Response(await sitemapXml(), { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
