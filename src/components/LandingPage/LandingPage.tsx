"use client";

import React from "react";
import styles from "./LandingPage.module.scss";
import BackButton from "@/components/BackButton/BackButton";

const LandingPage: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleOrder = (planName: string, price: string, features: string) => {
    const message = `Привіт! Мене зацікавив тариф "${planName}" (${price}).\nВключено: ${features}\nДавайте обговоримо деталі!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://t.me/ljresetl?text=${encodedMessage}`, "_blank");
  };

  return (
    <section className={styles.page}>
      <div className={styles.mainContainer}>
        <BackButton />

        {/* --- HERO SECTION --- */}
        <div className={styles.hero}>
          <h1 className={styles.title}>Лендинги, що працюють на ваш результат</h1>
          <p className={styles.subtitle}>
            Професійна розробка на Next.js: від ідеї та дизайну до технічного запуску.
          </p>
          <div className={styles.heroCta}>
            <button className={styles.ctaOutline} onClick={() => scrollToSection('pricing')}>
              Розрахувати вартість
            </button>
            <button className={styles.ctaOutline} onClick={() => scrollToSection('steps')}>
              Подивитися етапи
            </button>
          </div>
        </div>

        {/* --- WHY ME SECTION --- */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Чому варто обрати мене?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>🚀</span>
              <h3>Швидкість & SEO</h3>
              <p>Next.js забезпечує миттєве завантаження, що підвищує конверсію та позиції в Google.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>📱</span>
              <h3>Mobile First</h3>
              <p>Ідеальне відображення на всіх пристроях: від старих смартфонів до 4K моніторів.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>🖼️</span>
              <h3>Оптимізація контенту</h3>
              <p>Підготовка графіки у форматах WebP/AVIF для збереження якості при мінімальній вазі.</p>
            </div>
          </div>
        </div>

        {/* --- STEPS SECTION --- */}
        <div id="steps" className={styles.section}>
          <h2 className={styles.sectionTitle}>Як відбувається розробка</h2>
          <div className={styles.stepsContainer}>
            <div className={styles.stepColumn}>
              <h3>Варіант А: У вас є макет (Figma)</h3>
              <ul>
                <li><strong>Аналіз макета:</strong> Перевірка на технічну реалізовність та адаптивність.</li>
                <li><strong>Чиста верстка:</strong> Перенесення дизайну в код Pixel-Perfect.</li>
                <li><strong>Інтерактив:</strong> Додавання анімацій, форм та функціоналу.</li>
                <li><strong>Запуск:</strong> Деплой на Vercel/Netlify та підключення домену.</li>
              </ul>
            </div>
            <div className={styles.stepColumn}>
              <h3>Варіант Б: Розробка з нуля</h3>
              <ul>
                <li><strong>Брифування:</strong> Обговорення цілей та структури сайту.</li>
                <li><strong>Дизайн-концепт:</strong> Створення стилістики та підбір шрифтів/кольорів.</li>
                <li><strong>Контент:</strong> Робота з вашими текстами та оптимізація фото.</li>
                <li><strong>Розробка:</strong> Повний цикл програмування та тестування.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- PRICING SECTION --- */}
        <div id="pricing" className={styles.section}>
          <h2 className={styles.sectionTitle}>Тарифи та послуги</h2>
          <div className={styles.pricingGrid}>
            
            <div className={styles.priceCard} onClick={() => handleOrder("Тільки код", "від $200", "Верстка на Next.js, Адаптивність, SEO, Хостинг")}>
              <h4>&quot;Тільки код&quot;</h4>
              <div className={styles.price}>від $200</div>
              <p>Для тих, хто має готовий дизайн у Figma.</p>
              <ul>
                <li>Верстка на Next.js</li>
                <li>Адаптивність (Mobile/Tablet)</li>
                <li>Базове SEO</li>
                <li>Хостинг у подарунок</li>
              </ul>
              <span className={styles.orderLabel}>Замовити →</span>
            </div>

            <div className={`${styles.priceCard} ${styles.featuredPrice}`} onClick={() => handleOrder("Під ключ", "від $350", "Дизайн, Копірайтинг, Оптимізація, Підтримка")}>
              <div className={styles.badge}>Популярно</div>
              <h4>&quot;Під ключ&quot;</h4>
              <div className={styles.price}>від $350</div>
              <p>Повний цикл від дизайну до запуску.</p>
              <ul>
                <li>Розробка дизайну</li>
                <li>Копірайтинг (структура)</li>
                <li>Оптимізація зображень</li>
                <li>Технічна підтримка</li>
              </ul>
              <span className={styles.orderLabel}>Замовити →</span>
            </div>

            <div className={styles.priceCard} onClick={() => handleOrder("Бізнес", "від $500", "CMS, Анімації, Багатомовність, Аналітика")}>
              <h4>&quot;Бізнес&quot;</h4>
              <div className={styles.price}>від $500</div>
              <p>Для складних рішень з адмін-панеллю.</p>
              <ul>
                <li>Інтеграція з CMS</li>
                <li>Складні анімації</li>
                <li>Багатомовність</li>
                <li>Аналітика та Pixel</li>
              </ul>
              <span className={styles.orderLabel}>Замовити →</span>
            </div>

          </div>
        </div>

        {/* --- FINAL CTA --- */}
        <div className={styles.finalCta}>
          <h2>Готові до обговорення?</h2>
          <p>Напишіть мені, і ми підберемо найкраще рішення під ваш бюджет.</p>
          <a href="https://t.me/ljresetl" target="_blank" className={styles.ctaTelegram}>
             Написати в Telegram @ljresetl
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;