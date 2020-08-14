<template>
  <div id="htmlElements" style="border-left: 3px solid gainsboro;">
    <section class="section-container">
      <div class="title-container">
        <p>HTML Elements</p>
        <div class="group-button-container">
          <button class="w4-btn" v-on:click='handleRouteTo("/html/basic")'>&lt;Previous</button>
          <button class="w4-btn" v-on:click='handleRouteTo("/html/attributes")'>Next ></button>  
        </div>
      </div>

      <hr/>
      
      <div class="d-flex-column">
        <p>An HTML element is defined by a start tag, some content, and an end tag.</p>
      </div>

      <hr/>

      <ElementUI title='HTML Elements' />

      <hr/>

      <div class="d-flex-column h-10">
        <p class="text-size-2">Nested HTML Elements</p>
        <p>HTML elements can be nested (this means that elements can contain other elements).</p>
        <p>All HTML documents consist of nested HTML elements.</p>
        <p>
          The following example contains four HTML elements (
            <span class="w4-codespan">&lt;html&gt;</span>,
            <span class="w4-codespan">&lt;body&gt;</span>,
            <span class="w4-codespan">&lt;h1&gt;</span>,
            <span class="w4-codespan">&lt;p&gt;</span> ):
        </p>
      </div>
       
      <DocumentsUI h1Text='My First Heading' pText='My first paragraph.' />

      <div id="htmlElements-example-explained-container">
        <div class="d-flex-column h-10">
          <p class="text-size-1-2">Example Explained</p>
          <p>
            The
            <span class="w4-codespan">&lt;html&gt;</span>,
            element is the root element and it defines the whole HTML document.
          </p>
          <p>
            It has a start tag
            <span class="w4-codespan">&lt;html&gt;</span>
            and an end tag
            <span class="w4-codespan">&lt;/html&gt;</span>
            .
          </p>
          <p>
            Then, inside the
            <span class="w4-codespan">&lt;html&gt;</span>
            element there is a
            <span class="w4-codespan">&lt;body&gt;</span>
            element:
          </p>
        </div>

        <div class="code-example-mini-container h-10">
          <div class="code-example-inner-container">
            <div>
              <span class="color-mediumblue">&lt;</span>
              <span class="color-brown">body</span>
              <span class="color-mediumblue">&gt;</span>
            </div>
            <br />
            <div>
              <span class="color-mediumblue">&lt;</span>
              <span class="color-brown">h1</span>
              <span class="color-mediumblue">&gt;</span>

              <span>My First Heading</span>
              <span class="color-mediumblue">&lt;</span>
              <span class="color-brown">/h1</span>
              <span class="color-mediumblue">&gt;</span>
            </div>
            <div>
              <span class="color-mediumblue">&lt;</span>
              <span class="color-brown">p</span>
              <span class="color-mediumblue">&gt;</span>

              <span>My first paragraph</span>
              <span class="color-mediumblue">&lt;</span>
              <span class="color-brown">/p</span>
              <span class="color-mediumblue">&gt;</span>
            </div>
            <br />
            <div>
              <span class="color-mediumblue">&lt;</span>
              <span class="color-brown">/body</span>
              <span class="color-mediumblue">&gt;</span>
            </div>
          </div>
        </div>

        <div class="d-flex-column h-6">
          <p>
            The
            <span class="w4-codespan">&lt;body&gt;</span>,
            element defines the document's body.
          </p>
          <p>
            It has a start tag
            <span class="w4-codespan">&lt;body&gt;</span>
            and an end tag
            <span class="w4-codespan">&lt;/body&gt;</span>
          </p>
          <p>
            Then, inside the
            <span class="w4-codespan">&lt;body&gt;</span>
            element there is two other elements:
            <span class="w4-codespan">&lt;h1&gt;</span>
            and
            <span class="w4-codespan">&lt;p&gt;</span>
            :
          </p>
        </div>

        <div class="code-example-mini-container h-4">
          <div class="code-example-inner-container h-3">
            <div>
              <span class="color-mediumblue">&lt;</span>
              <span class="color-brown">h1</span>
              <span class="color-mediumblue">&gt;</span>

              <span>My First Heading</span>
              <span class="color-mediumblue">&lt;</span>
              <span class="color-brown">/h1</span>
              <span class="color-mediumblue">&gt;</span>
            </div>
            <div>
              <span class="color-mediumblue">&lt;</span>
              <span class="color-brown">p</span>
              <span class="color-mediumblue">&gt;</span>

              <span>My first paragraph</span>
              <span class="color-mediumblue">&lt;</span>
              <span class="color-brown">/p</span>
              <span class="color-mediumblue">&gt;</span>
            </div>
          </div>
        </div>

        <div class="d-flex-column h-4">
          <p>
            The
            <span class="w4-codespan">&lt;h1&gt;</span>,
            element defines the document's body.
          </p>
          <p>
            It has a start tag
            <span class="w4-codespan">&lt;h1&gt;</span>
            and an end tag
            <span class="w4-codespan">&lt;/h1&gt;</span>
            :
          </p>
        </div>

        <div class="code-example-mini-container h-3">
          <div class="code-example-inner-container">
            <div class="code-example-inner-mini-container h-2">
              <span class="color-mediumblue">&lt;</span>
              <span class="color-brown">h1</span>
              <span class="color-mediumblue">&gt;</span>

              <span class="">My First Heading</span>
              <span class="color-mediumblue">&lt;</span>
              <span class="color-brown">/h1</span>
              <span class="color-mediumblue">&gt;</span>
            </div>
          </div>
        </div>


        <div class="d-flex-column h-4">
          <p>
            The
            <span class="w4-codespan">&lt;p&gt;</span>,
            element defines a paragraph.
          </p>
          <p>
            It has a start tag
            <span class="w4-codespan">&lt;p&gt;</span>
            and an end tag
            <span class="w4-codespan">&lt;/p&gt;</span>
            :
          </p>
        </div>

        <div class="code-example-mini-container h-3">
          <div class="code-example-inner-container">
            <div class="code-example-inner-mini-container h-2">
              <span class="color-mediumblue">&lt;</span>
              <span class="color-brown">p</span>
              <span class="color-mediumblue">&gt;</span>
              <span class="">My first paragraph.</span>
              <span class="color-mediumblue">&lt;</span>
              <span class="color-brown">/p</span>
              <span class="color-mediumblue">&gt;</span>
            </div>
          </div>
        </div>
      </div>

      <div class="ad-placeholder">
        <p></p>
      </div>

      <hr/>

      <div id="htmlElements-never-skip-the-end-tag-container">
        <div class="d-flex-column h-5">
          <p class="text-size-2">Never Skip the End Tag</p>
          <p>Some HTML elements will display correctly, even if you forget the end tag:</p>
        </div>
        <div class="code-example-container h-20">
          <p>Example</p>
          <div class="code-example-inner-container h-13">
            <div>
              <span class="color-mediumblue">&lt;</span>
              <span class="color-brown">html</span>
              <span class="color-mediumblue">></span>
              <br />
              <span class="color-mediumblue">&lt;</span>
              <span class="color-brown">body</span>
              <span class="color-mediumblue">></span>
            </div>

            <div>
              <span class="color-mediumblue">&lt;</span>
              <span class="color-brown">p</span>
              <span class="color-mediumblue">></span>
              <span>This is a paragraph</span>
              <br />
              
              <span class="color-mediumblue">&lt;</span>
              <span class="color-brown">p</span>
              <span class="color-mediumblue">></span>
              <span>This is a paragraph</span>
            </div>
            
            <div>
              <span class="color-mediumblue">&lt;</span>
              <span class="color-brown">/body</span>
              <span class="color-mediumblue">></span>

              <br />

              <span class="color-mediumblue">&lt;</span>
              <span class="color-brown">/html</span>
              <span class="color-mediumblue">></span>
            </div>

          </div>
          <!-- <button class="w4-button" v-on:click='handleRouteToTryIt'>Try it Yourself</button> -->
          <button class="w4-button disabled">Try it Yourself</button>
        </div>
        <p class="p-1 text-bold">However, never rely on this! Unexpected results and errors may occur if you forget the end tag!</p>
      </div>

      <hr/>

      <div>
        <div class="d-flex-column h-8">
          <p class="text-size-2">Empty HTML Elements</p>
          <p>HTML elements with no content are called empty elements.</p>
          <p>
            The 
            <span class="w4-codespan">&lt;br&gt;</span>
            tag defines a line break, and is an empty element without a closing tag:
          </p>
        </div>
        <div class="code-example-container h-8">
          <p>Example</p>
          <div class="code-example-inner-container h-2">
            <div class="code-example-inner-mini-container h-2">
              <span class="tagcolor">&lt;</span>
              <span class="color-brown">p</span>
              <span class="tagcolor">></span>
              <span>
                This is a 
                <span class="tagcolor">&lt;</span>
                <span class="color-brown">br</span>
                <span class="tagcolor">></span>
                paragraph with a line break.
              </span>
              <span class="tagcolor">&lt;</span>
              <span class="color-brown">/p</span>
              <span class="tagcolor">></span>
            </div>
          </div>
          <!-- <button class="w4-button" v-on:click='handleRouteToTryIt'>Try it Yourself</button> -->
          <button class="w4-button disabled">Try it Yourself</button>
        </div>
      </div>

      <div class="d-flex-column h-15">
        <p class="text-size-2">HTML is Not Case Sensitive</p>
        <p>HTML tags are not case sensitive: <span class="w4-codespan">&lt;P&gt;</span> means the same as <span class="w4-codespan">&lt;p&gt;</span></p>
        <p>The HTML standard does not require lowercase tags, but W3C <strong>recommends</strong> lowercase in HTML, and <strong>demands </strong> lowercase for stricter document types like XHTML.</p>
        <div id="note-container">
           <p>
            <strong>Note:</strong>
            At W4Schools we always use lowercase tag names.
          </p>
        </div>
      </div>
      
      <hr/>

      <div class="d-flex-column h-23">
        <p class="text-size-2">HTML Tag Reference</p>
        <p>W4Schools' tag reference contains additional information about these tags and their attributes.</p>
        <table class="table-container">
          <tbody>
            <tr>
              <th>Tag</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>&lt;html&gt;</td>
              <td>Defines the root of an HTML document</td>
            </tr>
            <tr>
              <td>&lt;body&gt;</td>
              <td>Defines the document's body</td>
            </tr>
            <tr>
              <td>&lt;h1&gt; to &lt;h6&gt;</td>
              <td>Defines HTML headings</td>
            </tr>
          </tbody>
        </table>
        <div class="note-container">
          <p>
          <strong>Note:</strong>
          For a complete list of all available HTML tags, visit our
          <a href="">HTML Tag Reference.</a>
        </p>
        </div>
      </div>

      <div class="group-button-container">
        <button class="w4-btn" v-on:click='handleRouteTo("/html/basic")'>&lt;Previous</button>
        <button class="w4-btn" v-on:click='handleRouteTo("/html/attributes")'>Next ></button>  
      </div>

    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ElementUI from './shareUI/ElementUI.vue'
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
    ElementUI,
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
</style>