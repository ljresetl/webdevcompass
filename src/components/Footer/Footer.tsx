"use client";

import { useEffect, useRef } from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bannerRef.current) return;

    // Очищаємо контейнер перед вставкою, щоб уникнути дублювання
    bannerRef.current.innerHTML = "";

    // Створюємо та додаємо конфігурацію atOptions
    const confScript = document.createElement("script");
    confScript.innerHTML = `
      atOptions = {
        'key' : 'dc5c92083aeb708d5e5b8b4b198f6835',
        'format' : 'iframe',
        'height' : 60,
        'width' : 468,
        'params' : {}
      };
    `;
    bannerRef.current.appendChild(confScript);

    // Створюємо та додаємо основний скрипт реклами
    const invokeScript = document.createElement("script");
    invokeScript.src = "https://bauval.org/22/dc5c92083aeb708d5e5b8b4b198f6835";
    invokeScript.async = true;
    bannerRef.current.appendChild(invokeScript);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.container_footer_p}>© 2026 Webdevcompass</p>
        
        {/* Рекламний блок 468x60 */}
        <div 
          ref={bannerRef} 
          className={styles.bannerContainer} 
          style={{ marginTop: "15px", textAlign: "center", minHeight: "60px" }} 
        />
      </div>
    </footer>
  );
};

export default Footer;