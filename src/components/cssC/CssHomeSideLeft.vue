<template>
  <div class="sideLeft-container">
    <div class="sideLeft-mini-menu">
      <h3>CSS Tutorial</h3>
      <p v-for='value in state.groupItem1' 
        v-bind:key='value.id' 
        v-bind:class='value.isActive ? "active" : "" '
        v-on:click='handleRouteTo(value.path)'>
        {{ value.text }}
      </p>
    </div>

    <div class="container sideLeft-mini-menu">
      <h3>CSS Advanced</h3>
      <p>CSS Rounded Corners</p>
      <p>CSS Background</p>
      <p>CSS Colors</p>
      <p>CSS Gradients</p>
      <p>CSS Shadows</p>
      <p>CSS Text Effects</p>
    </div>


    <!-- <div class="container sideLeft-mini-menu">
      <h3>CSS Graphics</h3>
      <p>CSS Canvas</p>
      <p>CSS SVG </p>
    </div> -->


    <!-- <div class="container sideLeft-mini-menu">
      <h3>CSS Media</h3>
      <p>CSS Media</p>
      <p>CSS Video</p>
      <p>CSS Audio</p>
    </div> -->

    <!-- <div class="container sideLeft-mini-menu">
      <h3>CSS APIs</h3>
      <p>CSS Geolocation</p>
      <p>CSS Drag/Drop</p>
      <p>CSS Web Storage</p>
      <p>CSS Web Workers</p>
      <p>CSS SSE</p>
    </div> -->
  </div> 
</template>

<script lang="ts">
import Vue from 'vue'

const CssHomeSideLeft = Vue.extend({
  name: 'CssHomeSideLeft',
  data: function () {
    return {
      state: {
        groupItem1: [
          { id: 0, text: 'CSS HOME', path: '/css', isActive: false },
          { id: 1, text: 'CSS Introduction', path: '/css/introduction', isActive: false },
          // { id: 2, text: 'CSS Editors', path: '/html/editors', isActive: false },
          // { id: 3, text: 'CSS Basic', path: '/css/basic', isActive: false },
          // { id: 4, text: 'CSS Elements', path: '/css/elements', isActive: false },
          // { id: 5, text: 'CSS Attributes', path: '/css/attributes', isActive: false },
          // { id: 6, text: 'CSS Headings', path: '/css/headings', isActive: false },
          // { id: 7, text: 'CSS Paragraphs', path: '/css/paragraphs', isActive: false },
          // { id: 8, text: 'CSS Styles', path: '/css/styles', isActive: false },
          // { id: 9, text: 'CSS Formatting', path: '/css/formatting', isActive: false },
          // { id: 10, text: 'CSS Quotation', path: '/css/quotation', isActive: false },
          // { id: 11, text: 'CSS Comments', path: '/css/comments', isActive: false },
          // { id: 12, text: 'CSS Colors', path: '/css/colors', isActive: false },
          // { id: 13, text: 'CSS CSS', path: '/css/cSS', isActive: false },
          // { id: 14, text: 'CSS Links', path: '/css/links', isActive: false },
          // { id: 15, text: 'CSS Images', path: '/css/images', isActive: false },
          // { id: 16, text: 'CSS Tables', path: '/css/tables', isActive: false },
          // { id: 17, text: 'CSS Lists', path: '/css/lists', isActive: false },
          // { id: 18, text: 'CSS Block', path: '/css/block', isActive: false },
          // { id: 19, text: 'CSS Tables', path: '/css/tables', isActive: false },
          // { id: 20, text: 'CSS Classes', path: '/css/classes', isActive: false }
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
      console.log('object')
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

export default CssHomeSideLeft

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