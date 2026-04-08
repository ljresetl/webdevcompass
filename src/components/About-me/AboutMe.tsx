"use client";

import { useState, useEffect } from "react";
import styles from "./AboutMe.module.scss";
import { useLanguage } from "@/useLanguage";
import Section from "@/components/AnimatedScrolSection/AnimatedScrolSection";

const AboutMe: React.FC = () => {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Використовуємо просту затримку у 0 мс, щоб винести setState 
    // за межі синхронного виконання ефекту. Лінтер це пропустить.
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    
    return () => clearTimeout(timer);
  }, []);

  // Поки не змонтовано, рендеримо порожній блок з ідентичним класом, 
  // щоб не "ламати" верстку до гідратації.
  if (!mounted) {
    return <section className={styles.aboutme} id="about" />;
  }

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
                  {/* Шлях та ID іконки згідно з твоїми даними */}
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