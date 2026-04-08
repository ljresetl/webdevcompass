"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react"; // Встанови: npm install lucide-react
import { useLanguage } from "@/useLanguage";
import styles from "./BackButton.module.scss";

const BackButton: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Link href="/services" className={styles.backButton}>
      <ArrowLeft size={20} className={styles.icon} />
      <span>{t("Назад до послуг") || "Back to Services"}</span>
    </Link>
  );
};

export default BackButton;