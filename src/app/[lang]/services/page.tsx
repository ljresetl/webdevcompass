import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Lang } from "@/LanguageContext";
import Services from "@/components/Services/Services";

type Props = { params: Promise<{ lang: string }> };
const SUPPORTED_LANGS: Lang[] = ["ua", "en", "cz", "de", "fr", "pl", "es", "pt"];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Web Development Services | WebDevCompass",
    description: "Professional web development: landing pages, business websites, UI/UX, performance optimization.",
    alternates: { canonical: `https://www.webdevcompass.com/${lang}/services` },
    openGraph: { title: "Services | WebDevCompass", url: `https://www.webdevcompass.com/${lang}/services`, siteName: "WebDevCompass", type: "website" },
  };
}

export default async function ServicesPage({ params }: Props) {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as Lang)) notFound();
  return <Services />;
}
