export  default {
  namespaced : true ,
  state : {
    roleData : {},
    rolesData :[],
    rolesPaginate : {},
  },
  mutations :{
    setRolesData  : function (state,roles) {
      state.rolesData = roles
    },
    setRolesPaginate : function (state,paginate) {
      state.rolesPaginate = paginate;
      state.rolesData = paginate.data
    }
  },
  actions  : {
      async getRoles (context,params = null) {
       let r =  await axios.get("/api/roles", {params: params})
          .then( (r) => {
            if (params && !params.paginate){
              context.commit("setRolesData",r.data)
            } else  {
              context.commit("setRolesPaginate",r.data)
            }
            return r.data
          })
          .catch( (err) => {
            return null
          });
        return r
      },
  }

//
}

