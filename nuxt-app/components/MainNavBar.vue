<template>
  <nav class="nav">
    <ul class="nav-items">
      <NuxtLink to="main-page" class="nav-item">Home</NuxtLink>
      <NuxtLink to="my-team" class="nav-item">My Team</NuxtLink>
      <NuxtLink to="contact-page" class="nav-item">Contact</NuxtLink>
      <div class="linked-in-nav-item">
        <div title="LinkedIn Profile" class="linked-in">
          <div class="img-wrapper">
            <a href="https://www.linkedin.com/in/johnbnorton/">
              <img src="/images/In-Blue-21.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </ul>
  </nav>
</template>

<style scoped>
.nav {
  background-image: linear-gradient(
    to bottom right,
    var(--clr-header-nav-background-start),
    var(--clr-header-nav-background-end)
  );
  width: 100%;
}

.nav-items {
  display: flex;
  flex-direction: row;
  justify-content: left;
  justify-self: stretch;
  list-style: none;
  padding: 0;
  margin: var(--desktop-gutter), 0;
  text-decoration: none;
}

.nav-items a.router-link-active {
  color: var(--clr-header-nav-primary-selected);
  background-color: var(--clr-header-nav-selected);
}

a.nav-item {
  opacity: 0.8;
  padding: 0.5rem var(--nav-item-horz-padding);
  text-align: center;
}

.linked-in .img-wrapper {
  background-color: white;
  border-radius: 50%; /* Optional: to make the background circular */
  display: inline-block; /* To constrain the div to the size of the image */
}

.linked-in img {
  display: block; /* To remove the bottom space that inline elements have */
}
.linked-in-nav-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem var(--nav-item-horz-padding);
  text-align: center;
}
</style>
