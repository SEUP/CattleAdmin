<template>
    <v-container>
      <h1 class="display-1 pa-0 mb-3"><v-icon x-large color="primary">mdi-magnify</v-icon>&ensp;ค้นหาข้อมูลเกษตรกร</h1>
      <v-divider class="mb-3"></v-divider>
      <div>
        <!--Search Input -->
        <v-layout>
          <v-flex>
            <v-divider class="pt-1 orange"></v-divider>
            <v-card>
              <v-layout wrap px-3 py-1>
                <v-flex xs12 md6>
                  <v-text-field label="ค้นหา : ชื่อ นามสกุล รหัสประจำตัวประชาชน" v-model="form.keyword"></v-text-field>
                </v-flex>
                <v-spacer></v-spacer>

                <v-flex xs12 md5 >
                    <select-search type = "master_breeding_types" label="ประเภทโคที่เลี้ยง"
                                   v-model="form.breeding" @change="form.breeding = $event.id"
                    >
                    </select-search>
                </v-flex>
                <v-flex xs12>
                  <district-select-single-line
                    :valProvince="form.province"
                    :valAmphur="form.amphur"
                    :valDistrict="form.district"
                    singleLine
                    @change="updateDistrictSelect">
                  </district-select-single-line>
                </v-flex>
                <v-flex xs12 class="text-xs-center mt-2">
                  <v-btn color="primary" @click="search()" depressed>ค้นหา</v-btn>
                  <v-btn outline @click="resetSearch()">ล้างข้อมูล</v-btn>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>

        <v-layout class="my-2">
          <v-flex>
            <v-btn color="success" @click="">ส่งออกป็น Excel</v-btn>
          </v-flex>
        </v-layout>

        <!--Search result Display -->
        <v-layout row>
          <v-flex xs12>
            <v-card >
              <v-data-table
                class="" hide-actions :headers="headsTable" :items="paginate.data">
                <template slot="items" slot-scope="props">
                  <td class="text-xs-lef">{{ props.item.first_name +" "+ props.item.last_name }}</td>
                  <td class="text-xs-left">{{ props.item.mobile_no }}</td>
                  <td class="text-xs-left">{{ getProvinceAmphurDistrictString(props.item) }}</td>
                  <td class="text-xs-left">{{ props.item.updated_at }}</td>

                  <td class="text-xs-center">
                    <v-tooltip top >
                      <v-btn class="ma-0" icon @click="" slot="activator">
                        <v-icon color="success" >mdi-download</v-icon>
                      </v-btn>
                      <span>Export</span>
                    </v-tooltip>

                    <v-tooltip top >
                      <v-btn class="ma-0" icon :to="{name:'farmOwner-editFarmOwner',params : {id : props.item.id}}" slot="activator">
                        <v-icon color="primary" >create</v-icon>
                      </v-btn>
                      <span>Edit</span>
                    </v-tooltip>

                    <v-tooltip top>
                      <v-btn class="ma-0" icon @click="" slot = "activator" @click.native = "deleteFarmOwner(props.item.id)">
                        <v-icon color="red" >delete</v-icon>
                      </v-btn>
                      <span>Delete</span>
                    </v-tooltip>

                  </td>
                </template>

              </v-data-table>
              <v-divider></v-divider>
              <v-flex xs12 py-2 class="text-xs-center">
                <v-pagination @input="changePage" :length="paginate.last_page"
                              v-model="paginate.current_page" ></v-pagination>
              </v-flex>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
    </v-container>
</template>
<script>
  import ChoiceSelect from "../share/choiceSelect";
  import selectSearch from "../share/selectSearch";
  import DistrictSelectSingleLine from "../share/districtSelectSingleLine";
  export default {
    name: "farmOwner-index",
    components: {DistrictSelectSingleLine, ChoiceSelect,selectSearch},
    data : () => ({
      paginate:{},
      form : {
        keyword : "",
        breeding : null,
        province : null,
        amphur : null,
        district : null,

      },
      farmOwners : [],
      headsTable:[
        {text: "ชื่อ-นามสกุล", align:"left" ,value:"full_name",sortable :false},
        {text: "เบอร์โทร", align:"left" ,value:"mobile_no",sortable :false},
        {text: "จังหวัด อำเภอ ตำบล", align:"left" ,value:"address_name",sortable :false},
        {text: "ข้อมูลเมื่อ", align:"left" ,value:"updated_at",sortable :false},
        {text: "การจัดการ", align:"center" ,value:"action" ,sortable :false},
      ],
    }),
    async created () {
      await this.loadData()
    },
    methods : {
      getProvinceAmphurDistrictString: function (item) {
        let pvString = item.province_name ? item.province_name : "-";
        let amString = item.amphur_name ? item.amphur_name : "-";
        let diString = item.district_name ? item.amphur_name : "-";


        let outputStr = "";
        outputStr += pvString == "-" ? "" : pvString;
        outputStr += amString == "-" ? "" : " " + amString;
        outputStr += diString == "-" ? "" : " " + diString;
        return outputStr;
      },
      loadData : async function () {
        let paginate  = await this.$store.dispatch("farmOwners/getFarmOwners")
        this.paginate = paginate;
        this.farmOwners = paginate.data;
      },
      search : async function () {
        let paginate = await this.$store.dispatch("farmOwners/getFarmOwners",this.form)
        this.paginate = paginate;
        this.farmOwners = paginate.data;
      },
      resetSearch :function () {
        this.form = Object.assign({})
        this.$router.go(0)

      },
      changePage: async function (page) {
        this.form.page = page;
        let paginate = await  this.$store.dispatch("farmOwners/getFarmOwners", this.form)
        this.paginate = paginate;
        this.farmOwners = paginate.data;

      },updateDistrictSelect: function (value) {
        if (value[0]) {
          this.form.province = value[0].PROVINCE_ID;
          this.form.amphur = 0;
          this.form.district = 0;
        }
        if (value[1]) {
          this.form.amphur = value[1].AMPHUR_ID;
          this.form.district = 0 ;
        }
        if (value[2]) {
          this.form.district = value[2].DISTRICT_ID;
        }
      },
      deleteFarmOwner : async function (id) {

        if(confirm("Do you want to delete this item?")){
          let result = await  this.$store.dispatch("farmOwners/deleteFarmOwner",id)
          await alert("ลบเรียบร้อยเเล้ว")
          await this.loadData();
        }

      }
    }
  }
</script>

