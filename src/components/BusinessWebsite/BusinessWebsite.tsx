"use client";

import React, { useSyncExternalStore } from "react";
import styles from "./BusinessWebsite.module.scss";
import BackButton from "@/components/BackButton/BackButton";
import { useLanguage } from "@/useLanguage";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

const BusinessWebsite: React.FC = () => {
  const { t } = useLanguage();
  const isMounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const handleOrder = (planName: string, price: string, features: string[]) => {
    const name = t(planName as never);
    const feats = features.map(k => t(k as never)).join(", ");
    const msg = `Hello! I'm interested in the "${name}" plan (${price}).\nIncludes: ${feats}\nLet's discuss details!`;
    window.open(`https://t.me/ljresetl?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  if (!isMounted) return <section className={styles.page} />;

  return (
    <section className={styles.page}>
      <div className={styles.mainContainer}>
        <BackButton />

        <div className={styles.hero}>
          <h1 className={styles.title}>{t("bizTitle")}</h1>
          <p className={styles.subtitle}>{t("bizSubtitle")}</p>
          <div className={styles.heroCta}>
            <button className={styles.ctaOutline} onClick={() => scrollTo("biz-pricing")}>{t("bizCalcBtn")}</button>
            <button className={styles.ctaOutline} onClick={() => scrollTo("biz-steps")}>{t("bizStepsBtn")}</button>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("bizWhyTitle")}</h2>
          <div className={styles.featuresGrid}>
            {[
              { icon: "🗂️", title: "bizFeat1Title", desc: "bizFeat1Desc" },
              { icon: "🔍", title: "bizFeat2Title", desc: "bizFeat2Desc" },
              { icon: "📈", title: "bizFeat3Title", desc: "bizFeat3Desc" },
              { icon: "🌍", title: "bizFeat4Title", desc: "bizFeat4Desc" },
            ].map(({ icon, title, desc }) => (
              <div key={title} className={styles.featureCard}>
                <span className={styles.featureIcon}>{icon}</span>
                <h3>{t(title as never)}</h3>
                <p>{t(desc as never)}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="biz-steps" className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("bizStepsTitle")}</h2>
          <div className={styles.stepsList}>
            {(["bizStep1","bizStep2","bizStep3","bizStep4","bizStep5"] as const).map((key, i) => (
              <div key={key} className={styles.stepItem}>
                <span className={styles.stepNumber}>{i + 1}</span>
                <span>{t(key)}</span>
              </div>
            ))}
          </div>
        </div>

        <div id="biz-pricing" className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("bizPricingTitle")}</h2>
          <div className={styles.pricingGrid}>
            <div className={styles.priceCard} onClick={() => handleOrder("bizPlan1Name", "$300", ["bizPlan1Feat1","bizPlan1Feat2","bizPlan1Feat3","bizPlan1Feat4","bizPlan1Feat5"])}>
              <h4>{t("bizPlan1Name")}</h4>
              <div className={styles.price}>{t("bizPriceFrom")} $300</div>
              <p>{t("bizPlan1Desc")}</p>
              <ul>
                {(["bizPlan1Feat1","bizPlan1Feat2","bizPlan1Feat3","bizPlan1Feat4","bizPlan1Feat5"] as const).map(k => <li key={k}>{t(k)}</li>)}
              </ul>
              <span className={styles.orderLabel}>{t("bizOrder")}</span>
            </div>
            <div className={`${styles.priceCard} ${styles.featuredPrice}`} onClick={() => handleOrder("bizPlan2Name", "$600", ["bizPlan2Feat1","bizPlan2Feat2","bizPlan2Feat3","bizPlan2Feat4","bizPlan2Feat5"])}>
              <div className={styles.badge}>HOT</div>
              <h4>{t("bizPlan2Name")}</h4>
              <div className={styles.price}>{t("bizPriceFrom")} $600</div>
              <p>{t("bizPlan2Desc")}</p>
              <ul>
                {(["bizPlan2Feat1","bizPlan2Feat2","bizPlan2Feat3","bizPlan2Feat4","bizPlan2Feat5"] as const).map(k => <li key={k}>{t(k)}</li>)}
              </ul>
              <span className={styles.orderLabel}>{t("bizOrder")}</span>
            </div>
            <div className={styles.priceCard} onClick={() => handleOrder("bizPlan3Name", "$1200", ["bizPlan3Feat1","bizPlan3Feat2","bizPlan3Feat3","bizPlan3Feat4","bizPlan3Feat5"])}>
              <h4>{t("bizPlan3Name")}</h4>
              <div className={styles.price}>{t("bizPriceFrom")} $1200</div>
              <p>{t("bizPlan3Desc")}</p>
              <ul>
                {(["bizPlan3Feat1","bizPlan3Feat2","bizPlan3Feat3","bizPlan3Feat4","bizPlan3Feat5"] as const).map(k => <li key={k}>{t(k)}</li>)}
              </ul>
              <span className={styles.orderLabel}>{t("bizOrder")}</span>
            </div>
          </div>
        </div>

        <div className={styles.finalCta}>
          <h2>{t("bizFinalTitle")}</h2>
          <p>{t("bizFinalDesc")}</p>
          <a href="https://t.me/ljresetl" target="_blank" rel="noopener noreferrer" className={styles.ctaTelegram}>
            {t("bizTelegramBtn")} @ljresetl
          </a>
        </div>
      </div>
    </section>
  );
};

export default BusinessWebsite;
