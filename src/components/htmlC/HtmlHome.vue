<template>
  <div>
    <Navbar />
    <NavbarItems />
    <div class="htmlHome-container">
      <HtmlHomeSideLeft />

      <router-view></router-view>

        <!-- RIGHT SIDE AD SECTION -->
      <div style="border: 1px solid red">
        <p>AD placeholder</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HtmlHomeSideLeft from './HtmlHomeSideLeft.vue'
import Navbar from '../navbar/Navbar.vue'
import NavbarItems from '../navbarItems/NavbarItems.vue'

const HtmlHome = Vue.extend({
  name: 'HtmlHome',
  components: {
    Navbar,
    NavbarItems,
    HtmlHomeSideLeft
  },
  created() {
    this.$store.dispatch('setNavbarItemsToHTML')
  },
  updated() {

    // Scroll back to top of page on each routes
    if (window.innerHeight > 60) {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  },
  methods: {
    
  }
})

export default HtmlHome
</script>

<style>


</style>
