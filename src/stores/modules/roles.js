 export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    async getRoles(context, params = null) {
      let result = await axios.get("/api/roles", {params: params})
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          context.dispatch("error/setError",error.response.data, {root: true});
          return null
        });
      return result
    },
  }

//
}

