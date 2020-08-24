<template>
  <section class="javascriptHome-central-container" style="border-left: 3px solid gainsboro;">
    <p>JavaScript Tutorial</p>
    <div class="group-button-container">
      <button class="w6-btn" v-on:click='handleRouteTo("/")'>&lt;Home</button>
      <button class="w6-btn" v-on:click='handleRouteTo("/javascript/introduction")'>Next ></button>  
    </div>

    <div class="w6-info h-13">
      <p>JavaScript is the world's most popular programming language.</p>
      <p>JavaScript is the programming language of the Web.</p>
      <p>JavaScript is easy to learn.</p>
      <p>This tutorial will teach you JavaScript from basic to advanced.</p>
      <button class="disabled">Start Learning Javascript >></button>
    </div>

    <hr/>

    <!-- Examples in Each Chapter" -->
    <div class="javascriptHome-info-container">
      <div class="d-flex-column h-8">
        <p class="text-size-2">Examples in Each Chapter</p>
        <p>With our "Try it Yourself" editor, you can edit the source code and view the result.</p>
      </div>

      <div class="code-example-container">
        <p>Example</p>
        <div class="code-example-javascript-container h-8">
          <p class="text-size-2 mb-1">My First Javascript</p>
          <button class="h-2 w-25 mb-1" v-on:click='handleDisplayDateAndTime'>Click me to display Date and Time</button>
          <p class="mb-1" v-if='state.isDisplayDateAndTime'>{{ state.currentUserDate }}</p>
        </div>
        <!-- <button class="w6-button" v-on:click='handleRouteToTryIt'>Try it Yourself</button> -->
        <button class="w6-button disabled">Try it Yourself</button>
      </div>
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
    <div class="d-flex-column h-15">
      <p class="text-size-2">Learn by Examples</p>
      <p>Examples are better than 1000 words. Examples are often easier to understand than text explanations.</p>
      <p>This tutorial supplements all explanations with clarifying "Try it Yourself" examples.</p>
      <div class="note-container container">
        <p>
          <strong>Note:</strong>
          If you try all the examples, you will learn a lot about JavaScript, in a very short time!
        </p>
      </div>
    </div>

    <div class="ad-placeholder">
      <p></p>
    </div>

    <hr/>

    <!-- Why Study JavaScript? -->
    <div class="d-flex-column h-12">
      <p class="text-size-2">Why Study JavaScript?</p>
      <p>JavaScript is one of the <strong>3 languages</strong> all web developers <strong>must</strong> learn:</p>
      <p>1. <strong>HTML</strong> to define the content of web pages</p>
      <p>2. <strong>CSS</strong> to specify the layout of web pages</p>
      <p>3. <strong>JavaScript</strong> to specify the layout of web pages</p>
    </div>

    <hr/>

    <!-- Commonly Asked Questions -->
    <div class="d-flex-column h-15">
      <p class="text-size-2">Commonly Asked Questions</p>
      <ul class="pl-3">
        <li>How do I get JavaScript?</li>
        <li>Where can I download JavaScript?</li>
        <li>Is JavaScript Free?</li>
      </ul>
      <p><strong>You don't have to get or download JavaScript.</strong></p>
      <p><strong>JavaScript is already running in your browser on your computer, on your tablet, and on your smart-phone.</strong></p>
      <p><strong>JavaScript is free to use for everyone.</strong></p>
    </div>

    <hr />

    <div class="group-button-container container">
      <button class="w6-btn" v-on:click='handleRouteTo("/")'>&lt;Home</button>
      <button class="w6-btn" v-on:click='handleRouteTo("/javascript/introduction")'>Next ></button>  
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
// import CSSExample from './shareUI/CSSExample'

const JavascriptHomeContent = Vue.extend({
  name: 'JavascriptHomeContent',
  data() {
    return {
      state: {
        isDisplayDateAndTime: false,
        currentUserDate: ''
      }
    }
  },
  // components: {
  //   CSSExample
  // },
  methods: {
    handleRouteTo(urlPath: string) {
      this.$router.push({
        path: urlPath
      })
    },
    handleDisplayDateAndTime() {
      this.state.currentUserDate = new Date().toString()
      this.state.isDisplayDateAndTime = true
    }
  }
})

export default JavascriptHomeContent

</script>

<style>
/* @import url(../htmlC/shareStyle/shareStyle.css); */

/* .javascriptHome-container {
  display: grid;
  grid-template-columns: 14rem 1fr 14rem;
  font-size: 1.1rem;
} */

.javascriptHome-central-container {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.javascriptHome-central-container > p:nth-child(1) {
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-size: 2.5rem;
}

.code-example-javascript-container {
  background-color: white;
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
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

/* .javascriptHome-container >* hr {
  border-top: 1px solid #eee;
} */

.javascriptHome-info-container {
  /* height: 3rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: cadetblue; */
  margin-bottom: 1rem;
  margin-top: 1rem;
}

/* .javascriptHome-section-example-item-right-container {
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

.javascriptHome-info-exercisers-container {
  height: 34rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.javascriptHome-info-exercises-inner-container {
  background-color: #555555;
  height: 25rem;
  /* font-size: 1.5rem; */
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white; 
}

.javascriptHome-info-exercises-inner-item-container {
  background-color: white;
  color: black;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 1rem;
}

.javascriptHome-info-exercises-inner-item-container > .javascriptHome-info-exerciser-inner-item-a {
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

.javascriptHome-references-container {
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
  .javascriptHome-container {
    display: grid;
    grid-template-columns: 1fr;
    font-size: 1.1rem;
  }

  .javascriptHome-container > .sideLeft-container {
    display: none;
  }

  .javascriptHome-container >* .javascriptHome-info-exercises-inner-item-container > .javascriptHome-info-exerciser-inner-item-a  {
    padding: 0px;
  }
}

@media(max-width: 768px) and (min-width: 480px) and (orientation: landscape) {
  .javascriptHome-container {
    display: grid;
    grid-template-columns: 14rem 1fr;
  }
  .javascriptHome-container >* .javascriptHome-info-exercises-inner-item-container > .javascriptHome-info-exerciser-inner-item-a  {
    padding: 0px;
  }
}

/* @media (max-width: 768px) and (min-width: 481px) {
  .javascriptHome-container {
    display: grid;
    grid-template-columns: 14rem 1fr;
  }
  .javascriptHome-container >* .javascriptHome-info-exercises-inner-item-container > .javascriptHome-info-exerciser-inner-item-a  {
    padding: 0px;
  }
} */

</style>