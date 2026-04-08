import { Metadata } from "next";
// ДОДАЙ ЦЕЙ ІМПОРТ (перевір чи шлях правильний до твого компонента)
import BusinessWebsite from "@/components/BusinessWebsite/BusinessWebsite"; 

export const metadata: Metadata = {
  title: "Розробка корпоративних сайтів | Vitalii Baranov",
  description: "Створення багатосторінкових сайтів для бізнесу та персональних брендів.",
};

export default function BusinessWebsiteRoute() {
  return <BusinessWebsite />;
}