import type { Metadata } from "next";
import { LanguageProvider } from "@/LanguageContext";
import type { Lang } from "@/LanguageContext";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

type Props = { children: React.ReactNode; params: Promise<{ lang: string }> };

const SUPPORTED_LANGS: Lang[] = ["ua", "en", "cz", "de", "fr", "pl", "es", "pt"];

export async function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const validLang = SUPPORTED_LANGS.includes(lang as Lang) ? lang : "en";
  const hrefLangMap = Object.fromEntries(
    SUPPORTED_LANGS.map((l) => [l === "ua" ? "uk" : l === "cz" ? "cs" : l, `https://www.webdevcompass.com/${l}`])
  );

  return {
    alternates: {
      canonical: `https://www.webdevcompass.com/${validLang}`,
      languages: { ...hrefLangMap, "x-default": "https://www.webdevcompass.com/en" },
    },
  };
}

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params;
  const validLang: Lang = SUPPORTED_LANGS.includes(lang as Lang) ? (lang as Lang) : "en";

  return (
    <LanguageProvider key={validLang} initialLang={validLang}>
      <Header />
      <main>{children}</main>
      <Footer />
    </LanguageProvider>
  );
}
