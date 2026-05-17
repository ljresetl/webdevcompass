"use client";

import React, { useSyncExternalStore } from "react";
import styles from "./UiUxImplementation.module.scss";
import BackButton from "@/components/BackButton/BackButton";
import { useLanguage } from "@/useLanguage";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

const TECH_STACK = ["Next.js", "React", "TypeScript", "SCSS", "Tailwind CSS", "Framer Motion", "Figma"];

const UiUxImplementation: React.FC = () => {
  const { t } = useLanguage();
  const isMounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!isMounted) return <section className={styles.page} />;

  return (
    <section className={styles.page}>
      <div className={styles.mainContainer}>
        <BackButton />

        <div className={styles.hero}>
          <h1 className={styles.title}>{t("uiTitle")}</h1>
          <p className={styles.subtitle}>{t("uiSubtitle")}</p>
          <a href="https://t.me/ljresetl" target="_blank" rel="noopener noreferrer" className={styles.ctaTelegram}>
            {t("uiHeroBtn")} →
          </a>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("uiServicesTitle")}</h2>
          <div className={styles.featuresGrid}>
            {[
              { icon: "🎨", title: "uiServ1Title", desc: "uiServ1Desc" },
              { icon: "🧩", title: "uiServ2Title", desc: "uiServ2Desc" },
              { icon: "✨", title: "uiServ3Title", desc: "uiServ3Desc" },
              { icon: "♿", title: "uiServ4Title", desc: "uiServ4Desc" },
            ].map(({ icon, title, desc }) => (
              <div key={title} className={styles.featureCard}>
                <span className={styles.featureIcon}>{icon}</span>
                <h3>{t(title as never)}</h3>
                <p>{t(desc as never)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("uiProcessTitle")}</h2>
          <div className={styles.stepsList}>
            {(["uiProc1","uiProc2","uiProc3","uiProc4"] as const).map((key, i) => (
              <div key={key} className={styles.stepItem}>
                <span className={styles.stepNumber}>{i + 1}</span>
                <span>{t(key)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("uiTechTitle")}</h2>
          <div className={styles.techGrid}>
            {TECH_STACK.map(tech => (
              <span key={tech} className={styles.techBadge}>{tech}</span>
            ))}
          </div>
        </div>

        <div className={styles.finalCta}>
          <h2>{t("uiFinalTitle")}</h2>
          <p>{t("uiFinalDesc")}</p>
          <a href="https://t.me/ljresetl" target="_blank" rel="noopener noreferrer" className={styles.ctaTelegramLarge}>
            {t("uiTelegramBtn")} @ljresetl
          </a>
        </div>
      </div>
    </section>
  );
};

export default UiUxImplementation;
