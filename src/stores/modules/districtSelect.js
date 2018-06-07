export default {
  namespaced: true,

  state: {
    isLoad: false,
    provinces: []
  },
  mutations: {
    setProvinces: function (state, provinces) {
      state.provinces = provinces;
      state.isLoad = true
    }
  },
  actions: {
    load: async function (context) {
      let result = await axios.get("/api/thailand/province",
        {params: {all: true}})
        .then((response) => {
          return response.data;
        });

      context.commit("setProvinces", result);
    },
    getProvinces: async function (context) {
      if (!context.state.isLoad) {
        await context.dispatch("load")
      }
      return context.state.provinces;
    }
  }
}
