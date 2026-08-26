"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ES, EN } from "@/data/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es");

  useEffect(() => {
    const saved = window.sessionStorage.getItem("santior-lang");
    if (saved === "en" || saved === "es") setLang(saved);
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("santior-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "en" ? "es" : "en"));

  const value = useMemo(() => {
    const T = lang === "en" ? EN : ES;
    return { lang, toggleLang, T };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
