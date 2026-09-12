import { describe, it, expect } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { blogPosts } from "./blog/posts";
import { newsItems } from "./news/news";

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const MIN_ARTICLE_LENGTH = 3500; // CONTENT_GUIDELINES.md: новини "по суті, без води", мінімум 3500 символів

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

  it("has a short excerpt for the list card (not the full article)", () => {
    for (const item of newsItems) {
      expect(item.excerpt.trim().length).toBeGreaterThan(0);
      expect(item.excerpt.length, `"${item.id}" excerpt reads like a full article, not a teaser`).toBeLessThan(400);
    }
  });

  it("has a valid ISO date for every item", () => {
    for (const item of newsItems) {
      expect(item.date).toMatch(ISO_DATE);
    }
  });

  it("only links to https sourceUrl when present (rendered with rel=nofollow)", () => {
    for (const item of newsItems) {
      if (item.sourceUrl) {
        expect(item.sourceUrl).toMatch(/^https:\/\//);
      }
    }
  });

  it(`has a corresponding .mdx file of at least ${MIN_ARTICLE_LENGTH} characters for every item`, () => {
    for (const item of newsItems) {
      const file = path.join(__dirname, "news", `${item.id}.mdx`);
      expect(existsSync(file), `missing ${file}`).toBe(true);
      const length = readFileSync(file, "utf8").length;
      expect(length, `"${item.id}" article is only ${length} chars — CONTENT_GUIDELINES.md requires >= ${MIN_ARTICLE_LENGTH}`).toBeGreaterThanOrEqual(
        MIN_ARTICLE_LENGTH
      );
    }
  });
});
