export  default {
  namespaced : true,
  state : { //data
    farmOwners :[],
    tableFarmOwners : []
  },mutations : {
        setfarmOwners : function (state,farmOwnersData)  {
          state.farmOwners = farmOwnersData
        },
        settablefarmOwners : function (state,dataTable) {
          state.tableFarmOwners = dataTable
        }

  },actions : {
        loader : async function (context) {
          await axios.get("http://mct.ict.up.ac.th:10007/api/farm-owner")
            .then( (r) => {
              let farmOwnersData  = r.data.data;
              context.commit("setfarmOwners",farmOwnersData)
              let farmOwnerData = this.farmOwners;
              // console.log(farmOwnersData)
              let i;
              let table = [];
              for(i=0;i<farmOwnersData.length;i++){
                let nowData = farmOwnersData[i]
                let newData = {
                  value:false,
                  id:nowData.id,
                  first_name:nowData.first_name
                  ,last_name:nowData.last_name,
                  mobile_no:nowData.mobile_no,
                  province_name: nowData.province_name,
                  amphur_name:nowData.amphur_name
                  ,district_name:nowData.district_name,
                  updated_at:nowData.updated_at,
                  action : [
                    {name:"export",icon:"unarchive",color:"success"},
                    {name:"edit",icon:"create",color:"primary"},
                    {name:"delete",icon:"delete",color:"red"},
                  ]
                }

                table.push(newData)
                // console.log(newData)
                // console.log(5555)
              }context.commit("settablefarmOwners",table)
              // console.log(table)



            })
            .catch( (e) => {

            })
        },
}
}
