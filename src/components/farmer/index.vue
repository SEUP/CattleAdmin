<template>
  <v-container >
    <h1 class="display-1 pa-0 mb-3">
      <v-icon x-large color="primary">mdi-magnify</v-icon>
      ผู้ใช้เกษตรกรผู้เลี้ยงโคเนื้อ
    </h1>
    <v-divider class="my-3"></v-divider>
    <v-layout row >
      <v-flex xs3>
        <v-btn :to="{name:'add-farmer'}" color="primary">
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
    <v-divider class="mb-3"></v-divider>
    <v-data-table
      :headers="headers"
      :items="paginate.data"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.firstname+" "+ props.item.lastname }}</td>
        <td class="text-xs-left">{{props.item.personal_id}}</td>
        <td class="text-xs-left">{{props.item.house_province +" "+ props.item.house_amphur +" "+ props.item.house_district}}</td>
        <td class="text-xs-left">{{ props.item.updated_at }}</td>
        <td class="text-xs-center">


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
      <v-pagination @input="changePage" :length="paginate.last_page"
                    v-model="paginate.current_page"></v-pagination>
    </div>
  </v-container>
</template>
<script>
  export default {
    name: "farmer-index",
    data() {
      return {
        paginate : {},
        form: {
          keyword: "",
        },
        farmers: [],
        headers: [

          {text: "ชื่อ-นามสกุล", align: "left", value: "full_name", sortable: false},
          {text: "เลขบัตรประจำตัวประชาชน", align: "left", value: "personal_id", sortable: false},
          {text: "จังหวัด อำเภอ ตำบล", align: "left", value: "address_name", sortable: false},
          {text: "ข้อมูลเมื่อ", align: "left", value: "updated_at", sortable: false},
          {text: "การจัดการ", align: "center", value: "action", sortable: false},
        ],
      }
    },
    async mounted() {
      await this.loadData()
      console.log("IN index",this.farmers);
    },
    methods: {
      getProvinceAmphurDistrictString: function (farmers) {
        let pvString = user.province ? user.province.province_name : "-";
        let amString = user.amphur ? user.amphur.amphur_name : "-";
        let diString = user.district ? user.district.district_name : "-";


        let outputStr = "";
        outputStr += pvString == "-" ? "" : pvString;
        outputStr += amString == "-" ? "" : " " + amString;
        outputStr += diString == "-" ? "" : " " + diString;
        return outputStr;
      },
      loadData: async function () {
        this.form.page = 1;
        let page = await this.$store.dispatch('farmers/getFarmer');
        this.paginate = page;
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
        let page = await  this.$store.dispatch("farmers/getFarmer", this.form);
        this.paginate = page;
        this.farmers = page.data;
      },
      changePage: async function (page) {
        this.form.page = page;
        let paginate = await  this.$store.dispatch("farmers/getFarmer", this.form)
        this.paginate = paginate;
        this.farmers = paginate.data;

      },
    }
  }
</script>
