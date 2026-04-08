import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { LanguageProvider } from "@/LanguageContext";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./global.css";

// Налаштовуємо шрифт Manrope правильно через Google Fonts
const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["200", "400", "600", "800"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Vitalii Baranov | Junior Frontend Developer | React & TypeScript",
  description: "Vitalii Baranov — Frontend розробник, що спеціалізується на створенні сучасних веб-додатків на React та TypeScript.",
  authors: [{ name: "Vitalii Baranov" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.webdevcompass.com/",
    languages: {
      "x-default": "https://www.webdevcompass.com/",
      uk: "https://www.webdevcompass.com/ua",
      en: "https://www.webdevcompass.com/en",
      cs: "https://www.webdevcompass.com/cz",
    },
  },
  icons: {
    icon: "/favicon2.png?v=4",
    apple: "/favicon2.png",
  },
  openGraph: {
    title: "Vitalii Baranov | Junior Frontend Developer Portfolio",
    description: "Розробка сучасних інтерфейсів на React та TypeScript. Досвід у створенні адаптивних та високопродуктивних веб-додатків.",
    url: "https://www.webdevcompass.com/",
    type: "website",
    images: [
      {
        url: "https://www.webdevcompass.com/preview.png",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className={manrope.className}>
      {/* Видалили <head> з ручним <link rel="preload">. 
          Тепер картинки вантажаться тільки там, де вони потрібні.
      */}
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}