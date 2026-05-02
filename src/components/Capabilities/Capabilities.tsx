"use client";

import React from "react";
import styles from "./Capabilities.module.scss";
import { useLanguage } from "@/useLanguage";
import Section from "@/components/AnimatedScrolSection/AnimatedScrolSection";

const Capabilities: React.FC = () => {
  const { t } = useLanguage();

  const skillGroups = [
    {
      title: "Frontend",
      items: [
        { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "SCSS", url: "https://sass-lang.com/documentation/" },
        { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "TypeScript", url: "https://www.typescriptlang.org/docs/" },
        { name: "React", url: "https://react.dev/" },
        { name: "Next.js", url: "https://nextjs.org/docs" },
      ],
    },
    {
      title: "Tools & Build",
      items: [
        { name: "Vite", url: "https://vitejs.dev/" },
        { name: "Git", url: "https://git-scm.com/doc" },
        { name: "Figma", url: "https://help.figma.com/hc/en-us" },
        { name: "NPM", url: "https://docs.npmjs.com/" },
        { name: "PostCSS", url: "https://postcss.org/docs/" },
      ],
    },
  ];

  return (
    <Section className={styles.wrapper}>
      <section id="capabilities" className={styles.capabilities}>
        <div className={styles.container}>
          <h2 className={styles.capabilities_h}>{t("navCapabilitiesH")}</h2>

          <div className={styles.content_wrapper}>
            <div className={styles.text_side}>
              <p className={styles.capabilities_p}>{t("navCapabilitiesP")}</p>
            </div>

            <div className={styles.skills_side}>
              {skillGroups.map((group, groupIndex) => (
                <div key={groupIndex} className={styles.skill_group}>
                  <h3 className={styles.group_title}>{group.title}</h3>
                  <div className={styles.skills_grid}>
                    {group.items.map((skill, skillIndex) => (
                      <a
                        key={skillIndex}
                        href={skill.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.skill_card}
                      >
                        <span className={styles.skill_name}>{skill.name}</span>
                      </a>
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
