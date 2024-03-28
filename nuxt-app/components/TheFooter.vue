<template>
  <div class="footer">
    <span v-if="config.siteEnvironment"> {{ config.siteEnvironment }} - </span>
    <p>{{ config.copyrightText }}</p>
  </div>
</template>
<script setup lang="ts">
const { public: config } = useRuntimeConfig()
</script>
