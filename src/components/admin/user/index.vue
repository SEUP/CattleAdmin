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
        <v-card v-if="admin">
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
                    {{role.display_name }}
                  </li>
                </ul>
              </td>
              <td class="text-xs-left">{{ getProvinceAmphurDistrictString(props.item) }}</td>
              <td class="text-xs-left">
                <template v-if="admin.roles[0].id <  (props.item.roles[0] ? props.item.roles[0].id : 20) || admin.id == (props.item.id)">
                  <template v-if="checkProvinceAmphur(admin,props.item)">
                    <v-tooltip top>
                      <v-btn class="ma-0" icon
                             :to="{name:'user-edit',params : {id : props.item.id}}"
                             slot="activator"
                      >
                        <v-icon color="primary">create</v-icon>
                      </v-btn>
                      <span>เเก้ไข</span>
                    </v-tooltip>
                    <v-tooltip top>
                      <v-btn class="ma-0" icon @click="delUser(props.item.id) " slot="activator">
                        <v-icon color="red">delete</v-icon>
                      </v-btn>
                      <span>ลบ</span>
                    </v-tooltip>
                  </template>
                </template>
              </td>
            </template>
          </v-data-table>
        </v-card>
        <div class="text-xs-center">
          <v-pagination @input="changePage" :length="paginate.lastPage"
                        v-model="paginate.page"></v-pagination>
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
  import {mapState} from 'vuex'
  export default {
    data: () => ({
      ID: null,
      headers: [
        {text: "ชื่อ", align: "left", value: "name"},
        {text: "อีเมล์", align: "left", value: "email"},
        {text: "ชื่อผู้ใช้", align: "left", value: "username"},
        {text: "สิทธิ์", align: "left", value: "role"},
        {text: "จังหวัด อำเภอ ตำบล", align: "left", value: "atdes", sortable: false},
        {text: "การจัดการ", align: "left", value: "action", sortable: false},


      ],
      paginate: {},
      users: [],
      form: {
        keyword: "",
        with: ['roles', 'province', 'amphur', 'district'],
        page: 1,
      },
    }),
    computed: {
      ...mapState ({
        admin: state => state.admin.login.user
      })
    }
    ,
    async mounted() {
      if(!this.admin){
       this.$store.dispatch("admin/login/loadUser")
      }
      await this.loadData()


    }
    ,
    methods: {

      checkProvinceAmphur(admin,p) {
        console.log(admin,p)
        let adminRole = admin.roles[0].id
        let pRole = p.roles[0].id
        let admin_province = admin.user_province
        let admin_amphur = admin.user_amphur
        let p_province = p.user_province
        let p_amphur = p.user_amphur
        if (adminRole == 3){

          if (p_amphur == admin_amphur){
            return true
          }else{
            return false
          }

        }else if (adminRole == 2) {
          if (p_amphur == admin_amphur){
            return true
          }else{
            return false
          }
        }
        return true
      },
      getProvinceAmphurDistrictString: function (user) {
        let pvString = user.province ? user.province.province_name : "-";
        let amString = user.amphur ? user.amphur.amphur_name : "-";
        let diString = user.district ? user.district.district_name : "-";


        let outputStr = "";
        outputStr += pvString == "-" ? "" : pvString;
        outputStr += amString == "-" ? "" : " " + amString;
        outputStr += diString == "-" ? "" : " " + diString;
        return outputStr;
      },
      changePage: async function (page) {
        this.form.page = page;
        let paginate = await this.$store.dispatch("admin/users/getUsers", this.form)
        this.paginate = paginate;
        this.paginate.page = parseInt(paginate.page)
        this.users = paginate.data;

      },
      loadData: async function () {
        this.form.page = 1;
        let page = await this.$store.dispatch('admin/users/getUsers', this.form);
        this.paginate = page;
        this.paginate.page = parseInt(page.page)
        this.users = page.data;
      },
      search: async function () {
        this.form.page = 1;
        let page = await this.$store.dispatch("admin/users/getUsers", this.form)
        this.paginate = page;
        this.paginate.page = parseInt(page.page)
        this.users = page.data;
      },
      delUser: async function (id) {

        if(confirm("Do you want to delete this item?")) {
          let data = await this.$store.dispatch("admin/users/deleteUserById", id);
          if(data){
            alert("ลบเรียบร้อยเเล้ว")
            await this.loadData()
          }
        }
      },
    }

  }
</script>




