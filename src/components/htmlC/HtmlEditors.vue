<template>
  <div>
    HtmlEditors compontns
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const HtmlEditors = Vue.extend({
  name: 'HtmlEditors',
  data: function () {
    return {
      state: {
       
      }
    }
  },
  created() {
    
  },
  methods: {

  },
  watch: {
    $route(to, from) {
      // react to route changes...
      console.log({to, from})
      
    }
  }
})

export default HtmlEditors

</script>

<style>



</style>