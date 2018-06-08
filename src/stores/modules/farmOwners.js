export default {
  namespaced :true,
  state : {
    //forcreate
    //foredit
  },
  mutations : {
  },
  actions :{
    getFarmOwners  : async function (context,params=null) {
        let result = await axios.get("api/farmOwner",{params:params})
          .then( (response) => {
            return response.data
          })
          .catch( (err) => {
            return null
          })
      return result
    }
  }
/// getByID

  //
}
