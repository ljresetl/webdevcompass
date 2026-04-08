import { Metadata } from "next";
import LandingPage from "@/components/LandingPage/LandingPage"; // перевір шлях

export const metadata: Metadata = {
  title: "Створення Landing Page | Висока конверсія",
  description: "Розробка сучасних лендингів на React та Next.js з фокусом на результат.",
};

export default function Page() {
  return <LandingPage />;
}