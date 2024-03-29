import { defineStore } from 'pinia'
import { AccountInfo } from '@azure/msal-common'

interface AuthStoreState {
  _currentUser: AccountInfo | null
}

export const useAuthStore = defineStore('auth-store', {
  state: (): AuthStoreState => ({
    _currentUser: null,
  }),
  getters: {
    currentUser: (state): AccountInfo => state._currentUser,
    loggedIn: (state): boolean => state._currentUser !== null,
  },
  actions: {
    updateCurrentUser(this: AuthStoreState, value: AccountInfo | null) {
      this._currentUser = value
    },
  },
})
