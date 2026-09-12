import { describe, it, expect } from "vitest";
import { getAllSiteUrls, SUPPORTED_LANGS } from "./site-urls";
import { BASE_URL } from "./seo";
import { blogPosts } from "@/content/blog/posts";

describe("getAllSiteUrls", () => {
  const urls = getAllSiteUrls().map((u) => u.url);

  it("includes the homepage for every supported language", () => {
    for (const lang of SUPPORTED_LANGS) {
      expect(urls).toContain(`${BASE_URL}/${lang}`);
    }
  });

  it("includes UA-only pages (blog, news, subscription) only for /ua", () => {
    for (const path of ["/blog", "/news", "/services/subscription"]) {
      expect(urls).toContain(`${BASE_URL}/ua${path}`);
      for (const lang of SUPPORTED_LANGS.filter((l) => l !== "ua")) {
        expect(urls).not.toContain(`${BASE_URL}/${lang}${path}`);
      }
    }
  });

  it("includes one URL per blog post slug", () => {
    for (const post of blogPosts) {
      expect(urls).toContain(`${BASE_URL}/ua/blog/${post.slug}`);
    }
  });

  it("produces only absolute https URLs with no duplicates", () => {
    for (const url of urls) {
      expect(url.startsWith("https://")).toBe(true);
    }
    expect(new Set(urls).size).toBe(urls.length);
  });
});
