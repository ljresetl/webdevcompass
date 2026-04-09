"use client";

import { createContext, useState, ReactNode } from "react";
import { translations } from "./i18n/translations";

export type Lang = "ua" | "en" | "cz";
export type TranslationKeys = keyof typeof translations["en"];

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKeys) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // 1. Встановлюємо "en" як дефолт для сервера і клієнта
  const [lang, setLangState] = useState<Lang>("en");

  // Ми НЕ використовуємо useEffect для авто-читання localStorage при старті,
  // щоб сайт ЗАВЖДИ завантажувався англійською без блимання.

  const setLang = (newLang: Lang) => {
    // Зберігаємо в пам'ять тільки коли користувач КЛІКАЄ сам
    localStorage.setItem("siteLang", newLang);
    setLangState(newLang);
  };

  const t = (key: TranslationKeys) => {
    // translations["en"] буде використовуватися відразу
    const translation = translations[lang] as Record<string, string>;
    return translation[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;