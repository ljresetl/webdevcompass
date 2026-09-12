import { BASE_URL } from "./seo";
import { blogPosts } from "@/content/blog/posts";
import { newsItems } from "@/content/news/news";

export const SUPPORTED_LANGS = ["ua", "en", "cz", "de", "fr", "pl", "es", "pt"] as const;
export type SupportedLang = (typeof SUPPORTED_LANGS)[number];

type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

interface StaticPage {
  path: string; // без /{lang}, напр. "/services/landing-page"
  changeFrequency: ChangeFrequency;
  priority: number;
  langs?: readonly SupportedLang[]; // якщо не задано — доступна на всіх мовах
  lastModified?: string;
}

const STATIC_PAGES: StaticPage[] = [
  { path: "", changeFrequency: "monthly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/landing-page", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/business-website", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/ui-ux-implementation", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/performance-optimization", changeFrequency: "monthly", priority: 0.8 },
  { path: "/resume", changeFrequency: "monthly", priority: 0.5 },
  { path: "/services/subscription", changeFrequency: "monthly", priority: 0.8, langs: ["ua"] },
  { path: "/blog", changeFrequency: "daily", priority: 0.7, langs: ["ua"] },
  {
    path: "/news",
    changeFrequency: "daily",
    priority: 0.7,
    langs: ["ua"],
    lastModified: newsItems[0]?.date,
  },
];

export interface SiteUrl {
  url: string;
  lastModified?: string;
  changeFrequency: ChangeFrequency;
  priority: number;
}

export function getAllSiteUrls(): SiteUrl[] {
  const urls: SiteUrl[] = [];

  for (const page of STATIC_PAGES) {
    const langs = page.langs ?? SUPPORTED_LANGS;
    for (const lang of langs) {
      urls.push({
        url: `${BASE_URL}/${lang}${page.path}`,
        lastModified: page.lastModified,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      });
    }
  }

  for (const post of blogPosts) {
    urls.push({
      url: `${BASE_URL}/ua/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return urls;
}
