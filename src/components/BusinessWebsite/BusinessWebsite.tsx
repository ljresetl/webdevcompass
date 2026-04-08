"use client";

import React from "react";
import styles from "./BusinessWebsite.module.scss";
import BackButton from "@/components/BackButton/BackButton";

const BusinessWebsite: React.FC = () => {
  return (
    <section className={styles.services_section}>
      <div className={styles.container}>
        {/* Вставляємо нашу нову кнопку */}
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

export default BusinessWebsite;