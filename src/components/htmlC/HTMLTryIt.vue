<template>
  <div class="HTMLTryIt-container">
    HTMLTryIt compontns
    <nav class="HTMLTryIt-navbar-item-container">
      <div>
        <button v-on:click='handleRouteToHome'>Home</button>
        <button>rotoe 90</button>
        <button>change</button>
        <button>Run</button>
      </div>
      <div>
        <p>Result Size: 727 x 559</p>
      </div>
    </nav>
    <div class="HTMLTryIt-inner-container">
      <div class="">
        <div>
          <span class="tagcolor">&lt;</span>
          <span class="color-brown">!DOCTYPE </span>
          <span class="color-red">html</span>
          <span class="tagcolor">></span>

          <br />
          
          <span class="tagcolor">&lt;</span>
          <span class="color-red">html</span>
          <span class="tagcolor">></span>

          <br />

          <span class="tagcolor">&lt;</span>
          <span class="color-red">head</span>
          <span class="tagcolor">></span>

          <br />

          <span class="tagcolor">&lt;</span>
          <span class="color-red">title</span>
          <span class="tagcolor">></span>
          <span>Page Title</span>
          <span class="tagcolor">&lt;</span>
          <span class="color-red">/title</span>
          <span class="tagcolor">></span>

          <br />
          <span class="tagcolor">&lt;</span>
          <span class="color-red">/head</span>
          <span class="tagcolor">></span>

          <br />
          <span class="tagcolor">&lt;</span>
          <span class="color-red">body</span>
          <span class="tagcolor">></span>
        </div>

      

        <div>
          <span class="tagcolor">&lt;</span>
          <span class="color-red">h1</span>
          <span class="tagcolor">></span>
          <span>This is a heading</span>
          <span class="tagcolor">&lt;</span>
          <span class="color-red">/h1</span>
          <span class="tagcolor">></span>

          <br />
          
          <span class="tagcolor">&lt;</span>
          <span class="color-red">p</span>
          <span class="tagcolor">></span>
          <span>This is a paragraph.</span>
          <span class="tagcolor">&lt;</span>
          <span class="color-red">/p</span>
          <span class="tagcolor">></span>
        </div>
        
        <div>
          <span class="tagcolor">&lt;</span>
          <span class="color-red">/body</span>
          <span class="tagcolor">></span>

          <br />

          <span class="tagcolor">&lt;</span>
          <span class="color-red">/html</span>
          <span class="tagcolor">></span>
        </div>



      </div>
      <div>box 2</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const HTMLTryIt = Vue.extend({
  name: 'HTMLTryIt',
  data: function () {
    return {
      state: {
       
      }
    }
  },
  created() {
    
  },
  methods: {
    handleRouteToHome() {
      this.$router.push({
        path: '/'
      })
    }
  },
  watch: {
    $route(to, from) {
      // react to route changes...
      console.log({to, from})
      
    }
  }
})

export default HTMLTryIt

</script>

<style>

.HTMLTryIt-container {
  /* background-color: lightblue; */
  background-color: #f1f1f1;
  width: 100%;
  /* overflow: auto; */
  position: absolute;
  top: 138px;
  bottom: 0;
  height: auto;
}

.HTMLTryIt-container > .HTMLTryIt-navbar-item-container {
  border: 2px solid red;
  height: 40px;
  display: flex;
  justify-content: space-between;
  /* padding: 0.5rem; */
}

.HTMLTryIt-container > .HTMLTryIt-navbar-item-container > div:nth-child(1) > button {
  height: 40px;
  width: 60px;
}

.HTMLTryIt-container > .HTMLTryIt-inner-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 50%;
  border: 5px solid red;

}

</style>