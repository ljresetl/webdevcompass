"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./AboutMe.module.scss";
import { useLanguage } from "@/useLanguage";
import Section from "@/components/AnimatedScrolSection/AnimatedScrolSection";

const SUPPORTED_LANGS = ["ua", "en", "cz", "de", "fr", "pl", "es", "pt"];

const AboutMe: React.FC = () => {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  const urlLang = pathname?.split("/")?.[1] ?? "";
  const currentLang = SUPPORTED_LANGS.includes(urlLang) ? urlLang : "en";

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return <section className={styles.aboutme} id="about" />;

  return (
    <Section className={`${styles.blur_effect} ${styles.gradient_effect}`}>
      <section className={styles.aboutme} id="about">
        <div className={styles.container}>
          <h2 className={styles.about_me_h}>{t("navAboutMe")}</h2>

          <div className={styles.about_me_right}>
            <p className={styles.about_me_p}>{t("navAboutMeP")}</p>
            <p className={styles.about_me_p_two}>{t("navAboutMeTwoP")}</p>

            <div className={styles.button_a_a}>
              <Link
                href={`/${currentLang}/resume`}
                className={styles.about_me_button}
                aria-label={t("navButtonResume")}
              >
                {t("navButtonResume")}
              </Link>

              <a href="https://www.linkedin.com/in/vitalii-baranov-222439377" target="_blank" rel="noopener noreferrer" className={styles.about_me_a} aria-label="LinkedIn">
                <svg width="24" height="24" className={styles.about_me_svg_link}><use href="/icons.svg#icon-linkendin"></use></svg>
              </a>
              <a href="https://t.me/ljresetl" target="_blank" rel="noopener noreferrer" className={styles.about_me_a} aria-label="Telegram">
                <svg width="24" height="24" className={styles.about_me_svg_link}><use href="/icons.svg#icon-telegram"></use></svg>
              </a>
              <a href="https://github.com/ljresetl" target="_blank" rel="noopener noreferrer" className={styles.about_me_a} aria-label="GitHub">
                <svg width="24" height="24" className={styles.about_me_svg_link}><use href="/icons.svg#icon-github"></use></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
};

export default AboutMe;
