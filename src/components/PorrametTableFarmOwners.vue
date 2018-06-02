<template>
  <v-data-table
    :headers="headers"
    :items="dataItems"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.id }}</td>
      <td class="text-xs-left">{{ props.item.first_name }}</td>
      <td class="text-xs-left">{{ props.item.last_name }}</td>
      <td class="text-xs-left">{{ props.item.mobile_no }}</td>
      <td class="text-xs-left">{{ props.item.province_name }}</td>
      <td class="text-xs-left">{{ props.item.amphur_name }}</td>
      <td class="text-xs-left">{{ props.item.district_name }}</td>
      <td class="text-xs-left">{{ props.item.updated_at }}</td>
    </template>
  </v-data-table>
</template>
<script>
  export default {
    data () {
      return {
        headers:[
          {text: "ID", align:"center" ,sortable :false,value:"id"},
          {text: "ชื่อ", align:"left" ,value:"first_name"},
          {text: "นามสกุล", align:"left" ,value:"last_name"},
          {text: "เบอร์โทร", align:"left" ,value:"mobile_no"},
          {text: "จังหวัด", align:"left" ,value:"province_name"},
          {text: "อำเภอ", align:"left" ,value:"amphur_name"},
          {text: "ตำบล", align:"left" ,value:"district_name"},
          {text: "ข้อมูลเมื่อ", align:"left" ,value:"updated_at"},
        ],
        dataItems: [

        ]
      }
    },computed : {
      DataFarmOners() {
        return this.$store.state.farmowner.farmOwners;
      }
    }, async created() {
      await  this.loadData();
      await console.log(1)
      await  this.loadDataToTable()
    },methods : {
      loadData: async function () {
        await this.$store.dispatch("farmowner/loader");
        await console.log(2)
      },
      display : function (data) {
        this.DataFarmOners = data
      },loadDataToTable : async  function () {
        let i ;
        await console.log(3)
        for(i=0;i<this.DataFarmOners.length;i++){
          let nowData = this.DataFarmOners[i]
          let newData = {
            value:false,
            id:nowData.id,
            first_name:nowData.first_name
            ,last_name:nowData.last_name,
            mobile_no:nowData.mobile_no,
            province_name: nowData.province_name,
            amphur_name:nowData.amphur_name
            ,district_name:nowData.district_name,
            updated_at:nowData.updated_at}
          this.dataItems.push(newData)
          console.log(88)
        }
      }
    }
  }
</script>
