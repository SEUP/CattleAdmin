export default {
  namespaced : true,
  state : { //data
    farm :[],
    tableFarm : []
  },mutations : {
    setfarm : function (state,farmData)  {
      state.farm = farmData
    },
    settablefarm : function (state,dataTable) {
      state.tableFarm = dataTable
    }

  },actions : {
    load : async function (context) {
      await axios.get("http://mct.ict.up.ac.th:10007/api/farm-owner")
        .then( (r) => {
          let farmData  = r.data.data;
          context.commit("setfarm",farmData)
          let farmDatas = this.farm;
          // console.log(farmData)
          let i;
          let table = [];
          for(i=0;i<farmData.length;i++){
            let nowData = farmData[i]
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
                {name:"edit",icon:"create",color:"primary"},
                {name:"delete",icon:"delete",color:"red"},
              ]
            }

            table.push(newData)
            // console.log(newData)
            // console.log(5555)
          }context.commit("settablefarm",table)
          // console.log(table)



        })
        .catch( (e) => {

        })
    },
  }
}
