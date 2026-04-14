"use client";

import React from "react";
import styles from "./Capabilities.module.scss";
import { useLanguage } from "@/useLanguage";
import Section from "@/components/AnimatedScrolSection/AnimatedScrolSection";

/**
 * Оскільки ми в Next.js, використовуємо "use client" через хук useLanguage.
 * Структура оптимізована під Mobile First.
 */
const Capabilities: React.FC = () => {
  const { t } = useLanguage();

  const skillGroups = [
    {
      title: "Frontend",
      items: ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript", "React", "Next.js"],
    },
    {
      title: "Tools & Design",
      items: ["Vite", "Git", "Figma", "NPM"],
    },
  ];

  return (
    <Section className={`${styles.blur_effect} ${styles.gradient_effect}`}>
      <section id="capabilities" className={styles.capabilities}>
        <div className={styles.container}>
          {/* Заголовок секції */}
          <h2 className={styles.capabilities_h}>{t("navCapabilitiesH")}</h2>

          <div className={styles.content_wrapper}>
            {/* Опис */}
            <div className={styles.text_side}>
              <p className={styles.capabilities_p}>{t("navCapabilitiesP")}</p>
            </div>

            {/* Сітка навичок */}
            <div className={styles.skills_side}>
              {skillGroups.map((group, groupIndex) => (
                <div key={groupIndex} className={styles.skill_group}>
                  <h3 className={styles.group_title}>{group.title}</h3>
                  <div className={styles.skills_grid}>
                    {group.items.map((skill, skillIndex) => (
                      <div key={skillIndex} className={styles.skill_card}>
                        <span className={styles.skill_name}>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
};

export default Capabilities;
