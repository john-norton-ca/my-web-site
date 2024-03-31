// https://nuxt.com/docs/api/configuration/nuxt-config
import { GlobalSettings } from './environmentsettings.js'
const appEnv = process.env.ENV || 'development'

export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    shim: false,
  },
  head: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },

  css: ['@/assets/css/main.css'],
  modules: ['@nuxt/image', '@pinia/nuxt'],
  runtimeConfig: {
    public: {
      sitename: 'about.jbn.technology',
      companyName: 'NoMoSoSo',
      copyrightText: '© 2024 NoMoSoSo - all rights reserved',
      siteEnvironment: GlobalSettings[appEnv].siteEnvironment,
      MSAL_CLIENT_ID: GlobalSettings[appEnv].MSAL_CLIENT_ID,
      MSAL_AUTHORITY: GlobalSettings[appEnv].MSAL_AUTHORITY,
      MSAL_KNOWN_AUTHORITIES: GlobalSettings[appEnv].MSAL_KNOWN_AUTHORITIES,
      MSAL_REDIRECT_URI: GlobalSettings[appEnv].MSAL_REDIRECT_URI,
    },
  },
})
