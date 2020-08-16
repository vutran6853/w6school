<template>
  <section id="htmlBasic" class="section-container" style="border-left: 3px solid gainsboro;">
    <div class="title-container">
      <p>HTML Basic Examples</p>
      <div class="group-button-container">
        <button class="w6-btn" v-on:click='handleRouteTo("/html/introduction")'>&lt;Previous</button>
        <button class="w6-btn" v-on:click='handleRouteTo("/html/elements")'>Next ></button>  
      </div>
    </div>

    <hr/>
    
    <div class="d-flex-column">
      <p>In this chapter we will show some basic HTML examples.</p>
      <p>Don't worry if we use tags you have not learned about yet.</p>
    </div>

    <hr/>

    <!-- HTML Documents -->
    <div class="d-flex-column h-10">
      <p class="text-size-2">HTML Documents</p>
      <p>All HTML documents must start with a document type declaration: 
        <span class="w6-codespan">&lt;!DOCTYPE html&gt;</span> 
      .
      </p>
      <p>
        The HTML document itself begins with
        <span class="w6-codespan">&lt;html&gt;</span>
        and ends with
        <span class="w6-codespan">&lt;/html&gt;</span>
        .
      </p>
      <p>
        The visible part of the HTML document is between
        <span class="w6-codespan">&lt;body&gt;</span>
        and
        <span class="w6-codespan">&lt;/body&gt;</span>
        .
      </p>
    </div>

    <DocumentsUI h1Text='This is a heading' pText='This is a paragraph.' />

    <hr/>

    <div class="d-flex-column h-13">
      <p class="text-size-2">The <!DOCTYPE> Declaration</p>
      <p>The 
        <span class="w6-codespan">&lt;!DOCTYPE html&gt;</span> 
      declaration represents the document type, and helps browsers to display web pages correctly..
      </p>
      <p>It must only appear once, at the top of the page (before any HTML tags).</p>
      <p>
        The
        <span class="w6-codespan">&lt;!DOCTYPE html&gt;</span> 
        declaration is not case sensitive.
      </p>
      <p>
        The
        <span class="w6-codespan">&lt;!DOCTYPE html&gt;</span> 
        declaration for HTML5 is:
      </p>
      
    </div>
    <div class="code-example-mini-container h-3">
      <div class="code-example-inner-container">
        <div class="code-example-inner-mini-container h-2">
          <span class="tagcolor">&lt;</span>
          <span class="color-brown mr-0-5">!DOCTYPE</span>
          <span class="color-red">html</span>
          <span class="tagcolor">></span>
        </div>
      </div>
    </div>

    <hr/>

    <div class="d-flex-column h-8">
      <p class="text-size-2">HTML Headings</p>
      <p>HTML headings are defined with the
        <span class="w6-codespan">&lt;h1&gt;</span>
        to
        <span class="w6-codespan">&lt;h6&gt;</span> 
        tags.
      </p>
      <p>
        <span class="w6-codespan">&lt;h1&gt;</span>
          defines the most important heading.
          <span class="w6-codespan">&lt;h6&gt;</span>
          defines the least important heading: 
      </p>
    </div>

    <div class="code-example-container h-10">
      <p>Example</p>
      <div class="code-example-inner-container h-4">
        <div>
          <span class="tagcolor">&lt;</span>
          <span class="color-brown">h1</span>
          <span class="tagcolor">></span>
          <span>This is a heading 1</span>
          <span class="tagcolor">&lt;</span>
          <span class="color-brown">/h1</span>
          <span class="tagcolor">></span>

          <br />
          
          <span class="tagcolor">&lt;</span>
          <span class="color-brown">h2</span>
          <span class="tagcolor">></span>
          <span>This is a heading 2</span>
          <span class="tagcolor">&lt;</span>
          <span class="color-brown">/h2</span>
          <span class="tagcolor">></span>

          <br />
          
          <span class="tagcolor">&lt;</span>
          <span class="color-brown">h3</span>
          <span class="tagcolor">></span>
          <span>This is a heading 3</span>
          <span class="tagcolor">&lt;</span>
          <span class="color-brown">/h3</span>
          <span class="tagcolor">></span>
        </div>

      </div>
      <!-- <button class="w6-button" v-on:click='handleRouteToTryIt'>Try it Yourself</button> -->
      <button class="w6-button disabled">Try it Yourself</button>
    </div>
    
    <hr/>

    <div class="d-flex-column h-5">
      <p class="text-size-2">HTML Paragraphs</p>
      <p>HTML paragraphs are defined with the <span class="w6-codespan">&lt;p&gt;</span> tag:</p>
    </div>

    <div class="code-example-container h-10">
      <p>Example</p>
      <div class="code-example-inner-container h-3">
        <div>
          <span class="tagcolor">&lt;</span>
          <span class="color-brown">p</span>
          <span class="tagcolor">></span>
          <span>This is a paragraph.</span>
          <span class="tagcolor">&lt;</span>
          <span class="color-brown">/p</span>
          <span class="tagcolor">></span>

          <br />
          
          <span class="tagcolor">&lt;</span>
          <span class="color-brown">p</span>
          <span class="tagcolor">></span>
          <span>This is a another paragraph.</span>
          <span class="tagcolor">&lt;</span>
          <span class="color-brown">/p</span>
          <span class="tagcolor">></span>
        </div>

      </div>
      <!-- <button class="w6-button" v-on:click='handleRouteToTryIt'>Try it Yourself</button> -->
      <button class="w6-button disabled">Try it Yourself</button>
    </div>

    <hr/>

    <div class="d-flex-column h-5">
      <p class="text-size-2">HTML Links</p>
      <p>HTML links are defined with the <span class="w6-codespan">&lt;a&gt;</span> tag:</p>
    </div>

    <div class="code-example-container h-8">
      <p>Example</p>
      <div class="code-example-inner-container h-2">
        <div class="code-example-inner-mini-container h-2">
          <span class="color-mediumblue">&lt;</span>
          <span class="color-brown mr-0-5">a</span>
          <span class="color-red">href</span>
          <span class="color-black">=</span>
          <span class="color-mediumblue">"https://www.w6schools.com"</span>
          <span class="color-mediumblue">></span>
          <span>This is a link</span>
          <span class="color-mediumblue">&lt;</span>
          <span class="color-brown">/a</span>
          <span class="color-mediumblue">></span>
        </div>
      </div>
      <!-- <button class="w6-button" v-on:click='handleRouteToTryIt'>Try it Yourself</button> -->
      <button class="w6-button disabled">Try it Yourself</button>
    </div>

    <div class="d-flex-column h-6">
      <p>The link's destination is specified in the <span class="w6-codespan">&lt;herf&gt;</span> attribute:</p>
      <p>Attributes are used to provide additional information about HTML elements.</p>
      <p>You will learn more about attributes in a later chapter.</p>
    </div>


    <hr/>

    <div class="d-flex-column h-5">
      <p class="text-size-2">HTML Images</p>
      <p>HTML images are defined with the <span class="w6-codespan">&lt;img&gt;</span> tag.</p>
      <p>The source file (<span class="w6-codespan">src</span>), alternative text (<span class="w6-codespan">alt</span>), <span class="w6-codespan">width</span>, <span class="w6-codespan">height</span> are provided as attributes:</p>

    </div>

    <div class="code-example-container h-8">
      <p>Example</p>
      <div class="code-example-inner-container item-center h-2">
        <div class="code-example-inner-mini-container h-2">
          <span class="color-mediumblue">&lt;</span>
          <span class="color-brown mr-0-5">img</span>
          <span class="color-red">src</span>
          <span class="color-black">=</span>
          <span class="color-mediumblue mr-0-5">"w6schools.jpg"</span>
          <span class="color-red">alt</span>
          <span class="color-black">=</span>
          <span class="color-mediumblue mr-0-5">"W6Schools.com"</span>
          <span class="color-red">width</span>
          <span class="color-black">=</span>
          <span class="color-mediumblue mr-0-5">"104"</span>
          <span class="color-red">height</span>
          <span class="color-black">=</span>
          <span class="color-mediumblue">"142"</span>
          <span class="color-mediumblue">&gt;</span>
        </div>
      </div>
      <!-- <button class="w6-button" v-on:click='handleRouteToTryIt'>Try it Yourself</button> -->
      <button class="w6-button disabled">Try it Yourself</button>
    </div>
    
    <hr/>

    <div class="d-flex-column w-100 ">
      <div class="d-flex-column">
        <p class="text-size-2">How to View HTML Source?</p>
        <p>Have you ever seen a Web page and wondered "Hey! How did they do that?"</p>
      </div>
      <div class="d-flex-column">
        <p class="text-size-1-2">View HTML Source Code:</p>
        <p>Right-click in an HTML page and select "View Page Source" (in Chrome) or "View Source" (in Edge), or similar in other browsers. This will open a window containing the HTML source code of the page.</p>
      </div>
      <div class="d-flex-column">
        <p class="text-size-1-2">Inspect an HTML Element:</p>
        <p>Right-click on an element (or a blank area), and choose "Inspect" or "Inspect Element" to see what elements are made up of (you will see both the HTML and the CSS). You can also edit the HTML or CSS on-the-fly in the Elements or Styles panel that opens.</p>
      </div>
    </div>

    <hr />

    <div class="group-button-container container w-100">
      <button class="w6-btn" v-on:click='handleRouteTo("/html/introduction")'>&lt;Previous</button>
      <button class="w6-btn" v-on:click='handleRouteTo("/html/elements")'>Next></button>  
    </div>
    
    <div class="ad-placeholder">
      <p></p>
    </div>



  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import DocumentsUI from './shareUI/DocumentsUI.vue'

const HtmlBasic = Vue.extend({
  name: 'HtmlBasic',
  data: function () {
    return {
      state: {
       
      }
    }
  },
  components: {
    DocumentsUI
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

export default HtmlBasic

</script>

<style>
.htmlBasic-info-inner-example-item-a {
  background-color: #f1f1f1;
  height: 21rem;
  font-size: 1.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}


@media only screen and (max-device-width: 480px) {
  #htmlBasic {
    width: 448px;
  }

  #htmlBasic > div.code-example-container > .code-example-inner-container {
    font-size: 0.8rem;
  }
}
@media (max-width: 768px) and (min-width: 481px) {
   #htmlBasic {
    width: 509px;
  }
  #htmlBasic > div.code-example-container > .code-example-inner-container {
    font-size: 0.8rem;
  }
}
</style>