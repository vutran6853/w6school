<template>
  <nav id="navbar-container">
    <ul>
      <li v-on:click='handleRouteToHome'>w6schools.com</li>
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
  background-color: aliceblue;
}

#navbar-container > ul {
  height: 100%;
  display: flex;
  list-style: none;
  padding: 1rem;
  justify-content: space-between;
}

#navbar-container > ul > li:nth-child(1) {
  cursor: pointer;
}
#navbar-container > ul > li:nth-child(1):hover {
  color: #555;
}


@media only screen and (max-device-width: 480px) {
  #navbar-container > ul > li:nth-child(2) {
     display: none;
  }
  #navbar-container > ul > li:nth-child(1) {
    margin: auto;
    font-size: 2rem;
  }
}
</style>
