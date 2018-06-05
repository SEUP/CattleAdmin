export  default {
  namespaced : true,
  state : { //data
    account :[],
    userOder : []
  },mutations : {
        setaccounts: function (state,accountData)  {
          state.account = accountData
        },
        setOder : function (state,Oder) {
          state.userOder = Oder
        }

  },actions : {
        loader : async function (context) {
          await axios.get("http://mct.ict.up.ac.th:10007/api/users")
            .then( (r) => {
              let userData  = r.data.data;
              context.commit("setaccounts",userData)
              let userrData = this.account;
              // console.log(farmOwnersData)
              let i;
              let table = [];
              for(i=0;i<userData.length;i++){
                let Data = userData[i];
                let DataInserver = {
                  id:Data.id,
                  name:Data.name,
                  email:Data.email,
                  username:Data.username,
                  created_at: Data.created_at,
                  updated_at:Data.updated_at,
                  action : [
                    {name:"export",icon:"unarchive",color:"success"},
                    {name:"edit",icon:"create",color:"primary"},
                    {name:"delete",icon:"delete",color:"red"},
                  ]
                }
                table.push(DataInserver)
              }context.commit("setOder",table)
            })
            .catch( (e) => {

            })
        },
}
}
