<template>
  <div>

    <div class="navbarItems-group-items-1" v-if='navbarItemGroup1.isTrue'>

      <ul>
        <li v-for='(value) in navbarItemGroup1.items' 
          v-bind:key='value.id'
          v-on:click='handleShowInfo(value.id)'
          >{{ value.name }}</li>
      </ul>

      <div>
        <p>toggleIron</p>
        <p>earth</p>
        <p>search</p>
      </div>
    </div>

    <div class="navbarItems-group-items-2" v-if='navbarItemGroup2.isTrue'>
      <ul>
        <li v-for='(value) in navbarItemGroup2.items' 
          v-bind:key='value.id'
          v-bind:class='value.isHover ? "active" : "" '
          v-on:click='handleShowInfo(value.id)'
          >{{ value.name }}</li>
      </ul>

      <div>
        <p>toggleIron</p>
        <p>earth</p>
        <p>search</p>
      </div>
    </div>


    <div class="navvbarItems-group-items-0" v-if='navbarItemGroup1.items[0].isShowInfo'>
      <div>
        <h3>HTML and CSS</h3>
        <p v-on:click='handleChangeNav'>Learn HTML</p>
        <p>Learn CSS</p>
        <p>Learn Bootstrap</p>
        <p>Learn W3.CSS</p>
        <p>Learn Colors</p>
        <p>Learn Icons</p>
        <p>Learn Graphices</p>
        <p>Learn SVG</p>
        <p>Learn Canvas</p>
        <p>Learn How To</p>
        <p>Learn Sass</p>
      </div>

      <div>
        <h3>JavaScript</h3>
        <p>Learn JavaScript</p>
        <p>Learn jQuery</p>
        <p>Learn React</p>
        <p>Learn AngularJS</p>
        <p>Learn JSON</p>
        <p>Learn AJAX</p>
        <p>Learn W3.JS</p>
      </div>


      <div>
        <h3>Programming</h3>
        <p>Learn Python</p>
        <p>Learn Java</p>
        <p>Learn C++</p>
        <p>Learn C#</p>
        <p>Learn Machine Learning</p>
      </div>

    </div>

    <div class="navvbarItems-group-items-1" v-else-if='navbarItemGroup1.items[1].isShowInfo'>
      <div>
        <h3>HTML</h3>
        <p>HTML Tag Reference</p>
        <p>HTML Brwser Support</p>
        <p>HTML Evenet Reference</p>
        <p>HTML Color Reference</p>
        <p>HTML Attribute Reference</p>
        <p>HTML Canvas Reference</p>
        <p>HTML SVG</p>
        <p>Google Maps Reference</p>
      </div>

      
      <div>
        <h3>CSS</h3>
        <p>CSS Reference</p>
        <p>CSS Browser Support</p>
        <p>Bootstrap3 Reference</p>
        <p>Bootstrap4 Reference</p>
        <p>W3.CSS Reference</p>
        <p>Icon Reference</p>
        <p>Sass Reference</p>
      </div>

      <div>
        <h3>JavaScript</h3>
        <p>JavaScript Reference</p>
        <p>HTML DOM Reference</p>
        <p>jQuery Reference</p>
        <p>W3 .JS Reference</p>
      </div>



    </div>

    <div v-else=''></div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getter } from '../../store/store'

type TnavbarItemGroup1 = {
  id: number,
  name: string,
  isHover: boolean,
  isShowInfo: boolean
}

type TnavbarItemGroup2 = {
  id: number,
  name: string,
  isHover: boolean,
  isShowInfo: boolean
}

interface INavbarItemsState {
  state: {
    navbarItemGroup1: {
      isTrue: boolean,
      items: TnavbarItemGroup1[]
    },
    navbarItemGroup2: {
      isTrue: boolean,
      items: TnavbarItemGroup2[]
    }
  }
}

