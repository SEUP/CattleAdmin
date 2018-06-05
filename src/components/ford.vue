<template>
  <v-data-table
    :headers="headers"
    :items="tableDatauser"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.id }}</td>
      <td class="text-xs-left pa-0 ma-0">{{ props.item.name }}</td>
      <td class="text-xs-left ">{{ props.item.email }}</td>
      <td class="text-xs-left">{{ props.item.username }}</td>
      <td class="text-xs-left">{{ props.item.created_at }}</td>
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
          {text: "Name", align:"left" ,value:"name"},
          {text: "Email", align:"left" ,value:"email"},
          {text: "Username", align:"left" ,value:"username"},
          {text: "สร้างเมื่อ", align:"left" ,value:"created_at"},
          {text: "ข้อมูลเมื่อ", align:"left" ,value:"updated_at"},
          {text: "การจัดการ", align:"left" ,value:"action"},

        ],
      }
    },computed : {
      tableDatauser() {
        return this.$store.state.accounts.userOder;
      }
    }, async created() {
      await  this.loadData();
    },methods : {
      loadData: async function () {
        await this.$store.dispatch("accounts/loader");


      },
      display : function (data) {
        this.tableDatauser = data
      }
    }
  }
</script>
