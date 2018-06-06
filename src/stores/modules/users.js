export default {
  namespaced : true,
  state : {
    usersData :[],
  },mutations : {
    setUsersData : function (state,DataUsers) {
      state.usersData = DataUsers
    },
  },actions : {
    loadUsers : async function (context) {
      await axios.get("http://mct.ict.up.ac.th:10007/api/users")
        .then( (r) => {
          let data = r.data.data;
          context.commit("setUsersData",data)
        })
        .catch( (err) => {

        })
    },searchUsers : async function (context,data) {

    },saveUser : async function (context,data) {

    },editUsers : async function (context,data) {

    },deleteUser : async function (context,data) {

    }

  }
}

