"use client";

import React, { useSyncExternalStore } from "react";
import styles from "./PerformanceOptimization.module.scss";
import BackButton from "@/components/BackButton/BackButton";
import { useLanguage } from "@/useLanguage";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

const PerformanceOptimization: React.FC = () => {
  const { t } = useLanguage();
  const isMounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!isMounted) return <section className={styles.page} />;

  const metrics = [
    { key: "perfLcpTitle", desc: "perfLcpDesc", value: "< 2.5s", color: "#22c55e" },
    { key: "perfFidTitle", desc: "perfFidDesc", value: "< 100ms", color: "#0ea5e9" },
    { key: "perfClsTitle", desc: "perfClsDesc", value: "< 0.1", color: "#a855f7" },
    { key: "perfTtiTitle", desc: "perfTtiDesc", value: "< 3.8s", color: "#f97316" },
  ];

  const services = [
    { icon: "🖼️", title: "perfServ1Title", desc: "perfServ1Desc" },
    { icon: "✂️", title: "perfServ2Title", desc: "perfServ2Desc" },
    { icon: "⚡", title: "perfServ3Title", desc: "perfServ3Desc" },
    { icon: "🔤", title: "perfServ4Title", desc: "perfServ4Desc" },
    { icon: "🎯", title: "perfServ5Title", desc: "perfServ5Desc" },
  ];

  return (
    <section className={styles.page}>
      <div className={styles.mainContainer}>
        <BackButton />

        <div className={styles.hero}>
          <h1 className={styles.title}>{t("perfTitle")}</h1>
          <p className={styles.subtitle}>{t("perfSubtitle")}</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("perfMetricsTitle")}</h2>
          <div className={styles.metricsGrid}>
            {metrics.map(({ key, desc, value, color }) => (
              <div key={key} className={styles.metricCard} style={{ borderTopColor: color }}>
                <div className={styles.metricValue} style={{ color }}>{value}</div>
                <h3 className={styles.metricTitle}>{t(key as never)}</h3>
                <p className={styles.metricDesc}>{t(desc as never)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("perfServicesTitle")}</h2>
          <div className={styles.featuresGrid}>
            {services.map(({ icon, title, desc }) => (
              <div key={title} className={styles.featureCard}>
                <span className={styles.featureIcon}>{icon}</span>
                <h3>{t(title as never)}</h3>
                <p>{t(desc as never)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("perfProcessTitle")}</h2>
          <div className={styles.stepsList}>
            {(["perfProc1","perfProc2","perfProc3","perfProc4"] as const).map((key, i) => (
              <div key={key} className={styles.stepItem}>
                <span className={styles.stepNumber}>{i + 1}</span>
                <span>{t(key)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.finalCta}>
          <h2>{t("perfFinalTitle")}</h2>
          <p>{t("perfFinalDesc")}</p>
          <a href="https://t.me/ljresetl" target="_blank" rel="noopener noreferrer" className={styles.ctaTelegram}>
            {t("perfTelegramBtn")} @ljresetl
          </a>
        </div>
      </div>
    </section>
  );
};

export default PerformanceOptimization;
