export default {
  namespaced :true,
  state : {
    //cate
    //ee
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
/// getBID
  //edie
  // sstate

  //
}
