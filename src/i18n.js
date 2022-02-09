import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './assets/locales/en.json';
import jp from './assets/locales/ja.json';
import tw from './assets/locales/zh-TW.json';

let lang = localStorage.getItem("i18nextLng");
const resources = {
    'en': {
        translation: en,
    },
    'ja': {
        translation: jp,
    },
    'zh-TW': {
        translation: tw,
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next).init({
        resources,
        fallbackLng: lang,     //如果當前切換的語言沒有對應的翻譯則使用這個語言，
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;