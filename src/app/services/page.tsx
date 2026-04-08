import { Metadata } from "next";
import Services from "@/components/Services/Services";

export const metadata: Metadata = {
  // Ставимо англійську як дефолтну для SEO
  title: "Frontend Development Services | Vitalii Baranov",
  description: "Professional landing page creation, business websites, and web performance optimization.",
};

export default function Page() {
  return <Services />;
}