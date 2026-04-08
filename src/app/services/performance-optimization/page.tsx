import { Metadata } from "next";
import PerformanceOptimization from "@/components/PerformanceOptimization/PerformanceOptimization";

export const metadata: Metadata = {
  title: "Web Performance Optimization | Vitalii Baranov",
  description: "Speed up your website, improve Core Web Vitals, and enhance SEO ranking through technical optimization.",
};

export default function PerformanceOptimizationPage() {
  return <PerformanceOptimization />;
}