<template>
  <section class="sqlHome-central-container" style="border-left: 3px solid gainsboro;">
    <p>SQL Tutorial</p>
    <div class="group-button-container">
      <button class="w6-btn" v-on:click='handleRouteTo("/")'>&lt;Home</button>
      <button class="w6-btn" v-on:click='handleRouteTo("/sql/introduction")'>Next ></button>  
    </div>

    <div class="w6-info h-10">
      <p>SQL is a standard language for storing, manipulating and retrieving data in databases.</p>
      <p>Our SQL tutorial will teach you how to use SQL in: MySQL, SQL Server, MS Access, Oracle, Sybase, Informix, Postgres, and other database systems.</p>
      <button class="disabled">Start Learning SQL now >></button>
    </div>

    <hr/>

    <!-- Examples in Each Chapter" -->
    <div class="sqlHome-info-container">
      <div class="d-flex-column h-8">
        <p class="text-size-2">Examples in Each Chapter</p>
        <p>With our online SQL editor, you can edit the SQL statements, and click on a button to view the result.</p>
      </div>

    <div class="code-example-container h-8">
        <p>Example</p>
        <div class="code-example-inner-container h-2">
          <div class="code-example-inner-mini-container h-2">
            <span class="color-mediumblue mr-0-5">SELECT</span>
            <span class="color-black mr-0-5">*</span>
            <span class="color-mediumblue mr-0-5">FROM</span>
            <span class="color-black">Customers;</span>
          </div>
        </div>
        <!-- <button class="w6-button" v-on:click='handleRouteToTryIt'>Try it Yourself</button> -->
        <button class="w6-button disabled">Try it Yourself</button>
      </div>
    </div>

    <hr/>

    <div class="ad-placeholder">
      <p></p>
    </div>

    <hr />

    <div class="group-button-container container">
      <button class="w6-btn" v-on:click='handleRouteTo("/")'>&lt;Home</button>
      <button class="w6-btn" v-on:click='handleRouteTo("/sql/introduction")'>Next ></button>  
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
// import CSSExample from './shareUI/CSSExample'

const SQLHomeContent = Vue.extend({
  name: 'SQLHomeContent',
  data() {
    return {
      state: {
        isDisplayDateAndTime: false,
        currentUserDate: ''
      }
    }
  },
  methods: {
    handleRouteTo(urlPath: string) {
      this.$router.push({
        path: urlPath
      })
    },
    handleDisplayDateAndTime() {
      this.state.currentUserDate = new Date().toString()
      this.state.isDisplayDateAndTime = true
    }
  }
})

export default SQLHomeContent

</script>

<style>
/* @import url(../htmlC/shareStyle/shareStyle.css); */

/* .sqlHome-container {
  display: grid;
  grid-template-columns: 14rem 1fr 14rem;
  font-size: 1.1rem;
} */

.sqlHome-central-container {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.sqlHome-central-container > p:nth-child(1) {
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-size: 2.5rem;
}

.code-example-javascript-container {
  background-color: white;
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}



.w6-btn {
  height: 45px;
  width: 100px;
  font-size: 1.2rem;
  background-color: #4CAF50;
  border: none;
  cursor: pointer;
  color: white;
  outline: none;
}

/* .sqlHome-container >* hr {
  border-top: 1px solid #eee;
} */

.sqlHome-info-container {
  /* height: 3rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: cadetblue; */
  margin-bottom: 1rem;
  margin-top: 1rem;
}

/* .sqlHome-section-example-item-right-container {
  background-color: #f1f1f1;
  height: 25rem;
  font-size: 1.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
} */


.ad-placeholder {
  height: 15rem;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.sqlHome-info-exercisers-container {
  height: 34rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.sqlHome-info-exercises-inner-container {
  background-color: #555555;
  height: 25rem;
  /* font-size: 1.5rem; */
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white; 
}

.sqlHome-info-exercises-inner-item-container {
  background-color: white;
  color: black;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 1rem;
}

.sqlHome-info-exercises-inner-item-container > .sqlHome-info-exerciser-inner-item-a {
  background-color: #f1f1f1;
  padding: 1rem;
  width: 97%;
}

.w6-button-light-blue {
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

.sqlHome-references-container {
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

.w6-button {
  height: 40px;
  width: 150px;
  font-size: 1rem;
  background-color: #4CAF50;
  border: none;
  cursor: pointer;
  color: white;
  outline: none;
}

.w6-button:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.w6-button-grey {
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

.w6-button-grey:hover {
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
  .sqlHome-container {
    display: grid;
    grid-template-columns: 1fr;
    font-size: 1.1rem;
  }

  .sqlHome-container > .sideLeft-container {
    display: none;
  }

  .sqlHome-container >* .sqlHome-info-exercises-inner-item-container > .sqlHome-info-exerciser-inner-item-a  {
    padding: 0px;
  }
}

@media(max-width: 768px) and (min-width: 480px) and (orientation: landscape) {
  .sqlHome-container {
    display: grid;
    grid-template-columns: 14rem 1fr;
  }
  .sqlHome-container >* .sqlHome-info-exercises-inner-item-container > .sqlHome-info-exerciser-inner-item-a  {
    padding: 0px;
  }
}

/* @media (max-width: 768px) and (min-width: 481px) {
  .sqlHome-container {
    display: grid;
    grid-template-columns: 14rem 1fr;
  }
  .sqlHome-container >* .sqlHome-info-exercises-inner-item-container > .sqlHome-info-exerciser-inner-item-a  {
    padding: 0px;
  }
} */

</style>