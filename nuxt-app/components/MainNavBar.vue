<template>
  <nav class="nav">
    <div class="horz-container">
      <ul class="nav-items">
        <NuxtLink to="main-page" class="nav-item"> Home </NuxtLink>
        <NuxtLink v-if="authStore.loggedIn" to="my-team" class="nav-item">
          My Team
        </NuxtLink>
        <NuxtLink v-if="authStore.loggedIn" to="contact-page" class="nav-item">
          Contact
        </NuxtLink>
      </ul>
      <ul class="nav-items group-right">
        <div class="horz-contained group-right">
          <div class="linked-in-nav-item">
            <div title="LinkedIn Profile" class="linked-in">
              <div class="img-wrapper">
                <a href="https://www.linkedin.com/in/johnbnorton/">
                  <img src="/images/In-Blue-21.png" alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { useAuthStore } from '~/store/auth.ts'

const authStore = useAuthStore()
</script>

<style scoped>
.horz-container,
.nav-items {
  display: flex;
  flex-direction: row;
  /*justify-content: left;*/
  justify-self: stretch;
}
.horz-contained,
.nav-item,
.profile-nav-item,
.linked-in-nav-item {
  display: flex;
  justify-content: left;
  justify-self: stretch;
}

.group-right {
  justify-content: right;
  width: 100%;
}
.group-left {
  justify-content: left;
}

.nav {
  background-image: linear-gradient(
    to bottom right,
    var(--clr-header-nav-background-start),
    var(--clr-header-nav-background-end)
  );
  width: 100%;
}

.nav-items {
  list-style: none;
  padding: 0;
  margin: var(--desktop-gutter), 0;
  text-decoration: none;
}

.nav-items a.router-link-active {
  color: var(--clr-header-nav-primary-selected);
  background-color: var(--clr-header-nav-selected);
}
.nav-item {
  background-color: transparent;
  color: var(--clr-header-nav-text-primary);
  padding: 0.5rem var(-nav-item-horz-padding);
  text-align: center;
  height: 3.5rem;
  width: 100px;
}

a.nav-item {
  align-items: center;
  justify-content: center;
  padding: 0.1rem var(--nav-item-horz-padding);
  text-align: center;
}

.linked-in .img-wrapper {
  background-color: white;
  border-radius: 50%; /* Optional: to make the background circular */
  display: inline-block; /* To constrain the div to the size of the image */
}

.linked-in img {
  display: block; /* To remove the bottom space that inline elements have */
  min-width: 24px;
}
.profile-nav-item,
.linked-in-nav-item {
  align-items: center;
  justify-content: center;
  padding: 0.5rem var(--nav-item-horz-padding);
}

.icon {
  margin-right: 0.5rem;
}

.profile-img {
  height: 32px;
  width: 32px;
  border-radius: 50%;
  display: block; /* To remove the bottom space that inline elements have */
}
</style>
