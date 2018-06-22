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

          localStorage.access_token = r.data.access_token;
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.access_token;

          return r.data
        })
        .catch((error) => {
          context.dispatch("error/setError",error.response.data, {root: true});
          return null;
        });
      let user = null;
      if(token) {
        user = await axios.get('/api/user').then((r)=>{
          return r.data;
        }).catch((error)=>{
          return null;
        })

        localStorage.user = JSON.stringify(user);

      }

      return token;
    }
  }

}

