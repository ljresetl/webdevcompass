import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Lang } from "@/LanguageContext";
import BusinessWebsite from "@/components/BusinessWebsite/BusinessWebsite";

type Props = { params: Promise<{ lang: string }> };
const SUPPORTED_LANGS: Lang[] = ["ua", "en", "cz", "de", "fr", "pl", "es", "pt"];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Business Website Development | WebDevCompass",
    description: "Custom multi-page websites with CMS, SEO optimization, and responsive design.",
    alternates: { canonical: `https://www.webdevcompass.com/${lang}/services/business-website` },
    openGraph: { title: "Business Website | WebDevCompass", url: `https://www.webdevcompass.com/${lang}/services/business-website`, siteName: "WebDevCompass", type: "website" },
  };
}

export default async function BusinessWebsiteRoute({ params }: Props) {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as Lang)) notFound();
  return <BusinessWebsite />;
}
