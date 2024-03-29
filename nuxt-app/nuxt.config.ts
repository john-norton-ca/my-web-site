// https://nuxt.com/docs/api/configuration/nuxt-config
import { GlobalSettings } from './environmentsettings.js'
const appEnv = process.env.ENV || 'development'

export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    shim: false,
  },

  css: ['@/assets/css/main.css'],
  modules: ['@nuxt/image', '@pinia/nuxt'],
  runtimeConfig: {
    public: {
      sitename: 'NoMoSoSo.com',
      companyName: 'JBN Technology',
      copyrightText: '© 2024 JBN Technology - all rights reserved',
      siteEnvironment: GlobalSettings[appEnv].siteEnvironment,
      MSAL_CLIENT_ID: GlobalSettings[appEnv].MSAL_CLIENT_ID,
      MSAL_AUTHORITY: GlobalSettings[appEnv].MSAL_AUTHORITY,
      MSAL_KNOWN_AUTHORITIES: GlobalSettings[appEnv].MSAL_KNOWN_AUTHORITIES,
    },
  },
})
