<template>
  <div style="border-left: 3px solid gainsboro;">
    <section class="htmlHome-central-container">
      <p>HTML Tutorial</p>
      <div class="group-button-container">
        <button class="w4-btn" v-on:click='handleRouteTo("/")'>&lt;Home</button>
        <button class="w4-btn" v-on:click='handleRouteTo("/html/introduction")'>Next ></button>  
      </div>

      <div class="w4-info">
        <p>HTML is the standard markup language for Web pages.</p>
        <p>With HTML you can create your own Website.</p>
        <p>This tutorial follows the latest HTML5 standard.</p>
        <p>HTML is easy to learn - You will enjoy it!</p>
        <button class="disabled">Start Learning HTML now >></button>
      </div>

      <hr/>

      <!-- Easy Learning with HTML "Try it Yourself" -->
      <div class="htmlHome-info-container">
        <p class="text-size-2">Easy Learning with HTML "Try it Yourself"</p>
        <p>With our "Try it Yourself" editor, you can edit the HTML code and view the result:</p>
        <div class="htmlHome-section-example-item-right-container">

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

          <button class="w4-button disabled">Try it Yourself</button>

        </div>
        <h4>Click on the "Try it Yourself" button to see how it works.</h4>
        <hr/>
      </div>

      <!-- HTML Examples -->
      <div class="d-flex-column h-10">
        <p class="text-size-2">HTML Examples</p>
        <p style="">In this HTML tutorial, you will find more than 200 examples. With our online "Try it Yourself" editor, you can edit and test each example yourself!</p>
        <a href="">Go to HTML Examples!</a>
      </div>

      <hr/>

      <div class="ad-placeholder">
        <p></p>
      </div>

      <hr/>

      <!-- HTML Exercises -->
      <div class="htmlHome-info-exercisers-container">
        <p class="text-size-2">HTML Exercises</p>
        <p>This HTML tutorial also contains nearly 100 HTML exercises.</p>
        <div class="htmlHome-info-exercises-inner-container">
          <p class="text-size-2">Test Yourself With Exercises</p>
          <div class="htmlHome-info-exercises-inner-item-container">
            <p class="text-size-2">Exercise:</p>
            <p>Add a "tooltip" to the paragraph below with the text "About W4Schools".</p>
            <div class="htmlHome-info-exerciser-inner-item-a">
              <p>
                &lt;p
                <input type="text">
                ="About W4Schools">W4Schools is a web developer's site.
                <span>&lt;</span>
                <span>/p</span>
                <span>></span>
              </p>
            </div>
            <button class="w4-button disabled">Submit Answer</button>
            <a href="">Start the Exercise</a>
          </div>
        </div>

      </div>

      <hr/>

      <div class="d-flex-column h-10">
        <p class="text-size-2">HTML Quiz Test</p>
        <p>Test your HTML skills with our HTML Quiz!</p>
        <button class="w4-button-light-blue disabled">Start HTML Quiz!</button>
      </div>

      <hr/>

      <!-- HTML References -->
      <div class="htmlHome-references-container">
        <p class="text-size-2">HTML References</p>
        <p>At W3Schools you will find complete references about HTML elements, attributes, events, color names, entities, character-sets, URL encoding, language codes, HTTP messages, browser support, and more:</p>
        <div class="d-flex-gird">
          <button class="disabled">HTML Elements</button>
          <button class="disabled">Browser Suppoet</button>
          <button class="disabled">Attributes</button>
          <button class="disabled">Global Attributes</button>
          <button class="disabled">Event Attributes</button>
          <button class="disabled">Color Names</button>
          <button class="disabled">Canvas</button>
          <button class="disabled">Audio/Vido DOM</button>
          <button class="disabled">Character Sets</button>
          <button class="disabled">URL Encoding</button>
          <button class="disabled">Language Codes</button>
          <button class="disabled">Country Codes</button>
          <button class="disabled">HTTP Messages</button>
          <button class="disabled">Px to Em Converter</button>
          <button class="disabled">Keyboard Shortcuts</button>
        </div>
      </div>

      <hr/>

      <div class="group-button-container container">
        <button class="w4-btn" v-on:click='handleRouteTo("/")'>&lt;Home</button>
        <button class="w4-btn" v-on:click='handleRouteTo("/html/introduction")'>Next ></button>  
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const HtmlHomeContent = Vue.extend({
  name: 'HtmlHomeContent',
  data: function () {
    return {
      state: {
       
      }
    }
  },
  created() {
    
  },
  methods: {
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

export default HtmlHomeContent

</script>

<style>
@import url(./shareStyle/shareStyle.css);

.htmlHome-container {
  display: grid;
  grid-template-columns: 14rem 1fr 14rem;
  font-size: 1.1rem;
}

.htmlHome-central-container {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.htmlHome-central-container > p:nth-child(1) {
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-size: 2.5rem;
}



.w4-btn {
  height: 45px;
  width: 100px;
  font-size: 1.2rem;
  background-color: #4CAF50;
  border: none;
  cursor: pointer;
  color: white;
  outline: none;
}

.htmlHome-container >* hr {
  border-top: 1px solid #eee;
}

.htmlHome-info-container {
  height: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: cadetblue; */
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.htmlHome-section-example-item-right-container {
  background-color: #f1f1f1;
  height: 25rem;
  font-size: 1.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

.htmlHome-info-exercisers-container {
  height: 34rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.htmlHome-info-exercises-inner-container {
  background-color: #555555;
  height: 25rem;
  /* font-size: 1.5rem; */
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white; 
}

.htmlHome-info-exercises-inner-item-container {
  background-color: white;
  color: black;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 1rem;
}

.htmlHome-info-exercises-inner-item-container > .htmlHome-info-exerciser-inner-item-a {
  background-color: #f1f1f1;
  padding: 1rem;
  width: 97%;
}

.w4-button-light-blue {
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

.htmlHome-references-container {
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

.w4-button {
  height: 40px;
  width: 150px;
  font-size: 1rem;
  background-color: #4CAF50;
  border: none;
  cursor: pointer;
  color: white;
  outline: none;
}

.w4-button:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.w4-button-grey {
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

.w4-button-grey:hover {
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
  .htmlHome-container {
    display: grid;
    grid-template-columns: 1fr;
    font-size: 1.1rem;
  }

  .htmlHome-container > .sideLeft-container {
    display: none;
  }

  .htmlHome-container >* .htmlHome-info-exercises-inner-item-container > .htmlHome-info-exerciser-inner-item-a  {
    padding: 0px;
  }
}

@media only screen and (max-device-width: 768px) {
  .htmlHome-container {
    display: grid;
    grid-template-columns: 14rem 1fr;
  }
  .htmlHome-container >* .htmlHome-info-exercises-inner-item-container > .htmlHome-info-exerciser-inner-item-a  {
    padding: 0px;
  }
}
</style>