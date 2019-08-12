// const api = "http://localhost:3333/api/v1/admin/farm-owners"

import summary from "./summary"
import farmOwners from "./farmOwners"
import error from "./error";
import spinner from "./spinner";
import roles from "./roles";
import users from "./users";
import districtSelect from "./districtSelect";
import choices from "./choices";
import login from "./login";
import charts from "./charts";
import farmers from "./farmers";

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
    summary: summary,
    farmOwners : farmOwners,
    error: error,
    spinner: spinner,
    roles: roles,
    users: users,
    districtSelect: districtSelect,
    choices: choices,
    // farmOwners: farmOwners,
    login: login,
    charts: charts,
    farmers: farmers,

  }

}
