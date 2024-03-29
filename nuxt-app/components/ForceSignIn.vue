<template>
  <div>></div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/store/auth'
const authStore = useAuthStore()
const { $msal } = useNuxtApp()
onMounted(async () => {
  try {
    await $msal.handleRedirectPromise()
    if (!authStore.loggedIn) {
      await signIn()
    }
  } catch (error) {
    console.error('Sign in error', error)
  }
})
</script>
