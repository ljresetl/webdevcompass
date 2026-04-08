"use client";

import React from "react";
import Link from "next/link";
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

        {/* WHAT YOU GET */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Що ви отримуєте</h2>

          <div className={styles.cards}>
            <div className={styles.card}>
              <span className={styles.icon}>⚡</span>
              <h3>Надшвидке завантаження</h3>
              <p>Core Web Vitals A+ та миттєва реакція сторінки.</p>
            </div>

            <div className={styles.card}>
              <span className={styles.icon}>🎯</span>
              <h3>Структура, орієнтована на конверсію</h3>
              <p>Побудована так, щоб вести користувача до дії.</p>
            </div>

            <div className={styles.card}>
              <span className={styles.icon}>📱</span>
              <h3>Піксель‑перфект адаптив</h3>
              <p>Ідеальний вигляд на мобільних, планшетах і десктопах.</p>
            </div>

            <div className={styles.card}>
              <span className={styles.icon}>🔍</span>
              <h3>SEO‑оптимізована архітектура</h3>
              <p>Чиста структура, семантика, швидка індексація.</p>
            </div>

            <div className={styles.card}>
              <span className={styles.icon}>🧩</span>
              <h3>Модульний, масштабований код</h3>
              <p>Побудований для довгострокового розвитку.</p>
            </div>
          </div>
        </div>

        {/* PROCESS */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Процес роботи</h2>

          <div className={styles.steps}>
            <div className={styles.step}>
              <h3>1. Дослідження та стратегія</h3>
              <p>Аналіз ніші, конкурентів та бізнес‑цілей.</p>
            </div>

            <div className={styles.step}>
              <h3>2. Вайрфрейм та UX</h3>
              <p>Структура, логіка та сценарії користувача.</p>
            </div>

            <div className={styles.step}>
              <h3>3. UI та розробка</h3>
              <p>Піксель‑перфект верстка, анімації, адаптив.</p>
            </div>

            <div className={styles.step}>
              <h3>4. Оптимізація та запуск</h3>
              <p>SEO, швидкість, аналітика, деплой.</p>
            </div>
          </div>
        </div>

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
                  <img
                    src={project.image}
                    alt={t(project.title)}
                    className={styles.portfolioImage}
                    loading="lazy"
                  />
                </div>
                <h4>{t(project.title)}</h4>
              </a>
            ))}
          </div>
        </div>

        {/* TECH ADVANTAGES */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Технічні переваги</h2>

          <ul className={styles.techList}>
            <li>Модульна архітектура</li>
            <li>Чистий, підтримуваний код</li>
            <li>Повторно використовувані компоненти</li>
            <li>Оптимізовані зображення (AVIF, WebP)</li>
            <li>Lighthouse 95–100</li>
            <li>SSR / SPA / Static — залежно від задачі</li>
          </ul>
        </div>

        {/* PRICING */}
<div className={`${styles.section} ${styles.pricingCentered}`}>
  <h2 className={styles.sectionTitle}>Ціни</h2>

  <div className={styles.pricing}>
    <div className={styles.priceCard}>
      <h3>Лендинг</h3>
      <p className={styles.price}>від 300€</p>
    </div>

    <div className={styles.priceCard}>
      <h3>Складний лендинг</h3>
      <p className={styles.price}>від 600€</p>
    </div>
  </div>

  <button className={styles.ctaPrimary}>
    Отримати індивідуальну пропозицію
  </button>
</div>

        {/* FAQ */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>FAQ</h2>

          <div className={styles.faq}>
            <div className={styles.faqItem}>
              <h3>Скільки часу займає розробка?</h3>
              <p>Зазвичай 5–10 днів залежно від складності.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>Чи можу я оновлювати контент самостійно?</h3>
              <p>Так — можу інтегрувати CMS або зробити редаговані компоненти.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>Чи входить SEO?</h3>
              <p>Так — технічне SEO входить за замовчуванням.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>Чи робите ви дизайн?</h3>
              <p>Так — можу створити UI з нуля або адаптувати ваш Figma‑дизайн.</p>
            </div>
          </div>
        </div>

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