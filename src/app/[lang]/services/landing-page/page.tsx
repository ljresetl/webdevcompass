import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Lang } from "@/LanguageContext";
import LandingPage from "@/components/LandingPage/LandingPage";

type Props = { params: Promise<{ lang: string }> };
const SUPPORTED_LANGS: Lang[] = ["ua", "en", "cz", "de", "fr", "pl", "es", "pt"];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Landing Page Development | WebDevCompass",
    description: "High-converting landing pages — mobile-first, fast, SEO-optimized. From Figma or from scratch.",
    alternates: { canonical: `https://www.webdevcompass.com/${lang}/services/landing-page` },
    openGraph: { title: "Landing Page Development | WebDevCompass", url: `https://www.webdevcompass.com/${lang}/services/landing-page`, siteName: "WebDevCompass", type: "website" },
  };
}

export default async function LandingPageRoute({ params }: Props) {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as Lang)) notFound();
  return <LandingPage />;
}
