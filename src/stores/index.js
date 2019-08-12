import Vue from 'vue'
import Vuex from 'vuex'
import admin from "./modules/admin";

function store(name) {
  return function (resolve) {
    require(['./modules/' + name], resolve);
  }
}

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {


    //migration to merge 2 app
    admin : admin
  }
})
