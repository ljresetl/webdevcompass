import { Metadata } from "next";
import BusinessWebsite from "@/components/BusinessWebsite/BusinessWebsite"; 

export const metadata: Metadata = {
  title: "Corporate Website Development | Vitalii Baranov",
  description: "Creation of multi-page websites for business and personal brands with modern architecture.",
};

export default function BusinessWebsiteRoute() {
  return <BusinessWebsite />;
}