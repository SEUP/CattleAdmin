export default {
  namespaced :true,
  state : {
     farmOwner : []
  },
  mutations : {
    setFarmOwner : function (state,farmOwner) {
      state.farmOwners = farmOwner
    }
  },
  actions :{
    getFarmOwners  : async function (context,params=null) {
        let result = await axios.get("api/farm-owner",{params:params})
          .then( (response) => {
            return response.data
          })
          .catch( (err) => {
            return null
          })
      return result
    },
    getFarmOwnerById : async function (context,id){
      let result = await  axios.get("api/farm-owner/"+id)
        .then( (response) => {
          console.log(response.data)
          context.commit("setFarmOwner",response.data)
          return response.data
        })
        .catch( (err) => {
          return null
        })
    }
  }
/// getByID

  //
}
