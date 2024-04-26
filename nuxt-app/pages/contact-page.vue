<template>
  <div>
    <div v-if="authStore.loggedIn">
      <h1>Contact us page</h1>
    </div>
    <div v-else>
      <h1>Sign in to view the content of this page</h1>
      <p>--OR--</p>
      <h3>
        <NuxtLink to="tech-page" class="nav-item"> go to Tech </NuxtLink>
      </h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/store/auth'
const authStore = useAuthStore()
/*
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
*/
definePageMeta({
  layout: 'new-default',
})
</script>
