export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    getToken: async function (context, form) {
      let client = {
        username: "",
        "password": "",
        "grant_type": "password",
        "client_id": "5",
        "client_secret": "rcbRlgZjkk3zJMfhYITKK4EMTCh1rBnBcYgNaJiq",
        "provider": "admins"
      };
      client.username = form.email;
      client.password = form.password;
      let token = await axios.post('/oauth/token', client)
        .then((r) => {
          return r.data
        })
        .catch((error) => {
          return null;
        })

      return token;
    }
  }

}

