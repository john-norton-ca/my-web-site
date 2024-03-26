import TheHeader from '../components/TheHeader.vue';
<template>
  <div class="app-frame">
    <div class="mainLayout">
      <TheHeader />
      <section class="main-container">
        <slot />
      </section>
      <TheFooter />
    </div>
  </div>
</template>

<style>
.app-frame {
  display: flex;
  justify-content: center;

  border-color: var(--clr-header-nav-selected);
  border-width: 2px;

  height: 100vh;
}

.mainLayout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  width: 100%;
  min-width: 500px;
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

a.nav-item,
a.nav-item:link,
a.nav-item:visited {
  text-decoration: none;
}

.nav-items {
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-self: stretch;
  list-style: none;
  padding: 0;
  margin: var(--desktop-gutter);
  text-decoration: none;
}

.nav-item {
  background-color: transparent;
  color: var(--clr-header-nav-text-primary);
  opacity: 0.8;
  padding: 0.5rem var(-nav-item-horz-padding);
  text-align: center;
}
</style>
