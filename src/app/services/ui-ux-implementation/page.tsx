import { Metadata } from "next";
import UiUxImplementation from "@/components/UiUxImplementation/UiUxImplementation";

export const metadata: Metadata = {
  title: "Верстка з Figma (UI/UX) | Pixel Perfect | Vitalii Baranov",
  description: "Професійне перенесення дизайну з Figma у чистий та адаптивний код на React/Next.js.",
};

export default function UiUxPage() {
  return <UiUxImplementation />;
}