<template>
  <div id="app" v-bind:class='state.appStyle'>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from './components/navbar/Navbar.vue'
import NavbarItems from './components/navbarItems/NavbarItems.vue'

interface IAppState {
  state: {
    appStyle: string
  }
}

export default {
  name: 'App',
  components: {
    Navbar,
    NavbarItems
  },
  data(): IAppState {
    return {
      state: {
        appStyle: ''
      } 
    } 
  },
  created() {
    if (window.screen.width <= 414) {
      this.state.appStyle = 'w-30:2'
    } else if (window.screen.width <= 768) {
      this.state.appStyle = 'w-48'
    } else {
      this.state.appStyle = ''
    }
  },
}

</script>

<style>
*, *::before, *::after {
  padding: 0px;
  margin: 0px;
}

#app {
  display: flex;
  flex-direction: column;
}


.h-2 {
  height: 2rem;
}
.h-3 {
  height: 3rem;
}
.h-4 {
  height: 4rem;
}
.h-5 {
  height: 5rem;
}
.h-6 {
  height: 6rem;
}
.h-8 {
  height: 8rem;
}

.h-10 {
  height: 10rem;
}
.h-12 {
  height: 12rem;
}
.h-13 {
  height: 13rem;
}
.h-15 {
  height: 15rem;
}
.h-17 {
  height: 17rem;
}
.h-20 {
  height: 20rem;
}
.h-21 {
  height: 21rem;
}
.h-22 {
  height: 22rem;
}
.h-23 {
  height: 23rem;
}
.h-24 {
  height: 24rem;
}
.h-25 {
  height: 25rem;
}
.h-30 {
  height: 30rem;
}
.h-35 {
  height: 35rem;
}

.w-90 {
  width: 90%;
}
.w-100 {
  width: 100%;
}
.w-1 {
  width: 100rem;
}

.text-size-1 {
  font-size: 1rem;
}
.text-size-1-2 {
  font-size: 1.5rem;
}
.text-size-2 {
  font-size: 2rem;
}

.text-bold {
  font-weight: bold;
}
.container {
  margin-bottom: 1rem;
  margin-top: 1rem;
}
.container > ul[title] {
  padding-left: 2rem;
  margin-top: 1rem;
}

.d-flex-column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: 1rem;
  align-items: flex-start;
}

.p-0-5 {
  padding: 0.5rem;
}
.p-1 {
  padding: 1rem;
}

.pl {
  padding-left: 1rem;
}

.ml-1 {
  margin-left: 1rem;
}
.mr-0-5 {
  margin-right: 0.5rem;
}

.border-black {
  border: 1px solid black;
}
.border-grey {
  border: 1px solid grey;
}

.disabled:hover {
  cursor: not-allowed;
}

.section-container {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}
.group-button-container {
  display: flex;
  justify-content: space-between;
}
.title-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
.title-container > p {
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-size: 2.5rem;
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
.code-example-mini-container {
  background-color: #f1f1f1;
  font-size: 1.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
}

.code-example-inner-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-left: 5px solid #4CAF50;
  font-size: 1.2rem;
  padding-left: 1rem;
}
.code-example-inner-mini-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.item-center {
  align-content: center;
}

.tagcolor {
  color: mediumblue;
}

.color-mediumblue {
  color: mediumblue;
}

.color-red {
  color: red;
}

.color-black {
  color: black;
}

.color-brown {
  color: brown;
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

.w4-info {
  background-color: #d4edda;
  height: 14rem;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.w4-info > button {
  height: 40px;
  width: 14rem;
  font-size: 1rem;
  background-color: #4CAF50;
  border: none;
  cursor: pointer;
  color: white;
  outline: none;
}

.d-flex-gird > button {
  height: 60px;
  cursor: pointer;
  border: 2px solid #f1f1f1;
  outline: none;
}

.d-flex-gird > button:hover {
  background-color: #555;
  color: white;
}

@media only screen and (max-width: 480px) {
  #app {
    width: 100%;
  }

  #app.w-30\:2 {
    width: 30.2rem;
  }
}

@media only screen and (max-width: 768px) {
  #app.w-48 {
    width: 48rem;
  }
}

@media only screen and (min-width: 768px) {
  #app {
    width: 100rem;
  }
}

</style>
