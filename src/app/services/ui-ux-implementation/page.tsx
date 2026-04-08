import { Metadata } from "next";
import UiUxImplementation from "@/components/UiUxImplementation/UiUxImplementation";

export const metadata: Metadata = {
  title: "Figma to React (UI/UX) | Pixel Perfect | Vitalii Baranov",
  description: "Professional translation of Figma designs into clean, responsive, and high-performance React/Next.js code.",
};

export default function UiUxPage() {
  return <UiUxImplementation />;
}