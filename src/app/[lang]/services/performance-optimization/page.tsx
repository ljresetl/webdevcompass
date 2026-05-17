import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Lang } from "@/LanguageContext";
import PerformanceOptimization from "@/components/PerformanceOptimization/PerformanceOptimization";

type Props = { params: Promise<{ lang: string }> };
const SUPPORTED_LANGS: Lang[] = ["ua", "en", "cz", "de", "fr", "pl", "es", "pt"];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Website Performance Optimization | WebDevCompass",
    description: "Improve Core Web Vitals, LCP, CLS. Image optimization, code splitting, caching. Free Lighthouse audit.",
    alternates: { canonical: `https://www.webdevcompass.com/${lang}/services/performance-optimization` },
    openGraph: { title: "Performance Optimization | WebDevCompass", url: `https://www.webdevcompass.com/${lang}/services/performance-optimization`, siteName: "WebDevCompass", type: "website" },
  };
}

export default async function PerformancePage({ params }: Props) {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as Lang)) notFound();
  return <PerformanceOptimization />;
}
