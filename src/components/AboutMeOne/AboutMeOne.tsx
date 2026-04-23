"use client";

import React from "react";
import styles from "./AboutMeOne.module.scss";
import { useLanguage } from "@/useLanguage";
import Section from "../AnimatedScrolSection/AnimatedScrolSection";

const AboutMeOne: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section className={`${styles.blur_effect} ${styles.gradient_effect}`}>
    <section className={styles.aboutme}>
      <div className={styles.container}>
        {/* Ліва частина - Заголовок (Montserrat) */}
        <h2 className={styles.about_me_h}>
          {t("navAboutTextH")}
        </h2>

        {/* Права частина - Параграфи (Manrope) */}
        <div className={styles.about_me_right}>
          <p className={styles.about_me_p}>{t("navAboutTextP")}</p>
          <p className={styles.about_me_p}>{t("navAboutTextPtwo")}</p>
          <p className={styles.about_me_p}>{t("navAboutTextPthree")}</p>
          <p className={styles.about_me_p}>{t("navAboutTextPfour")}</p>
          <p className={styles.about_me_p}>{t("navAboutTextPfive")}</p>
          <p className={styles.about_me_p}>{t("navAboutTextPsix")}</p>
        </div>
      </div>
      </section>
      </Section>
  );
};

export default AboutMeOne;