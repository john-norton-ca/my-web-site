<template>
  <div class="page">
    <ArticlesAuthenticationArticle />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'new-default',
  title: 'Main Page',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=0.33' },
    // any other meta tags...
  ],
})
</script>

<style>
/* Styles for the h1 elements */
h1 {
  color: var(--clr-primary);
}

h2 {
  margin-bottom: 20px;
}
.page {
  margin-left: 10px;
}

.page-header {
  margin-bottom: 0px;
}

.menu p {
  display: none; /* Hide the paragraph elements */
}

/* Styles for the parent flex container */
.flex-parent-element {
  display: flex; /* Use flex layout */
  max-width: 100%; /* Limit width to 100% */
  min-width: 100%;
  flex-direction: column; /* Stack children vertically */
}

/* Styles for the child flex elements */
.flex-child-element {
  display: flex; /* Use flex layout */
  flex-direction: column; /* Stack children vertically */
}

/* Styles for the menu element */
.menu {
  /* border: 2px solid blueviolet; Add a border */

  margin-right: 7.5%; /* Add some margin */
  margin-bottom: 20px;
}

.menu h1 {
  margin-top: 30px;
}
.content {
  flex-direction: column; /* Stack children vertically */
}

/* Styles for the context element */
.context {
  flex: 1; /* Take up remaining space in flex container */
  /* border: 2px solid blueviolet;  Add a border */
  margin-right: 7.5%; /* Add some margin */
  max-width: 100%;
}

.context p {
  margin-bottom: 20px; /* Add some margin to the bottom */
}

/* Styles for the first child flex element */
.flex-child-element:first-child {
  /* margin-right: 20px; Add some margin to the right */
}

/* Styles for larger screens */
@media (min-width: 768px) {
  .page-header {
    margin-bottom: 20px; /* remove margin */
  }
  .menu {
    min-width: 200px; /* Set a minimum width */
    max-width: 200px; /* Set a maximum width */
  }
  .menu h1 {
    margin-top: 0; /* Remove the top margin */
    margin-bottom: 10px; /* Add some margin to the bottom */
  }
  .menu p {
    display: block; /* Display the paragraph elements */

    margin-right: 7.5%; /* Add some margin */
  }
  .flex-parent-element {
    flex-direction: row; /* Stack children horizontally */
  }
}
</style>
