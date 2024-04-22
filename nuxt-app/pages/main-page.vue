<template>
  <div class="page">
    <div class="page-header">
      <h1>Main page</h1>
    </div>
    <div class="flex-parent-element">
      <div class="flex-child-element menu">
        <h1>Authentication</h1>
        <p>Microsoft Azure AD B2C</p>
      </div>

      <div class="flex-child-element context">
        <h1>Authentication using Microsoft Azure Active Directory B2C</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Viverra nam libero justo laoreet sit amet. Est pellentesque elit
          ullamcorper dignissim cras tincidunt lobortis feugiat. Facilisis magna
          etiam tempor orci. Id semper risus in hendrerit gravida rutrum quisque
          non. Diam vulputate ut pharetra sit amet aliquam id diam. Varius quam
          quisque id diam vel quam elementum. Tellus orci ac auctor augue mauris
          augue neque. In massa tempor nec feugiat. A erat nam at lectus urna
          duis. Consectetur libero id faucibus nisl tincidunt eget nullam. Urna
          condimentum mattis pellentesque id nibh tortor id aliquet lectus.
          Etiam non quam lacus suspendisse faucibus interdum. Eu ultrices vitae
          auctor eu augue. Tellus cras adipiscing enim eu turpis egestas
          pretium. Morbi tristique senectus et netus et malesuada fames ac. Amet
          porttitor eget dolor morbi non arcu risus. Consectetur lorem donec
          massa sapien.
        </p>
        <p>
          Non blandit massa enim nec dui nunc mattis enim ut. Tristique nulla
          aliquet enim tortor. Pharetra massa massa ultricies mi. At lectus urna
          duis convallis convallis tellus. Sed euismod nisi porta lorem mollis
          aliquam ut. Maecenas pharetra convallis posuere morbi leo urna. Et leo
          duis ut diam quam nulla. In ornare quam viverra orci sagittis eu
          volutpat odio. Platea dictumst quisque sagittis purus sit amet. Vel
          risus commodo viverra maecenas accumsan. Habitant morbi tristique
          senectus et netus et.
        </p>
      </div>
    </div>

    <div class="flex-parent-element">
      <div class="flex-child-element menu">
        <h1>left left left left left left left left left</h1>
        <p>My main page content My main page content My main page content</p>
      </div>

      <div class="flex-child-element context">
        <h1>Right Right Right Right Right Right Right Right</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Viverra nam libero justo laoreet sit amet. Est pellentesque elit
          ullamcorper dignissim cras tincidunt lobortis feugiat. Facilisis magna
          etiam tempor orci. Id semper risus in hendrerit gravida rutrum quisque
          non. Diam vulputate ut pharetra sit amet aliquam id diam. Varius quam
          quisque id diam vel quam elementum. Tellus orci ac auctor augue mauris
          augue neque. In massa tempor nec feugiat. A erat nam at lectus urna
          duis. Consectetur libero id faucibus nisl tincidunt eget nullam. Urna
          condimentum mattis pellentesque id nibh tortor id aliquet lectus.
          Etiam non quam lacus suspendisse faucibus interdum. Eu ultrices vitae
          auctor eu augue. Tellus cras adipiscing enim eu turpis egestas
          pretium. Morbi tristique senectus et netus et malesuada fames ac. Amet
          porttitor eget dolor morbi non arcu risus. Consectetur lorem donec
          massa sapien.
        </p>
        <p>
          Non blandit massa enim nec dui nunc mattis enim ut. Tristique nulla
          aliquet enim tortor. Pharetra massa massa ultricies mi. At lectus urna
          duis convallis convallis tellus. Sed euismod nisi porta lorem mollis
          aliquam ut. Maecenas pharetra convallis posuere morbi leo urna. Et leo
          duis ut diam quam nulla. In ornare quam viverra orci sagittis eu
          volutpat odio. Platea dictumst quisque sagittis purus sit amet. Vel
          risus commodo viverra maecenas accumsan. Habitant morbi tristique
          senectus et netus et.
        </p>
      </div>
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
.page {
  margin-left: 10px;
}
.page-header {
  margin-bottom: 40px; /* Add some margin to the bottom */
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
  /* border: 2px solid blueviolet; Add a border */
  margin-right: 1em; /* Add some margin */
  min-width: 20%; /* Set a minimum width */
  max-width: 20%; /* Set a maximum width */
}

/* Styles for the context element */
.context {
  flex: 1; /* Take up remaining space in flex container */
  /* border: 2px solid blueviolet;  Add a border */
  margin-right: 7.5%; /* Add some margin */
}

.context p {
  margin-bottom: 20px; /* Add some margin to the bottom */
}

/* Styles for the first child flex element */
.flex-child-element:first-child {
  /* margin-right: 20px; Add some margin to the right */
}
</style>
