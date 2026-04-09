import { Metadata } from "next";
import BusinessWebsite from "@/components/BusinessWebsite/BusinessWebsite"; 

export const metadata: Metadata = {
  title: "Corporate Website Development | Vitalii Baranov",
  description: "Custom multi-page websites for businesses and personal brands. Modern architecture, SEO-friendly, and fully responsive design.",
  openGraph: {
    title: "Corporate Website Development | Vitalii Baranov",
    description: "Custom multi-page websites for businesses and personal brands. Modern architecture, SEO-friendly, and fully responsive design.",
    url: "https://www.webdevcompass.com/services/business-website",
    siteName: "Vitalii Baranov Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Corporate Website Development | Vitalii Baranov",
    description: "Custom multi-page websites for businesses and personal brands. Modern architecture, SEO-friendly, and fully responsive design.",
  },
};

export default function BusinessWebsiteRoute() {
  return <BusinessWebsite />;
}