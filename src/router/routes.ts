import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '../components/main/Main.vue'
import HtmlHome from '../components/htmlC/HtmlHome.vue'
import HtmlIntroduction from '../components/htmlC/HtmlIntroduction.vue'
import HtmlBasic from '../components/htmlC/HtmlBasic.vue'
import HtmlElements from '../components/htmlC/HtmlElements.vue'
import HtmlAttributes from '../components/htmlC/HtmlAttributes.vue'

// import HtmlEditors from '../components/htmlC/HtmlEditors.vue'
import HtmlHomeContent from '../components/htmlC/HtmlHomeContent.vue'
import HTMLTryIt from '../components/htmlC/HTMLTryIt.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/html',
    name: 'HTML',
    components: {}, 
    children: [
      { path: '/html', component: HtmlHomeContent },
      { path: '/html/introduction', component: HtmlIntroduction },
      // { path: '/html/editors', component: HtmlEditors },
      { path: '/html/basic', component: HtmlBasic },
      { path: '/html/elements', component: HtmlElements },
      { path: '/html/attributes', component: HtmlAttributes }
    ]
  },
  {
    path: '/html/tryit/:type', 
    component: HTMLTryIt
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
