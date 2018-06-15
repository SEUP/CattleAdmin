export default {
  namespaced :true,
  state : {
    farmOwner : []
  },
  mutations : {
    setFarmOwner : function (state,farmOwner) {
      state.farmOwner = farmOwner;
      state.isLoad = true
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
      // console.log(id)
      let result = await  axios.get("api/farm-owner/"+id)
        .then( (response) => {
          // console.log(response.data)
          context.commit("setFarmOwner",response.data)
          return response.data
        })
        .catch( (err) => {
          return null
        })
      // console.log("VX",result)
      return result
    },
    updateState : async function (context,form) {
      context.commit("setFarmOwner",form)
    },
    updateFarmOwner : async function (context){
      let form = context.state.farmOwner;
      console.log(form);
      let result = await  axios.put("api/farm-owner/"+form.id,form)
        .then( (response) => {
          context.commit("setFarmOwner",response.data);
          return response.data;

        })
        .catch( (err) => {
          return null
        })
      return result
    },
    deleteFarmOwner : async function (context,id) {
      let result = await  axios.delete("api/farm-owner/"+id)
        .then((response) => {
        return response.data
      })
        .catch( (err) => {
          return null
        });
      return result
    },
    sumBudget : async function (context) {
      let form = context.state.farmOwner;
      let budgetSource = context.state.farmOwner.budget_source;
      let loanType = context.state.farmOwner.loan_types;
      let selfMoney = 0;
      if(budgetSource.has_text){
        selfMoney = budgetSource.pivot.amount
      }
      let loanMoney = 0 ;
      loanType.forEach( (i) => {
        loanMoney += i.pivot.amount
      });
      form.budget_source = loanMoney+selfMoney
      context.dispatch("updateState",(form))
    }

  }
/// getByID

  //
}
