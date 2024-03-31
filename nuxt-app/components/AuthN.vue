<template>
  <div class="auth-component horz-container">
    <img
      class="horz_container profile-img"
      src="/images/profile-default.svg"
      alt="default profile icon"
    />
    <div class="horz-contained">
      <a
        v-if="!authStore.loggedIn"
        href=""
        class="auth-component"
        @click.prevent="signInAction"
      >
        Sign In
      </a>
      <div v-if="authStore.loggedIn">
        <div class="horz-contained">{{ authStore.currentUser.username }}</div>
        <div class="horz-contained">
          <a href="" @click.prevent="signOutAction">Sign out</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/store/auth.ts'

const authStore = useAuthStore()
// console.log('current user', authStore.currentUser)

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
.horz-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  justify-self: stretch;
}
.horz-contained {
  display: flex;
  justify-content: left;
  justify-self: stretch;
}
.auth-component {
  align-items: left;
  color: var(--clr-header-nav-text-primary);
  opacity: 0.8;
  width: 100%;
}

a,
a:link,
a:visited {
  text-decoration: none;
  color: var(--clr-header-nav-text-primary);
  opacity: 0.8;
}
.profile-img {
  display: none; /* Hide on mobile */
  height: 48px;
  width: 48px;
}

/* Styles for larger screens */
@media (min-width: 768px) {
  .profile-img {
    display: block; /* Show on larger screens */
  }
}
</style>
