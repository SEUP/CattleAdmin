<template>
  <v-container v-if="isReady">
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
            <div slot="header">{{"ส่วนที่ 1 ข้อมูลพื้นฐานของเกษตรกร"}}</div>
            <v-card>
              <v-card-text class="grey lighten-3"><part1></part1></v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content >
            <div slot="header">{{"ส่วนที่ 2 ข้อมูลการเลี้ยงและสถานภาพฟาร์ม"}}</div>
            <v-card>
              <v-card-text class="grey lighten-3"><part2></part2></v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content >
            <div slot="header">{{"ส่วนที่ 3 ข้อมูลแรงงาน พื้นที่ในการเลี้ยง และการจัดการอาหาร"}}</div>
            <v-card>
              <v-card-text class="grey lighten-3"><part3></part3></v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content >
            <div slot="header">{{"ส่วนที่ 4 การผสมพันธ์ุ ประสิทธิภาพการผลิต และการรักษาโรค"}}</div>
            <v-card>
              <v-card-text class="grey lighten-3"><part4></part4></v-card-text>
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
  import Part1 from "./part1";
  import Part2 from "./part2";
  import Part3 from "./part3";
  import Part4 from "./part4";
  import Part5 from "./part5";
  import Part6 from "./part6";
  import Part7 from "./part7";
  import Part8 from "./part8";




    export default {
      components: {
        Part1,
        Part2,
        Part3,
        Part4,
        Part5,
        Part6,
        Part7,
        Part8,

      },
      name: "addFarmOwner",
      data :()=>({
        form : undefined,
        farmOwner : null
      }),
      computed : {
        isReady : function(){
          let choicesLoaded =  this.$store.state.choices.isLoad == 'Done';
          let districtLoaded = this.$store.state.districtSelect.isLoad == 'Done';
          return choicesLoaded && districtLoaded;
        }
      },
      async created() {
        await this.$store.dispatch('choices/load');
        await this.$store.dispatch('districtSelect/load');
      }

    }
</script>

<style scoped>

</style>
