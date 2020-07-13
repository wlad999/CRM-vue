import Vue from 'vue'
import Paginate from 'vuejs-paginate'
import Vuilidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import localizeFilter from '@/filters/localize.filter'
import tooltipDirective from './directives/tooltip.directive'
import messagePlagin from '@/utils/message.plagin'
import Loader from '@/components/app/Loader.vue'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min.js'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlagin)
Vue.use(Vuilidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)

firebase.initializeApp({
  apiKey: 'AIzaSyCDhULgFwqbrPKnKJI0hSQ9ygf1ZlaDEZA',
  authDomain: 'vue-crm-wlad999.firebaseapp.com',
  databaseURL: 'https://vue-crm-wlad999.firebaseio.com',
  projectId: 'vue-crm-wlad999',
  storageBucket: 'vue-crm-wlad999.appspot.com',
  messagingSenderId: '153272617036',
  appId: '1:153272617036:web:95308ce3810cbddce14ce9',
  measurementId: 'G-WECKH7VYW5'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
