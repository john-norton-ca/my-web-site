// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    shim: false,
  },

  css: ['@/assets/css/main.css'],
  modules: ['@nuxt/image', '@pinia/nuxt'],
  runtimeConfig: {
    public: {
      sitename: 'jbn.technology',
      companyName: 'JBN Technology',
      copyrightText: '© 2024 JBN Technology - all rights reserved',
    },
  },
})
