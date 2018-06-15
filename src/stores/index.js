import Vue from 'vue'
import Vuex from 'vuex'

import roles from './modules/roles'
import users from './modules/users'
import districtSelect from "./modules/districtSelect"
import choices from "./modules/choices"
import farmOwners from "./modules/farmOwners"

import login from "./modules/login"
import error from "./modules/error"

function store(name) {
  return function (resolve) {
    require(['./modules/' + name], resolve);
  }
}

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    roles: roles,
    users: users,
    farmOwners: farmOwners,
    districtSelect: districtSelect,
    choices: choices,
    login: login,
    error: error
  }
})
