<template>
  <div class="menu-container">
    <NuxtLink to="/main-page" class="logo" />
    <p class="logo-title">{{ config.sitename }}</p>
    <div class="header-contact-info" />
  </div>
  <MainNavBar />
</template>

<script setup lang="ts">
const { public: config } = useRuntimeConfig()
</script>

<style scoped>
.menu-container {
  background-image: linear-gradient(
    to bottom right,
    var(--clr-header-background-start),
    var(--clr-header-background-end)
  );
  width: 100%;
}
.menu-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: white;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;

  background-image: url('/images/logo-nobg.png');
  background-size: cover; /* Add this line */
  background-position: center; /* Add this line */
  height: 100px;
  width: 100px; /* Change this line */
}

.logo-title {
  font-size: 2rem;
  font-weight: bold;
}

.header-contact-info {
  display: flex;
  align-items: center;
}

.icon {
  margin-right: 0.5rem;
}
</style>
