<template>
  <div class="code-example-container h-21">
    <p>Example</p>
    <div class="code-example-inner-container h-13">
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
        <span class="color-red">body</span>
        <span class="tagcolor">></span>
      </div>

      <div>
        <span class="tagcolor">&lt;</span>
        <span class="color-red">h1</span>
        <span class="tagcolor">></span>
        <span>{{ h1Text }}</span>
        <span class="tagcolor">&lt;</span>
        <span class="color-red">/h1</span>
        <span class="tagcolor">></span>

        <br />
        
        <span class="tagcolor">&lt;</span>
        <span class="color-red">p</span>
        <span class="tagcolor">></span>
        <span>{{ pText }}</span>
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
    <!-- <button class="w4-button" v-on:click='handleRouteToTryIt'>Try it Yourself</button> -->
    <button class="w4-button disabled">Try it Yourself</button>
  </div>
</template>

<script>
export default {
  name: 'DocumentsUI',
  props: {
    h1Text: {
      type: String,
      required: true
    },
    pText: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>