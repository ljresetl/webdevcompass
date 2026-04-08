"use client";

import styles from "./AboutMe.module.scss";
import { useLanguage } from "@/useLanguage";
import Section from "@/components/AnimatedScrolSection/AnimatedScrolSection";

const AboutMe: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section className={`${styles.blur_effect} ${styles.gradient_effect}`}>
      <section className={styles.aboutme} id="about">
        <div className={styles.container}>
          <h1 className={styles.about_me_h} id="resume">
            {t("navAboutMe")}
          </h1>

          <div className={styles.about_me_right}>
            <p className={styles.about_me_p}>{t("navAboutMeP")}</p>
            <p className={styles.about_me_p_two}>{t("navAboutMeTwoP")}</p>

            <div className={styles.button_a_a}>
              <a
                href="/files/Vitalii_Baranov_Frontend_Developer.pdf"
                download
                className={styles.about_me_button}
                aria-label="Завантажити резюме"
              >
                {t("navButtonResume")}
              </a>

              <a
                href="https://www.linkedin.com/in/vitalii-baranov/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.about_me_a}
              >
                <svg width="24" height="24" className={styles.about_me_svg_link}>
                  <use href="/icons.svg#icon-linkendin"></use>
                </svg>
              </a>

              <a
                href="https://t.me/ljresetl"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.about_me_a}
              >
                <svg width="24" height="24" className={styles.about_me_svg_link}>
                  <use href="/icons.svg#icon-telegram"></use>
                </svg>
              </a>

              <a
                href="https://github.com/ljresetl"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.about_me_a}
              >
                <svg width="24" height="24" className={styles.about_me_svg_link}>
                  <use href="/icons.svg#icon-github"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
};

export default AboutMe;
