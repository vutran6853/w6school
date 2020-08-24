import Vue from 'vue'
import Vuex, { Store as VuexStore, ActionTree, MutationTree, GetterTree } from 'vuex'

Vue.use(Vuex)

interface IStoreState {
  navbarItemGroup1: {
    isTrue: boolean,
    items: TnavbarItemGroup1[]
  },
  navbarItemGroup2:  {
    isTrue: boolean,
    items: TnavbarItemGroup2[]
  }
}


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

const getter = {
  getNavbarItemGroup1: 'getNavbarItemGroup1',
  getNavbarItemGroup2: 'getNavbarItemGroup2',
}

const action = {
  setNavbarItemsToHTML: 'setNavbarItemsToHTML',
  setNavbarItemsToCSS: 'setNavbarItemsToCSS',
  setNavbarItemsToJavascript: 'setNavbarItemsToJavascript',
  setNavbarItemsBySelected: 'setNavbarItemsBySelected',
  setNavbarItemsToDefault: 'setNavbarItemsToDefault'
}

const types = {
  SET_AT_HTML_VIEW: 'SET_AT_HTML_VIEW',
  SET_AT_CSS_VIEW: 'SET_AT_CSS_VIEW',
  SET_AT_JAVASCRIPT_VIEW: 'SET_AT_JAVASCRIPT_VIEW',
  SET_AT_DEFAULT_VIEW: 'SET_AT_DEFAULT_VIEW',
  SET_NAVBAR_ITEMS_BY_SELECED: 'SET_NAVBAR_ITEMS_BY_SELECED'
}

const state: IStoreState = {
  navbarItemGroup1: {
    isTrue: true,
    items: [
      { id: 0, name: 'Tutorials', isHover: false, isShowInfo: false },
      // { id: 1, name: 'References', isHover: false, isShowInfo: false },
      // { id: 2, name: 'Examples', isHover: false, isShowInfo: false },
      // { id: 3, name: 'Exercises', isHover: false, isShowInfo: false }
    ]
  },
  navbarItemGroup2: {
     isTrue: false,
     items: [
      { id: 0, name: 'HTML', isHover: false, isShowInfo: false },
      { id: 1, name: 'CSS', isHover: false, isShowInfo: false },
      { id: 2, name: 'JAVASCRIPT', isHover: false, isShowInfo: false },
      // { id: 3, name: 'SQL', isHover: false, isShowInfo: false },
      // { id: 4, name: 'PYTHON', isHover: false, isShowInfo: false },
      // { id: 5, name: 'MORE', isHover: false, isShowInfo: false }
    ]
  }
}

const getters: GetterTree<IStoreState, any> = {
  getNavbarItemGroup1(state) {
    return state.navbarItemGroup1
  },
  getNavbarItemGroup2(state) {
    return state.navbarItemGroup2
  }
}

const actions: ActionTree<IStoreState, any> = {
  setNavbarItemsToHTML() {
    this.commit(types.SET_AT_HTML_VIEW)
  },
  setNavbarItemsToDefault() {
    this.commit(types.SET_AT_DEFAULT_VIEW)
  },
  setNavbarItemsToCSS() {
    this.commit(types.SET_AT_CSS_VIEW)
  },
  setNavbarItemsBySelected({}, payload) {
    this.commit(types.SET_NAVBAR_ITEMS_BY_SELECED, payload)
  },
  setNavbarItemsToJavascript() {
    this.commit(types.SET_AT_JAVASCRIPT_VIEW)
  }
}

const mutations: MutationTree<IStoreState> = {
  [types.SET_AT_HTML_VIEW](state) {
    state.navbarItemGroup1.isTrue = false
    state.navbarItemGroup2.isTrue = true
    state.navbarItemGroup2.items[0].isHover = true
  },
  [types.SET_AT_CSS_VIEW](state) {
    state.navbarItemGroup1.isTrue = false
    state.navbarItemGroup2.isTrue = true
    state.navbarItemGroup2.items[1].isHover = true
  },
  [types.SET_AT_JAVASCRIPT_VIEW](state) {
    state.navbarItemGroup1.isTrue = false
    state.navbarItemGroup2.isTrue = true
    state.navbarItemGroup2.items[2].isHover = true
  },
  [types.SET_AT_DEFAULT_VIEW](state) {
    state.navbarItemGroup1.isTrue = true
    state.navbarItemGroup1.items[0].isShowInfo = false
    state.navbarItemGroup2.isTrue = false
    state.navbarItemGroup2.items = state.navbarItemGroup2.items.map((value) => {
      value.isHover = false
      return value
    })
  },
  [types.SET_NAVBAR_ITEMS_BY_SELECED](state, payload) {
    state.navbarItemGroup2.items = state.navbarItemGroup2.items.map((value) => {
      if (value.id === payload) {
        value.isHover = true
      } else {
        value.isHover = false
      }
      return value
    })
  }
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
  }
})


export default store

export {
  getter,
  action,
  types,
  IStoreState
}

export type Store = Omit<VuexStore<IStoreState>, 'getters' | 'commit' | 'dispatch'>
