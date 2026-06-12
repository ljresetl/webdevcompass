import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Subscription from "@/components/Subscription/Subscription";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (lang !== "ua") return {};
  return {
    title: "Сайт за підпискою без початкових інвестицій | WebDevCompass",
    description: "Новий сайт на Next.js без передоплати: безкоштовний макет за 5 днів, запуск за 7–11 днів, перший місяць безкоштовно. Фіксована оплата щомісяця від 550 грн.",
    alternates: { canonical: `https://www.webdevcompass.com/${lang}/services/subscription` },
    openGraph: {
      title: "Сайт за підпискою без початкових інвестицій | WebDevCompass",
      url: `https://www.webdevcompass.com/${lang}/services/subscription`,
      siteName: "WebDevCompass",
      type: "website",
    },
  };
}

export default async function SubscriptionRoute({ params }: Props) {
  const { lang } = await params;
  if (lang !== "ua") notFound();
  return <Subscription />;
}
