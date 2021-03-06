import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '../components/main/Main.vue'

import HtmlHome from '../components/htmlC/HtmlHome.vue'
import HtmlIntroduction from '../components/htmlC/HtmlIntroduction.vue'
import HtmlBasic from '../components/htmlC/HtmlBasic.vue'
import HtmlElements from '../components/htmlC/HtmlElements.vue'
import HtmlAttributes from '../components/htmlC/HtmlAttributes.vue'
import HtmlHomeContent from '../components/htmlC/HtmlHomeContent.vue'
import HTMLTryIt from '../components/htmlC/HTMLTryIt.vue'

import CssHome from '../components/cssC/CssHome'
import CssHomeContent from '../components/cssC/CssHomeContent.vue'
import CssIntroduction from '../components/cssC/CssIntroduction.vue'

import JavascriptHome from '../components/javascriptC/JavascriptHome'
import JavascriptHomeContent from '../components/javascriptC/JavascriptHomeContent.vue'
import JavascriptIntroduction from '../components/javascriptC/JavascriptIntroduction.vue'

import SQLHome from '../components/sqlC/SQLHome'
import SQLHomeContent from '../components/sqlC/SQLHomeContent.vue'
import SQLIntroduction from '../components/sqlC/SQLIntroduction.vue'

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
    component: HtmlHome, 
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
    path: '/css',
    name: 'CSS',
    component: CssHome, 
    children: [
      { path: '/css', component: CssHomeContent },
      { path: '/css/introduction', component: CssIntroduction }
    ]
  },
  {
    path: '/javascript',
    name: 'Javascript',
    component: JavascriptHome, 
    children: [
      { path: '/javascript', component: JavascriptHomeContent },
      { path: '/javascript/introduction', component: JavascriptIntroduction }
    ]
  },
  {
    path: '/sql',
    name: 'SQL',
    component: SQLHome, 
    children: [
      { path: '/sql', component: SQLHomeContent },
      { path: '/sql/introduction', component: SQLIntroduction }
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
