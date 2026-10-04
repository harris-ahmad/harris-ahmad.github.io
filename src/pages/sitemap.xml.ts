import type { APIRoute } from 'astro';
import { sitemapXml } from '../data/sitemap';

export const GET: APIRoute = async () =>
  new Response(await sitemapXml(), { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
