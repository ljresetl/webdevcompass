"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import { useLanguage } from "@/useLanguage";

import { FaMoon, FaSun } from "react-icons/fa";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isLangOpen, setIsLangOpen] = useState(false);

  const { lang, setLang, t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Блокування скролу
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  // Ініціалізація теми (React 19-safe)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedTheme = localStorage.getItem("theme");
    const initialTheme =
      savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";

    Promise.resolve().then(() => {
      setTheme(initialTheme);
      document.body.classList.add(initialTheme);
    });
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);

    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);

    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/* Логотип */}
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logo} aria-label="На головну">
            FrontEnd
          </Link>
        </div>

        {/* Навігація + мова + тема */}
        <div className={styles.language_switcher}>

          <nav className={styles.navigation} aria-label="Головне меню">
            <ul className={styles.header_ul}>
              <li className={styles.ul_navigation_li}>
                <Link href="/#about">{t("navAbout")}</Link>
              </li>
              <li className={styles.ul_navigation_li}>
                <Link href="/#capabilities">{t("navCapabilities")}</Link>
              </li>
              <li className={styles.ul_navigation_li}>
                <Link href="/#portfolio">{t("navPortfolio")}</Link>
              </li>
              <li className={styles.ul_navigation_li}>
                <Link href="/services">{t("navServices") || "Services"}</Link>
              </li>
              <li className={styles.ul_navigation_li}>
                <Link href="/#connect">{t("navConnect")}</Link>
              </li>
            </ul>
          </nav>

          {/* Dropdown мов */}
          <div className={styles.languageDropdown}>
            <button
              className={styles.language_switcher_button}
              onClick={() => setIsLangOpen((prev) => !prev)}
            >
              🌐 {lang.toUpperCase()}
            </button>

            {isLangOpen && (
              <div className={styles.languageMenu}>
                <button onClick={() => { setLang("ua"); setIsLangOpen(false); }}>
                  Українська
                </button>
                <button onClick={() => { setLang("en"); setIsLangOpen(false); }}>
                  English
                </button>
                <button onClick={() => { setLang("cz"); setIsLangOpen(false); }}>
                  Čeština
                </button>
              </div>
            )}
          </div>

          {/* Перемикач теми */}
          <button
            id="theme-toggle"
            className={styles.theme_switcher}
            onClick={toggleTheme}
            aria-label="Змінити тему"
            type="button"
          >
            {theme === "light"
              ? <FaMoon size={20} color="#161717ff" />
              : <FaSun size={20} color="#d5eb0bff" />}
          </button>
        </div>

        {/* Бургер */}
        <button
          className={styles.burger_menu}
          type="button"
          onClick={toggleMenu}
          aria-label="Відкрити меню"
        >
          <svg className={styles.burger_menu_icon} width="44" height="44">
            <use href="/icons.svg#icon-Frame-3"></use>
          </svg>
        </button>

        {/* Мобільне меню */}
        <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
      </div>
    </header>
  );
};

export default Header;
