export default {
  namespaced : true,
  state : {},
  mutations : {},
  actions : {
    getChart : async function (context,type,params = null){
      let result  = axios.get("api/charts/"+type,{params : params})
        .then ((response)=>{
          return response.data
        })
        .catch( (err) => {
          return null
        })
      return result
    },
    getrangeFarmOwnerChart : async function (context,type,params){
      console.log(params)
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
