import { Store } from "vuex"
import { IStoreState } from './store/store'

declare module "@vue/runtime-core" {
  // Declare your own store states.
  // interface State {
  //   count: number
  // }

  interface ComponentCustomProperties {
    $store: Store<IStoreState>;
  }
}