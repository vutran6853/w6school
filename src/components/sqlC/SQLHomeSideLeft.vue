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
          { id: 0, text: 'SQL HOME', path: '/javascript', isActive: false },
          { id: 1, text: 'SQL Introduction', path: '/javascript/introduction', isActive: false },
          // { id: 2, text: 'SQL Editors', path: '/html/editors', isActive: false },
          // { id: 3, text: 'SQL Basic', path: '/javascript/basic', isActive: false },
          // { id: 4, text: 'SQL Elements', path: '/javascript/elements', isActive: false },
          // { id: 5, text: 'SQL Attributes', path: '/javascript/attributes', isActive: false },
          // { id: 6, text: 'SQL Headings', path: '/javascript/headings', isActive: false },
          // { id: 7, text: 'SQL Paragraphs', path: '/javascript/paragraphs', isActive: false },
          // { id: 8, text: 'SQL Styles', path: '/javascript/styles', isActive: false },
          // { id: 9, text: 'SQL Formatting', path: '/javascript/formatting', isActive: false },
          // { id: 10, text: 'SQL Quotation', path: '/javascript/quotation', isActive: false },
          // { id: 11, text: 'SQL Comments', path: '/javascript/comments', isActive: false },
          // { id: 12, text: 'SQL Colors', path: '/javascript/colors', isActive: false },
          // { id: 13, text: 'SQL javascript', path: '/javascript/javascript', isActive: false },
          // { id: 14, text: 'SQL Links', path: '/javascript/links', isActive: false },
          // { id: 15, text: 'SQL Images', path: '/javascript/images', isActive: false },
          // { id: 16, text: 'SQL Tables', path: '/javascript/tables', isActive: false },
          // { id: 17, text: 'SQL Lists', path: '/javascript/lists', isActive: false },
          // { id: 18, text: 'SQL Block', path: '/javascript/block', isActive: false },
          // { id: 19, text: 'SQL Tables', path: '/javascript/tables', isActive: false },
          // { id: 20, text: 'SQL Classes', path: '/javascript/classes', isActive: false }
        ]
      }
    }
  },
  created() {
    console.log(this.$route.path)
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