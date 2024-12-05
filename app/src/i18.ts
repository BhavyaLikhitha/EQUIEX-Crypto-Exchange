import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// import en from '../locales/en/common.json';
import en from '../src/locales/en/common.json';
import hi from '../src/locales/hi/common.json';
// import hi from '../public/locales/hi/common.json';

i18n
  .use(LanguageDetector) // Automatically detect the user's language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    fallbackLng: 'en', // Fallback language if the user's language isn't available
    lng: 'en', // Default language
    debug: true, // Enable debug mode for development
    resources: {
      en: { common: en }, // Use imported JSON for English
      hi: { common: hi }  // Use imported JSON for Spanish
    },
    ns: ['common'], // Specify namespaces
    defaultNS: 'common', // Default namespace
    interpolation: {
      escapeValue: false // React already escapes output by default
    }
  });

export default i18n;
