<template>
  <div>
    <div v-if="authStore.loggedIn">
      <h1>Protected Content</h1>
    </div>
    <div v-else>
      <h1>Sign in to view the content of this page</h1>
      <p>--OR--</p>
      <h3>
        <NuxtLink to="main-page" class="nav-item"> Go back home </NuxtLink>
      </h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/store/auth'
const authStore = useAuthStore()

definePageMeta({
  layout: 'new-default',
})
</script>
