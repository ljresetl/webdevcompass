"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./MobileMenu.module.scss";
import { useLanguage } from "@/useLanguage";
import type { Lang } from "@/LanguageContext";

const SUPPORTED_LANGS = ["ua", "en", "cz", "de", "fr", "pl", "es", "pt"];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const pathname = usePathname();
  const urlLang = pathname?.split("/")?.[1] ?? "";
  const currentLang: Lang = SUPPORTED_LANGS.includes(urlLang) ? (urlLang as Lang) : "en";
  const lp = (path: string) => `/${currentLang}${path}`;

  return (
    <div className={`${styles.mobile_menu} ${isOpen ? styles.open : ""}`}>
      <div className={styles.mobile_menu_btn}>
        <button className={styles.close_mobile_menu} onClick={onClose} aria-label={t("navCloseMenu") || "Close"}>✕</button>
      </div>

      <ul className={styles.mobile_menu_list}>
        <li><Link href={lp("/#about")} onClick={onClose}>{t("navAbout")}</Link></li>
        <li><Link href={lp("/#capabilities")} onClick={onClose}>{t("navCapabilities")}</Link></li>
        <li><Link href={lp("/#portfolio")} onClick={onClose}>{t("navPortfolio")}</Link></li>
        <li><Link href={lp("/services")} onClick={onClose}>{t("navServices") || "Services"}</Link></li>
        <li><Link href={lp("/resume")} onClick={onClose}>{t("navResume") || "Resume"}</Link></li>
        <li><Link href={lp("/#connect")} onClick={onClose}>{t("navConnect")}</Link></li>
      </ul>

      <div className={styles.connect_svg_mobile}>
        <a href="https://www.linkedin.com/in/vitalii-baranov-222439377" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg width="32" height="32" className={styles.about_me_svg_link_connect}><use href="/icons.svg#icon-linkendin"></use></svg>
        </a>
        <a href="https://github.com/ljresetl" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg width="32" height="32" className={styles.about_me_svg_link_connect}><use href="/icons.svg#icon-github"></use></svg>
        </a>
        <a href="https://www.instagram.com/ljresetl/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg width="32" height="32" className={styles.about_me_svg_link_connect}><use href="/icons.svg#icon-instagram"></use></svg>
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
