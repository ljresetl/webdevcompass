import { Metadata } from "next";
import Services from "@/components/Services/Services";

export const metadata: Metadata = {
  title: "Послуги Frontend Розробки | Vitalii Baranov",
  description: "Професійне створення лендингів, бізнес-сайтів та оптимізація продуктивності.",
};

export default function Page() {
  return <Services />;
}