"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Foto.module.scss";
import { useLanguage } from "@/useLanguage";
import Section from "@/components/AnimatedScrolSection/AnimatedScrolSection";

const Foto: React.FC = () => {
  const { t } = useLanguage();

  // Усі зображення мають бути в /public/images/
  const images = [
    "/343.webp",
    "/343_2.webp",
    "/343_3.webp",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Section className={`${styles.blur_effect} ${styles.gradient_effect}`}>
      <section className={styles.foto}>
        <div className={styles.container}>

          <div className={styles.imageWrapper}>
  <Image
    key={index} // Додаємо key, щоб примусово оновлювати компонент при зміні індексу
    src={images[index]}
    alt={`front-end developer - photo ${index + 1}`}
    width={343}
    height={343}
    priority
    className={styles.my_foto}
  />
</div>

          <div className={styles.about_me_text}>
            <h1 className={styles.about_me_text_h}>{t("navAboutTextH")}</h1>
            <p className={styles.about_me_text_p}>{t("navAboutTextP")}</p>
            <p className={styles.about_me_text_p}>{t("navAboutTextPtwo")}</p>
            <p className={styles.about_me_text_p}>{t("navAboutTextPthree")}</p>
            <p className={styles.about_me_text_p}>{t("navAboutTextPfour")}</p>
            <p className={styles.about_me_text_p}>{t("navAboutTextPfive")}</p>
            <p className={styles.about_me_text_p}>{t("navAboutTextPsix")}</p>
          </div>

        </div>
      </section>
    </Section>
  );
};

export default Foto;
