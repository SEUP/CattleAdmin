import Vue from 'vue'
import Vuex from 'vuex'

import posts from './modules/posts'
import farmowner from './modules/farmowner'
import eiei from './modules/eiei'
import accounts from './modules/accounts'

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    posts: posts,
    farmowner : farmowner,
    eiei : eiei,
    accounts : accounts
  }
})
