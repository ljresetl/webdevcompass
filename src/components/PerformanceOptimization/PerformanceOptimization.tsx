"use client";

import React from "react";
import styles from "./PerformanceOptimization.module.scss";
import BackButton from "@/components/BackButton/BackButton";

const PerformanceOptimization: React.FC = () => {
  return (
    <section className={styles.services_section}>
      <div className={styles.container}>
        {/* Кнопка назад */}
        <div className={styles.backWrapper}>
          <BackButton />
        </div>

        <section className={styles.services}>
          <picture>
            {/* Mobile */}
            <source
              media="(max-width: 767px)"
              srcSet="/under-construction-mobile.avif"
            />

            {/* Tablet */}
            <source
              media="(max-width: 1024px)"
              srcSet="/under-construction-tablet.avif"
            />

            {/* Desktop */}
            <img
              src="/under-construction-desktop.avif"
              alt="Page under construction"
              className={styles.image}
              loading="eager"
              decoding="async"
            />
          </picture>
        </section>
      </div>
    </section>
  );
};

export default PerformanceOptimization;