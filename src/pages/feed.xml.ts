import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { site } from '../data/site';
import { getPosts, postPath } from '../data/writing';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: 'Harris Ahmad — Writing',
    description: 'Notes on distributed systems, internet measurement, AI tooling, and research.',
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.date,
      link: postPath(post),
      categories: post.data.tags,
    })),
    customData: '<language>en-us</language>',
  });
}
