<template>
    <nav class="nav">

        <ul class="nav-items">
            <NuxtLink to="main-page" class="nav-item">Home</NuxtLink>
            <NuxtLink to="my-team" class="nav-item">My Team</NuxtLink>
            <NuxtLink to="contact-page" class="nav-item">Contact</NuxtLink>
        </ul>
    </nav>
</template>
<style scoped>
.nav {
    background-image: linear-gradient(to bottom right, var(--clr-header-nav-background-start), var(--clr-header-nav-background-end));
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
</style>
