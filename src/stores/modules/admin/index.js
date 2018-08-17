// const api = "http://localhost:3333/api/v1/admin/farm-owners"

import summary from "./summary"
const state = {};

const mutations = {};

const actions = {
  test : async () =>{
    console.log('test')
    return 12;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  modules : {
    summary: summary
  }

}
