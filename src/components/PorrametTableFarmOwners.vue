<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-text-field append-icon="search" @keyup.13 = "search(text)" v-model="text">ค้นหา</v-text-field>
      <v-flex xs12>
        <v-data-table :headers="headersTable" :items="DataRoles">
          <template slot="items" slot-scope="p">
            <td></td>
            <td>
              <v-btn icon>
                <v-icon color="success" >create</v-icon>
              </v-btn>
            </td>
            <td></td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name : "Roles",
    data () {
      return {
        text:"",
        headersTable: [
          {text: "ชื่อ", align: "left", value: "display_name"},
          {text: "การจัดการ", align: "left",},

        ],
      }
    },computed : {
      DataRoles  ()  {
        return this.$store.state.users.usersData

      }
    },async created ()  {
      await  this.loadData ()
    }, methods :  {
      loadData : async function () {
        await  this.$store.dispatch("roles/loadRoles");
      },
      search : async function (text) {
        console.log(1111)
        await  this.$store.dispatch("roles/searchRoles",text);


      }
    }
  }
</script>

<style scoped>

</style>
