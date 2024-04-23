<template>
  <div>
    <div>
      <h1>Privacy Statement</h1>
      <p>
        Hey there! Thanks for stopping by. We know privacy is a big deal, so
        we've kept our privacy policy straightforward and easy to digest. Here’s
        what you need to know about how we handle your data:
      </p>

      <ol>
        <li>
          <p>
            <span class="bold">Your Data Stays With Us:</span> We don't share
            your data with anyone, period. It's just between you and us.
          </p>
        </li>
        <li>
          <p>
            <span class="bold">No Selling, Seriously:</span> We never sell your
            data to anyone. That's just not our style.
          </p>
        </li>
        <li>
          <p>
            <span class="bold">Safe and Secure:</span> We protect your data with
            encryption both when it’s moving around the internet and when it’s
            just sitting in our database. Think of it as a digital fortress.
          </p>
        </li>
        <li>
          <p>
            <span class="bold">You're in Control:</span> If you ever decide to
            leave us, you can delete all your data with just a few clicks. No
            hoops to jump through.
          </p>
        </li>
      </ol>
      <p>
        That's all there is to it. We keep it simple and respect your privacy.
        If you have any questions, just give us a shout!
      </p>
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

<style scoped>
h1 {
  color: var(--clr-primary);
  margin-bottom: 20px;
}
li {
  margin-bottom: 20px;
}

.bold {
  font-weight: bold;
}
</style>