const NavbarItems = Vue.extend({
  name: 'NavbarItems',
  // data(): INavbarItemsState {
  //   return {
  //     state: {
  //       navbarItemGroup1: {
  //         isTrue: true,
  //         items: [
  //           { id: 0, name: 'Tutorials', isHover: false, isShowInfo: false },
  //           { id: 1, name: 'References', isHover: false, isShowInfo: false },
  //           { id: 2, name: 'Examples', isHover: false, isShowInfo: false },
  //           { id: 3, name: 'Exercises', isHover: false, isShowInfo: false }
  //         ]
  //       },
  //       navbarItemGroup2: {
  //          isTrue: false,
  //          items: [
  //           { id: 0, name: 'HTML', isHover: false, isShowInfo: false },
  //           { id: 1, name: 'CSS', isHover: false, isShowInfo: false },
  //           { id: 2, name: 'JAVASCRIPT', isHover: false, isShowInfo: false },
  //           { id: 3, name: 'SQL', isHover: false, isShowInfo: false },
  //           { id: 4, name: 'PYTHON', isHover: false, isShowInfo: false },
  //           { id: 5, name: 'MORE', isHover: false, isShowInfo: false }
  //         ]
  //       }
  //     }
  //   }
  // },
  computed: {
    navbarItemGroup1: {
      get() {
        return this.$store.getters[getter.getNavbarItemGroup1]
      },
      set() {

      }
    },
    navbarItemGroup2: {
      get() {
        return this.$store.getters[getter.getNavbarItemGroup2]
      },
      set() {

      }
    }
  },
  methods: {
    handleShowInfo(id: number) {
      // this.state.navbarItemGroup1.items.filter((value: TnavbarItemGroup1) => {
      //   if (value.id === id) {
      //     value.isShowInfo = true
      //   } else {
      //     value.isShowInfo = false
      //   }
      //   return value
      // })
    },
    handleChangeNav() {
      this.state.navbarItemGroup1.isTrue = false
      this.state.navbarItemGroup2.isTrue = true
    }
  },
  watch: {
    // $route(to, from) {
    //   console.log({to, from})
    //   // react to route changes...
    //   if (to.path === '/html') {
    //     this.state.navbarItemGroup1.isTrue = false
    //     this.state.navbarItemGroup2.isTrue = true
    //   }
    //   if (to.path === '/') {
    //     this.state.navbarItemGroup1.isTrue = true
    //     this.state.navbarItemGroup1.items[0].isShowInfo = false
    //     this.state.navbarItemGroup2.isTrue = false
    //   }
    // }
  }
})

export default NavbarItems
</script>

<style>
.navbarItems-group-items-1 {
  height: 60px;
  background-color: green;
  display: flex;
  justify-content: space-between;
}
.navbarItems-group-items-2 {
  height: 60px;
  background-color: #5f5f5f;
  display: flex;
  justify-content: space-between;
}

.navbarItems-group-items-1 > ul {
  /* background-color: lightseagreen; */
  display: flex;
  flex-wrap: wrap;
  /* width: 50%; */
  font-size: 24px;
  list-style: none;
  justify-content: space-around;
  align-items: center;
  color: whitesmoke;

}

.navbarItems-group-items-1 > ul > li {
  /* background-color: royalblue; */
    height: 100%;
    width: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.navbarItems-group-items-1 > ul > li:hover {
  background-color: whitesmoke;
  color: black;
}



.navbarItems-group-items-2 > ul {
  /* background-color: lightseagreen; */
  display: flex;
  flex-wrap: wrap;
  /* width: 50%; */
  font-size: 24px;
  list-style: none;
  justify-content: space-around;
  align-items: center;
  color: whitesmoke;

}

.navbarItems-group-items-2 > ul > li {
  background-color: #4CAF50;
  height: 100%;
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.navbarItems-group-items-2 > ul > li:not(.active)  {
  background-color: #5f5f5f;
}

.navbarItems-group-items-2 > ul > li:hover {
  background-color: black;
}

</style>
