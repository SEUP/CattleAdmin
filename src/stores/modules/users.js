export default {
  namespaced: true,
  state: {
    paginate: {},
    usersData: [],
  },
  mutations: {
    setPaginate: function (state, DataUsers) {
      state.paginate = DataUsers
      state.usersData = DataUsers.data;
    },
    setUsersData: function (state, DataUsers) {
      state.usersData = DataUsers
    },
    setUserSearch: function (state, data) {
      state.usersData = data
    }
  },
  actions: {
    loadUsers: async function (context, params = null) {
      await axios.get("http://mct.ict.up.ac.th:10007/api/users")
        .then((r) => {
          if (params && !params.paginate) {
            console.log('test');
            context.commit("setUsersData", r.data)

          } else {
            context.commit("setPaginate", r.data)
          }
        })
        .catch((err) => {

        })

      return context.state.usersData;
    },
    searchUsers: async function (context, data) {
      await  axios.get("http://mct.ict.up.ac.th:10007/api/users", {params: data})
        .then((r) => {
          context.commit("setPaginate", r.data)
        })
        .catch((err) => {

        })


    }, saveUser: async function (context, data) {

    }, editUsers: async function (context, data) {

    }, deleteUser: async function (context, data) {

    }

  }
}

