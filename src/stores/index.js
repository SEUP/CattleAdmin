import Vue from 'vue'
import Vuex from 'vuex'

import roles from './modules/roles'
import users from './modules/users'
import districtSelect from "./modules/districtSelect"
import choices from "./modules/choices"
import farmOwners from "./modules/farmOwners"
import charts from "./modules/charts"
import farmers from "./modules/farmers"

import login from "./modules/login"
import error from "./modules/error"
import spinner from "./modules/spinner";


function store(name) {
  return function (resolve) {
    require(['./modules/' + name], resolve);
  }
}

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    error: error,
    spinner: spinner,
    roles: roles,
    users: users,
    districtSelect: districtSelect,
    choices: choices,
    farmOwners: farmOwners,
    login: login,
    charts: charts,
    farmers: farmers,
  }
})
