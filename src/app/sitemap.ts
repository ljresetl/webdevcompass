import type { MetadataRoute } from "next";
import { getAllSiteUrls } from "@/lib/site-urls";

export default function sitemap(): MetadataRoute.Sitemap {
  return getAllSiteUrls().map(({ url, lastModified, changeFrequency, priority }) => ({
    url,
    lastModified,
    changeFrequency,
    priority,
  }));
}
