export default {
  namespaced: true,
  state: {
    user: null
  },
  mutations: {
    setUser: function (state, user) {
      state.user = user
    }
  },
  actions: {
    getToken: async function (context, form) {
      let userform = {
        username : form.username,
        password : form.password,
      }


      let token = await axios.post('api/v1/admin/login', userform)
        .then((r) => {
          localStorage.admin_access_token = r.data.token;
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.admin_access_token;

          return r.data
        })
        .catch((error) => {
          console.log(error)
            context.dispatch("error/setError", error.response.data, {root: true});
          return null;
        });
      return token;

    },
    getUser: async function (token) {
      let user = null;
      if (token) {
        user = await axios.get('/api/v1/admin/user').then((r) => {
          return r.data;
        }).catch((error) => {
          return null;
        })
        localStorage.user = JSON.stringify(user);
        return user
      }
    },
    loadUser: async function (context) {
      let userData = await localStorage.getItem('user');
      if (userData) {
        userData = JSON.parse(userData)
        context.commit("setUser", userData)
        return userData
      }
    },
    logout: async function () {
      localStorage.removeItem("user")
      localStorage.removeItem("access_token")
    }


  }

}

