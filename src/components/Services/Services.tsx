"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import styles from "./Services.module.scss";
import Image from "next/image";
import { useLanguage } from "@/useLanguage";

const LIGHT_THEMES = ["light", "sunset", "candy"];

const Services: React.FC = () => {
  const { t, lang } = useLanguage();
  const params = useParams();
  const currentLang = (params?.lang as string) || lang || "en";
  const lp = (path: string) => `/${currentLang}${path}`;

  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const bodyClass = document.body.className;
      setIsLight(LIGHT_THEMES.some(t => bodyClass.includes(t)) || (!bodyClass.includes("dark") && !bodyClass.includes("ocean") && !bodyClass.includes("forest") && !bodyClass.includes("midnight")));
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <picture>
            <source media="(max-width: 410px)" srcSet={isLight ? "/services-banner-light-mobile.avif" : "/services-banner-mobile.avif"} />
            <source media="(max-width: 768px)" srcSet={isLight ? "/services-banner-light-tablet.avif" : "/services-banner-tablet.avif"} />
            <Image
              src={isLight ? "/services-banner-light-desktop.avif" : "/services-banner-desktop1.avif"}
              alt="Web development services banner"
              className={styles.bannerImage}
              width={1200}
              height={400}
              priority
            />
          </picture>
        </div>

        <h1 className={styles.title}>{t("servicesTitle")}</h1>
        <p className={styles.subtitle}>{t("servicesSubtitle")}</p>

        <div className={styles.cards}>
          <Link href={lp("/services/landing-page")} className={styles.card}>
            <h2>{t("serviceLandingTitle")}</h2>
            <p>{t("serviceLandingDesc")}</p>
          </Link>
          <Link href={lp("/services/business-website")} className={styles.card}>
            <h2>{t("serviceBusinessTitle")}</h2>
            <p>{t("serviceBusinessDesc")}</p>
          </Link>
          <Link href={lp("/services/ui-ux-implementation")} className={styles.card}>
            <h2>{t("serviceUiTitle")}</h2>
            <p>{t("serviceUiDesc")}</p>
          </Link>
          <Link href={lp("/services/performance-optimization")} className={styles.card}>
            <h2>{t("servicePerfTitle")}</h2>
            <p>{t("servicePerfDesc")}</p>
          </Link>
          {currentLang === "ua" && (
            <Link href={lp("/services/subscription")} className={styles.card}>
              <h2>{t("serviceSubTitle")}</h2>
              <p>{t("serviceSubDesc")}</p>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
