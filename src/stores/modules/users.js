export default {
  namespaced: true,
  state: {
    userData: {},
    usersData: [],
    usersPaginate: {},
  },
  mutations: {
    setUserData: function (state, user) {
      state.userData = user
    },
    setUsersData: function (state, users) {
      state.usersData = users
    },
    setUsersPaginate: function (state, paginate) {
      state.usersPaginate = paginate;
      state.usersData = paginate.data
    }
  },
  actions: {
    async getUsers(context, params = null) {
      let r = await  axios.get("/api/users", {params: params})
        .then((r) => {
          if (params && !params.paginate) {
            context.commit("setUsersData", r.data)
          } else {
            context.commit("setUsersPaginate", r.data)
          }
          return r.data
        })
        .catch((err) => {
          return null
        });
      return r
    },
    getUserById: async function(context,id){
      let r =  await axios.get("/api/users/"+id)
          .then ( (r) => {
            return r.data
          })
        .catch((err) => {
            return null
        })
      return r
    },
    createUser: async function (context, form) {
      let r = await axios.post("/api/users",  form)
        .then((r) => {
          console.log("In Vuex create", r.data);
          context.commit("setUserData", r.data);
          return r.data

        })
        .catch((err) => {
          return null
        });
      return r
    },
    updateUser: async function (context, form) {
      let r = await axios.put("/api/users/" + form.id, form)
        .then((r) => {
          console.log("In Vuex edit", r.data);
          context.commit("setUserData", r.data);
          return r.data
        })
        .catch((err) => {
          return null
        });
      return r
    },
    deleteUserById: async function (context, id) {
      let r = await axios.delete("/api/users/" + id) //return True or False
        .then((r) => {
          console.log(r.data,"has been destroy (IN VueX)")
          return r.data
        })
        .catch( (err) => {
          return null
        });
      return r
    }


  }
//
}

