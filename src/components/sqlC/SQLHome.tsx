import Vue,  { VNode } from 'vue'
import SQLHomeSideLeft from './SQLHomeSideLeft.vue'
import Navbar from '../navbar/Navbar.vue'
import NavbarItems from '../navbarItems/NavbarItems.vue'
import { action } from '@/store/store'

import './sqlHome.css'

const SQLHome = Vue.extend({
  name: 'SQLHome',
  created() {
    this.$store.dispatch(action.setNavbarItemsToSQL)
    if (window.innerHeight > 60) {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  },
  updated() {

    // Scroll back to top of page on each routes
    if (window.innerHeight > 60) {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  },
  render(): VNode {
    return (
      <div>
        <Navbar />
        <NavbarItems />
        <div class="sqlHome-container">
          <SQLHomeSideLeft />
          <router-view/>

          {/* RIGHT SIDE AD SECTION */}
          <div style="border: 1px solid #d4edda">
            {/* <p>AD placeholder</p> */}
          </div>
        </div>
      </div>
    )
  }
})

export default SQLHome