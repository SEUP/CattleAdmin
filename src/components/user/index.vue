<template>
    <v-container >
      <v-layout align-center>
        <v-flex>
          <h3 class="display-1">จัดการข้อมูลผู้ใช้ระบบ</h3>
        </v-flex>
      </v-layout>
      <v-divider class="my-3"></v-divider>
      <v-layout row>
        <v-flex xs3 >
          <v-btn href=".#/admin/user/create" color="primary">ADD <v-icon>mdi-account-plus</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs7 offset-xs6>
          <v-text-field
            id="testing"
            name="input-1"
            label="ค้นหา"
            append-icon="mdi-magnify"
            v-model="text"
            @keyup.13="search()"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 >
          <v-card>
            <v-data-table
              :headers="headers"
              :items="Data"
              hide-actions
              class="elevation-1"
            >
              <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.email }}</td>
                <td>{{ props.item.username}}</td>
                <td>{{ props.item.atdes}}</td>
                <td>{{ props.item.action }}<v-btn  color="success" @click>Edit</v-btn>
                  <v-btn  color="error"@click="dele()">Delete</v-btn></td>
              </template>
            </v-data-table>
            <div class="text-xs-center">
              <v-pagination :length="1" v-model="page"></v-pagination>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
  </v-container>
</template>


<script>
  export default {
    data: () => ({
      headers: [
        {text: "name", align: "left", value: "name"},
        {text: "Email", align: "left", value: "email"},
        {text: "Username", align: "left", value: "role"},
        {text: "จังหวัด อำเภอ ตำบล", align: "left", value: "atdes"},
        {text: "Action", align: "left", value: "action"},


      ],
      item: [{
        name: "paikung", email: "paikung@root", role: "admin", atdes: "เมือง นางเเล เชียงราย"
      }]}),
      computed: {
        Data() {
          return this.$store.state.users.usersData
        }
      }, async created() {
        await  this.loadData()
      }, methods: {
        loadData: async function () {
          await this.$store.dispatch('users/loadUsers')
          await console.log(this.Data);
        },search : async function () {
          await  this.$store.dispatch("users/searchUsers", this.text)
        }
        }

  }
</script>




