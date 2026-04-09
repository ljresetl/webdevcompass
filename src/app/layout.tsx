import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { LanguageProvider } from "@/LanguageContext";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./global.css";

// Налаштовуємо шрифт Manrope
const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["200", "400", "600", "800"],
  display: "swap",
  variable: "--font-manrope",
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
    // Змінено lang="uk" на lang="en"
    <html lang="en" className={manrope.className}>
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