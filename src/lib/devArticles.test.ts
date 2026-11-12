import { readFileSync } from "node:fs";
import { afterEach, describe, expect, it, vi } from "vitest";
import { fallbackPosts } from "@/content/data/writing";
import { getPosts, MAX_POSTS, parseArticles, POSTS_REVALIDATE_SECONDS } from "./devArticles";

/** Shaped like an item of DEV's `GET /api/articles`, with extra fields the parser must ignore. */
function article(overrides: Record<string, unknown> = {}) {
  return {
    type_of: "article",
    id: 1,
    title: "Context engineering is engineering work — not prompt-writing",
    url: "https://dev.to/pablofelps/context-engineering-203g",
    published_at: "2026-06-25T21:37:40Z",
    reading_time_minutes: 9,
    tag_list: ["ai", "llm"],
    tags: "ai, llm",
    language: "en",
    ...overrides,
  };
}

function respond(body: unknown, status = 200): typeof fetch {
  return vi.fn(async () => new Response(JSON.stringify(body), { status })) as unknown as typeof fetch;
}

afterEach(() => vi.restoreAllMocks());

describe("parseArticles", () => {
  it("maps DEV's fields to posts", () => {
    expect(parseArticles([article()])).toEqual([
      {
        title: "Context engineering is engineering work — not prompt-writing",
        url: "https://dev.to/pablofelps/context-engineering-203g",
        date: "2026-06-25",
        minutes: 9,
        tags: ["ai", "llm"],
        lang: "en",
      },
    ]);
  });

  it("drops articles that don't validate, keeping the rest", () => {
    const posts = parseArticles([
      article({ title: "" }),
      article({ url: "not a url" }),
      article({ reading_time_minutes: "9" }),
      article({ published_at: undefined }),
      article({ title: "Valid one" }),
    ]);
    expect(posts.map((p) => p.title)).toEqual(["Valid one"]);
  });

  it("sorts newest first and keeps at most MAX_POSTS", () => {
    const many = Array.from({ length: MAX_POSTS + 3 }, (_, i) =>
      article({ title: `Post ${i}`, published_at: `2026-01-${String(i + 1).padStart(2, "0")}T00:00:00Z` }),
    );
    const posts = parseArticles(many);
    expect(posts).toHaveLength(MAX_POSTS);
    expect(posts[0]?.title).toBe(`Post ${MAX_POSTS + 2}`);
  });

  it("reads the language, defaulting to English when DEV has none", () => {
    expect(parseArticles([article({ language: "pt-BR" })])[0]?.lang).toBe("pt");
    expect(parseArticles([article({ language: null })])[0]?.lang).toBe("en");
  });

  it("returns nothing for a body that isn't a list", () => {
    expect(parseArticles({ error: "not found" })).toEqual([]);
  });
});

describe("getPosts", () => {
  it("returns DEV's articles and asks Next.js to refresh them daily", async () => {
    const fetcher = respond([article()]);
    const posts = await getPosts(fetcher);
    expect(posts).toHaveLength(1);
    expect(fetcher).toHaveBeenCalledWith(
      expect.stringContaining("dev.to/api/articles?username=pablofelps"),
      expect.objectContaining({ next: { revalidate: POSTS_REVALIDATE_SECONDS } }),
    );
  });

  it.each([
    ["the request fails", vi.fn(async () => Promise.reject(new Error("offline"))) as unknown as typeof fetch],
    ["DEV answers with an error", respond({ error: "busy" }, 503)],
    ["no article validates", respond([article({ url: "nope" })])],
    ["the list is empty", respond([])],
  ])("falls back to the static list when %s", async (_, fetcher) => {
    vi.spyOn(console, "warn").mockImplementation(() => {});
    expect(await getPosts(fetcher)).toBe(fallbackPosts);
    expect(console.warn).toHaveBeenCalledOnce();
  });
});

describe("home pages", () => {
  it.each(["src/app/(en)/page.tsx", "src/app/(pt)/pt-br/page.tsx"])(
    "%s revalidates as often as the article list",
    (file) => {
      expect(readFileSync(file, "utf8")).toContain(`export const revalidate = ${POSTS_REVALIDATE_SECONDS};`);
    },
  );
});
