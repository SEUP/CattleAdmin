<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <h3 class="display-1"><v-icon x-large color="primary">mdi-plus-box</v-icon>&ensp;บันทึกข้อมูลเกษตรกรใหม่ </h3>
        <v-divider class="my-3"></v-divider>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs10>
        <v-expansion-panel>
          <v-expansion-panel-content >
            <div slot="header">{{"ส่วนที่ 1"}}</div>
            <v-card>
              <v-card-text class="grey lighten-3">{{"TO DO"}}</v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content >
            <div slot="header">{{"ส่วนที่ 2"}}</div>
            <v-card>
              <v-card-text class="grey lighten-3">{{"TO DO"}}</v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content >
            <div slot="header">{{"ส่วนที่ 3 ข้อมูลแรงงาน พื้นที่ในการเลี้ยง และการจัดการอาหาร"}}</div>
            <v-card>
              <v-card-text class="grey lighten-3"><Part3></Part3></v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content >
            <div slot="header">{{"ส่วนที่ 4"}}</div>
            <v-card>
              <v-card-text class="grey lighten-3">{{"TO DO"}}</v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content >
            <div slot="header">{{"ส่วนที่ 5"}}</div>
            <v-card>
              <v-card-text class="grey lighten-3">{{"TO DO"}}</v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content >
            <div slot="header">{{"ส่วนที่ 6"}}</div>
            <v-card>
              <v-card-text class="grey lighten-3">{{"TO DO"}}</v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content >
            <div slot="header">{{"ส่วนที่ 7 การได้รับบริการ การส่งเสริมและสนับสนุนจากหน่วยงานต่างๆ"}}</div>
            <v-card>
              <v-card-text class="grey lighten-3"><Part7></Part7></v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content >
            <div slot="header">{{"ส่วนที่ 8"}}</div>
            <v-card>
              <v-card-text class="grey lighten-3">{{"TO DO"}}</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import roleCheckbox from "@/components/role/roleCheckbox";
  import districtSelect from "@/components/share/districtSelect";
  import choiceSelect from "@/components/share/choiceSelect";
  import Part3 from "./part3";
  import Part7 from "./part7";

    export default {
      components: {
        Part3,
        Part7,
        choiceSelect,
        districtSelect,
        roleCheckbox
      },
      name: "addFarmOwner",
      data (){
        return{
          selected:[],
          form :{
            user_province: null,
            user_amphur : null,
            user_district : null,
            roles: []
          }
        }

      }
    }
</script>

<style scoped>

</style>
