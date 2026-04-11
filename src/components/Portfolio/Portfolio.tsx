"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Portfolio.module.scss";

import { projects } from "./projectsData";
import { useLanguage } from "@/useLanguage";
import Section from "@/components/AnimatedScrolSection/AnimatedScrolSection";

const Portfolio: React.FC = () => {
  const { t } = useLanguage();

  // Стан для визначення типу пристрою та кількості видимих проектів
  const [isDesktop, setIsDesktop] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    // 1. Визначаємо початковий стан при першому рендері
    const width = window.innerWidth;
    const desktopStatus = width >= 1280;
    
    setIsDesktop(desktopStatus);
    setVisibleCount(desktopStatus ? 3 : 4);

    // 2. Функція тільки для оновлення прапорця isDesktop (без скидання лічильника)
    const handleResize = () => {
      const desktop = window.innerWidth >= 1280;
      setIsDesktop(desktop);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Масив порожній, щоб спрацювало лише при монтуванні

  const loadMore = (e: React.MouseEvent) => {
    e.preventDefault(); // На всякий випадок зупиняємо дефолтну поведінку
    setVisibleCount((prev) => prev + (isDesktop ? 3 : 2));
  };

  return (
    <Section className={`${styles.blur_effect} ${styles.gradient_effect}`}>
      <section id="portfolio" className={styles.portfolio}>
        <div className={styles.container}>
          
          <h3 className={styles.portfolio_h}>{t("navPortfolioH")}</h3>

          <div className={styles.portfolio_list}>
            {projects.slice(0, visibleCount).map((project, index) => (
              <div key={index} className={styles.project_card}>
                
                <h4 className={styles.portfolio_h_4}>{t(project.title)}</h4>

                <p className={styles.portfolio_p}>{t(project.description)}</p>

                <div className={styles.imageWrapper}>
                  <Image
                    src={project.image}
                    alt={t(project.title)}
                    width={300}
                    height={300}
                    className={styles.project_image}
                    priority={index < 3}
                  />
                </div>

                <p className={styles.portfolio_p_t}>{t("navPortfolioT")}</p>

                <ul className={styles.project_tech}>
                  {project.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>

                <div className={styles.project_links}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.project_button}
                    aria-label={t("navPortfolioAG")}
                  >
                    {t("navPortfolioA")}
                  </a>

                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.project_button}
                    aria-label={t("navPortfolioAW")}
                  >
                    {t("navPortfolioW")}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {visibleCount < projects.length && (
            <button 
              type="button" 
              className={styles.button_loadmore} 
              onClick={loadMore}
            >
              {t("navPortfolioLoadMore")}
            </button>
          )}
        </div>
      </section>
    </Section>
  );
};

export default Portfolio;
