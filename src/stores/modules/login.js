const client = {
  username: "",
  "password": "",
  "grant_type": "password",
  "client_id": process.env.CLIENT_ID,
  "client_secret": process.env.CLIENT_SECRET,
  "provider": "admins"
};

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

      console.log(client)
      client.username = form.email;
      client.password = form.password;


      let token = await axios.post('/oauth/token', client)
        .then((r) => {

          localStorage.access_token = r.data.access_token;
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.access_token;

          return r.data
        })
        .catch((error) => {
          let err = {
            "message": "E-mail or Password is invalid",
            "errors": {}
          };

          if (!form.email) {
            err['errors'].email = "The email field is required"
          }
          if (!form.password) {
            err['errors'].password = "The password field is required"

          }

          context.dispatch("error/setError", err, {root: true});
          return null;
        });
      return token;

    },
    getUser: async function (token) {
      let user = null;
      if (token) {
        user = await axios.get('/api/user').then((r) => {
          return r.data;
        }).catch((error) => {
          return null;
        })
        localStorage.user = JSON.stringify(user);
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

