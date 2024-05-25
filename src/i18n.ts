import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'

import ChainedBackend from 'i18next-chained-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import LocalStorageBackend from 'i18next-localstorage-backend'

// declare let ASSETS_VERSION: string

i18n
  .use(ChainedBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    // debug: true,
    ns: ['common'],
    load: 'currentOnly',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      backends: process.env.NODE_ENV === 'development' ? [Backend] : [LocalStorageBackend, Backend],
      backendOptions: [
        {
          expirationTime: 7 * 24 * 60 * 60 * 1000, // 7 days
        },
        {
          queryStringParams: { v: 'dev' },
          loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
      ],
    },
    keySeparator: false,
    pluralSeparator: '——',
    contextSeparator: '——',
  })

i18n.on('languageChanged', lng => {
  document.documentElement.setAttribute('lang', lng)
})

export const languages = [
  {
    code: 'de-DE',
    name: '🇩🇪 Deutsch',
  },
  {
    code: 'en',
    name: '🇬🇧 English',
  },
  {
    code: 'es',
    name: '🇪🇸 Español',
  },
  {
    code: 'zh-CN',
    name: '🇨🇳 简体中文',
  },
  {
    code: 'hi',
    name: '🇮🇳 हिन्दी',
  },
  {
    code: 'id',
    name: '🇮🇩 Indonesia',
  },
  {
    code: 'tr-TR',
    name: '🇹🇷 Türkçe',
  },
  {
    code: 'zh-TW',
    name: '🇹🇼 繁體中文',
  },
]

export default i18n
