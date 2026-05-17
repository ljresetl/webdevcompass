"use client";

import React, { useSyncExternalStore } from "react";
import styles from "./Resume.module.scss";
import BackButton from "@/components/BackButton/BackButton";
import { useLanguage } from "@/useLanguage";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

const STACK = [
  { category: "Core", items: ["HTML5", "CSS3", "JavaScript ES2024", "TypeScript"] },
  { category: "Frameworks", items: ["React 19", "Next.js 16", "Node.js"] },
  { category: "Styling", items: ["SCSS/Sass", "Tailwind CSS", "CSS Modules"] },
  { category: "Tools", items: ["Git / GitHub", "Figma", "Vite", "NPM / PNPM"] },
  { category: "Performance", items: ["Core Web Vitals", "Lighthouse", "WebP/AVIF", "Lazy Loading"] },
  { category: "SEO & a11y", items: ["Structured Data", "Open Graph", "WCAG 2.1 AA", "Semantic HTML"] },
];

const Resume: React.FC = () => {
  const { t } = useLanguage();
  const isMounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!isMounted) return <section className={styles.page} />;

  const services = [
    { icon: "🏗️", title: t("resumeS1Title"), desc: t("resumeS1Desc") },
    { icon: "🏢", title: t("resumeS2Title"), desc: t("resumeS2Desc") },
    { icon: "🎨", title: t("resumeS3Title"), desc: t("resumeS3Desc") },
    { icon: "⚡", title: t("resumeS4Title"), desc: t("resumeS4Desc") },
  ];

  const process = [
    { step: "01", title: t("resumeP1Title"), desc: t("resumeP1Desc") },
    { step: "02", title: t("resumeP2Title"), desc: t("resumeP2Desc") },
    { step: "03", title: t("resumeP3Title"), desc: t("resumeP3Desc") },
    { step: "04", title: t("resumeP4Title"), desc: t("resumeP4Desc") },
    { step: "05", title: t("resumeP5Title"), desc: t("resumeP5Desc") },
  ];

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <BackButton />

        <header className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>WebDevCompass</h1>
            <p className={styles.heroSub}>{t("resumeHeroSub")}</p>
            <p className={styles.heroDesc}>{t("resumeHeroDesc")}</p>
            <div className={styles.heroBadges}>
              <span>Next.js 16</span><span>TypeScript</span><span>React 19</span>
              <span>SEO-first</span><span>Performance</span>
            </div>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>14+</span>
              <span className={styles.statLabel}>{t("resumeStatProjects")}</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>8</span>
              <span className={styles.statLabel}>{t("resumeStatLangs")}</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>100</span>
              <span className={styles.statLabel}>{t("resumeStatScore")}</span>
            </div>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("resumeServicesTitle")}</h2>
          <div className={styles.servicesGrid}>
            {services.map(({ icon, title, desc }) => (
              <div key={title} className={styles.serviceCard}>
                <span className={styles.serviceIcon}>{icon}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("resumeStackTitle")}</h2>
          <div className={styles.stackGrid}>
            {STACK.map(({ category, items }) => (
              <div key={category} className={styles.stackGroup}>
                <h3 className={styles.stackCategory}>{category}</h3>
                <div className={styles.stackItems}>
                  {items.map(item => <span key={item} className={styles.stackBadge}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("resumeProcessTitle")}</h2>
          <div className={styles.processList}>
            {process.map(({ step, title, desc }) => (
              <div key={step} className={styles.processItem}>
                <span className={styles.processStep}>{step}</span>
                <div>
                  <h3 className={styles.processTitle}>{title}</h3>
                  <p className={styles.processDesc}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.cta}>
          <h2>{t("resumeCtaTitle")}</h2>
          <p>{t("resumeCtaDesc")}</p>
          <div className={styles.ctaButtons}>
            <a href="https://t.me/ljresetl" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
              {t("resumeCtaBtn")} @ljresetl
            </a>
            <a href="mailto:ljresetl@gmail.com" className={styles.ctaBtnOutline}>
              ljresetl@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
