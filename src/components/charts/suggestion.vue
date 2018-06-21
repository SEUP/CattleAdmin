<template>
  <v-container class="grid-list-md">
    <v-layout row wrap>
      <v-flex xs12>
        <div class="headline my-2">รายงาน ปัญหา อุปสรรค และข้อเสนอแนะ</div>
        <v-divider></v-divider>
      </v-flex>
      <v-flex>
        <v-card>
          <v-divider class="pt-1 warning"></v-divider>
          <v-card-text>ค้นหาข้อเสนอแนะ</v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
          <v-layout wrap>
            <v-text-field label="ค้นหา" placeholder="ค้นหา : ปัญหาเเละข้อเสนอเเนะ" class="mx-3" v-model="form.keyword"></v-text-field>
            <v-flex xs12>
              <district-select-single-line class="mx-2"
                                           :valProvince="form.province"
                                           :valAmphur="form.amphur"
                                           :valDistrict="form.district"
                                           singleLine
                                           @change="updateDistrictSelect"
              >
              </district-select-single-line>
            </v-flex>
            <v-flex xs12 class="text-xs-center">
              <v-btn depressed color="primary" @click="load">ค้นหา</v-btn>
              <v-btn outline @click="resetSearch">ล้างข้อมูล</v-btn>
            </v-flex>
          </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-data-table hide-actions :headers="header" :items="items">
          <template slot="items" slot-scope="props">
            <td class="text-xs-lef">{{ props.item.problem  }}</td>
            <td class="text-xs-left">{{ props.item.suggestion }}</td>
            <td class="text-xs-left">{{ props.item.province_name +" "+props.item.amphur_name+" "+props.item.district_name }}</td>
          </template>
        </v-data-table>
      </v-flex>
      <v-flex xs12 py-2 class="text-xs-center">
        <v-pagination  ></v-pagination>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    import DistrictSelectSingleLine from "../share/districtSelectSingleLine";
    export default {
      name: "suggestion",
      components: {DistrictSelectSingleLine},
      data : () => ({
        user_id: 0,
        user_is_admin: 0,
        admin_level: 0,
        farmOwners: [],
        farmOwnerPage: {},
        form: {
          keyword: "",
          province: 0,
          amphur: 0,
          district: 0,
          page: "",
        },
        header : [
          {text: "แัญหาเเละอุปสรรคในการเลี้ยงโคเนื้อ", align:"left" ,value:"problem",sortable :false},
          {text: "ข้อเสนอเเนะ", align:"left" ,value:"suggestion",sortable :false},
          {text: "จังหวัด  อำเภอ  ตำบล", align:"left" ,value:"address_name",sortable :false},

        ],
        items : []
      }),
      mounted() {
        this.load();
      },
      methods : {
        updateDistrictSelect: function (value) {
          if (value[0]) {
            this.form.province = value[0].PROVINCE_ID;
          }
          if (value[1]) {
            this.form.amphur = value[1].AMPHUR_ID;
          }
          if (value[2]) {
            this.form.district = value[2].DISTRICT_ID;
          }
        },
        resetSearch :function () {
          this.form = {
              keyword: "",
              province: 0,
              amphur: 0,
              district: 0,
              page: "",
          };
          this.load()
        },
        load : async function () {
          this.user_id = this.$route.params.user_id;
          this.user_is_admin = this.$route.params.user_is_admin;
          this.admin_level  = this.$route.params.admin_level ;
          let QueryString = "api/farm-owner/suggestion"

          // this.items = await this.$store.dispatch("charts/getSuggestion",this.form)
          this.items = await axios.get(QueryString,this.form)
            .then ((response) => {
              return response.data
            })
            .catch((err)=> {
              return null
            })
        }
      }
    }
</script>

<style scoped>

</style>
