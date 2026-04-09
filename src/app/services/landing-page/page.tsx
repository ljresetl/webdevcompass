import { Metadata } from "next";
import LandingPage from "@/components/LandingPage/LandingPage";

export const metadata: Metadata = {
  title: "Landing Page Development | Vitalii Baranov",
  description: "High-conversion landing pages built with React and Next.js. Focus on modern design, performance, and business results.",
  openGraph: {
    title: "Landing Page Development | Vitalii Baranov",
    description: "High-conversion landing pages built with React and Next.js. Focus on modern design, performance, and business results.",
    url: "https://www.webdevcompass.com/services/landing-page",
    siteName: "Vitalii Baranov Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Landing Page Development | Vitalii Baranov",
    description: "High-conversion landing pages built with React and Next.js. Focus on modern design, performance, and business results.",
  },
};

export default function Page() {
  return <LandingPage />;
}