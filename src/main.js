// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import axios from 'axios'
import store from './stores/index'
import lodash from 'lodash'


window.axios = axios.create({
  baseURL: process.env.API_URL,
  timeout: 60000
});
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.admin_access_token;




window._ = lodash;

Vue.use(Vuetify);
Vue.config.productionTip = false;

const VueGoogleMaps = require('vue2-google-maps');

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAA4xy46J4VXUz-MK2XLMtK6Eglw99H5Us',
    v: 'GOOGLE_MAPS_VERSION',
    libraries: 'places'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
