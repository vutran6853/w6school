<template>
  <button v-on:click='handleCallGetDataFromPartent' />
</template>

<script>
export default {

props: {
  handleEmitBackToParent: {
    types: Function,
    required: true
  }
},
methods: {
  handleCallGetDataFromPartent() {
    // logic here
    this.handleEmitBackToParent()
  }
}
}
</script>