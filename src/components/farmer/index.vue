<template>
  <v-container>
    <h1 class="display-1 pa-0 mb-3">
      <v-icon x-large color="primary">mdi-account-box</v-icon>
      ผู้ใช้เกษตรกรผู้เลี้ยงโคเนื้อ
    </h1>
    <v-divider class="my-3"></v-divider>
    <v-card class="elevation-2">
      <v-layout row>
        <v-flex xs3>
          <v-btn :to="{name:'create-farmer'}" color="primary">
            <v-icon>mdi-account-plus</v-icon>&ensp;เพิ่ม
          </v-btn>
        </v-flex>
        <v-layout wrap>
          <v-flex xs12 class="mx-3">
            <v-text-field append-icon="mdi-magnify"
                          placeholder="ค้นหา"
                          hide-details class="pa-0 mt-2"
                          v-model="form.keyword"
                          @keyup.13="search()"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-layout>
      <v-layout>
        <v-flex my-2 mx-2 xs12>
          <district-select-single-line @change="updateDistrictSelect"></district-select-single-line>
        </v-flex>
      </v-layout>

      <v-divider ></v-divider>
    <v-data-table
      :headers="headers"
      :items="paginate.data"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{props.item.personal_id}}</td>
        <td class="text-xs-left">{{ props.item.firstname}}</td>
        <td class="text-xs-left">{{  props.item.lastname }}</td>
        <td class="text-xs-left">{{ props.item.phone_number }}</td>
        <td class="text-xs-left">{{ getProvinceAmphurDistrictString(props.item) }}</td>
        <td class="text-xs-center">


          <v-tooltip top v-if="props.item.farmOwner">
            <v-btn class="ma-0" icon :to="{name:'farmOwner-editFarmOwner',params : {id : props.item.farmOwner.id}}"
                   slot="activator">
              <v-icon color="green">mdi-file-document</v-icon>
            </v-btn>
            <span>แบบสอบถาม</span>
          </v-tooltip>

          <v-tooltip top v-else>
            <v-btn class="ma-0" icon :to="{name:'farmOwner-addFarmOwner',params : {'farmer' : props.item}}"
                   slot="activator">
              <v-icon color="red">mdi-file-document</v-icon>
            </v-btn>
            <span>เพิ่มแบบสอบถาม</span>
          </v-tooltip>

          <v-tooltip top>
            <v-btn class="ma-0" icon :to="{name:'edit-farmer',params : {id : props.item.id}}" slot="activator">
              <v-icon color="primary">create</v-icon>
            </v-btn>
            <span>Edit</span>
          </v-tooltip>

          <v-tooltip top>
            <v-btn class="ma-0" icon @click="" slot="activator" @click.native="delFarmer(props.item.id)">
              <v-icon color="red">delete</v-icon>
            </v-btn>
            <span>Delete</span>
          </v-tooltip>

        </td>

      </template>
    </v-data-table>
    <div class="text-xs-center">
      <v-pagination @input="changePage" :length="paginate.lastPage"
                    v-model="paginate.page"></v-pagination>
    </div>
    </v-card>
  </v-container>
</template>
<script>
  import Base from "../../components/Base";
  import DistrictSelectSingleLine from "../share/districtSelectSingleLine";

  export default {
    components: {DistrictSelectSingleLine},
    extend: Base,
    name: "farmer-index",
    computed: {
      DistrictSelectSingleLine
    },
    data() {
      return {
        admin: null,
        paginate: {},
        form: {
          keyword: "",
          page: 1,
          admin_province: "",
          admin_amphur: "",
          admin_district: ""
        },
        farmers: [],
        headers: [
          {text: 'รหัสบัตรประจำตัวประชาชน', align: 'left', sortable: false,},
          {text: 'ชื่อ', sortable: false},
          {text: 'นามสกุล', sortable: false},
          {text: 'เบอร์โทรศัพท์', sortable: false},
          {text: "จังหวัด อำเภอ ตำบล", sortable: false},
          {text: 'การจัดการ', sortable: false, align: 'center'}
        ],
      }
    },
    async mounted() {
      this.admin = await localStorage.getItem('user');
      this.admin = JSON.parse(this.admin)
      await this.loadData()
    },
    methods: {
      search() {
        this.form.page = 1
        if (this.form.house_province == 0) {
          this.form.house_province = false
        }
        if (this.form.house_amphur == 0) {
          this.form.house_amphur = false
        }
        if (this.form.house_district == 0) {
          this.form.house_district = false
        }
        this.loadData()
      },
      updateDistrictSelect: function (value) {
        this.form.house_province = value[0];
        this.form.house_amphur = value[1];
        this.form.house_district = value[2];

        if (value[0]) {
          this.form.house_province = value[0].province_id;
        }
        if (value[1]) {
          this.form.house_amphur = value[1].amphur_id;
        }
        if (value[2]) {
          this.form.house_district = value[2].district_id;
        }
        this.search()
      },
      getProvinceAmphurDistrictString: function (farmers) {
        let pvString = farmers.houseProvince ? farmers.houseProvince.province_name : "-";
        let amString = farmers.houseAmphur ? farmers.houseAmphur.amphur_name : "-";
        let diString = farmers.houseDistrict ? farmers.houseDistrict.district_name : "-";


        let outputStr = "";
        outputStr += pvString == "-" ? "" : pvString;
        outputStr += amString == "-" ? "" : " " + amString;
        outputStr += diString == "-" ? "" : " " + diString;
        return outputStr || '-';
      },
      loadData: async function () {
        if (!this.admin) {
          this.admin = await localStorage.getItem('user');
          this.admin = JSON.parse(this.admin)
        }

        this.form.admin_role = this.admin.roles ? this.admin.roles : null;
        this.form.admin_province = this.admin.province;
        this.form.admin_amphur = this.admin.amphur;
        this.form.admin_district = this.admin.district;
        let page = await this.$store.dispatch('farmers/getFarmers', this.form);
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
      changePage: async function (page) {
        console.log(page)
        this.form.page = page;
        this.loadData()
      }
    }
  }
</script>
