<template>
  <div>
    <Navbar />
    <NavbarItems />
    <div class="main-container">

      <div class="main-side-left-container">
        <div class="main-side-items-container">
          <h3>HTML and CSS</h3>
          <p class="available" v-on:click='handleRouteTo("/html")'>Learn HTML</p>
          <p>Learn CSS</p>
          <p>Learn Bootstrap</p>
          <p>Learn W4.CSS</p>
          <p>Learn Colors</p>
          <p>Learn Icons</p>
          <p>Learn Graphices</p>
          <p>Learn SVG</p>
          <p>Learn Canvas</p>
          <p>Learn How To</p>
          <p>Learn Sass</p>
        </div>

        <div class="main-side-items-container">
          <h3>JavaScript</h3>
          <p>Learn JavaScript</p>
          <p>Learn jQuery</p>
          <p>Learn React</p>
          <p>Learn AngularJS</p>
          <p>Learn JSON</p>
          <p>Learn AJAX</p>
          <p>Learn W4.JS</p>
        </div>


        <div class="main-side-items-container">
          <h3>Server Side</h3>
          <p>Learn SQL</p>
          <p>Learn PHP</p>
          <p>Learn ASP</p>
          <p>Learn Node.js</p>
          <p>Learn Raspberry Pi</p>
        </div>


        <div class="main-side-items-container">
          <h3>Programming</h3>
          <p>Learn Python</p>
          <p>Learn Java</p>
          <p>Learn C++</p>
          <p>Learn C#</p>
          <p>Learn Machine Learning</p>
        </div>

        <div class="main-side-items-container">
          <h3>Web Building</h3>
          <p>Web Templates</p>
          <p>Web Statistice</p>
          <p>Web Certificates</p>
          <p>Web Editor</p>
          <p>Web Development</p>
        </div>

      </div> 

      <div>
        <!-- HTML SECTION -->
        <section class="code-section-example-container">
          <div class="code-section-example-item-left-container">
            <h3>HTML</h3>
            <p>The language for building web pages</p>
            <div class="code-section-example-item-left-group-button">
              <button class="w4-button-grey" v-on:click='handleRouteTo("html")'>LEARN HTML</button>
              <button class="w4-button-grey disabled">HTML REFERENCE</button>  
            </div>
          </div>

          <div class="code-section-example-item-right-container">
            <h3>HTML Example:</h3>

            <div class="code-example-html-example-container">
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
                <span class="color-red">title</span>
                <span class="tagcolor">></span>
                <span>HTML Tutorial</span>
                <span class="tagcolor">&lt;</span>
                <span class="color-red">/title</span>
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
        </section>

        <!-- CSS SECTION -->
        <section class="code-section-example-container">
          <div class="code-section-example-item-left-container">
            <h3>CSS</h3>
            <p>The language for styling web pages</p>
            <div class="code-section-example-item-left-group-button">
              <button class="w4-button-grey disabled">LEARN CSS</button>
              <button class="w4-button-grey disabled">CSS REFERENCE</button>  
            </div>
          </div>

          <div class="code-section-example-item-right-container">
            <h3>CSS Example:</h3>

            <div class="code-example-html-example-container">
              <div>
                <span class="color-brown">body</span>
                <span class="color-brown"> {</span>
                <br />

                <span class="color-red"> background-color: </span>
                <span class="color-mediumblue">lightblue</span>
                <span class="color-black">;</span>
                <br />
                <span class="color-brown"> }</span>
                <br />
                <br />

                <span class="color-brown">h1 </span>
                <span class="color-brown"> {</span>
                <br />

                <span class="color-red"> color: </span>
                <span class="color-mediumblue"> lightblue</span>
                <span class="color-black">;</span>

                <br />

                <span class="color-red"> text-align: </span>
                <span class="color-mediumblue"> lightblue</span>
                <span class="color-black">;</span>
                <br />
                <span class="color-brown"> }</span>
                <br />
                <br />

                <span class="color-brown">p </span>
                <span class="color-brown"> {</span>
                <br />

                <span class="color-red"> font-family: </span>
                <span class="color-mediumblue"> verdana</span>
                <span class="color-black">;</span>
                <br />

                <span class="color-red">font-size: </span>
                <span class="color-mediumblue">20px</span>
                <span class="color-black">;</span>

                <br />
                
                <span class="color-brown"> }</span>
                
                <br />


              </div>

            </div>

            <button class="w4-button disabled">Try it Yourself</button>
          </div>
        </section>

        <!-- JavaScript SECTION -->
        <section class="code-section-example-container">
          <div class="code-section-example-item-left-container">
            <h3>JavaScript</h3>
            <p>The language for programming web pages</p>
            <div class="code-section-example-item-left-group-button">
              <button class="w4-button-grey disabled">LEARN JAVASCRIPT</button>
              <button class="w4-button-grey disabled">JAVASCRIPT REFERENCE</button>  
            </div>
          </div>

          <div class="code-section-example-item-right-container">
            <h3>JAVASCRIPT Example:</h3>

            <div class="code-example-html-example-container">
              <div>
                <span class="color-mediumblue">&lt;</span>
                <span class="color-brown">button </span>
                <span class="color-red">onclick</span>
                <span class="color-mediumblue">="myFunction()"></span>
                <span class="">Click Me!</span>
                <span class="color-brown">&lt;/button></span>

                <br />
                <br />
                <span class="tagcolor">&lt;</span>
                <span class="color-red">script</span>
                <span class="tagcolor">></span>

                <br />

                <span class="color-mediumblue">function </span>
                <span class="color-black">myFunction() {</span>

                <br />

                <span class="color-mediumblue">var </span>
                <span class="">x = document.getElementById(</span>
                <span class="color-brown">"demo"</span>
                <span class="">);</span>

                <br />
                <span class="">x.style.fontSize = </span>
                <span class="color-brown">"25px"</span>
                <span class="">;</span>

                <br />
                <span class="">x.style.color  = </span>
                <span class="color-brown">"red"</span>
                <span class="">;</span>

                <br />
                
                <span class="">}</span>

                <br />
                
                <span class="tagcolor">&lt;</span>
                <span class="color-red">/script</span>
                <span class="tagcolor">></span>

              </div>
                  
            </div>

            <button class="w4-button disabled">Try it Yourself</button>
          </div>
        </section>

        <!-- SQL SECTION -->
        <section class="code-section-example-container">
          <div class="code-section-example-item-left-container">
            <h3>SQL</h3>
            <p>A language for accessing databases</p>
            <div class="code-section-example-item-left-group-button">
              <button class="w4-button-grey disabled">LEARN SQL</button>
              <button class="w4-button-grey disabled">SQL REFERENCE</button>  
            </div>
          </div>

          <div class="code-section-example-item-right-container">
            <h3>SQL Example:</h3>

            <div class="code-example-html-example-container">
              <div>
                <span class="color-mediumblue">SELECT</span>
                <span class="color-black"> * </span>
                <span class="color-mediumblue">FROM </span>
                <span class="color-black">Customers</span>
                <br />
                
                <span class="color-mediumblue">WHERE</span>
                <span class="color-black"> Country = </span>
                <span class="color-brown">'Mexico'</span>
                <span class="color-black">;</span>

                <br />

              </div>
                  
            


            </div>

            <button class="w4-button disabled" ref="Nom">Try it Yourself</button>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '../navbar/Navbar.vue'
