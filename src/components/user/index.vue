<template>
  <v-container>
    <v-layout align-center>
      <v-flex>
        <h1 class="display-1"><v-icon x-large color="primary">mdi-account-box</v-icon> จัดการข้อมูลผู้ใช้ระบบ</h1>
      </v-flex>
    </v-layout>
    <v-divider class="my-3"></v-divider>
    <v-layout row>
      <v-flex xs3>
        <v-btn :to="{name:'user-create'}" color="primary"><v-icon>mdi-account-plus</v-icon>&ensp;เพิ่ม</v-btn>
      </v-flex>
      <v-flex xs7 offset-xs6>
        <v-text-field
          id="testing"
          name="input-1"
          label="ค้นหา"
          append-icon="mdi-magnify"
          v-model="form.keyword"
          @keyup.13="search()"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-data-table
            :headers="headers"
            :items="paginate.data"
            hide-actions
            class="elevation-1"
          >
            <template slot="items" slot-scope="props">
              <td class="text-xs-center">{{ props.item.name }}</td>
              <td class="text-xs-center">{{ props.item.email }}</td>
              <td class="text-xs-center">{{ props.item.username}}</td>
              <td class="text-xs-center">
                <ul class="text-xs-left">
                  <li v-for="role in props.item.roles">
                    {{role.display_name}}
                  </li>
                </ul>
              </td>
              <td class="text-xs-center">{{ "TODO เดี๋ยวมาทำ รอข้อมูล"}}</td>
              <td class="text-xs-center">{{ props.item.action }}
                <v-btn color="success" :to="{name:'user-edit',params : {id : props.item.id}}">Edit</v-btn>
                <v-btn color="error" @click="delUser(props.item.id)">Delete</v-btn>
              </td>
            </template>
          </v-data-table>
        </v-card>
        <div class="text-xs-center">
          <v-pagination @input="changePage" :length="paginate.last_page"
                        v-model="paginate.current_page"></v-pagination>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style>

</style>

<script>
  export default {
    data: () => ({
      ID :null,
      headers: [
        {text: "Name", align: "center", value: "name"},
        {text: "Email", align: "center", value: "email"},
        {text: "Username", align: "center", value: "username"},
        {text: "Roles", align: "center", value: "role"},
        {text: "จังหวัด อำเภอ ตำบล", align: "center", value: "atdes", sortable: false},
        {text: "Action", align: "center", value: "action", sortable: false},


      ],
      form: {
        keyword: "",
        with : ['roles'],
        page: 1,
      },
    }),
    computed: {
      paginate: function () {
        return this.$store.state.users.usersData;
      }
    }
    ,
    async mounted() {
      await this.loadData()
    }
    ,
    methods: {
      changePage: async function (page) {
        this.form.page = page;
        await  this.$store.dispatch("users/getUsers", this.form)

      },
      loadData: async function () {
        this.form.page = 1;
        await this.$store.dispatch('users/getUsers' , this.form);
      }
      ,
      search: async function () {
        this.form.page = 1;
        await  this.$store.dispatch("users/getUsers", this.form)
      },
      delUser :async function (id) {
        console.log(id);
        let data = await this.$store.dispatch("users/deleteUserById",id);
        await  console.log(data,"has been destroy (In Vue)");
        await this.loadData()
      },
      getUserByID  : async function () {
        let data = await  this.$store.dispatch("users/getUserById", this.idSand);
        this.UserDataFormID = data
      }
    }

  }
</script>




