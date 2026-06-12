"use client";

import React, { useState, useSyncExternalStore } from "react";
import styles from "./Subscription.module.scss";
import BackButton from "@/components/BackButton/BackButton";
import { useLanguage } from "@/useLanguage";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

const Subscription: React.FC = () => {
  const { t } = useLanguage();
  const isMounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [selectedPlan, setSelectedPlan] = useState("");

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const choosePlan = (planName: string) => {
    setSelectedPlan(planName);
    scrollToSection("subscribe-form");
  };

  if (!isMounted) return <section className={styles.page} />;

  const plans = [
    {
      name: t("subPlan1Name"),
      sub: t("subPlan1Sub"),
      price: t("subPlan1Price"),
      for: t("subPlan1For"),
      features: ["subPlan1Feat1", "subPlan1Feat2", "subPlan1Feat3", "subPlan1Feat4", "subPlan1Feat5"],
      featured: false,
    },
    {
      name: t("subPlan2Name"),
      sub: t("subPlan2Sub"),
      price: t("subPlan2Price"),
      for: t("subPlan2For"),
      features: ["subPlan2Feat1", "subPlan2Feat2", "subPlan2Feat3", "subPlan2Feat4", "subPlan2Feat5"],
      featured: true,
    },
    {
      name: t("subPlan3Name"),
      sub: t("subPlan3Sub"),
      price: t("subPlan3Price"),
      for: t("subPlan3For"),
      features: ["subPlan3Feat1", "subPlan3Feat2", "subPlan3Feat3", "subPlan3Feat4", "subPlan3Feat5"],
      featured: false,
    },
  ];

  const faq = [
    ["subFaqQ1", "subFaqA1"],
    ["subFaqQ2", "subFaqA2"],
    ["subFaqQ3", "subFaqA3"],
    ["subFaqQ4", "subFaqA4"],
  ];

  return (
    <section className={styles.page}>
      <div className={styles.mainContainer}>
        <BackButton />

        {/* --- HERO --- */}
        <div className={styles.hero}>
          <span className={styles.heroBadge}>{t("subHeroBadge")}</span>
          <h1 className={styles.title}>{t("subHeroTitle")}</h1>
          <p className={styles.subtitle}>{t("subHeroSubtitle")}</p>
          <div className={styles.heroCta}>
            <button className={styles.ctaSolid} onClick={() => scrollToSection("pricing")}>
              {t("subHeroCtaPricing")}
            </button>
            <button className={styles.ctaOutline} onClick={() => scrollToSection("subscribe-form")}>
              {t("subHeroCtaForm")}
            </button>
          </div>
        </div>

        {/* --- WHY --- */}
        <div className={styles.section}>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>🎁</span>
              <h3>{t("subFeature1Title")}</h3>
              <p>{t("subFeature1Desc")}</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>🎨</span>
              <h3>{t("subFeature2Title")}</h3>
              <p>{t("subFeature2Desc")}</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>🚀</span>
              <h3>{t("subFeature3Title")}</h3>
              <p>{t("subFeature3Desc")}</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>📦</span>
              <h3>{t("subFeature4Title")}</h3>
              <p>{t("subFeature4Desc")}</p>
            </div>
          </div>
        </div>

        {/* --- COMPARISON --- */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("subCompareTitle")}</h2>
          <div className={styles.compareWrapper}>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th></th>
                  <th>{t("subCompareHeaderMarket")}</th>
                  <th>{t("subCompareHeaderUs")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t("subCompareRow1Label")}</td>
                  <td>{t("subCompareRow1Market")}</td>
                  <td className={styles.compareUsCol}>{t("subCompareRow1Us")}</td>
                </tr>
                <tr>
                  <td>{t("subCompareRow2Label")}</td>
                  <td>{t("subCompareRow2Market")}</td>
                  <td className={styles.compareUsCol}>{t("subCompareRow2Us")}</td>
                </tr>
                <tr>
                  <td>{t("subCompareRow3Label")}</td>
                  <td>{t("subCompareRow3Market")}</td>
                  <td className={styles.compareUsCol}>{t("subCompareRow3Us")}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={styles.compareNote}>{t("subCompareNote")}</p>
        </div>

        {/* --- PRICING --- */}
        <div id="pricing" className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("subPricingTitle")}</h2>
          <div className={styles.pricingGrid}>
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`${styles.priceCard} ${plan.featured ? styles.featuredPrice : ""}`}
                onClick={() => choosePlan(plan.name)}
              >
                {plan.featured && <div className={styles.badge}>{t("subBadgePopular")}</div>}
                <h4>{plan.name}</h4>
                <p className={styles.planSub}>{plan.sub}</p>
                <div className={styles.price}>
                  {plan.price} <span className={styles.pricePeriod}>{t("subPricePerMonth")}</span>
                </div>
                <p className={styles.planFor}>{plan.for}</p>
                <ul>
                  {plan.features.map((key) => (
                    <li key={key}>{t(key)}</li>
                  ))}
                </ul>
                <span className={styles.orderLabel}>{t("subSelectPlan")}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- INCLUDE / EXCLUDE --- */}
        <div className={styles.section}>
          <div className={styles.includeExcludeGrid}>
            <div className={styles.includeCard}>
              <h3>{t("subIncludeTitle")}</h3>
              <ul>
                <li>{t("subInclude1")}</li>
                <li>{t("subInclude2")}</li>
                <li>{t("subInclude3")}</li>
                <li>{t("subInclude4")}</li>
                <li>{t("subInclude5")}</li>
                <li>{t("subInclude6")}</li>
              </ul>
            </div>
            <div className={styles.excludeCard}>
              <h3>{t("subExcludeTitle")}</h3>
              <ul>
                <li>{t("subExclude1")}</li>
                <li>{t("subExclude2")}</li>
                <li>{t("subExclude3")}</li>
                <li>{t("subExclude4")}</li>
                <li>{t("subExclude5")}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- STEPS --- */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("subStepsTitle")}</h2>
          <div className={styles.stepsList}>
            <div className={styles.stepItem}>
              <div>
                <h3>{t("subStep1Title")}</h3>
                <p>{t("subStep1Desc")}</p>
              </div>
            </div>
            <div className={styles.stepItem}>
              <div>
                <h3>{t("subStep2Title")}</h3>
                <p>{t("subStep2Desc")}</p>
              </div>
            </div>
            <div className={styles.stepItem}>
              <div>
                <h3>{t("subStep3Title")}</h3>
                <p>{t("subStep3Desc")}</p>
              </div>
            </div>
            <div className={styles.stepItem}>
              <div>
                <h3>{t("subStep4Title")}</h3>
                <p>{t("subStep4Desc")}</p>
              </div>
            </div>
            <div className={styles.stepItem}>
              <div>
                <h3>{t("subStep5Title")}</h3>
                <p>{t("subStep5Desc")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- LEGAL --- */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("subLegalTitle")}</h2>
          <div className={styles.legalGrid}>
            <div className={styles.legalCard}>
              <h3>{t("subLegalOwnershipTitle")}</h3>
              <p>{t("subLegalOwnershipDesc")}</p>
            </div>
            <div className={styles.legalCard}>
              <h3>{t("subLegalBuyoutTitle")}</h3>
              <p>{t("subLegalBuyoutDesc")}</p>
            </div>
            <div className={styles.legalCard}>
              <h3>{t("subLegalEditsTitle")}</h3>
              <p>{t("subLegalEditsDesc")}</p>
            </div>
            <div className={styles.legalCard}>
              <h3>{t("subLegalCancelTitle")}</h3>
              <p>{t("subLegalCancelDesc")}</p>
            </div>
          </div>
        </div>

        {/* --- FAQ --- */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("subFaqTitle")}</h2>
          <div className={styles.faqList}>
            {faq.map(([qKey, aKey]) => (
              <details key={qKey} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>{t(qKey)}</summary>
                <p className={styles.faqAnswer}>{t(aKey)}</p>
              </details>
            ))}
          </div>
        </div>

        {/* --- FORM --- */}
        <div id="subscribe-form" className={styles.section}>
          <div className={styles.formSection}>
            <div className={styles.formIntro}>
              <h2>{t("subFormTitle")}</h2>
              <p>{t("subFormDesc")}</p>
            </div>
            <form action="https://formspree.io/f/mzzggoog" method="POST" className={styles.form}>
              <input type="hidden" name="_subject" value={t("subFormSubject")} />

              <label htmlFor="sub-name">{t("navConnectName")}</label>
              <input
                type="text"
                name="name"
                id="sub-name"
                className={styles.formInput}
                required
                placeholder={t("navConnectPlaceholderName")}
              />

              <label htmlFor="sub-phone">{t("navConnectTelefon")}</label>
              <input
                type="tel"
                name="phone"
                id="sub-phone"
                className={styles.formInput}
                required
                placeholder={t("navConnectPlaceholderPhone")}
              />

              <label htmlFor="sub-email">{t("navConnectMail")}</label>
              <input
                type="email"
                name="email"
                id="sub-email"
                className={styles.formInput}
                required
                placeholder={t("navConnectPlaceholderEmail")}
              />

              <label htmlFor="sub-plan">{t("subFormPlanLabel")}</label>
              <select
                name="plan"
                id="sub-plan"
                className={styles.formSelect}
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                required
              >
                <option value="" disabled>
                  {t("subFormPlanPlaceholder")}
                </option>
                {plans.map((plan) => (
                  <option key={plan.name} value={plan.name}>
                    {plan.name} — {plan.price} {t("subPricePerMonth")}
                  </option>
                ))}
              </select>

              <label htmlFor="sub-message">{t("navConnectComment")}</label>
              <textarea
                id="sub-message"
                name="message"
                className={styles.formTextarea}
                placeholder={t("navConnectPlaceholderMessage")}
              ></textarea>

              <button type="submit" className={styles.formButton}>
                {t("subFormSubmit")}
              </button>
            </form>
          </div>
        </div>

        {/* --- FINAL CTA --- */}
        <div className={styles.finalCta}>
          <h2>{t("subFinalTitle")}</h2>
          <p>{t("subFinalDesc")}</p>
          <button className={styles.ctaSolid} onClick={() => scrollToSection("subscribe-form")}>
            {t("subHeroCtaForm")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
