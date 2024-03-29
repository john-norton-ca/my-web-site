<template>
  <div class="flex-parent-element">
    <div class="flex-child-element menu">
      <h1>My Main Page</h1>
      <p>My main page content</p>
    </div>

    <div class="flex-child-element context">
      <h1>My Main Page</h1>
      <p>My main page content</p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'new-default',
})
</script>

<style scoped>
/* Styles for the h1 elements */
h1 {
  color: var(--clr-primary);
}

/* Styles for the parent flex container */
.flex-parent-element {
  display: flex; /* Use flex layout */
  max-width: 100%; /* Limit width to 100% */
}

/* Styles for the child flex elements */
.flex-child-element {
  display: flex; /* Use flex layout */
  flex-direction: column; /* Stack children vertically */
}

/* Styles for the menu element */
.menu {
  border: 2px solid blueviolet; /* Add a border */
  margin: 10px; /* Add some margin */
  min-width: 200px; /* Set a minimum width */
}

/* Styles for the context element */
.context {
  flex: 1; /* Take up remaining space in flex container */
  border: 2px solid blueviolet; /* Add a border */
  margin: 10px; /* Add some margin */
}

/* Styles for the first child flex element */
.flex-child-element:first-child {
  margin-right: 20px; /* Add some margin to the right */
}
</style>
