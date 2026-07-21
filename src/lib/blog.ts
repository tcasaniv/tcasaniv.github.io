import { getCollection, type CollectionEntry } from "astro:content";

/**
 * Returns published blog posts, excluding:
 * - Files whose id starts with "_" (hidden/draft by convention)
 * - Posts with draft: true
 *
 * Sorted by date, newest first.
 */
export async function getPublishedBlogPosts(): Promise<CollectionEntry<"blog">[]> {
  const posts = await getCollection("blog", (post) => {
    // Exclude files starting with "_" (hidden by naming convention)
    if (post.id.startsWith("_")) return false;
    // Exclude drafts
    if (post.data.draft === true) return false;
    return true;
  });

  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
