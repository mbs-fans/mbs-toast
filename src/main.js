import Vue from 'vue'
import App from './App.vue'
// import 'bootstrap3/dist/css/bootstrap.min.css'

import plugin from './index'
Vue.use(plugin)

new Vue({
  el: '#app',
  render: h => h(App)
})
