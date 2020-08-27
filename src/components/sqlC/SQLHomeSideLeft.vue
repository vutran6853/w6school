<template>
  <div class="sideLeft-container">
    <div class="sideLeft-mini-menu">
      <h3>JS Tutorial</h3>
      <p v-for='value in state.groupItem1' 
        v-bind:key='value.id' 
        v-bind:class='value.isActive ? "active" : "" '
        v-on:click='handleRouteTo(value.path)'>
        {{ value.text }}
      </p>
    </div>

    <div class="container sideLeft-mini-menu">
      <h3>JS Forms</h3>
      <p>Forms API</p>
      <p>Forms API</p>
    </div>


    <!-- <div class="container sideLeft-mini-menu">
      <h3>JS Graphics</h3>
      <p>JS Canvas</p>
      <p>JS SVG </p>
    </div> -->


    <!-- <div class="container sideLeft-mini-menu">
      <h3>JS Media</h3>
      <p>JS Media</p>
      <p>JS Video</p>
      <p>JS Audio</p>
    </div> -->

    <!-- <div class="container sideLeft-mini-menu">
      <h3>JS APIs</h3>
      <p>JS Geolocation</p>
      <p>JS Drag/Drop</p>
      <p>JS Web Storage</p>
      <p>JS Web Workers</p>
      <p>JS SSE</p>
    </div> -->
  </div> 
</template>

<script lang="ts">
import Vue from 'vue'

const SQLHomeSideLeft = Vue.extend({
  name: 'SQLHomeSideLeft',
  data: function () {
    return {
      state: {
        groupItem1: [
          { id: 0, text: 'SQL HOME', path: '/sql', isActive: false },
          { id: 1, text: 'SQL Introduction', path: '/sql/introduction', isActive: false },
          // { id: 2, text: 'SQL Editors', path: '/html/editors', isActive: false },
          // { id: 3, text: 'SQL Basic', path: '/sql/basic', isActive: false },
          // { id: 4, text: 'SQL Elements', path: '/sql/elements', isActive: false },
        ]
      }
    }
  },
  created() {
    this.state.groupItem1.map((value) => {
      if (value.path === this.$route.path) {
        value.isActive = true
      } else {
        value.isActive = false
      }
      return value
    })
  },
  methods: {
    handleRouteTo(passURL: string) {
      this.$router.push({
        path: passURL
      })
      this.state.groupItem1.filter((value) => {
        if (value.path === passURL) {
          value.isActive = true
        } else {
          value.isActive = false
        }
        return value
      })
    }
  },
  watch: {
    $route(to, from) {
      
      // check route changes...
      this.state.groupItem1.filter((value) => {
        if (to.fullPath === value.path) {
          value.isActive = true
        } else {
          value.isActive = false
        }
        return value
      })
    }
  }
})

export default SQLHomeSideLeft

</script>

<style>
.sideLeft-container {
  padding-left: 1rem;
  background-color: #f1f1f1;
}

.sideLeft-container > .sideLeft-mini-menu > h3 {
  margin-bottom: 1rem;
}

.sideLeft-container > .sideLeft-mini-menu > p {
 padding-top: 0.2rem;
 padding-bottom: 0.2rem;
}

.sideLeft-container > .sideLeft-mini-menu > p:hover {

}

.sideLeft-container > .sideLeft-mini-menu:nth-child(1n + 2) {
  /* background-color: red; */
  cursor: not-allowed;
}

.sideLeft-container > .sideLeft-mini-menu:nth-child(1) > p:hover {
  background-color: lightgray;
  cursor: pointer;
}

.sideLeft-container > .sideLeft-mini-menu > .active {
  background-color: #4CAF50;
  color: white;
}
</style>