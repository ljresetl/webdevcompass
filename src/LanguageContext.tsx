"use client";

import { createContext, useState } from "react";
import type { ReactNode } from "react";
import { translations } from "./i18n/translations";

export type Lang = "ua" | "en" | "cz";
export type TranslationKeys = keyof typeof translations["ua"];

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKeys) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // 1) Lazy initialization — читаємо localStorage тільки на клієнті
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("siteLang") as Lang) || "ua";
    }
    return "ua";
  });

  // 2) Зміна мови
  const setLang = (newLang: Lang) => {
    localStorage.setItem("siteLang", newLang);
    setLangState(newLang);
  };

  // 3) Функція перекладу
  const t = (key: TranslationKeys) => {
    return translations[lang][key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
