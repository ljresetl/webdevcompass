"use client";

import styles from "./Experience.module.scss";
import { useLanguage } from "@/useLanguage";
import Section from "@/components/AnimatedScrolSection/AnimatedScrolSection";

const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section className={`${styles.blur_effect} ${styles.gradient_effect}`}>
      <section className={styles.experience}>
        <div className={styles.container}>
          <h2 className={styles.experience_h}>{t("navExperienceH")}</h2>

          <div className={styles.experience_right}>
            <div className={styles.experience_block}>
              <p className={styles.experience_label}>{t("navExperienceP")}</p>
              <p className={styles.experience_date}>{t("navExperiencePtwo")}</p>
              <p className={styles.experience_desc}>{t("navExperiencePthree")}</p>
            </div>

            <div className={styles.experience_block}>
              <p className={styles.experience_label}>{t("navExperiencePfour")}</p>
              <p className={styles.experience_date}>{t("navExperiencePsix")}</p>
              <p className={styles.experience_desc}>{t("navExperiencePseven")}</p>
              <p className={styles.experience_desc}>{t("navExperiencePeight")}</p>
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
};

export default Experience;
