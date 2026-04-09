import { Metadata } from "next";
import UiUxImplementation from "@/components/UiUxImplementation/UiUxImplementation";

export const metadata: Metadata = {
  title: "Figma to React (UI/UX) | Vitalii Baranov",
  description: "Professional translation of Figma designs into clean, responsive, and high-performance React/Next.js code.",
  openGraph: {
    title: "Figma to React (UI/UX) | Vitalii Baranov",
    description: "Professional translation of Figma designs into clean, responsive, and high-performance React/Next.js code.",
    url: "https://www.webdevcompass.com/services/ui-ux-implementation",
    siteName: "Vitalii Baranov Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Figma to React (UI/UX) | Vitalii Baranov",
    description: "Professional translation of Figma designs into clean, responsive, and high-performance React/Next.js code.",
  },
};

export default function UiUxPage() {
  return <UiUxImplementation />;
}