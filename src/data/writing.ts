import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'writing'>;

/** Published posts, newest first */
export async function getPosts(): Promise<Post[]> {
  return (await getCollection('writing', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

export const postPath = (post: Post) => `/writing/${post.id}/`;

/** "May 15, 2024"; dates in front matter are calendar days, so format in UTC */
export const longDate = (d: Date) =>
  d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

export const isoDay = (d: Date) => d.toISOString().slice(0, 10);

/** Reading time at 200 words a minute */
export const readingMinutes = (body = '') => Math.max(1, Math.round(body.split(/\s+/).filter(Boolean).length / 200));
