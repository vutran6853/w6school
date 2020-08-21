<template>
  <div class="sideLeft-container">
    <div class="sideLeft-mini-menu">
      <h3>HTML Tutorial</h3>
      <p v-for='value in state.groupItem1' 
        v-bind:key='value.id' 
        v-bind:class='value.isActive ? "active" : "" '
        v-on:click='handleRouteTo(value.path)'>
        {{ value.text }}
      </p>
    </div>

    <div class="container sideLeft-mini-menu">
      <h3>HTML Forms</h3>
      <p>HTML Forms</p>
      <p>HTML Forms Elements</p>
    </div>


    <div class="container sideLeft-mini-menu">
      <h3>HTML Graphics</h3>
      <p>HTML Canvas</p>
      <p>HTML SVG </p>
    </div>


    <div class="container sideLeft-mini-menu">
      <h3>HTML Media</h3>
      <p>HTML Media</p>
      <p>HTML Video</p>
      <p>HTML Audio</p>
    </div>

    <div class="container sideLeft-mini-menu">
      <h3>HTML APIs</h3>
      <p>HTML Geolocation</p>
      <p>HTML Drag/Drop</p>
      <p>HTML Web Storage</p>
      <p>HTML Web Workers</p>
      <p>HTML SSE</p>
    </div>
  </div> 
</template>

<script lang="ts">
import Vue from 'vue'

const HtmlHomeSideLeft = Vue.extend({
  name: 'HtmlHomeSideLeft',
  data: function () {
    return {
      state: {
        groupItem1: [
          { id: 0, text: 'HTML HOME', path: '/html', isActive: false },
          { id: 1, text: 'HTML Introduction', path: '/html/introduction', isActive: false },
          // { id: 2, text: 'HTML Editors', path: '/html/editors', isActive: false },
          { id: 3, text: 'HTML Basic', path: '/html/basic', isActive: false },
          { id: 4, text: 'HTML Elements', path: '/html/elements', isActive: false },
          { id: 5, text: 'HTML Attributes', path: '/html/attributes', isActive: false },
          // { id: 6, text: 'HTML Headings', path: '/html/headings', isActive: false },
          // { id: 7, text: 'HTML Paragraphs', path: '/html/paragraphs', isActive: false },
          // { id: 8, text: 'HTML Styles', path: '/html/styles', isActive: false },
          // { id: 9, text: 'HTML Formatting', path: '/html/formatting', isActive: false },
          // { id: 10, text: 'HTML Quotation', path: '/html/quotation', isActive: false },
          // { id: 11, text: 'HTML Comments', path: '/html/comments', isActive: false },
          // { id: 12, text: 'HTML Colors', path: '/html/colors', isActive: false },
          // { id: 13, text: 'HTML CSS', path: '/html/cSS', isActive: false },
          // { id: 14, text: 'HTML Links', path: '/html/links', isActive: false },
          // { id: 15, text: 'HTML Images', path: '/html/images', isActive: false },
          // { id: 16, text: 'HTML Tables', path: '/html/tables', isActive: false },
          // { id: 17, text: 'HTML Lists', path: '/html/lists', isActive: false },
          // { id: 18, text: 'HTML Block', path: '/html/block', isActive: false },
          // { id: 19, text: 'HTML Tables', path: '/html/tables', isActive: false },
          // { id: 20, text: 'HTML Classes', path: '/html/classes', isActive: false }
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

export default HtmlHomeSideLeft

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