import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Lang } from "@/LanguageContext";
import UiUxImplementation from "@/components/UiUxImplementation/UiUxImplementation";

type Props = { params: Promise<{ lang: string }> };
const SUPPORTED_LANGS: Lang[] = ["ua", "en", "cz", "de", "fr", "pl", "es", "pt"];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "UI/UX Implementation — Figma to Code | WebDevCompass",
    description: "Pixel-perfect UI from Figma. React, Next.js, animations, WCAG accessibility.",
    alternates: { canonical: `https://www.webdevcompass.com/${lang}/services/ui-ux-implementation` },
    openGraph: { title: "UI/UX Implementation | WebDevCompass", url: `https://www.webdevcompass.com/${lang}/services/ui-ux-implementation`, siteName: "WebDevCompass", type: "website" },
  };
}

export default async function UiUxPage({ params }: Props) {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as Lang)) notFound();
  return <UiUxImplementation />;
}
