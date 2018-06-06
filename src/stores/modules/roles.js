export default {
  namespaced: true,
  state: {
    paginate: [],
    rolesData: [],
  }, mutations: {
    setPaginate: function (state, Paginate) {
      state.paginate = Paginate;
      state.rolesData = Paginate.data;
    },
    setRolesData: function (state, DataRoles) {
      state.rolesData = DataRoles
    },
  }, actions: {
    loadRoles: async function (context, params = null) {
      await axios.get("http://mct.ict.up.ac.th:10007/api/roles",
        {params: params})
        .then((r) => {
          if (params && !params.paginate) {
            context.commit("setRolesData", r.data)
          } else {
            context.commit("setPaginate", r.data)
          }
        })
        .catch((err) => {

        })
    },
    searchRoles: async function (context, data) {
      axios.get("http://mct.ict.up.ac.th:10007/api/roles", {params: {keyword: data}})
        .then((r) => {
          context.commit("setRolesData", r.data.data)
          console.log(r.data.data)
        })


    }

  }
}
