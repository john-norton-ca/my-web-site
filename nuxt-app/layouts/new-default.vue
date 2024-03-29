<template>
  <div class="app-frame">
    <div class="mainLayout">
      <TheHeader />
      <!-- CookieConsent: {{ appStore.cookieConsent }} -->
      <section class="main-container">
        <slot />
      </section>
      <TheFooter />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useAppStore } from '~/store/app'
const appStore = useAppStore()
onMounted(() => {
  appStore.updateCookieConsent(true)
})
</script>

<style scoped>
.app-frame {
  display: flex;
  justify-content: center;
  border-color: var(--clr-header-nav-selected);
  border-width: 2px;
  height: 100vh;
  width: 100%;
}

.mainLayout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 1200px;
  min-width: 800px;
  max-width: 1200px;
  height: 100vh;
  background-color: #f0f0f0;
}

.main-container {
  margin: var(--desktop-gutter);
}

.footer {
  margin: var(--desktop-gutter);
}
</style>
