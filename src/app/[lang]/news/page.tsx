import type { Metadata } from "next";
import { notFound } from "next/navigation";
import News from "@/components/News/News";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (lang !== "ua") return {};
  return {
    title: "Новини | WebDevCompass",
    description: "Короткі оновлення про сайт, веброзробку та просування.",
    alternates: { canonical: `https://www.webdevcompass.com/${lang}/news` },
    openGraph: { title: "Новини | WebDevCompass", url: `https://www.webdevcompass.com/${lang}/news`, siteName: "WebDevCompass", type: "website" },
  };
}

export default async function NewsPage({ params }: Props) {
  const { lang } = await params;
  // Новини поки доступні лише українською
  if (lang !== "ua") notFound();
  return <News />;
}
