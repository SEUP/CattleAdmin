export default {
  namespaced : true,
  state : {
    rolesData :[],
    rolesSearchData : []
  },mutations : {
    setRolesData : function (state,DataRoles) {
      state.rolesData = DataRoles
    },
  },actions : {
    loadRoles : async function (context) {
      await axios.get("http://mct.ict.up.ac.th:10007/api/roles")
        .then( (r) => {
          let data = r.data.data;
          context.commit("setRolesData",data)

        })
        .catch( (err) => {

        })
    },searchRoles : async function (context,data) {
      axios.get("http://mct.ict.up.ac.th:10007/api/roles",{ params : { keyword: data } })
        .then( (r) => {
          context.commit("setRolesData",r.data.data)
          console.log(r.data.data)
        })


    }

  }
}
