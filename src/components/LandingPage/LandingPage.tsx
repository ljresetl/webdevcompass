"use client";

import React from "react";
// 1. ВИПРАВЛЕНО: Додано імпорт Image
import Image from "next/image"; 
// import Link from "next/link";
import styles from "./LandingPage.module.scss";
import { projects } from "@/components/Portfolio/projectsData";
import { useLanguage } from "@/useLanguage";
import BackButton from "@/components/BackButton/BackButton";

const LandingPage: React.FC = () => {
  const { t } = useLanguage();

  // Беремо тільки ті проєкти, які позначені як featured
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        
        {/* Кнопка Повернутися */}
        <BackButton />

        {/* HERO */}
        <div className={styles.hero}>
          <h1 className={styles.title}>
            Висококонверсійні лендинги, створені для продуктивності
          </h1>
          <p className={styles.subtitle}>
            Швидкі, сучасні та SEO‑оптимізовані лендинги, які перетворюють
            відвідувачів на клієнтів.
          </p>
          <div className={styles.heroCta}>
            <button className={styles.ctaPrimary}>Отримати пропозицію</button>
            <button className={styles.ctaSecondary}>Записатися на дзвінок</button>
          </div>
        </div>

        {/* ... (інші секції залишаються без змін) ... */}

        {/* PORTFOLIO PREVIEW */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Приклади робіт</h2>
          <div className={styles.portfolioGrid}>
            {featuredProjects.map((project, index) => (
              <a
                key={index}
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.portfolioItem}
              >
                <div className={styles.imageWrapper}>
<div className={styles.imageWrapper}>
  <Image
    src={project.image}
    alt={t(project.title)}
    className={styles.portfolioImage}
    width={600}
    height={400}
    priority={index === 0} 
  />
</div>
                </div>
                <h4>{t(project.title)}</h4>
              </a>
            ))}
          </div>
        </div>

        {/* ... (решта секцій) ... */}
        
        {/* FINAL CTA */}
        <div className={styles.finalCta}>
          <h2>Готові запустити висококонверсійний лендинг?</h2>
          <p>Давайте створимо щось справді сильне.</p>
          <button className={styles.ctaPrimary}>Зв’язатися зі мною</button>
        </div>

      </div>
    </section>
  );
};

export default LandingPage;