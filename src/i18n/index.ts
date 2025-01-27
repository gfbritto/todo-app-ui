import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import pt_br from "./locales/pt_br.json";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pt_br: { translation: pt_br },
    },
    fallbackLng: "pt_br",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["navigator", "cookie", "localStorage"],
    },
  });

export default i18n;
