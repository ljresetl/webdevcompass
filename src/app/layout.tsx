import type { Metadata, Viewport } from "next";
import { Manrope, Montserrat } from "next/font/google";
import "./global.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["200", "400", "600", "800"],
  display: "swap",
  variable: "--font-manrope",
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700", "900"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "WebDevCompass | Professional Next.js & TypeScript Web Development",
  description: "WebDevCompass — a frontend development team specializing in building modern, fast websites with Next.js and TypeScript. High-performance web solutions for businesses worldwide.",
  authors: [{ name: "WebDevCompass" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.webdevcompass.com/",
    languages: {
      "x-default": "https://www.webdevcompass.com/",
      en: "https://www.webdevcompass.com/en",
      uk: "https://www.webdevcompass.com/ua",
      cs: "https://www.webdevcompass.com/cz",
      de: "https://www.webdevcompass.com/de",
      fr: "https://www.webdevcompass.com/fr",
      pl: "https://www.webdevcompass.com/pl",
      es: "https://www.webdevcompass.com/es",
      pt: "https://www.webdevcompass.com/pt",
    },
  },
  icons: {
    icon: "/favicon2.png?v=4",
    apple: "/favicon2.png",
  },
  openGraph: {
    title: "WebDevCompass | Expert Web Development Services",
    description: "Modern websites with Next.js and TypeScript. High-performance solutions tailored to your business needs.",
    url: "https://www.webdevcompass.com/",
    type: "website",
    siteName: "WebDevCompass",
    images: [
      {
        url: "https://www.webdevcompass.com/new.png",
        width: 1200,
        height: 630,
        alt: "WebDevCompass - Modern Web Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebDevCompass | Next.js Web Development Services",
    description: "Professional creation of modern websites using Next.js and TypeScript.",
    images: ["https://www.webdevcompass.com/preview.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${montserrat.variable}`}>
      <body className={manrope.className}>
        {children}
      </body>
    </html>
  );
}
