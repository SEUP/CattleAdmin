<template>
  <v-data-table
    :headers="headers"
    :items="tableData"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.id }}</td>
      <td class="text-xs-left pa-0 ma-0">{{ props.item.first_name }}</td>
      <td class="text-xs-left ">{{ props.item.last_name }}</td>
      <td class="text-xs-left">{{ props.item.mobile_no }}</td>
      <td class="text-xs-left">{{ props.item.province_name }}</td>
      <td class="text-xs-left">{{ props.item.amphur_name }}</td>
      <td class="text-xs-left">{{ props.item.district_name }}</td>
      <td class="text-xs-left">{{ props.item.updated_at }}</td>
      <td class="text-xs-left">
        <v-btn class="ma-0" icon v-for="at in props.item.action" :key="at.name">
          <v-icon :color="at.color" >{{at.icon}}</v-icon>
        </v-btn>
      </td>
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
          {text: "ข้อมูลเมื่อ", align:"left" ,value:"updated_name"},
          {text: "การจัดการ", align:"left" ,value:"action"},

        ],
      }
    },computed : {
      tableData() {
        return this.$store.state.eiei.tableFarm;
      }
    }, async created() {
      await  this.loadData();
    },methods : {
      loadData: async function () {
        await this.$store.dispatch("eiei/load");
        // await console.log(this.tableData)

      },
      display : function (data) {
        this.tableData = data
      }
    }
  }
</script>
