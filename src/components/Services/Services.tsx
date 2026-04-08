"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link"; // Використовуємо Next.js Link
import styles from "./Services.module.scss";
import Image from "next/image"; // Використовуємо Next.js Image для оптимізації

const Services: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // Відстежуємо зміну теми на body
  useEffect(() => {
    // Функція для перевірки теми
    const checkTheme = () => {
      if (document.body.classList.contains("light")) {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    };

    // Перевіряємо тему при першому рендері
    checkTheme();

    // Стежимо за змінами класів на body
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        
        {/* Банер з адаптивними зображеннями */}
        <div className={styles.banner}>
          <picture>
            <source
              media="(max-width: 410px)"
              srcSet={theme === "light"
                ? "/services-banner-light-mobile.avif"
                : "/services-banner-mobile.avif"}
            />
            <source
              media="(max-width: 768px)"
              srcSet={theme === "light"
                ? "/services-banner-light-tablet.avif"
                : "/services-banner-tablet.avif"}
            />
<Image
  src={theme === "light"
    ? "/services-banner-light-desktop.avif"
    : "/services-banner-desktop1.avif"}
  alt="Frontend development banner"
  className={styles.bannerImage}
  width={1200} // Додай реальну ширину картинки
  height={400}  // Додай реальну висоту картинки
  priority     // Для банерів краще priority замість loading="eager"
/>
          </picture>
        </div>

        <h1 className={styles.title}>Services</h1>
        <p className={styles.subtitle}>
          I build fast, modern and scalable websites with clean architecture and pixel‑perfect UI.
        </p>

        {/* Сітка з картками послуг */}
        <div className={styles.cards}>
          <Link href="/services/landing-page" className={styles.card}>
            <h2>Landing Page Development</h2>
            <p>High‑conversion landing pages with responsive design and SEO‑ready structure.</p>
          </Link>

          <Link href="/services/business-website" className={styles.card}>
            <h2>Business Website</h2>
            <p>Multi‑page websites for companies, services, and personal brands.</p>
          </Link>

          <Link href="/services/ui-ux-implementation" className={styles.card}>
            <h2>UI/UX Implementation</h2>
            <p>Pixel‑perfect frontend based on Figma or custom design systems.</p>
          </Link>

          <Link href="/services/performance-optimization" className={styles.card}>
            <h2>Performance Optimization</h2>
            <p>Speed improvements, Core Web Vitals, accessibility and SEO enhancements.</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;