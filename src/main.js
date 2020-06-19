import Vue from 'vue'
import Vuilidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min.js'

Vue.config.productionTip = false

Vue.use(Vuilidate)
Vue.filter('date', dateFilter)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
