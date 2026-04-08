import { Metadata } from "next";
import LandingPage from "@/components/LandingPage/LandingPage";

export const metadata: Metadata = {
  title: "Landing Page Development | High Conversion",
  description: "Creation of modern landing pages using React and Next.js with a focus on results and performance.",
};

export default function Page() {
  return <LandingPage />;
}