export default {
  namespaced : true,
  state : {
    usersData :[],
  },mutations : {
    setUsersData : function (state,DataUsers) {
      state.usersData = DataUsers
    },
    setUserSearch : function (state,data ) {
      state.usersData = data
    }
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
      await  axios.get("http://mct.ict.up.ac.th:10007/api/users",{ params : { keyword: data } })
        .then( (r) => {
          context.commit("setUserSearch", r.data.data)
        })
        .catch( (err) => {

        })



    },saveUser : async function (context,data) {

    },editUsers : async function (context,data) {

    },deleteUser : async function (context,data) {

    }

  }
}

