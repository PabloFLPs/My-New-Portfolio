import { z } from "zod";
import { site } from "@/content/data/site";
import { fallbackPosts, type Post } from "@/content/data/writing";

/** How often the article list is refreshed from DEV: once a day. */
export const POSTS_REVALIDATE_SECONDS = 86_400;

/** The Writing section shows the newest articles only. */
export const MAX_POSTS = 6;

const FETCH_TIMEOUT_MS = 5_000;

/**
 * The fields used from DEV's `GET /api/articles?username=…`. Anything else in the response is ignored, and an
 * article missing one of these is dropped rather than rendered half-empty.
 */
const DevArticle = z.object({
  title: z.string().min(1),
  url: z.url(),
  published_at: z.iso.datetime(),
  reading_time_minutes: z.number().int().positive(),
  tag_list: z.array(z.string()),
  language: z.string().nullish(),
});

function toPost(article: z.infer<typeof DevArticle>): Post {
  return {
    title: article.title,
    url: article.url,
    date: article.published_at.slice(0, 10),
    minutes: article.reading_time_minutes,
    tags: article.tag_list,
    lang: article.language?.toLowerCase().startsWith("pt") ? "pt" : "en",
  };
}

/** Valid articles from a DEV API response, newest first, at most `MAX_POSTS`. */
export function parseArticles(body: unknown): Post[] {
  if (!Array.isArray(body)) return [];
  return body
    .flatMap((item) => {
      const result = DevArticle.safeParse(item);
      return result.success ? [toPost(result.data)] : [];
    })
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, MAX_POSTS);
}

/**
 * The newest articles from DEV, fetched on the server and cached for a day (Vercel refreshes them in the
 * background). DEV's response is untrusted input: on a network error, a non-200, a body that doesn't validate
 * or an empty list, the fallback list in `content/data/writing.ts` is used, so the section is never empty.
 */
export async function getPosts(fetcher: typeof fetch = fetch): Promise<Post[]> {
  const url = `https://dev.to/api/articles?username=${site.devUsername}&per_page=30`;
  try {
    const response = await fetcher(url, {
      headers: { accept: "application/json" },
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      next: { revalidate: POSTS_REVALIDATE_SECONDS },
    });
    if (!response.ok) throw new Error(`DEV answered ${response.status}`);
    const posts = parseArticles(await response.json());
    if (posts.length === 0) throw new Error("DEV returned no valid articles");
    return posts;
  } catch (error) {
    console.warn(
      `[writing] Using the fallback article list: ${error instanceof Error ? error.message : error}`,
    );
    return fallbackPosts;
  }
}
