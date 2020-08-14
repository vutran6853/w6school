<template>
  <main class="section-container" id="htmlAttributes" style="border-left: 3px solid gainsboro;">
    <div class="title-container">
      <p>HTML Attributes</p>
      <div class="group-button-container">
        <button class="w4-btn" v-on:click='handleRouteTo("/html/elements")'>&lt;Previous</button>
        <!-- <button class="w4-btn" v-on:click='handleRouteTo("/html/headings")'>Next ></button> -->
        <button class="w4-btn disabled">Next></button>  

      </div>
    </div>

    <hr/>
    
    <div class="d-flex-column">
      <p>HTML attributes provide additional information about HTML elements.</p>
    </div>

    <hr/>
    
    <!-- HTML Attributes -->
    <section class="container h-10">
      <p class="text-size-2">HTML Attributes</p>
      <ul title="list">
        <li>All HTML elements can have <strong>attributes</strong></li>
        <li>Attributes provide <strong>additional information</strong> about elements</li>
        <li>ttributes are always specified in the <strong>start tag</strong></li>
        <li>Attributes usually come in name/value pairs like: <strong>name="value"</strong></li>
      </ul>
    </section>

    <hr/>

    <!-- The href Attribute -->
    <section>
      <div class="d-flex-column h-5">
        <p class="text-size-2">The href Attribute</p>
        <p>
          The 
          <span class="w4-codespan">&lt;a&gt;</span>
          tag defines a hyperlink. The
          <span class="w4-codespan">&lt;href&gt;</span>
          attribute specifies the URL of the page the link goes to:
        </p>
      </div>
      <div class="code-example-container h-8">
        <p>Example</p>
        <div class="code-example-inner-container h-2">
          <div class="code-example-inner-mini-container h-2">
            <span class="color-mediumblue">&lt;</span>
            <span class="color-brown mr-0-5">a</span>
            <span class="color-red">href</span>
            <span class="color-black">=</span>
            <span class="color-mediumblue">"https://www.w4schools.com"</span>
            <span class="color-mediumblue">></span>
            <span>Visit W4Schools</span>
            <span class="color-mediumblue">&lt;</span>
            <span class="color-brown">/a</span>
            <span class="color-mediumblue">></span>
          </div>
        </div>
        <!-- <button class="w4-button" v-on:click='handleRouteToTryIt'>Try it Yourself</button> -->
        <button class="w4-button disabled">Try it Yourself</button>
      </div>
        <p class="p-1">
          You will learn more about links in our
          <a href="">HTML Links chapter.</a>
        </p>
    </section>

    <hr/>

    <!-- The src Attribute -->
    <section>
      <div class="d-flex-column h-5">
        <p class="text-size-2">The src Attribute</p>
        <p>
          The 
          <span class="w4-codespan">&lt;img&gt;</span>
          tag is used to embed an image in an HTML page. The
          <span class="w4-codespan">&lt;scr&gt;</span>
          attribute specifies the path to the image to be displayed:
        </p>
      </div>
      <div class="code-example-container h-8">
        <p>Example</p>
        <div class="code-example-inner-container h-2">
          <div class="code-example-inner-mini-container h-2">
            <span class="color-mediumblue">&lt;</span>
            <span class="color-brown mr-0-5">img </span>
            <span class="color-red">href</span>
            <span class="color-black">=</span>
            <span class="color-mediumblue">"img_girl.jpg"</span>
            <span class="color-mediumblue">></span>
          </div>
        </div>
        <!-- <button class="w4-button" v-on:click='handleRouteToTryIt'>Try it Yourself</button> -->
        <button class="w4-button disabled">Try it Yourself</button>
      </div>
    </section>

    <hr/>
    
    <!-- The width and height Attributes -->
    <section>
      <div class="d-flex-column h-5">
        <p class="text-size-2">The width and height Attributes</p>
        <p>
          The 
          <span class="w4-codespan">&lt;img&gt;</span>
            tag should also contain the
          <span class="w4-codespan">&lt;width&gt;</span>
          and
          <span class="w4-codespan">&lt;height&gt;</span>
          attributes, which specifies the width and height of the image (in pixels):
        </p>
      </div>
      <div class="code-example-container h-8">
        <p>Example</p>
        <div class="code-example-inner-container h-2">
          <div class="code-example-inner-mini-container h-2">
            <span class="color-mediumblue">&lt;</span>
            <span class="color-brown mr-0-5">img</span>
            <span class="color-red">href</span>
            <span class="color-black">=</span>
            <span class="color-mediumblue mr-0-5">"img_girl.jpg"</span>
            <span class="color-brown">width</span>
            <span class="color-black">=</span>
            <span class="color-mediumblue mr-0-5">"500"</span>
            <span class="color-red">height</span>
            <span class="color-black">=</span>
            <span class="color-mediumblue">"600"</span>
            <span class="color-mediumblue">></span>
          </div>
        </div>
        <!-- <button class="w4-button" v-on:click='handleRouteToTryIt'>Try it Yourself</button> -->
        <button class="w4-button disabled">Try it Yourself</button>
      </div>
    </section>
    
    <hr />

    <!-- The alt Attribute -->
    <section>
      <div class="d-flex-column h-6">
        <p class="text-size-2">The alt Attribute</p>
        <p>
          The required 
          <span class="w4-codespan">&lt;alt&gt;</span>
            attribute for the 
          <span class="w4-codespan">&lt;img&gt;</span>
          tag specifies an alternate text for an image, if the image for some reason cannot be displayed. This can be due to slow connection, or an error in the
          <span class="w4-codespan">&lt;scr&gt;</span>
          attribute, or if the user uses a screen reader.
        </p>
      </div>
      <div class="code-example-container h-8">
        <p>Example</p>
        <div class="code-example-inner-container h-2">
          <div class="code-example-inner-mini-container h-2">
            <span class="color-mediumblue">&lt;</span>
            <span class="color-brown mr-0-5">img</span>
            <span class="color-red">href</span>
            <span class="color-black">=</span>
            <span class="color-mediumblue mr-0-5">"img_girl.jpg"</span>
            <span class="color-brown">alt</span>
            <span class="color-black">=</span>
            <span class="color-mediumblue mr-0-5">"Girl with a jacket"</span>
          </div>
        </div>
        <!-- <button class="w4-button" v-on:click='handleRouteToTryIt'>Try it Yourself</button> -->
        <button class="w4-button disabled">Try it Yourself</button>
      </div>
        <div class="code-example-container h-10">
        <p>Example</p>
        <p class="text-size-1">See what happens if we try to display an image that does not exist:</p>
        <div class="code-example-inner-container h-2">
          <div class="code-example-inner-mini-container h-2">
            <span class="color-mediumblue">&lt;</span>
            <span class="color-brown mr-0-5">img</span>
            <span class="color-red">href</span>
            <span class="color-black">=</span>
            <span class="color-mediumblue mr-0-5">"img_typo.jpg"</span>
            <span class="color-brown">alt</span>
            <span class="color-black">=</span>
            <span class="color-mediumblue mr-0-5">"Girl with a jacket"</span>
          </div>
        </div>
        <!-- <button class="w4-button" v-on:click='handleRouteToTryIt'>Try it Yourself</button> -->
        <button class="w4-button disabled">Try it Yourself</button>
      </div>
        <p class="p-1">
          You will learn more about links in our
          <a href="">HTML Links chapter.</a>
        </p>
    </section>

    <hr />

    <div class="ad-placeholder">
      <p></p>
    </div>

    <hr />

    <!-- The style Attribute -->
    <section>
      <div class="d-flex-column h-5">
        <p class="text-size-2">The style Attribute</p>
        <p>
          The 
          <span class="w4-codespan">&lt;style&gt;</span>
            attribute is used to add styles to an element, such as color, font, size, and more.
        </p>
      </div>
      <div class="code-example-container h-8">
        <p>Example</p>
        <div class="code-example-inner-container h-2">
          <div class="code-example-inner-mini-container h-2">
            <span class="color-mediumblue">&lt;</span>
            <span class="color-brown mr-0-5">p</span>
            <span class="color-red">style</span>
            <span class="color-black">=</span>
            <span class="color-mediumblue mr-0-5">"color: red;"</span>
            <span class="color-mediumblue">></span>
            <span>This is a red paragraph.</span>
            <span class="color-mediumblue">&lt;</span>
            <span class="color-brown">/p</span>
            <span class="color-mediumblue">></span>
          </div>
        </div>
        <!-- <button class="w4-button" v-on:click='handleRouteToTryIt'>Try it Yourself</button> -->
        <button class="w4-button disabled">Try it Yourself</button>
      </div>
        <p class="p-1">
          You will learn more about styles in our
          <a href="">HTML Styles chapter.</a>
        </p>
    </section>
    
    <hr />

    <!-- The lang Attribute -->
    <section>
      <div class="d-flex-column h-8">
        <p class="text-size-2">The lang Attribute</p>
        <p>
          You should always include the
          <span class="w4-codespan">&lt;lang&gt;</span>
            attribute inside the
          <span class="w4-codespan">&lt;html&gt;</span>
          tag, to declare the language of the Web page. This is meant to assist search engines and browsers.
        </p>
        <p>The following example specifies English as the language:</p>
      </div>
      <div class="code-example-container">
        <div class="code-example-inner-container h-9">
          <div>
            <span class="tagcolor">&lt;</span>
            <span class="color-brown">!DOCTYPE </span>
            <span class="color-red">html</span>
            <span class="tagcolor">></span>

            <br />
            
            <span class="tagcolor">&lt;</span>
            <span class="color-brown mr-0-5">html</span>
            <span class="color-red">lang</span>
            <span>=</span>
            <span class="color-mediumblue">"en"</span>
            <span class="tagcolor">></span>

            <br />
            
            <span class="tagcolor">&lt;</span>
            <span class="color-brown">body</span>
            <span class="tagcolor">></span>
          </div>

          <div>
            <span class="pl">...</span>
          </div>
          
          <div>
            <span class="tagcolor">&lt;</span>
            <span class="color-brown">/body</span>
            <span class="tagcolor">></span>

            <br />

            <span class="tagcolor">&lt;</span>
            <span class="color-brown">/html</span>
            <span class="tagcolor">></span>
          </div>

        </div>
      </div>
      <div class="d-flex-column h-5 p-1">
        <p>
          Country codes can also be added to the language code in the
          <span class="w4-codespan">&lt;lang&gt;</span>
            attribute. So, the first two characters define the language of the HTML page, and the last two characters define the country.
          tag, to declare the language of the Web page. This is meant to assist search engines and browsers.
        </p>
        <p>The following example specifies English as the language and United States as the country:</p>
      </div>
      <div class="code-example-container">
        <div class="code-example-inner-container h-9">
          <div>
            <span class="tagcolor">&lt;</span>
            <span class="color-brown">!DOCTYPE </span>
            <span class="color-red">html</span>
            <br />
            
            <span class="tagcolor">&lt;</span>
            <span class="color-brown mr-0-5">html</span>
            <span class="color-red">lang</span>
            <span>=</span>
            <span class="color-mediumblue">"en-US"</span>
            <span class="tagcolor">></span>
            <br />
            
            <span class="tagcolor">&lt;</span>
            <span class="color-brown">body</span>
            <span class="tagcolor">></span>
          </div>

          <div>
            <span class="pl">...</span>
          </div>
          
          <div>
            <span class="tagcolor">&lt;</span>
            <span class="color-brown">/body</span>
            <span class="tagcolor">></span>

            <br />

            <span class="tagcolor">&lt;</span>
            <span class="color-brown">/html</span>
            <span class="tagcolor">></span>
          </div>

        </div>
      </div>
      <p class="p-1">
        You can see all the language codes in our
        <a href="">HTML Language Code Reference.</a>
      </p>
    </section>

    <hr />

    <!-- The title Attribute -->
    <section>
      <div class="d-flex-column h-8">
        <p class="text-size-2">The title Attribute</p>
        <p>
          The 
          <span class="w4-codespan">&lt;title&gt;</span>
            attribute defines some extra information about an element.
        </p>
        <p>The value of the title attribute will be displayed as a tooltip when you mouse over the element:</p>
      </div>
      <div class="code-example-container h-8">
        <p>Example</p>
        <div class="code-example-inner-container h-2">
          <div class="code-example-inner-mini-container h-2">
            <span class="color-mediumblue">&lt;</span>
            <span class="color-brown mr-0-5">p</span>
            <span class="color-red">title</span>
            <span class="color-black">=</span>
            <span class="color-mediumblue mr-0-5">"I'm a tooltip"</span>
            <span class="color-mediumblue">></span>
            <span>This is a red paragraph.</span>
            <span class="color-mediumblue">&lt;</span>
            <span class="color-brown">/p</span>
            <span class="color-mediumblue">></span>
          </div>
        </div>
        <!-- <button class="w4-button" v-on:click='handleRouteToTryIt'>Try it Yourself</button> -->
        <button class="w4-button disabled">Try it Yourself</button>
      </div>
    </section>

    <!-- We Suggest: Always Use Lowercase Attributes -->
    <section class="d-flex-column">
      <div class="d-flex-column h-15">
        <p class="text-size-2">We Suggest: Always Use Lowercase Attributes</p>
        <p>The HTML standard does not require lowercase attribute names.</p>
        <p>The title attribute (and all other attributes) can be written with uppercase or lowercase like <strong>title</strong> or </strong>TITLE</strong>.</p>
        <p>However, W3C <strong>recommends</strong>lowercase attributes in HTML, and <strong>demands</strong>lowercase attributes for stricter document types like XHTML.</p>

      </div>
      <div class="note-container">
          <p>
          <strong>Note:</strong>
          At W4Schools we always use lowercase attribute names.
        </p>
      </div>
    </section>

    <hr />

    <!-- We Suggest: Always Quote Attribute Values -->
    <section class="container">
      <div class="d-flex-column" v-bind:class='state.attributesStyle'>
        <p class="text-size-2">We Suggest: Always Quote Attribute Values</p>
        <p>The HTML standard does not require quotes around attribute values.</p>
        <p>However, W3C <strong>recommends</strong>quotes in HTML, and<strong>demands</strong>quotes for stricter document types like XHTML.</p>
      </div>
      <div class="code-example-container h-5">
        <p>Good:</p>
        <div class="code-example-inner-container h-2">
          <div class="code-example-inner-mini-container h-2">
            <span class="color-mediumblue">&lt;</span>
            <span class="color-brown mr-0-5">a</span>
            <span class="color-red">href</span>
            <span class="color-black">=</span>
            <span class="color-mediumblue">"https://www.w4schools.com/html/"</span>
            <span class="color-mediumblue">></span>
            <span>Visit our HTML tutorial</span>
            <span class="color-mediumblue">&lt;</span>
            <span class="color-brown">/a</span>
            <span class="color-mediumblue">></span>
          </div>
        </div>
      </div>
      <div class="code-example-container h-5">
        <p>Bad:</p>
        <div class="code-example-inner-container h-2">
          <div class="code-example-inner-mini-container h-2">
            <span class="color-mediumblue">&lt;</span>
            <span class="color-brown mr-0-5">a</span>
            <span class="color-red">href</span>
            <span class="color-black">=</span>
            <span class="color-mediumblue">https://www.w4schools.com/html/</span>
            <span class="color-mediumblue">></span>
            <span>Visit our HTML tutorial</span>
            <span class="color-mediumblue">&lt;</span>
            <span class="color-brown">/a</span>
            <span class="color-mediumblue">></span>
          </div>
        </div>
      </div>
      <p class="p-1">
        Sometimes you have to use quotes. This example will not display the title attribute correctly, because it contains a space:
      </p>
      <div class="code-example-container h-8">
        <p>Example</p>
        <div class="code-example-inner-container h-2">
          <div class="code-example-inner-mini-container h-2">
            <span class="color-mediumblue">&lt;</span>
            <span class="color-brown mr-0-5">p</span>
            <span class="color-red">title</span>
            <span class="color-black">=</span>
            <span class="color-mediumblue mr-0-5">About</span>
            <span class="color-red">W4Schools</span>

            <span class="color-mediumblue">></span>
          </div>
        </div>
        <!-- <button class="w4-button" v-on:click='handleRouteToTryIt'>Try it Yourself</button> -->
        <button class="w4-button disabled">Try it Yourself</button>
      </div>
      <div class="note-container">
          <p>
          <strong>Note:</strong>
          At W4Schools we always use lowercase attribute names.
        </p>
      </div>
    </section>

    <hr />

    <!-- Single or Double Quotes? -->
    <section class="container">
      <div class="d-flex-column h-8">
        <p class="text-size-2">Single or Double Quotes?</p>
        <p>Double quotes around attribute values are the most common in HTML, but single quotes can also be used.</p>
        <p>In some situations, when the attribute value itself contains double quotes, it is necessary to use single quotes:</p>
      </div>
      <div class="code-example-container">
        <div class="code-example-inner-container h-2">
          <div class="code-example-inner-mini-container h-2">
            <span class="color-mediumblue">&lt;</span>
            <span class="color-brown mr-0-5">p</span>
            <span class="color-red">title</span>
            <span class="color-black">=</span>
            <span class="color-mediumblue mr-0-5">About</span>
            <span class="color-red">W4Schools</span>

            <span class="color-mediumblue">></span>
          </div>
        </div>
      </div>
      <p class="p-1">
        Or vice versa:
      </p>
      <div class="code-example-container h-5">
        <div class="code-example-inner-container h-2">
          <div class="code-example-inner-mini-container h-2">
            <span class="color-mediumblue">&lt;</span>
            <span class="color-brown mr-0-5">p</span>
            <span class="color-red">title</span>
            <span class="color-black">=</span>
            <span class="color-mediumblue mr-0-5">About</span>
            <span class="color-red">W4Schools</span>

            <span class="color-mediumblue">></span>
          </div>
        </div>
        <!-- <button class="w4-button" v-on:click='handleRouteToTryIt'>Try it Yourself</button> -->
        <button class="w4-button disabled">Try it Yourself</button>
      </div>
    </section>

    <hr />

    <!-- Chapter Summary -->
    <section class="container">
      <p class="text-size-2">Chapter Summary</p>
      <ul title="list">
        <li>All HTML elements can have <strong>attributes</strong></li>
        <li>The <span class="w4-codespan">href</span> attribute of <span class="w4-codespan">&lt;a&gt;</span>specifies the URL of the page the link goes to</li>
        <li>The <span class="w4-codespan">scr</span> attribute of <span class="w4-codespan">&lt;img&gt;</span>specifies the path to the image to be displayed</li>
        <li>The <span class="w4-codespan">width</span> and <span class="w4-codespan">height</span> attributes of <span class="w4-codespan">&lt;img&gt;</span>provide size information for images</li>
        <li>The <span class="w4-codespan">alt</span> attribute of <span class="w4-codespan">&lt;img&gt;</span>provides an alternate text for an image</li>
        <li>The <span class="w4-codespan">style</span> attribute is used to add styles to an element, such as color, font, size, and more</li>
        <li>The <span class="w4-codespan">lang</span> attribute of <span class="w4-codespan">&lt;html&gt;</span>tag declares the language of the Web page</li>
        <li>The <span class="w4-codespan">title</span> attribute defines some extra information about an element</li>
      </ul>
    </section>

    <hr />

    <!-- HTML Attribute Reference -->
    <section class="d-flex-column h-8">
      <p class="text-size-2">HTML Attribute Reference</p>
      <div class="note-container">
          <p>
          <strong>Note:</strong>
          A complete list of all attributes for each HTML element, is listed in our:
          <a href="">HTML Attribute Reference.</a>
        </p>
      </div>
    </section>

    <div class="group-button-container">
      <button class="w4-btn" v-on:click='handleRouteTo("/html/elements")'>&lt;Previous</button>
      <button class="w4-btn disabled">Next></button>  
    </div>

  </main>