import NavbarItems from '../navbarItems/NavbarItems.vue'
import { action } from '../../store/store'

const Main = Vue.extend({
  name: 'Main',
  components: {
    Navbar,
    NavbarItems
  },
  created() {
    this.$store.dispatch(action.setNavbarItemsToDefault)
  },
  mounted() {
    // console.log('window.innerHeight', window.innerHeight)
    console.log('innerWidth', window.screen)
  },
  methods: {
    handleRouteTo(urlPath: string) {
      this.$router.push({
        path: urlPath
      })
    }
  }
})

export default Main
</script>

<style>
@import url(../htmlC/shareStyle/shareStyle.css);

.main-container {
  display: grid;
  grid-template-columns: 14rem 1fr;
  font-size: 1.1rem;
}

.main-side-left-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 1rem;
}

.main-side-items-container {
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.main-side-items-container > h3 {
  margin-bottom: 1rem;
}

.main-side-items-container > p {
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
}

.main-side-items-container > p:hover {
  cursor: not-allowed;
  background-color: gray;
}

.main-side-items-container > .available:hover {
  background-color: gray;
  cursor: pointer;
}


.code-section-example-item-right-container {
  border: 2px solid lightgray;
  background-color: #f1f1f1;
  height: 25rem;
  width: 25rem;
  margin: auto;
  box-shadow: 0.2rem 0.2rem lightgray;
  font-size: 1.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.code-example-html-example-container {
  display: flex;
  flex-direction: column;
  height: 18rem;
  background-color: white;
  border-left: 5px solid #4CAF50;
  /* margin: 1rem; */
  font-size: 1.2rem;
  justify-content: space-between;
  padding-left: 1rem;
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

@media only screen and (max-width: 480px) {
  .main-container {
    grid-template-columns: 1fr;
  }
  .main-container > div.main-side-left-container {
    display: none;
  }

  .main-container > div:nth-child(2) {
    width: 100%;
  }

  .main-container > div:nth-child(2) > section > div:nth-child(2) {
    display: none;
  }

  .main-container > div:nth-child(2) > section.code-section-example-container {
    /* background-color: rebeccapurple; */
    grid-template-columns: 10rem;
    border: none;
  }
  
  .main-container > div:nth-child(2) > section.code-section-example-container {
    /* width: 100%; */
    height: 100%;
  } 

  .main-container > div:nth-child(2) > section.code-section-example-container:nth-child(odd) > .code-section-example-item-left-container {
    width: 30.2rem;
    /* background-color: red; */
  }
    .main-container > div:nth-child(2) > section.code-section-example-container:nth-child(even) > .code-section-example-item-left-container {
    width: 30.2rem;
    /* background-color: blue; */
  }
}
@media (max-width: 768px) and (min-width: 481px) {
/* @media only screen and (max-width: 768px) { */
    .main-container {
    /* background-color: red; */
    /* grid-template-columns: 1fr; */
  }
  .main-container > div:nth-child(2) > section.code-section-example-container {
    display: flex;
    flex-direction: column;
    height: 42rem;
  }
}
</style>
