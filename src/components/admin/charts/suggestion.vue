<template>
  <v-container class="grid-list-md fluid">
    <v-layout row wrap>
      <v-flex xs8>
        <div class="headline my-2">รายงาน ปัญหา อุปสรรค และข้อเสนอแนะ</div>
        <v-divider class="my-3"></v-divider>
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
        <v-data-table hide-actions :headers="header" :items="paginate.data" >
          <template slot="items" slot-scope="props">
            <td class="text-xs-lef">{{ props.item.problem  }}</td>
            <td class="text-xs-left">{{ props.item.suggestion }}</td>
            <td class="text-xs-left">{{ props.item.province_name +" "+props.item.amphur_name+" "+props.item.district_name }}</td>
          </template>
        </v-data-table>
        <v-pagination @input="changePage" :length="paginate.last_page"
                      v-model="paginate.current_page" ></v-pagination>
      </v-flex>

      <v-flex class="mt-3" xs4>
        <chartmenu></chartmenu>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
    import DistrictSelectSingleLine from "../share/districtSelectSingleLine";
    import chartmenu from "../share/ChartsMenu"
    export default {
      name: "suggestion",
      components: {DistrictSelectSingleLine,chartmenu},
      data : () => ({
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
          {text: "ปัญหาเเละอุปสรรคในการเลี้ยงโคเนื้อ", align:"left" ,value:"problem",sortable :false},
          {text: "ข้อเสนอเเนะ", align:"left" ,value:"suggestion",sortable :false},
          {text: "จังหวัด  อำเภอ  ตำบล", align:"left" ,value:"address_name",sortable :false},

        ],
        paginate:{},
      }),
      mounted() {
        this.load();
      },
      methods : {
        updateDistrictSelect: function (value) {
          if (value[0]) {
            this.form.province = value[0].province_id;
            this.form.amphur = 0;
            this.form.district = 0;
          }
          if (value[1]) {
            this.form.amphur = value[1].amphur_id;
            this.form.district = 0 ;
          }
          if (value[2]) {
            this.form.district = value[2].district_id;
          }
        },
        resetSearch :function () {
          this.form = Object.assign({})
          this.$router.go(0)
        },
        load : async function () {
          this.paginate = await this.$store.dispatch("admin/charts/getSuggestion",this.form)
        },
        changePage: async function (page) {
          this.form.page = page;
          let paginate = await  this.$store.dispatch("admin/charts/getSuggestion", this.form)
          this.paginate = paginate;
        }
      }
    }
</script>

<style scoped>

</style>
