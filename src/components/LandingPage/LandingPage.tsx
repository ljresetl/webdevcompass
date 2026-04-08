"use client";

import React, { useEffect, useSyncExternalStore } from "react";
import styles from "./LandingPage.module.scss";
import BackButton from "@/components/BackButton/BackButton";
import { useLanguage } from "@/useLanguage";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

const LandingPage: React.FC = () => {
  const { t } = useLanguage();
  const isMounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    if (isMounted) {
      document.title = t("landTitle");
    }
  }, [t, isMounted]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleOrder = (planNameKey: string, price: string, featureKeys: string[]) => {
    const planName = t(planNameKey).replace(/&quot;/g, '"');
    const features = featureKeys.map(key => t(key)).join(", ");
    const message = `Привіт! Мене зацікавив тариф "${planName}" (${price}).\nВключено: ${features}\nДавайте обговоримо деталі!`;
    window.open(`https://t.me/ljresetl?text=${encodeURIComponent(message)}`, "_blank");
  };

  if (!isMounted) return <section className={styles.page} />;

  return (
    <section className={styles.page}>
      <div className={styles.mainContainer}>
        <BackButton />

        {/* --- HERO SECTION --- */}
        <div className={styles.hero}>
          <h1 className={styles.title}>{t("landTitle")}</h1>
          <p className={styles.subtitle}>{t("landSubtitle")}</p>
          <div className={styles.heroCta}>
            <button className={styles.ctaOutline} onClick={() => scrollToSection('pricing')}>
              {t("landCalcBtn")}
            </button>
            <button className={styles.ctaOutline} onClick={() => scrollToSection('steps')}>
              {t("landStepsBtn")}
            </button>
          </div>
        </div>

        {/* --- WHY ME SECTION --- */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("landWhyTitle")}</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>🚀</span>
              <h3>{t("landFeature1Title")}</h3>
              <p>{t("landFeature1Desc")}</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>📱</span>
              <h3>{t("landFeature2Title")}</h3>
              <p>{t("landFeature2Desc")}</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>🖼️</span>
              <h3>{t("landFeature3Title")}</h3>
              <p>{t("landFeature3Desc")}</p>
            </div>
          </div>
        </div>

        {/* --- STEPS SECTION --- */}
        <div id="steps" className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("landStepsTitle")}</h2>
          <div className={styles.stepsContainer}>
            <div className={styles.stepColumn}>
              <h3>{t("landVariantA")}</h3>
              <ul>
                <li>{t("landStepA1")}</li>
                <li>{t("landStepA2")}</li>
                <li>{t("landStepA3")}</li>
                <li>{t("landStepA4")}</li>
              </ul>
            </div>
            <div className={styles.stepColumn}>
              <h3>{t("landVariantB")}</h3>
              <ul>
                <li>{t("landStepB1")}</li>
                <li>{t("landStepB2")}</li>
                <li>{t("landStepB3")}</li>
                <li>{t("landStepB4")}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- PRICING SECTION --- */}
        <div id="pricing" className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("landPricingTitle")}</h2>
          <div className={styles.pricingGrid}>
            
            {/* Тільки код */}
            <div className={styles.priceCard} onClick={() => handleOrder("landPlan1Name", "$200", ["landPlan1Feat1", "landPlan1Feat2", "landPlan1Feat3", "landPlan1Feat4", "landPlan1Feat5"])}>
              <h4>{t("landPlan1Name")}</h4>
              <div className={styles.price}>{t("landPriceFrom")} $200</div>
              <p>{t("landPlan1Desc")}</p>
              <ul>
                <li>{t("landPlan1Feat1")}</li>
                <li>{t("landPlan1Feat2")}</li>
                <li>{t("landPlan1Feat3")}</li>
                <li>{t("landPlan1Feat4")}</li>
                <li><strong>{t("landPlan1Feat5")}</strong></li>
              </ul>
              <span className={styles.orderLabel}>{t("landOrder")}</span>
            </div>

            {/* Під ключ */}
            <div className={`${styles.priceCard} ${styles.featuredPrice}`} onClick={() => handleOrder("landPlan2Name", "$350", ["landPlan2Feat1", "landPlan2Feat2", "landPlan2Feat3", "landPlan2Feat4", "landPlan2Feat5"])}>
              <div className={styles.badge}>HOT</div>
              <h4>{t("landPlan2Name")}</h4>
              <div className={styles.price}>{t("landPriceFrom")} $350</div>
              <p>{t("landPlan2Desc")}</p>
              <ul>
                <li>{t("landPlan2Feat1")}</li>
                <li>{t("landPlan2Feat2")}</li>
                <li>{t("landPlan2Feat3")}</li>
                <li>{t("landPlan2Feat4")}</li>
                <li><strong>{t("landPlan2Feat5")}</strong></li>
              </ul>
              <span className={styles.orderLabel}>{t("landOrder")}</span>
            </div>

            {/* Бізнес */}
            <div className={styles.priceCard} onClick={() => handleOrder("landPlan3Name", "$500", ["landPlan3Feat1", "landPlan3Feat2", "landPlan3Feat3", "landPlan3Feat4", "landPlan3Feat5"])}>
              <h4>{t("landPlan3Name")}</h4>
              <div className={styles.price}>{t("landPriceFrom")} $500</div>
              <p>{t("landPlan3Desc")}</p>
              <ul>
                <li>{t("landPlan3Feat1")}</li>
                <li>{t("landPlan3Feat2")}</li>
                <li>{t("landPlan3Feat3")}</li>
                <li>{t("landPlan3Feat4")}</li>
                <li><strong>{t("landPlan3Feat5")}</strong></li>
              </ul>
              <span className={styles.orderLabel}>{t("landOrder")}</span>
            </div>

          </div>
        </div>

        {/* --- FINAL CTA --- */}
        <div className={styles.finalCta}>
          <h2>{t("landFinalTitle")}</h2>
          <p>{t("landFinalDesc")}</p>
          <a href="https://t.me/ljresetl" target="_blank" className={styles.ctaTelegram}>
             {t("landTelegramBtn")} @ljresetl
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;