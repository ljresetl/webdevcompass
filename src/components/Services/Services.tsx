"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Services.module.scss";
import Image from "next/image";
import { useLanguage } from "@/useLanguage"; // Переконайся, що шлях вірний

const Services: React.FC = () => {
  const { t } = useLanguage(); // Хук для перекладу
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const checkTheme = () => {
      if (document.body.classList.contains("light")) {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        
        {/* Банер з адаптивними зображеннями */}
        <div className={styles.banner}>
          <picture>
            <source
              media="(max-width: 410px)"
              srcSet={theme === "light"
                ? "/services-banner-light-mobile.avif"
                : "/services-banner-mobile.avif"}
            />
            <source
              media="(max-width: 768px)"
              srcSet={theme === "light"
                ? "/services-banner-light-tablet.avif"
                : "/services-banner-tablet.avif"}
            />
            <Image
              src={theme === "light"
                ? "/services-banner-light-desktop.avif"
                : "/services-banner-desktop1.avif"}
              alt="Frontend development banner"
              className={styles.bannerImage}
              width={1200}
              height={400}
              priority
            />
          </picture>
        </div>

        <h1 className={styles.title}>{t("servicesTitle")}</h1>
        <p className={styles.subtitle}>{t("servicesSubtitle")}</p>

        {/* Сітка з картками послуг */}
        <div className={styles.cards}>
          <Link href="/services/landing-page" className={styles.card}>
            <h2>{t("serviceLandingTitle")}</h2>
            <p>{t("serviceLandingDesc")}</p>
          </Link>

          <Link href="/services/business-website" className={styles.card}>
            <h2>{t("serviceBusinessTitle")}</h2>
            <p>{t("serviceBusinessDesc")}</p>
          </Link>

          <Link href="/services/ui-ux-implementation" className={styles.card}>
            <h2>{t("serviceUiTitle")}</h2>
            <p>{t("serviceUiDesc")}</p>
          </Link>

          <Link href="/services/performance-optimization" className={styles.card}>
            <h2>{t("servicePerfTitle")}</h2>
            <p>{t("servicePerfDesc")}</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;