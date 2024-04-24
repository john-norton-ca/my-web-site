import { defineStore } from 'pinia'

interface SiteProperties {
  cookieConsent: boolean
}
interface AppStoreState {
  siteProperties: SiteProperties
}

export const useAppStore = defineStore('app-store', {
  state: (): AppStoreState => {
    return {
      siteProperties: {
        cookieConsent: false,
        openArticles: [],
      },
    }
  },
  actions: {
    updateCookieConsent(this: AppStoreState, value: boolean) {
      this.siteProperties.cookieConsent = value
    },
    updateOpenArticles(this: AppStoreState, value: string[]) {
      this.siteProperties.openArticles = value
    },
  },
  getters: {
    cookieConsent: (state: AppStoreState) => state.siteProperties.cookieConsent,
    openArticles: (state: AppStoreState) => state.siteProperties.openArticles,
  },
})
