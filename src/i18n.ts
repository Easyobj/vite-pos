import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Cookies from 'js-cookie';
import { PUI } from '@pui/react';

import zhCN from './locales/zh-CN';
import enUS from './locales/en-US';
import { enableMultipleLanguage } from './shared/env';

export enum LANGUAGE {
  EN = 'en',
  ZH = 'zh-CN',
}

export enum LANGUAGE_CODE {
  en = 'EN',
  'zh-CN' = 'ZH',
}

export type LanguageCode = keyof typeof LANGUAGE;

const { ZH, EN } = LANGUAGE;

// 为了兼容后端返回的 'ZH' | 'EN'
const getLanguageCode = (): LanguageCode => {
  const cacheLanguageCode = Cookies.get('LANGUAGE') as LanguageCode;
  if (LANGUAGE[cacheLanguageCode]) {
    return cacheLanguageCode;
  }

  return LANGUAGE_CODE[LANGUAGE.ZH];
};

const getLanguage = (initLanguageCode?: LanguageCode): LANGUAGE => {
  if (!enableMultipleLanguage()) return ZH; // TODO
  const initialLanguage = initLanguageCode || getLanguageCode();
  return LANGUAGE[initialLanguage] || ZH;
};

const setLanguageCode = (languageCode: LanguageCode): void => {
  Cookies.set('LANGUAGE', languageCode);
};

const lng = getLanguage();

setLanguageCode(getLanguageCode());

i18n.use(initReactI18next).init({
  resources: {
    [ZH]: {
      ...zhCN,
    },
    [EN]: {
      ...enUS,
    },
  },
  lng,
  fallbackLng: lng,
  interpolation: {
    escapeValue: false,
  },
});

PUI.reloadLangResources();
PUI.changeLang(lng);

const { t } = i18n;

export { t, getLanguage, getLanguageCode, setLanguageCode };

export default i18n;
