import Vue,  { VNode } from 'vue'
import CssHomeSideLeft from './CssHomeSideLeft.vue'
import Navbar from '../navbar/Navbar.vue'
import NavbarItems from '../navbarItems/NavbarItems.vue'

import './cssHome.css'

const Css = Vue.extend({
  name: 'Css',
  created() {
    this.$store.dispatch('setNavbarItemsToCSS')
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
        <div class="cssHome-container">
          <CssHomeSideLeft />
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

export default Css