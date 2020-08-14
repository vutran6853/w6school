<template>
  <section class="htmlIntroduction-main-container" style="border-left: 3px solid gainsboro;">
    <div class="htmlIntroduction-inner-item-a">
      <p>HTML Introduction</p>
      <div class="group-button-container">
        <button class="w6-btn" v-on:click='handleRouteTo("/html")'>&lt;Previous</button>
        <button class="w6-btn" v-on:click='handleRouteTo("/html/basic")'>Next ></button>  
      </div>
    </div>

    <hr/>
    
    <div class="d-flex-column">
      <p>HTML is the standard markup language for creating Web pages.</p>
    </div>
    
    <hr/>
    
    <!-- What is HTML? -->
    <div class="htmlIntroduction-what-html-container">
      <p class="text-size-2">What is HTML?</p>
      <ul>
        <li>HTML stands for Hyper Text Markup Language</li>
        <li>HTML is the standard markup language for creating Web pages</li>
        <li>HTML describes the structure of a Web page</li>
        <li>HTML consists of a series of elements</li>
        <li>HTML elements tell the browser how to display the content</li>
        <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
      </ul>
    </div>

    <hr/>

    <!-- A Simple HTML Document -->
    <div class="htmlIntroduction-info-container">
      <p class="text-size-2">A Simple HTML Document</p>
      <div class="htmlIntroduction-info-inner-example-item-a">
        <p>Example</p>
        <div class="code-example-inner-container h-17">
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

        <button class="w6-button disabled" v-on:click='handleRouteToTryIt'>Try it Yourself</button>

      </div>

      <div class="htmlIntroduction-info-inner-example-item-b">
        <p class="text-size-1-2">Example Explained</p>
        <ul>
          <li>The <span class="w6-codespan">&lt;!DOCTYPE html&gt;</span> declaration defines that this document is an HTML5 document</li>
          <li>The <span class="w6-codespan">&lt;html&gt;</span> element is the root element of an HTML page</li>
          <li>The <span class="w6-codespan">&lt;head&gt;</span> element contains meta information about the HTML page</li>
          <li>The <span class="w6-codespan">&lt;title&gt;</span> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)</li>
          <li>The <span class="w6-codespan">&lt;body&gt;</span> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.</li>
          <li>The <span class="w6-codespan">&lt;h1&gt;</span> element defines a large heading</li>
          <li>The <span class="w6-codespan">&lt;p&gt;</span> element defines a paragraph</li>
        </ul>
      </div>
    </div>

    <hr/>

    <ElementUI title='What is an HTML Element?'  />

    <hr/>

    <!-- HTML Page Structure -->
    <div class="htmlIntroduction-page-structure-container">
      <p class="text-size-2">HTML Page Structure</p>
      <p>Below is a visualization of an HTML page structure:</p>

      <div class="htmlIntroduction-page-structure-inner-container">
        <span>&lt;html&gt;</span>

        <!-- <div> -->
          <div class="htmlIntroduction-page-structure-inner-a">
            <span>&lt;head&gt;</span>

            <div class="border-grey w-90 ml-1 p-0-5">
                &lt;title&gt;Page title&lt;/title&gt;
            </div>

            <span>&lt;/head&gt;</span>
          </div>

          <div class="htmlIntroduction-page-structure-inner-b h-15">
            <span>&lt;body&gt;</span>

            <div class="htmlIntroduction-page-structure-inner-b-a">
              <p>&lt;h1&gt;This is a heading&lt;/h1&gt;</p>
              <p>&lt;p&gt;This is a paragraph.&lt;/p&gt;</p>
              <p>&lt;p&gt;This is another paragraph.&lt;p&gt;</p>
            </div>

            <span>&lt;/body&gt;</span>
          </div>
        <!-- </div> -->
        
        <span>&lt;/html&gt;</span>
      </div>
    </div>

    <div class="note-container container">
      <p>
        <strong>Note:</strong>
        Only the content inside the &lt;body&gt; section (the white area above) will be displayed in a browser.
      </p>
    </div>

    <hr/>

    <!-- HTML History -->
    <div class="d-flex-column h-30">
      <p class="text-size-2">HTML History</p>
      <table class="htmlIntroduction-table-all w-100">
        <tbody>
          <tr>
            <th>Year</th>
            <th>Version</th>
          </tr>
          <tr>
            <td>1989</td>
            <td>Tim Berners-Lee invented www</td>
          </tr>
          <tr>
            <td>1991</td>
            <td>Tim Berners-Lee invented HTML</td>
          </tr>
          <tr>
            <td>1993</td>
            <td>Dave Raggett drafted HTML+</td>
          </tr>
          <tr>
            <td>1995</td>
            <td>HTML Working Group defined HTML 2.0</td>
          </tr>
          <tr>
            <td>1997</td>
            <td>W3C Recommendation: HTML 3.2</td>
          </tr>
          <tr>
            <td>1999</td>
            <td>	W3C Recommendation: HTML 4.01</td>
          </tr>
          <tr>
            <td>2000</td>
            <td>W3C Recommendation: XHTML 1.0</td>
          </tr>
          <tr>
            <td>2008</td>
            <td>WHATWG HTML5 First Public Draft</td>
          </tr>
          <tr>
            <td>2012</td>
            <td>WHATWG HTML5 Living Standard</td>
          </tr>
          <tr>
            <td>2014</td>
            <td>W3C Recommendation: HTML5</td>
          </tr>
          <tr>
            <td>2016</td>
            <td>W3C Candidate Recommendation: HTML 5.1</td>
          </tr>
          <tr>
            <td>2017</td>
            <td>W3C Recommendation: HTML5.1 2nd Edition</td>
          </tr>
          <tr>
            <td>2017</td>
            <td>W3C Recommendation: HTML5.2</td>
          </tr>
        </tbody>
      </table>
    </div>



    <div class="note-container">
      <p><strong>Note:</strong> Tutorial follows the latest HTML 5 standard.</p>
    </div>

    <!-- <div class="ad-placeholder">
      <p></p>
    </div> -->

    <div class="group-button-container container">
      <button class="w6-btn" v-on:click='handleRouteTo("/html")'>&lt;Previous</button>
      <button class="w6-btn" v-on:click='handleRouteTo("/html/basic")'>Next ></button>  
    </div>

  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import ElementUI from './shareUI/ElementUI.vue'

const HtmlIntroduction = Vue.extend({
  name: 'HtmlIntroduction',
  data: function () {
    return {
      state: {
      }
    }
  },
  components: {
    ElementUI
  },

  methods: {
    handleRouteToTryIt() {
      this.$router.push({
        path: '/html/tryit/HtmlIntroduction'
      })
    },
    handleRouteTo(urlPath: string) {
      this.$router.push({
        path: urlPath
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

export default HtmlIntroduction

</script>

<style>
@import url(./shareStyle/shareStyle.css);

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