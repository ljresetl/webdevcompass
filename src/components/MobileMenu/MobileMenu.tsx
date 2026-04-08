"use client";

import Link from "next/link";
import styles from "./MobileMenu.module.scss";
import { useLanguage } from "@/useLanguage";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  return (
    <div className={`${styles.mobile_menu} ${isOpen ? styles.open : ""}`}>
      
      {/* Кнопка закриття */}
      <div className={styles.mobile_menu_btn}>
        <button
          className={styles.close_mobile_menu}
          onClick={onClose}
          aria-label={t("navCloseMenu") || "Закрити меню"}
        >
          ✕
        </button>
      </div>

      {/* Навігація */}
      <ul className={styles.mobile_menu_list}>
        <li>
          <Link 
            href="/#about"
            onClick={onClose}
            aria-label="Посилання на розділ Про мене"
          >
            {t("navAbout")}
          </Link>
        </li>

        <li>
          <Link 
            href="/#capabilities"
            onClick={onClose}
            aria-label="Посилання на розділ Можливості"
          >
            {t("navExperience")}
          </Link>
        </li>

        <li>
          <Link 
            href="/#portfolio"
            onClick={onClose}
            aria-label="Посилання на розділ Портфоліо"
          >
            {t("navPortfolio")}
          </Link>
        </li>

        <li>
<Link 
  href="/services"
  onClick={onClose} // Закриває меню після кліку
  aria-label="Посилання на розділ Сервіси"
>
  {t("navServices") || "Services"}
</Link>
        </li>

        <li>
          <Link 
            href="/#connect"
            onClick={onClose}
            aria-label="Посилання на розділ Зв'язок"
          >
            {t("navConnect")}
          </Link>
        </li>
      </ul>

      {/* Соцмережі */}
      <div className={styles.connect_svg_mobile}>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/vitalii-baranov-222439377"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Посилання на LinkedIn"
        >
          <svg width="32" height="32" className={styles.about_me_svg_link_connect}>
            <use href="/icons.svg#icon-linkendin"></use>
          </svg>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/ljresetl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Посилання на GitHub"
        >
          <svg width="32" height="32" className={styles.about_me_svg_link_connect}>
            <use href="/icons.svg#icon-github"></use>
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/ljresetl/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Посилання на Instagram"
        >
          <svg width="32" height="32" className={styles.about_me_svg_link_connect}>
            <use href="/icons.svg#icon-instagram"></use>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
