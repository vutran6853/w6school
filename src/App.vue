<template>
  <div id="app">
    <!-- <Navbar /> -->
    <!-- <NavbarItems /> -->
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from './components/navbar/Navbar.vue'
import NavbarItems from './components/navbarItems/NavbarItems.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    NavbarItems
  }
}

</script>

<style>
*, *::before, *::after {
  padding: 0px;
  margin: 0px;
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


.h-25 {
  height: 25rem;
}

.w-90 {
  width: 90%;
}
.w-100 {
  width: 100%;
}


.text-size-1-2 {
  font-size: 1.5rem;
}
.text-size-2 {
  font-size: 2rem;
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

</style>
