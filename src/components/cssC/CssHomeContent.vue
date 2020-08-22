<template>
  <section class="cssHome-central-container" style="border-left: 3px solid gainsboro;">
    <p>CSS Tutorial</p>
    <div class="group-button-container">
      <button class="w6-btn" v-on:click='handleRouteTo("/")'>&lt;Home</button>
      <button class="w6-btn" v-on:click='handleRouteTo("/css/introduction")'>Next ></button>  
    </div>

    <div class="w6-info h-10">
      <p>CSS is the language we use to style an HTML document.</p>
      <p>CSS describes how HTML elements should be displayed.</p>
      <p>This tutorial will teach you CSS from basic to advanced.</p>
      <button class="disabled">Start Learning CSS now >></button>
    </div>

    <hr/>

    <!-- Examples in Each Chapter" -->
    <div class="cssHome-info-container">
      <div class="d-flex-column h-8">
        <p class="text-size-2">Examples in Each Chapter</p>
        <p>This CSS tutorial contains hundreds of CSS examples.</p>
        <p>With our online editor, you can edit the CSS, and click on a button to view the result.</p>
      </div>
      <CSSExample />
      <h4 class="container">Click on the "Try it Yourself" button to see how it works.</h4>
      <hr/>
    </div>

    <!-- CSS Examples -->
    <div class="d-flex-column h-8">
      <p class="text-size-2">CSS Examples</p>
      <p>Learn from over 300 examples! With our editor, you can edit the CSS, and click on a button to view the result.</p>
      <!-- <a href="">Go to HTML Examples!</a> -->
      <router-link to="/">Go to CSS Examples!</router-link>
    </div>

    <hr/>

    <!-- Use the Menu -->
    <div class="d-flex-column h-10">
      <p class="text-size-2">Use the Menu</p>
      <p>We recommend reading this tutorial, in the sequence listed in the menu.</p>
      <p>If you have a large screen, the menu will always be present on the left.</p>
      <p>If you have a small screen, open the menu by clicking the top menu sign ☰.</p>
    </div>

    <hr/>

    <!-- CSS Templates -->
    <div class="d-flex-column h-8">
      <p class="text-size-2">CSS Templates</p>
      <p>We have created some responsive W6.CSS templates for you to use.</p>
      <p>You are free to modify, save, share, and use them in all your projects.</p>
    </div>

    <div class="ad-placeholder">
      <p></p>
    </div>

    <hr/>

    <!-- CSS References -->
    <div class="d-flex-column h-25">
      <p class="text-size-2">CSS References</p>
      <p>At W6Schools you will find complete CSS references of all properties and selectors with syntax, examples, browser support, and more.</p>
      <router-link to="/">CSS Properties Reference</router-link>
      <router-link to="/">CSS Selectors Reference</router-link>
      <router-link to="/">CSS Functions Reference</router-link>
      <router-link to="/">CSS Animatable Reference</router-link>
      <router-link to="/">CSS Aural Reference</router-link>
      <router-link to="/">CSS Units</router-link>
      <router-link to="/">CSS Color Reference</router-link>
      <router-link to="/">CSS Default Values</router-link>
      <router-link to="/">CSS Browser Support</router-link>
    </div>

    <hr/>

    <div class="group-button-container container">
      <button class="w6-btn" v-on:click='handleRouteTo("/")'>&lt;Home</button>
      <button class="w6-btn" v-on:click='handleRouteTo("/css/introduction")'>Next ></button>  
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import CSSExample from './shareUI/CSSExample'

const CssHomeContent = Vue.extend({
  name: 'CssHomeContent',
  components: {
    CSSExample
  },
  methods: {
    handleRouteTo(urlPath: string) {
      this.$router.push({
        path: urlPath
      })
    }
  }
})

export default CssHomeContent

</script>

<style>
/* @import url(../htmlC/shareStyle/shareStyle.css); */

/* .cssHome-container {
  display: grid;
  grid-template-columns: 14rem 1fr 14rem;
  font-size: 1.1rem;
} */

.cssHome-central-container {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.cssHome-central-container > p:nth-child(1) {
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-size: 2.5rem;
}



.w6-btn {
  height: 45px;
  width: 100px;
  font-size: 1.2rem;
  background-color: #4CAF50;
  border: none;
  cursor: pointer;
  color: white;
  outline: none;
}

/* .cssHome-container >* hr {
  border-top: 1px solid #eee;
} */

.cssHome-info-container {
  /* height: 3rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: cadetblue; */
  margin-bottom: 1rem;
  margin-top: 1rem;
}

/* .cssHome-section-example-item-right-container {
  background-color: #f1f1f1;
  height: 25rem;
  font-size: 1.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
} */


.ad-placeholder {
  height: 15rem;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.cssHome-info-exercisers-container {
  height: 34rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.cssHome-info-exercises-inner-container {
  background-color: #555555;
  height: 25rem;
  /* font-size: 1.5rem; */
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white; 
}

.cssHome-info-exercises-inner-item-container {
  background-color: white;
  color: black;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 1rem;
}

.cssHome-info-exercises-inner-item-container > .cssHome-info-exerciser-inner-item-a {
  background-color: #f1f1f1;
  padding: 1rem;
  width: 97%;
}

.w6-button-light-blue {
  height: 40px;
  width: 150px;
  font-size: 1rem;
  background-color: #2196F3;
  border: none;
  cursor: pointer;
  color: white;
  outline: none;
}

.d-flex-gird {
  /* background-color: lightslategray; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  width: 100%;
}

.cssHome-references-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: 1rem;
  height: 30rem;
}





.code-section-example-container:nth-child(2) >* [class*="code-example-html-example-container"] >* [class*="color-red"] {
  padding-left: 1rem;
}

.w6-button {
  height: 40px;
  width: 150px;
  font-size: 1rem;
  background-color: #4CAF50;
  border: none;
  cursor: pointer;
  color: white;
  outline: none;
}

.w6-button:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.w6-button-grey {
  height: 40px;
  width: 10rem;
  font-size: 1rem;
  background-color: #616161;
  border: none;
  cursor: pointer;
  color: white;
  outline: none;
  margin: 0.5rem;
}

.w6-button-grey:hover {
  background-color: lightgray;
  color: black;
}

.code-section-example-item-left-group-button{
  /* display: flex; */
  /* flex-direction: row; */
  /* width: 100%; */
  /* justify-content: space-around; */
}

@media only screen and (max-width: 480px) {
  .cssHome-container {
    display: grid;
    grid-template-columns: 1fr;
    font-size: 1.1rem;
  }

  .cssHome-container > .sideLeft-container {
    display: none;
  }

  .cssHome-container >* .cssHome-info-exercises-inner-item-container > .cssHome-info-exerciser-inner-item-a  {
    padding: 0px;
  }
}

@media(max-width: 768px) and (min-width: 480px) and (orientation: landscape) {
  .cssHome-container {
    display: grid;
    grid-template-columns: 14rem 1fr;
  }
  .cssHome-container >* .cssHome-info-exercises-inner-item-container > .cssHome-info-exerciser-inner-item-a  {
    padding: 0px;
  }
}

/* @media (max-width: 768px) and (min-width: 481px) {
  .cssHome-container {
    display: grid;
    grid-template-columns: 14rem 1fr;
  }
  .cssHome-container >* .cssHome-info-exercises-inner-item-container > .cssHome-info-exerciser-inner-item-a  {
    padding: 0px;
  }
} */

</style>