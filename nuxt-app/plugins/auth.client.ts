import * as msal from '@azure/msal-browser'
import { defineNuxtPlugin } from '#app'
import { useAuthStore } from '~/store/auth.ts'

export default defineNuxtPlugin(async (nuxtApp) => {
  const authStore = useAuthStore()
  const { public: runtimeConfig } = useRuntimeConfig()

  const msalConfig = {
    auth: {
      clientId: runtimeConfig.MSAL_CLIENT_ID,
      authority: runtimeConfig.MSAL_AUTHORITY,
      redirectUri: runtimeConfig.MSAL_REDIRECT_URI,
      knownAuthorities: runtimeConfig.MSAL_KNOWN_AUTHORITIES,
    },
    cache: {
      cacheLocation: 'localStorage', // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
  }

  console.log('MSAL Config:', msalConfig)
  const msalInstance = new msal.PublicClientApplication(msalConfig)
  await msalInstance.initialize()
  const account = msalInstance.getActiveAccount()
  if (account) {
    authStore.updateCurrentUser(account)
  }

  msalInstance
    .handleRedirectPromise()
    .then((response) => {
      if (response) {
        const accounts = msalInstance.getAllAccounts()
        console.log('accounts', accounts)
        if (accounts.length > 0) {
          console.log('account', accounts[0])
          msalInstance.setActiveAccount(accounts[0])
          authStore.updateCurrentUser(accounts[0])
        } else {
          console.error('No accounts found')
        }
      }
    })
    .catch((error) => {
      console.error('Auth Plugin MSAL error', error)
    })
  return {
    provide: {
      msal: msalInstance,
    },
  }
})
