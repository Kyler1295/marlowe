<template>
  <header class="container">
    <nav class="navbar is-fixed-top is-transparent" role="navigation" aria-label="main navigation" style="background-color: transparent;">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="@/assets/logo.png" style="transform: scale(1.5)">
        </a>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <router-link tag="a" class="navbar-item" to="/">Home</router-link>
          <router-link tag="a" class="navbar-item" to="/about">About</router-link>
          <router-link tag="a" class="navbar-item" to="/events">Events</router-link>
        </div>

      </div>

    </nav>
  </header>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style scoped>
nav {
  padding: 15px;
}
</style>