"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import styles from "./BackButton.module.scss";

const SUPPORTED_LANGS = ["ua", "en", "cz", "de", "fr", "pl", "es", "pt"];

const BackButton: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleBack = () => {
    const segments = pathname.split("/").filter(Boolean); // ["ua", "services", "ui-ux-implementation"]
    const lang = SUPPORTED_LANGS.includes(segments[0]) ? segments[0] : "en";
    // Go up one level, keeping lang prefix
    if (segments.length > 2) {
      router.push(`/${segments.slice(0, -1).join("/")}`);
    } else {
      router.push(`/${lang}`);
    }
  };

  return (
    <button onClick={handleBack} className={styles.backButton} type="button">
      <ArrowLeft size={20} className={styles.icon} />
      <span>Back</span>
    </button>
  );
};

export default BackButton;