</template>

<script lang="ts">
import Vue from 'vue'

const HtmlAttributes = Vue.extend({
  name: 'HtmlAttributes',
  data: function () {
    return {
      state: {
        attributesStyle: ''
      } 
    }
  },

  created() {
    if (window.screen.width <= 414) {
      this.state.attributesStyle = 'h-12'
    } else {
      this.state.attributesStyle = 'h-10'
    }
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

export default HtmlAttributes

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

.code-example-container {
  background-color: #f1f1f1;
  font-size: 1.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.htmlElements-table-container {
  display: flex;
  width: 100%;
  height: 10rem;
  border-top: 1px solid  #ddd;
  border-right: 1px solid  #ddd;
  border-left: 1px solid  #ddd;

}
.htmlElements-table-container > tbody {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
}

.note-container {
  height: 4rem;
  background-color: #ffffcc;
  width: 100%;
  display: flex;
  align-items: center;
}
.note-container > p {
  padding: 1rem;
}

.table-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
}
.table-container > tbody > tr {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #ddd;
  height: 40px;
  
  align-items: center;
}
.table-container > tbody > tr > th:nth-child(1),
.table-container > tbody > tr > td:nth-child(1) {
  width: 25%;
  text-align: left;
  padding-left: 1rem;
}
.table-container > tbody > tr > th:nth-child(2),
.table-container > tbody > tr > td:nth-child(2) {
  width: 75%;
  text-align: left;
}
.table-container > tbody > tr:nth-child(even) {
  background-color: #f1f1f1;
}

@media only screen and (max-device-width: 480px) {
  #htmlAttributes {
    width: 448px;
  }
  #htmlAttributes > section > div.code-example-container > .code-example-inner-container {
    font-size: 0.8rem;
  }
}
</style>