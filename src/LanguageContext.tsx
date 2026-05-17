"use client";

import { createContext, useState, useEffect, ReactNode } from "react";
import { translations } from "./i18n/translations";

export type Lang = "ua" | "en" | "cz" | "de" | "fr" | "pl" | "es" | "pt";
export type TranslationKeys = keyof typeof translations["en"];

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKeys) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  initialLang?: Lang;
}

export const LanguageProvider = ({ children, initialLang = "en" }: LanguageProviderProps) => {
  const [lang, setLangState] = useState<Lang>(initialLang);

  // Sync html lang attribute for SEO (client-side)
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
  };

  const t = (key: TranslationKeys) => {
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
