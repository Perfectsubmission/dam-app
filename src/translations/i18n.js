/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import common_en from './en/common.json';
import common_dk from './dk/common.json';
import common_vn from './vi/common.json';
import common_th from './th/common.json';
import common_hr from './hr/common.json';
import common_ua from './ua/common.json';
import common_fr from './fr/common.json';
import common_es from './es/common.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        icon: '/assets/flag-icons/gb.svg',
        title: 'English',
        common: common_en,
      },
      da: {
        icon: '/assets/flag-icons/dk.svg',
        title: 'Dansk',
        common: common_dk,
      },
      vi: {
        icon: '/assets/flag-icons/vn.svg',
        title: 'Tiếng Việt',
        common: common_vn,
      },
      th: {
        icon: '/assets/flag-icons/th.svg',
        title: 'ภาษาไทย',
        common: common_th,
      },
      hr: {
        icon: '/assets/flag-icons/hr.svg',
        title: 'Hrvatski',
        common: common_hr,
      },
      uk: {
        icon: '/assets/flag-icons/ua.svg',
        title: 'Yкраїнська',
        common: common_ua,
      },
      fr: {
        icon: '/assets/flag-icons/fr.svg',
        title: 'Français',
        common: common_fr,
      },
      es: {
        icon: '/assets/flag-icons/es.svg',
        title: 'Español',
        common: common_es,
      },
    },
    lng: localStorage.getItem('i18nextLng') || 'en',
    fallbackLng: 'en',
    debug: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
