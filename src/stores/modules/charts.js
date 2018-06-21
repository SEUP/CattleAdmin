export default {
  namespaced : true,
  state : {},
  mutations : {},
  actions : {
    getChart : async function (context,type){
      let result  = axios.get("api/charts/"+type)
        .then ((response)=>{
          return response.data
        })
        .catch( (err) => {
          return null
        })
      return result
    },
    getRangeFarmOwnerChart : async function (context,{type,params}){
      console.log("DDD",type,params)
      let result  = axios.get("api/charts/"+type,{params : params})
        .then ((response)=>{
          return response.data
        })
        .catch( (err) => {
          return null
        })
      return result
    }
  }
}
