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
              <v-card-text class="grey lighten-3"><part3></part3></v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content >
            <div slot="header">{{"ส่วนที่ 4"}}</div>
            <v-card>
              <v-card-text class="grey lighten-3">{{"TO DO"}}</v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content >
            <div slot="header">{{"ส่วนที่ 5 ข้อมูลแหล่งเงินทุนที่ใช้ในการเลี้ยงโคเนื้อ"}}</div>
            <v-card>
              <v-card-text class="grey lighten-3"><part5></part5></v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content >
            <div slot="header">{{"ส่วนที่ 6 ข้อมูลการตลาด การรวมกลุ่มของสมาชิก(วิสาหกิจชุมชนและสหกรณ์)"}}</div>
            <v-card>
              <v-card-text class="grey lighten-3"><part6></part6></v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content >
            <div slot="header">{{"ส่วนที่ 7 การได้รับบริการ การส่งเสริมและสนับสนุนจากหน่วยงานต่างๆ"}}</div>
            <v-card>
              <v-card-text class="grey lighten-3"><Part7></Part7></v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content >
            <div slot="header">{{"ส่วนที่ 8 ปัญหา อุปสรรค และข้อเสนอแนะ"}}</div>
            <v-card>
              <v-card-text class="grey lighten-3"><part8></part8></v-card-text>
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
  import Part3 from "./edit/part3"
  import Part5 from "./edit/part5";
  import Part6 from "./edit/part6";
  import Part7 from "./edit/part7";
  import Part8 from "./edit/part8";



    export default {
      components: {
        Part3,
        Part5,
        Part6,
        Part7,
        Part8,
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
