import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Blog from "@/components/Blog/Blog";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (lang !== "ua") return {};
  return {
    title: "Блог | WebDevCompass",
    description: "Практичні статті про веброзробку: бюджети на сайти, вибір формату, швидкість і конверсію.",
    alternates: { canonical: `https://www.webdevcompass.com/${lang}/blog` },
    openGraph: { title: "Блог | WebDevCompass", url: `https://www.webdevcompass.com/${lang}/blog`, siteName: "WebDevCompass", type: "website" },
  };
}

export default async function BlogPage({ params }: Props) {
  const { lang } = await params;
  // Блог поки доступний лише українською
  if (lang !== "ua") notFound();
  return <Blog />;
}
