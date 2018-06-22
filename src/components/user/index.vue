<template>
  <v-container>
    <v-layout align-center>
      <v-flex>
        <h1 class="display-1">
          <v-icon x-large color="primary">mdi-account-box</v-icon>
          จัดการข้อมูลผู้ใช้ระบบ
        </h1>
      </v-flex>
    </v-layout>
    <v-divider class="my-3"></v-divider>
    <v-layout row>
      <v-flex xs3>
        <v-btn :to="{name:'user-create'}" color="primary">
          <v-icon>mdi-account-plus</v-icon>&ensp;เพิ่ม
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
            class="dense"
          >
            <template slot="items" slot-scope="props">
              <td class="text-xs-left">{{ props.item.name }}</td>
              <td class="text-xs-left">{{ props.item.email }}</td>
              <td class="text-xs-left">{{ props.item.username}}</td>
              <td class="text-xs-left">
                <ul class="text-xs-left">
                  <li v-for="role in props.item.roles">
                    {{role.display_name}}
                  </li>
                </ul>
              </td>
              <td class="text-xs-left">{{ getProvinceAmphurDistrictString(props.item) }}</td>
              <td class="text-xs-left">{{ props.item.action }}
                <v-btn class="ma-0" icon :to="{name:'user-edit',params : {id : props.item.id}}">
                  <v-icon color="primary">create</v-icon>
                </v-btn>
                <v-btn class="ma-0" icon @click="delUser(props.item.id)">
                  <v-icon color="red">delete</v-icon>
                </v-btn>
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
<style scoped>
  table.table thead td:not(:nth-child(1)), table.table tbody td:not(:nth-child(1)), table.table thead th:not(:nth-child(1)), table.table tbody th:not(:nth-child(1)), table.table thead td:first-child, table.table tbody td:first-child, table.table thead th:first-child, table.table tbody th:first-child {
    padding: 0px 12px !important;
  }
</style>

<script>
  export default {
    data: () => ({
      ID: null,
      headers: [
        {text: "Name", align: "left", value: "name"},
        {text: "Email", align: "left", value: "email"},
        {text: "Username", align: "left", value: "username"},
        {text: "Roles", align: "left", value: "role"},
        {text: "จังหวัด อำเภอ ตำบล", align: "left", value: "atdes", sortable: false},
        {text: "Action", align: "left", value: "action", sortable: false},


      ],
      paginate: {},
      users: [],
      form: {
        keyword: "",
        with: ['roles', 'province', 'amphur', 'district'],
        page: 1,
      },
    }),
    computed: {}
    ,
    async mounted() {
      await this.loadData()
    }
    ,
    methods: {
      getProvinceAmphurDistrictString: function (user) {
        let pvString = user.province ? user.province.PROVINCE_NAME : "-";
        let amString = user.amphur ? user.amphur.AMPHUR_NAME : "-";
        let diString = user.district ? user.district.DISTRICT_NAME : "-";


        let outputStr = "";
        outputStr += pvString == "-" ? "" : pvString;
        outputStr += amString == "-" ? "" : " " + amString;
        outputStr += diString == "-" ? "" : " " + diString;
        return outputStr;
      },
      changePage: async function (page) {
        this.form.page = page;
        let paginate = await  this.$store.dispatch("users/getUsers", this.form)
        this.paginate = paginate;
        this.users = paginate.data;

      },
      loadData: async function () {
        this.form.page = 1;
        let page = await this.$store.dispatch('users/getUsers', this.form);
        this.paginate = page;
        this.users = page.data;
      }
      ,
      search: async function () {
        this.form.page = 1;
        let page = await  this.$store.dispatch("users/getUsers", this.form)
        this.paginate = page;
        this.users = page.data;
      },
      delUser: async function (id) {
        console.log(id);
        let data = await this.$store.dispatch("users/deleteUserById", id);
        await  console.log(data, "has been destroy (In Vue)");
        await this.loadData()
      },
      getUserByID: async function () {
        let data = await  this.$store.dispatch("users/getUserById", this.idSand);
        this.UserDataFormID = data
      }
    }

  }
</script>




