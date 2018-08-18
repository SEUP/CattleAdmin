// const api = "http://localhost:3333/api/v1/admin/farm-owners"

const api = "/api/v1/admin/farm-owners"


export default {
  namespaced: true,
  actions: {
    countFarmOwner: () => {
      let count = axios.get('/api/v1/admin/summary/count-farm-owner').then((r) => {
        return r.data
      })
      return count;
    },
    countFarmer: () => {
      let count = axios.get('/api/v1/admin/summary/count-farmer').then((r) => {
        return r.data
      })
      return count;
    }
  }

}
