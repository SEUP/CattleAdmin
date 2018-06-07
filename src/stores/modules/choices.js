export default {
  namespaced: true,

  state: {
    isLoad: false,
    choices : []
  },
  mutations: {
    setChoices: function (state, c) {
      state.choices = _.groupBy(c,(o)=>{return o.type});
      state.isLoad = true
    }
  },
  actions: {
    load: async function (context) {
      let result = await axios.get("/api/choices",
        {params: {all: true}})
        .then((response) => {
          return response.data;
        });

      context.commit("setChoices", result);
    },
    getChoices: async function (context) {
      if (!context.state.isLoad) {
        await context.dispatch("load")
      }
      return context.state.choices;
    }
    ,getChoicesByType: async function (context,type) {
      if (!context.state.isLoad) {
        await context.dispatch("load")
      }
      return context.state.choices[type];
    }
  }
}
