import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Lang } from "@/LanguageContext";
import Resume from "@/components/Resume/Resume";

type Props = { params: Promise<{ lang: string }> };
const SUPPORTED_LANGS: Lang[] = ["ua", "en", "cz", "de", "fr", "pl", "es", "pt"];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "WebDevCompass — Company Profile & Portfolio",
    description: "Frontend development agency specializing in Next.js and TypeScript. See our tech stack, services, development process, and portfolio of completed projects.",
    alternates: { canonical: `https://www.webdevcompass.com/${lang}/resume` },
    openGraph: {
      title: "WebDevCompass — Company Profile & Portfolio",
      description: "Professional Next.js development agency. Stack, services, process, and portfolio.",
      url: `https://www.webdevcompass.com/${lang}/resume`,
      siteName: "WebDevCompass",
      type: "website",
    },
  };
}

export default async function ResumePage({ params }: Props) {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as Lang)) notFound();
  return <Resume />;
}
