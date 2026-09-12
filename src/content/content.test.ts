import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import path from "node:path";
import { blogPosts } from "./blog/posts";
import { newsItems } from "./news/news";

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

describe("blogPosts", () => {
  it("has unique slugs", () => {
    const slugs = blogPosts.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("gives every post at least 3 images with alt text (CONTENT_GUIDELINES.md)", () => {
    for (const post of blogPosts) {
      expect(post.images.length, `"${post.slug}" has too few images`).toBeGreaterThanOrEqual(3);
      for (const img of post.images) {
        expect(img.src).toMatch(/^https:\/\//);
        expect(img.alt.trim().length).toBeGreaterThan(0);
      }
    }
  });

  it("has a valid ISO date for every post", () => {
    for (const post of blogPosts) {
      expect(post.date).toMatch(ISO_DATE);
    }
  });

  it("has a corresponding .mdx file on disk for every post", () => {
    for (const post of blogPosts) {
      const file = path.join(__dirname, "blog", `${post.slug}.mdx`);
      expect(existsSync(file), `missing ${file}`).toBe(true);
    }
  });
});

describe("newsItems", () => {
  it("has unique ids", () => {
    const ids = newsItems.map((n) => n.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("gives every item at least 3 images with alt text (CONTENT_GUIDELINES.md)", () => {
    for (const item of newsItems) {
      expect(item.images.length, `"${item.id}" has too few images`).toBeGreaterThanOrEqual(3);
      for (const img of item.images) {
        expect(img.src).toMatch(/^https:\/\//);
        expect(img.alt.trim().length).toBeGreaterThan(0);
      }
    }
  });

  it("has a valid ISO date for every item", () => {
    for (const item of newsItems) {
      expect(item.date).toMatch(ISO_DATE);
    }
  });

  it("only links to https sourceUrl when present (nofollow-rendered in News.tsx)", () => {
    for (const item of newsItems) {
      if (item.sourceUrl) {
        expect(item.sourceUrl).toMatch(/^https:\/\//);
      }
    }
  });
});
