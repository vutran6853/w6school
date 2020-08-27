<template>
  <section class="htmlIntroduction-main-container" style="border-left: 3px solid gainsboro;">
    <div class="htmlIntroduction-inner-item-a">
      <p>CSS Introduction</p>
      <div class="group-button-container">
        <button class="w6-btn" v-on:click='handleRouteTo("/css")'>&lt;Previous</button>
        <button class="w6-btn disabled" v-on:click='handleRouteTo("/")'>Next ></button>  
      </div>
    </div>

    <hr/>
    
    <!-- What is CSS? -->
    <div class="htmlIntroduction-what-html-container">
      <p class="text-size-2">What is CSS?</p>
      <ul>
        <li><strong>CSS</strong> stands for <strong>C</strong>ascading <strong>S</strong>tyle <strong>S</strong>heets</li>
        <li>CSS describes how <strong>HTML elements are to be displayed on screen, paper, or in other media</strong></li>
        <li>CSS <strong>saves a lot of work</strong>.It can control the layout of multiple web pages all at once</li>
        <li>External stylesheets are stored in <strong>CSS files</strong></li>
      </ul>
    </div>

    <hr/>

    
    <!-- Why Use CSS? -->
    <div class="d-flex-column">
      <div class="d-flex-column h-6 w-100">
        <p class="text-size-2">Why Use CSS?</p>
        <p>CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.</p>
      </div>
      <div class="w-100">
        <CSSExample />
      </div>
    </div>

    <hr/>

    <!-- CSS Solved a Big Problem -->
    <div class="d-flex-column h-25">
      <p class="text-size-2">CSS Solved a Big Problem</p>
      <p>HTML was NEVER intended to contain tags for formatting a web page!</p>
      <p>HTML was created to <strong>describe the content</strong> of a web page, like:</p>
      <p><span class="w6-codespan">&lt;h1&gt;</span>This is a heading<span class="w6-codespan">&lt;/h1&gt;</span></p>
      <p><span class="w6-codespan">&lt;p&gt;</span>This is a paragraph.<span class="w6-codespan">&lt;/p&gt;</span></p>
      <p>When tags like <span class="w6-codespan">&lt;font&gt;</span>, and color attributes were added to the HTML 3.2 specification, it started a nightmare for web developers. Development of large websites, where fonts and color information were added to every single page, became a long and expensive process.</p>
      <p>To solve this problem, the World Wide Web Consortium (W3C) created CSS.</p>
      <p>CSS removed the style formatting from the HTML page!</p>
    </div>

    <div class="note-container container">
      <p>
        <strong>Note:</strong>
        If you don't know what HTML is, we suggest that you read our <router-link to="/html">HTML Tutorial.</router-link>
      </p>
    </div>

    <hr/>


    <!-- CSS Saves a Lot of Work! -->
    <div class="d-flex-column h-8">
      <p class="text-size-2">CSS Saves a Lot of Work!</p>
      <p>The style definitions are normally saved in external .css files.</p>
      <p>With an external stylesheet file, you can change the look of an entire website by changing just one file!</p>
    </div>

    <hr/>

    <!-- <div class="ad-placeholder">
      <p></p>
    </div> -->

    <div class="group-button-container container">
      <button class="w6-btn" v-on:click='handleRouteTo("/css")'>&lt;Previous</button>
      <button class="w6-btn" v-on:click='handleRouteTo("/")'>Next ></button>  
    </div>

  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import CSSExample from './shareUI/CSSExample'

const CssIntroduction = Vue.extend({
  name: 'CssIntroduction',
  components: {
    CSSExample
  },

  methods: {
    // handleRouteToTryIt() {
    //   this.$router.push({
    //     path: '/html/tryit/CssIntroduction'
    //   })
    // },
    handleRouteTo(urlPath: string) {
      this.$router.push({
        path: urlPath
      })
    }
  }
})

export default CssIntroduction

</script>

<style>
/* @import url(./shareStyle/shareStyle.css); */

.htmlIntroduction-main-container {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}
.htmlIntroduction-inner-item-a {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
.htmlIntroduction-inner-item-a > p:nth-child(1) {
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-size: 2.5rem;
}


.htmlIntroduction-what-html-container {
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.htmlIntroduction-what-html-container > ul {
  padding-left: 2rem;
  margin-top: 1rem;
}

.w6-codespan {
  color: crimson;
  background-color: #f1f1f1;
}


.htmlIntroduction-page-structure-container {
  display: flex;
  flex-direction: column;
  height: 40rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  justify-content: space-between;
}

.htmlIntroduction-page-structure-inner-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: 1rem;
  align-items: flex-start;
  height: 30rem;
  border: 1px solid grey;
  background-color: #ddd;
  padding: 0.5rem;
}


.htmlIntroduction-page-structure-inner-a {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 1rem;
  height: 6rem;
  padding: 0.5rem;
  width: 90%;
  border: 1px solid grey;
}

.htmlIntroduction-page-structure-inner-b {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 1rem;
  border: 1px solid grey;
  width: 90%;
  padding: 0.5rem;
}

.htmlIntroduction-page-structure-inner-b-a {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-left: 1rem;
  height: 10rem;
  border: 1px solid grey;
  width: 90%;
  background-color: white;
}
.htmlIntroduction-page-structure-inner-b-a > p {
  margin-left: 1rem;
  border: 1px solid grey;
  width: 90%;
  padding: 0.2rem;
}

.htmlIntroduction-table-all {
  border-collapse: collapse;
  border-spacing: 0;
  display: table;
  border: 1px solid #ccc;
  /* width: 50%; */
}

.htmlIntroduction-table-all > tbody {
  width: initial;
}
.htmlIntroduction-table-all > tbody > tr {
  height: 30px;
}

.htmlIntroduction-table-all > tbody > tr:nth-child(even) {
  background-color: #f1f1f1;
}
.htmlIntroduction-table-all > tbody > tr > th:nth-child(2) {
  text-align: left;
}
.htmlIntroduction-table-all > tbody > tr > td:nth-child(1) {
  text-align: center;
}
.htmlIntroduction-table-all > tbody > tr {
  border-bottom: 1px solid #ddd;
  /* padding: 1rem; */
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

.htmlIntroduction-main-container >* hr {
  border-top: 1px solid #eee;
}

.htmlIntroduction-info-container {
  height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* background-color: cadetblue; */
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.htmlIntroduction-info-inner-example-item-a {
  background-color: #f1f1f1;
  height: 25rem;
  font-size: 1.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.htmlIntroduction-info-inner-example-item-b {
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.htmlIntroduction-info-inner-example-item-b > ul {
  margin-left: 3rem;
}


.ad-placeholder {
  height: 15rem;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.htmlIntroduction-info-exercisers-container {
  height: 34rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.htmlIntroduction-info-exercises-inner-container {
  background-color: #555555;
  height: 25rem;
  /* font-size: 1.5rem; */
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white; 
}

.htmlIntroduction-info-exercises-inner-item-container {
  background-color: white;
  color: black;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 1rem;
}

.htmlIntroduction-info-exercises-inner-item-container > .htmlIntroduction-info-exerciser-inner-item-a {
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

.htmlIntroduction-references-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: 1rem;
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

@media only screen and (max-device-width: 480px) {
  .htmlIntroduction-main-container >* .htmlIntroduction-info-inner-example-item-b {
    height: 25rem;
  }
}
</style>