import type { Metadata, Viewport } from "next";
import { Manrope, Montserrat } from "next/font/google";
import { LanguageProvider } from "@/LanguageContext";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
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
  title: "Vitalii Baranov | Professional Next.js & TypeScript Web Development",
  description: "Vitalii Baranov — Frontend Developer specializing in building modern websites with Next.js. Offering high-performance web solutions and custom development.",
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
    title: "Vitalii Baranov | Expert Web Development Services",
    description: "Developing modern interfaces with Next.js and TypeScript. High-performance websites tailored to your business needs.",
    url: "https://www.webdevcompass.com/",
    type: "website",
    siteName: "WebDev Compass | Vitalii Baranov",
    images: [
      {
        url: "https://www.webdevcompass.com/new.avif",
        width: 1200,
        height: 630,
        alt: "Vitalii Baranov - Modern Web Development Services Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vitalii Baranov | Next.js Web Development Services",
    description: "Professional creation of modern websites using Next.js and TypeScript.",
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
