import Vue from 'vue'
import App from './App.vue'
import { router } from "./router"
import { store } from "./store/store"
import vueResource from "vue-resource"
import VueResource from 'vue-resource'

Vue.use(VueResource)
new Vue({
  router,
  store,
  // vueResource,
  render: h => h(App),
}).$mount('#app')
