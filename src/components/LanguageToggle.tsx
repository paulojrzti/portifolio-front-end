import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="w-8 h-8 flex items-center border-current justify-center text-xs font-bold rounded-full border transition text-[var(--color-foreground)]"
      aria-label="Toggle language"
    >
      {i18n.language.toUpperCase()}
    </button>
  );
};

export default LanguageToggle;
