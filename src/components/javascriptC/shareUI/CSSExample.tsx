import Vue from 'vue'

import './cSSExample.css'

const CSSExample = Vue.extend({
  render() {
    return (
      <div class="cssHome-section-example-item-right-container">
        <p>CSS Example</p>
        <div class="code-example-inner-container h-18">
          <div>
            <span class="color-brown">body</span>
            <span class="color-brown">{'{'}</span>
            <br />

            <span class="color-red pl-1"> background-color: </span>
            <span class="color-mediumblue">lightblue</span>
            <span class="color-black">;</span>

            <br />
            <span class="color-brown">{'}'}</span>
            <br />
            <br />

            <span class="color-brown">h1 </span>
            <span class="color-brown">{'{'}</span>
            <br />

            <span class="color-red pl-1"> color: </span>
            <span class="color-mediumblue"> lightblue</span>
            <span class="color-black">;</span>

            <br />

            <span class="color-red pl-1"> text-align: </span>
            <span class="color-mediumblue"> lightblue</span>
            <span class="color-black">;</span>
            <br />
            <span class="color-brown">{'}'}</span>
            <br />
            <br />

            <span class="color-brown">p </span>
            <span class="color-brown">{'{'}</span>
            <br />

            <span class="color-red pl-1"> font-family: </span>
            <span class="color-mediumblue"> verdana</span>
            <span class="color-black">;</span>
            <br />

            <span class="color-red pl-1">font-size: </span>
            <span class="color-mediumblue">20px</span>
            <span class="color-black">;</span>

            <br />
            <span class="color-brown">{'}'}</span>
            <br />
          </div>
        </div>
        <button class="w6-button disabled">Try it Yourself</button>
      </div>     
    )
  }
})

export default CSSExample