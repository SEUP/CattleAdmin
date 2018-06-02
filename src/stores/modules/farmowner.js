export  default {
  namespaced : true,
  state : { //data
    farmOwners :[
      {id :""
      ,first_name: ""
      ,last_name : ""}
    ]
  },mutations : {
        setfarmOwners : function (state,farmOwnersData)  {
          state.farmOwners = farmOwnersData
        }
  },actions : {
        loader : async function (context) {
          await axios.get("http://mct.ict.up.ac.th:10007/api/farm-owner")
            .then( (r) => {
              let farmOwnersData  = r.data.data;
              context.commit("setfarmOwners",farmOwnersData)

            })
            .catch( (e) => {

            })
          console.log('55')
        }
  }
}
