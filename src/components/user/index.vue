<template>
  <v-container>
    <v-layout align-center>
      <v-flex>
        <h1 class="display-2">จัดการข้อมูลผู้ใช้ระบบ</h1>
      </v-flex>
    </v-layout>
    <v-divider class="my-3"></v-divider>
    <v-layout row>
      <v-flex xs3>
        <v-btn href=".#/admin/user/create" color="primary">เพิ่ม
          <v-icon>mdi-account-plus</v-icon>
        </v-btn>
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
              <td>{{ props.item.name }}</td>
              <td>{{ props.item.email }}</td>
              <td>{{ props.item.username}}</td>
              <td>
                <ul>
                  <li v-for="role in props.item.roles">
                    {{role.display_name}}
                  </li>
                </ul>
              </td>
              <td>{{ "TODO เดี๋ยวมาทำ รอข้อมูล"}}</td>
              <td>{{ props.item.action }}
                <v-btn color="success" @click>Edit</v-btn>
                <v-btn color="error" @click="dele()">Delete</v-btn>
              </td>
            </template>
          </v-data-table>
          <div class="text-xs-center">
            <v-pagination @input="changePage" :length="paginate.last_page"
                          v-model="paginate.current_page"></v-pagination>
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
        {text: "Name", align: "left", value: "name"},
        {text: "Email", align: "left", value: "email"},
        {text: "Username", align: "left", value: "username"},
        {text: "Roles", align: "left", value: "role"},
        {text: "จังหวัด อำเภอ ตำบล", align: "left", value: "atdes", sortable: false},
        {text: "Action", align: "left", value: "action", sortable: false},


      ],
      form: {
        keyword: "",
        with : ['roles'],
        page: 1,
      },
    }),
    computed: {
      paginate: function () {
        return this.$store.state.users.paginate;
      }
    }
    ,
    async created() {
      await
        this.loadData()
    }
    ,
    methods: {
      changePage: async function (page) {
        this.form.page = page;
        await  this.$store.dispatch("users/searchUsers", this.form)

      },
      loadData: async function () {
        this.form.page = 1;
        await this.$store.dispatch('users/searchUsers' , this.form);
      }
      ,
      search: async function () {
        this.form.page = 1;
        await  this.$store.dispatch("users/searchUsers", this.form)
      }
    }

  }
</script>




