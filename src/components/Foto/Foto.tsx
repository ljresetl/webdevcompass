"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Foto.module.scss";
import { useLanguage } from "@/useLanguage";

const Foto: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.fullWidthBanner}>
      <div className={styles.bannerImageWrapper}>
        <Image 
          src="/new.avif" 
          alt="WebDevCompass Banner" 
          fill
          priority
          className={styles.bannerImage}
        />
        
        <div className={styles.bannerOverlay}>
          <div className={styles.container}>
            <div className={styles.bannerBottomContent}>
              <h1 className={styles.bannerTitle}>WebDevCompass</h1>
              
              {/* Тепер текст використовує переклад */}
              <p className={styles.bannerSubtitle}>
                {t("bannerSubtitle")}
              </p>
              
              <div className={styles.buttonsRow}>
                <Link href="/#portfolio" className={`${styles.btn} ${styles.btnPrimary}`}>
                  {t("navPortfolio")}
                </Link>
                <Link href="/services" className={`${styles.btn} ${styles.btnSecondary}`}>
                  {t("navServices")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foto;