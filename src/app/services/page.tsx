import { Metadata } from "next";
import Services from "@/components/Services/Services";

export const metadata: Metadata = {
  // Тепер заголовок і опис відповідають основній англійській мові сайту
  title: "Frontend Development Services | Vitalii Baranov",
  description: "Professional landing page creation, business websites, and web performance optimization using React and TypeScript.",
  
  // Додатково можна додати OpenGraph конкретно для цієї сторінки
  openGraph: {
    title: "Frontend Development Services | Vitalii Baranov",
    description: "High-quality web development services: Landing pages, Business websites, and Performance optimization.",
    url: "https://www.webdevcompass.com/services",
  },
};

export default function Page() {
  return <Services />;
}