"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Header.module.scss";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import { useLanguage } from "@/useLanguage";
import type { Lang } from "@/LanguageContext";

type Theme = "light" | "dark" | "ocean" | "sunset" | "forest" | "midnight" | "candy";

const ALL_THEMES: Array<{ id: Theme; label: string; color: string }> = [
  { id: "light",    label: "Light",    color: "#ffffff" },
  { id: "dark",     label: "Dark",     color: "#1a1a1a" },
  { id: "ocean",    label: "Ocean",    color: "#0ea5e9" },
  { id: "sunset",   label: "Sunset",   color: "#f97316" },
  { id: "forest",   label: "Forest",   color: "#22c55e" },
  { id: "midnight", label: "Midnight", color: "#a855f7" },
  { id: "candy",    label: "Candy",    color: "#ec4899" },
];

const SUPPORTED_LANGS = ["ua", "en", "cz", "de", "fr", "pl", "es", "pt"];

const LANGUAGES: Array<{ code: Lang; label: string }> = [
  { code: "ua", label: "Українська" },
  { code: "en", label: "English" },
  { code: "cz", label: "Čeština" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "pl", label: "Polski" },
  { code: "es", label: "Español" },
  { code: "pt", label: "Português" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");
  const langRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<HTMLDivElement>(null);

  const { lang, t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  // Always read lang from URL — this is the source of truth
  const urlLang = pathname?.split("/")?.[1] ?? "";
  const currentLang: Lang = SUPPORTED_LANGS.includes(urlLang) ? (urlLang as Lang) : "en";
  const lp = (path: string) => `/${currentLang}${path}`;

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isMenuOpen]);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    const initial = saved && ALL_THEMES.some(t => t.id === saved) ? saved : "light";
    requestAnimationFrame(() => {
      ALL_THEMES.forEach(t => document.body.classList.remove(t.id));
      document.body.classList.add(initial);
      setTheme(initial);
    });
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setIsLangOpen(false);
      if (themeRef.current && !themeRef.current.contains(e.target as Node)) setIsThemeOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLanguage = (code: Lang) => {
    const segments = pathname.split("/");
    segments[1] = code;
    router.push(segments.join("/") || `/${code}`);
    setIsLangOpen(false);
  };

  const applyTheme = (newTheme: Theme) => {
    ALL_THEMES.forEach(t => document.body.classList.remove(t.id));
    document.body.classList.add(newTheme);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    setIsThemeOpen(false);
  };

  const currentThemeColor = ALL_THEMES.find(t => t.id === theme)?.color ?? "#ffffff";

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href={lp("")} className={styles.logo} aria-label="WebDevCompass — Home">
            WebDevCompass
          </Link>
        </div>

        <div className={styles.language_switcher}>
          <nav className={styles.navigation} aria-label="Main menu">
            <ul className={styles.header_ul}>
              <li className={styles.ul_navigation_li}><Link href={lp("/#about")}>{t("navAbout")}</Link></li>
              <li className={styles.ul_navigation_li}><Link href={lp("/#capabilities")}>{t("navCapabilities")}</Link></li>
              <li className={styles.ul_navigation_li}><Link href={lp("/#portfolio")}>{t("navPortfolio")}</Link></li>
              <li className={styles.ul_navigation_li}><Link href={lp("/services")}>{t("navServices") || "Services"}</Link></li>
              <li className={styles.ul_navigation_li}><Link href={lp("/resume")}>{t("navResume") || "Resume"}</Link></li>
              <li className={styles.ul_navigation_li}><Link href={lp("/#connect")}>{t("navConnect")}</Link></li>
            </ul>
          </nav>

          <div className={styles.languageDropdown} ref={langRef}>
            <button className={styles.language_switcher_button} onClick={() => setIsLangOpen(p => !p)} aria-label="Select language">
              🌐 {currentLang.toUpperCase()}
            </button>
            {isLangOpen && (
              <div className={styles.languageMenu}>
                {LANGUAGES.map(({ code, label }) => (
                  <button key={code} onClick={() => switchLanguage(code)} className={currentLang === code ? styles.activeLang : ""}>
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className={styles.themeDropdown} ref={themeRef}>
            <button className={styles.theme_switcher} onClick={() => setIsThemeOpen(p => !p)} aria-label="Choose theme">
              <span className={styles.themeColorDot} style={{ background: currentThemeColor }} />
            </button>
            {isThemeOpen && (
              <div className={styles.themeMenu}>
                {ALL_THEMES.map(({ id, label, color }) => (
                  <button key={id} onClick={() => applyTheme(id)} className={`${styles.themeOption} ${theme === id ? styles.activeTheme : ""}`}>
                    <span className={styles.themeSwatchDot} style={{ background: color }} />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <button className={styles.burger_menu} type="button" onClick={() => setIsMenuOpen(p => !p)} aria-label="Open menu">
          <svg className={styles.burger_menu_icon} width="44" height="44">
            <use href="/icons.svg#icon-Frame-3"></use>
          </svg>
        </button>

        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </header>
  );
};

export default Header;
