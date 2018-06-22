export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    async getUsers(context, params = null) {
      let result = await  axios.get("/api/users", {params: params})
        .then((response) => {
          return response.data
        })
        .catch((err) => {
          return null
        });
      return result
    },
    getUserById: async function(context,params = null){

      let result =  await axios.get("/api/users/"+params.id,{params:params})
          .then ( (response) => {
            return response.data
          })
        .catch((err) => {
            return null
        })
      return result
    },
    createUser: async function (context, form) {
      let result = await axios.post("/api/users",  form)
        .then((response) => {
          return response.data

        })
        .catch((err) => {
          return null
        });
      return result
    },
    updateUser: async function (context, form) {
      let result = await axios.put("/api/users/" + form.id, form)
            .then((response) => {
              return response.data
            })
            .catch((err) => {
              return null
        });
      return result
    },
    deleteUserById: async function (context, id) {
      let result = await axios.delete("/api/users/" + id) //return True or False
        .then((response) => {
          return response.data
        })
        .catch( (err) => {
          return null
        });
      return result
    }


  }
//
}

