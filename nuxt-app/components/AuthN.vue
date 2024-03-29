<template>
  <div>
    <a v-if="!authStore.loggedIn" href="" @click.prevent="signInAction">
      Sign In
    </a>
    <div v-if="authStore.loggedIn" class="auth-component">
      <div>{{ authStore.currentUser.username }}</div>
      <div><a href="" @click.prevent="signOutAction">Sign out</a></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/store/auth.ts'

const authStore = useAuthStore()
console.log('current user', authStore.currentUser)

const { $msal } = useNuxtApp()
async function signInAction() {
  await signIn()
}
async function signOutAction() {
  try {
    await $msal.logoutRedirect({
      postLogoutRedirectUri: '/main-page',
    })
  } catch (error) {
    console.error('Sign out error', error)
  }
}
</script>
<style scoped>
.auth-component {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  color: var(--clr-header-nav-text-primary);
  opacity: 0.8;
}
a,
a:link,
a:visited {
  text-decoration: none;
  color: var(--clr-header-nav-text-primary);
  opacity: 0.8;
}
</style>
