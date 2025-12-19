import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationPL from './locales/pl.json';
import translationEN from './locales/en.json';
import translationDE from './locales/de.json';
import translationFR from './locales/fr.json';

const resources = {
  pl: {
    translation: translationPL
  },
  en: {
    translation: translationEN
  },
  de: {
    translation: translationDE
  },
  fr: {
    translation: translationFR
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pl',
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;