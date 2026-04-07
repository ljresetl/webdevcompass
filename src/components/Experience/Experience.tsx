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
          
          {/* Заголовок */}
          <h3 className={styles.experience_h}>
            {t("navExperienceH")}
          </h3>

          {/* Правий блок з текстом */}
          <div className={styles.experience_right}>
            
            {/* Верхній блок */}
            <div className={styles.experience_right_top}>
              <p className={styles.experience_p}>
                {t("navExperienceP")}
              </p>
              <p className={styles.experience_p_two}>
                {t("navExperiencePtwo")}
              </p>
            </div>

            {/* Окремий абзац */}
            <p className={styles.experience_p_two_two}>
              {t("navExperiencePthree")}
            </p>

            {/* Нижній блок */}
            <div className={styles.experience_right_down}>
              <p className={styles.experience_p_three}>
                {t("navExperiencePfour")}
              </p>
              <p className={styles.experience_p_four_four}>
                {t("navExperiencePsix")}
              </p>
            </div>

            {/* Ще один абзац */}
            <p className={styles.experience_p_five}>
              {t("navExperiencePseven")}
            </p>

            {/* Абзац з посиланням на GoIT */}
            <p className={styles.experience_p_two}>
              {t("navExperiencePeight")}{" "}
              <a
                href="https://ref.goit.global/5fdde04f"
                className={styles.goit}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Посилання на GoIT"
              >
                GoIT
              </a>.
            </p>

          </div>
        </div>
      </section>
    </Section>
  );
};

export default Experience;
