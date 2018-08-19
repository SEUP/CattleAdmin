<template>
  <v-container >
    <h1 class="display-1 pa-0 mb-3">
      <v-icon x-large color="primary">mdi-account-box</v-icon>
      ผู้ใช้เกษตรกรผู้เลี้ยงโคเนื้อ
    </h1>
    <v-divider class="my-3"></v-divider>
    <v-layout row >
      <v-flex xs3>
        <v-btn :to="{name:'create-farmer'}" color="primary">
          <v-icon>mdi-account-plus</v-icon>&ensp;เพิ่ม
        </v-btn>
      </v-flex>
    <v-flex xs7 offset-xs6>
      <v-text-field
        label="ค้นหา : ชื่อ นามสกุล รหัสประจำตัวประชาชน"
        v-model="form.keyword"
        append-icon="mdi-magnify"
        @keyup.13="search()"
      ></v-text-field>
    </v-flex>
    </v-layout>
    <v-data-table
      :headers="headers"
      :items="paginate.data"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.firstname+" "+ props.item.lastname }}</td>
        <td class="text-xs-left">{{props.item.personal_id}}</td>
        <td class="text-xs-left">{{ getProvinceAmphurDistrictString(props.item) }}</td>
        <td class="text-xs-left">{{ props.item.updated_at }}</td>
        <td class="text-xs-center">


          <v-tooltip top v-if="props.item.farmOwner" >
            <v-btn class="ma-0" icon :to="{name:'farmOwner-editFarmOwner',params : {id : props.item.farmOwner.id}}" slot="activator">
              <v-icon color="green" >mdi-file-document</v-icon>
            </v-btn>
            <span>แบบสอบถาม</span>
          </v-tooltip>

          <v-tooltip top v-else>
            <v-btn class="ma-0" icon :to="{name:'farmOwner-addFarmOwner',params : {'farmer' : props.item}}" slot="activator">
              <v-icon color="red" >mdi-file-document</v-icon>
            </v-btn>
            <span>เพิ่มแบบสอบถาม</span>
          </v-tooltip>

          <v-tooltip top >
            <v-btn class="ma-0" icon :to="{name:'edit-farmer',params : {id : props.item.id}}" slot="activator">
              <v-icon color="primary" >create</v-icon>
            </v-btn>
            <span>Edit</span>
          </v-tooltip>

          <v-tooltip top>
            <v-btn class="ma-0" icon @click="" slot = "activator" @click.native = "delFarmer(props.item.id)">
              <v-icon color="red" >delete</v-icon>
            </v-btn>
            <span>Delete</span>
          </v-tooltip>

        </td>

      </template>
    </v-data-table>
    <div class="text-xs-center">
      <v-pagination  @input="changePage" :length="paginate.lastPage"
                     v-model="paginate.page"></v-pagination>
    </div>
  </v-container>
</template>
<script>
  import Base from "../../components/Base";

  export default {
    extend : Base,
    name: "farmer-index",
    computed : {
    },
    data() {
      return {
        admin:null,
        paginate : {},
        form: {
          keyword: "",
          page: 1,
          admin_province:"",
          admin_amphur:"",
          admin_district:""
        },
        farmers: [],
        headers: [
          {text: 'รหัสบัตรประจำตัวประชาชน', align: 'left', sortable: false,},
          { text: 'ชื่อ', sortable: false },
          { text: 'นามสกุล', sortable: false },
          { text: 'เบอร์โทรศัพท์', sortable: false},
          { text: "จังหวัด อำเภอ ตำบล", sortable: false},
          { text: 'การจัดการ', sortable: false,align:'center' }
        ],
      }
    },
    async mounted() {
      this.admin  = await localStorage.getItem('user');
      await this.loadData()
    },
    methods: {
      getProvinceAmphurDistrictString: function (farmers) {
        let pvString = farmers.houseProvince ? farmers.houseProvince.province_name : "-";
        let amString = farmers.houseAmphur? farmers.houseAmphur.amphur_name : "-";
        let diString = farmers.houseDistrict? farmers.houseDistrict.district_name : "-";


        let outputStr = "";
        outputStr += pvString == "-" ? "" : pvString;
        outputStr += amString == "-" ? "" : " " + amString;
        outputStr += diString == "-" ? "" : " " + diString;
        return outputStr || '-';
      },
      loadData: async function () {
        this.admin = JSON.parse(this.admin)
        console.log(this.admin)
        this.form.page = 1;
        this.form.admin_role = this.admin.roles ? this.admin.roles : null;
        this.form.admin_province = this.admin.province;
        this.form.admin_amphur = this.admin.amphur;
        this.form.admin_district = this.admin.district;
        let page = await this.$store.dispatch('farmers/getFarmers',this.form);
        this.paginate = page;
        this.paginate.page = parseInt(page.page)
        this.farmers = page.data;
      },
      delFarmer: async function (id) {

        if (confirm("Do you want to delete this item?")) {
          let data = await this.$store.dispatch("farmers/deleteFarmerById", id);
          if (data) {
            alert("ลบเรียบร้อยเเล้ว")
            await this.loadData()
          }
        }
      },
      search: async function () {
        this.form.page = 1;
        let page = await  this.$store.dispatch("farmers/getFarmers", this.form)
        this.paginate = page;
        this.paginate.page = parseInt(page.page)
        this.farmers = page.data;
      },
      changePage: async function (page) {
        this.form.page = page;
        let paginate = await  this.$store.dispatch("farmers/getFarmers", this.form)
        this.paginate = paginate;
        this.paginate.page = parseInt(paginate.page)
        this.farmers = paginate.data;

      },
    }
  }
</script>
