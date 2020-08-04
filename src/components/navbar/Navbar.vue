<template>
  <nav id="navbar-container">
    <ul>
      <li v-on:click='handleRouteToHome'>w4schools.com</li>
      <li>THE WORLD'S LARGEST WEB DEVELOPER SITE</li>
    </ul>
  </nav>
</template>

<script lang="ts">

import Vue from 'vue'
const Navbar = Vue.extend({
  name: 'Navbar',
  methods: {
    handleRouteToHome() {
      if (this.$route.path !== '/') {
        this.$router.push({
          path: '/'
        })
      }
    }
  }
})

export default Navbar
</script>

<style>
#navbar-container {
  /* height: 60px; */
  background-color: aliceblue;
}

#navbar-container > ul {
  height: 100%;
  display: flex;
  list-style: none;
  padding: 1rem;
  justify-content: space-between;
}
</style>
