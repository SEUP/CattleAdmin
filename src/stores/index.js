import Vue from 'vue'
import Vuex from 'vuex'

import posts from './modules/posts'
import farmowner from './modules/farmowner'

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    posts: posts,
    farmowner : farmowner,
  }
})
