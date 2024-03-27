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
      },
    }
  },
  actions: {
    updateCookieConsent(this: AppStoreState, value: boolean) {
      this.siteProperties.cookieConsent = value
    },
  },
  getters: {
    cookieConsent: (state: AppStoreState) => state.siteProperties.cookieConsent,
  },
})
