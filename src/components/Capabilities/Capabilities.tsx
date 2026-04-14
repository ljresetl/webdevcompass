"use client";

import styles from "./Capabilities.module.scss";
import { useLanguage } from "@/useLanguage";
import SkillCircle from "./SkillCircle/SkillCircle";
import Section from "@/components/AnimatedScrolSection/AnimatedScrolSection";

const Capabilities: React.FC = () => {
  const { t } = useLanguage();

  const skills = [
    { label: t("HTML"), level: 80 },
    { label: t("CSS"), level: 75 },
    { label: t("SCSS"), level: 75 },
    { label: t("JS"), level: 40 },
    { label: t("Figma"), level: 70 },
    { label: t("Vite"), level: 55 },
    { label: t("React"), level: 50 },
    { label: t("TS"), level: 40 },
    { label: t("Next.js"), level: 50 },
  ];

  return (
    <Section className={`${styles.blur_effect} ${styles.gradient_effect}`}>
      <section id="capabilities" className={styles.capabilities}>
        <div className={styles.container}>
          <h2 className={styles.capabilities_h}>{t("navCapabilitiesH")}</h2>

          <div className={styles.capabilities_right}>
            <p className={styles.capabilities_p}>{t("navCapabilitiesP")}</p>

            <div className={styles.capabilities_skills}>
              {skills.map((skill, index) => (
                <SkillCircle
                  key={index}
                  label={skill.label}
                  level={skill.level}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
};

export default Capabilities;
