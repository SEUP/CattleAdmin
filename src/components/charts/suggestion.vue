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
            <v-text-field label="ค้นหา" placeholder="ค้นหา : ปัญหาเเละข้อเสนอเเนะ" class="mx-3"></v-text-field>
            <v-flex xs12>
              <district-select-single-line class="mx-2"></district-select-single-line>
            </v-flex>
            <v-flex xs12 class="text-xs-center">
              <v-btn depressed color="primary">ค้นหา</v-btn>
              <v-btn outline>ล้างข้อมูล</v-btn>
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
    </v-layout>
  </v-container>

</template>

<script>
    import DistrictSelectSingleLine from "../share/districtSelectSingleLine";
    export default {
      name: "suggestion",
      components: {DistrictSelectSingleLine},
      data : () => ({
        header : [
          {text: "แัญหาเเละอุปสรรคในการเลี้ยงโคเนื้อ", align:"left" ,value:"problem",sortable :false},
          {text: "ข้อเสนอเเนะ", align:"left" ,value:"suggestion",sortable :false},
          {text: "จังหวัด  อำเภอ  ตำบล", align:"left" ,value:"address_name",sortable :false},

        ],
        items : []
      })
    }
</script>

<style scoped>

</style>
