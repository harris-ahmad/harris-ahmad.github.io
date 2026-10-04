import type { APIRoute } from 'astro';

// The old site served the homepage at /about.html too; send it home.
export const GET: APIRoute = () =>
  new Response(
    '<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Redirecting…</title>' +
      '<link rel="canonical" href="https://harrisahmad.dev/"><meta name="robots" content="noindex">' +
      '<meta http-equiv="refresh" content="0; url=/"></head>' +
      '<body><p>This page has moved to <a href="/">https://harrisahmad.dev/</a>.</p></body></html>',
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } },
  );
