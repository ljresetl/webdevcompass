import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Lang } from "@/LanguageContext";
import Foto from "@/components/Foto/Foto";
import Capabilities from "@/components/Capabilities/Capabilities";
import Portfolio from "@/components/Portfolio/Portfolio";
import Connect from "@/components/Connect/Connect";
import AboutMe from "@/components/About-me/AboutMe";
import Experience from "@/components/Experience/Experience";
import AboutMeOne from "@/components/AboutMeOne/AboutMeOne";

type Props = { params: Promise<{ lang: string }> };

const SUPPORTED_LANGS: Lang[] = ["ua", "en", "cz", "de", "fr", "pl", "es", "pt"];

const PAGE_TITLES: Partial<Record<Lang, string>> = {
  en: "WebDevCompass | Professional Next.js & TypeScript Web Development",
  ua: "WebDevCompass | Profesійna rozrobka sajtiv Next.js",
  de: "WebDevCompass | Professionelle Next.js Webentwicklung",
  fr: "WebDevCompass | Développement web professionnel Next.js",
  pl: "WebDevCompass | Profesjonalne tworzenie stron Next.js",
  es: "WebDevCompass | Desarrollo web profesional Next.js",
  pt: "WebDevCompass | Desenvolvimento web profissional Next.js",
  cz: "WebDevCompass | Profesionální vývoj webu Next.js",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as Lang)) return {};
  return {
    title: PAGE_TITLES[lang as Lang] ?? PAGE_TITLES.en,
    alternates: { canonical: `https://www.webdevcompass.com/${lang}` },
  };
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as Lang)) notFound();

  return (
    <>
      <Foto />
      <AboutMeOne />
      <AboutMe />
      <Capabilities />
      <Experience />
      <Portfolio />
      <Connect />
    </>
  );
}
