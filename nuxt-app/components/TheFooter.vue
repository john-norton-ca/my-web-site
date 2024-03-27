<template>
  <div class="footer">
    <p>{{ config.copyrightText }}</p>
  </div>
</template>
<script setup lang="ts">
const { public: config } = useRuntimeConfig()
</script>
