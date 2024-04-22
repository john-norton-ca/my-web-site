<template>
  <div class="header-container">
    <div class="logo header-contained" />
    <p class="logo-title header-contained">{{ config.sitename }}</p>
    <AuthN class="header-contained" />
  </div>
  <MainNavBar />
</template>

<script setup lang="ts">
const { public: config } = useRuntimeConfig()
</script>

<style scoped>
.header-container {
  background-image: linear-gradient(
    to bottom right,
    var(--clr-header-background-start),
    var(--clr-header-background-end)
  );
  width: 100%;
  display: flex;
  flex-direction: column; /* Stack elements vertically on mobile */
  align-items: center;
  padding: 1rem;
  color: white;
}

.header-contained {
  display: flex;
  justify-content: flex-start; /* Center elements on mobile */
  width: 100%; /* Take full width on mobile */
}

.logo {
  display: none;
}

.logo-title {
  font-size: 1.5rem;
  font-weight: bold;
}

/* Styles for larger screens */
@media (min-width: 768px) {
  .header-container {
    flex-direction: row; /* Align elements horizontally on larger screens */
    justify-content: space-between;
  }

  .header-contained {
    justify-content: left; /* Align elements to the left on larger screens */
    width: auto; /* Auto width on larger screens */
  }
  .logo {
    display: block;
    background-image: url('/images/logo-nobg.png');
    background-size: cover;
    background-position: center;
    height: 90px;
    width: 90px;
  }
  .logo-title {
    /*font-size: 2rem;*/
  }
}
</style>
