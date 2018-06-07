import Vue from 'vue'
import Vuex from 'vuex'

import roles from './modules/roles'
import users from './modules/users'
import districtSelect from "./modules/districtSelect"
import choices from "./modules/choices"

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    roles: roles,
    users: users,
    districtSelect: districtSelect,
    choices: choices,
  }
})
