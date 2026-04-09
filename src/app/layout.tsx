import type { Metadata, Viewport } from "next";
import { Manrope, Montserrat } from "next/font/google"; // Додано Montserrat
import { LanguageProvider } from "@/LanguageContext";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./global.css";

// Основний шрифт для тексту
const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["200", "400", "600", "800"],
  display: "swap",
  variable: "--font-manrope",
});

// Другий шрифт для заголовків
const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700", "900"],
  display: "swap",
  variable: "--font-montserrat", // CSS-змінна для використання в стилях
});

export const metadata: Metadata = {
  title: "Vitalii Baranov | Junior Frontend Developer | React & TypeScript",
  description: "Vitalii Baranov — Frontend Developer specializing in building modern web applications with React and TypeScript.",
  authors: [{ name: "Vitalii Baranov" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.webdevcompass.com/",
    languages: {
      "x-default": "https://www.webdevcompass.com/",
      en: "https://www.webdevcompass.com/en",
      uk: "https://www.webdevcompass.com/ua",
      cs: "https://www.webdevcompass.com/cz",
    },
  },
  icons: {
    icon: "/favicon2.png?v=4",
    apple: "/favicon2.png",
  },
  openGraph: {
    title: "Vitalii Baranov | Junior Frontend Developer Portfolio",
    description: "Developing modern interfaces with React and TypeScript. Experience in creating responsive and high-performance web applications.",
    url: "https://www.webdevcompass.com/",
    type: "website",
    images: [
      {
        url: "https://www.webdevcompass.com/preview.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vitalii Baranov | Junior Frontend Developer Portfolio",
    description: "Developing modern interfaces with React and TypeScript.",
    images: ["https://www.webdevcompass.com/preview.png"],
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
    // Додаємо обидва шрифти (className для основного та variable для другого)
    <html lang="en" className={`${manrope.className} ${montserrat.variable}`}>
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