<template>
  <v-container fluid class="grid-list-md">
    <v-layout row wrap>

      <v-layout row wrap>
        <v-flex md6>
          Basic Route to A chart
          <router-link :to="{name:'chart-pie',params : {label:'เพศ',type:'sex'}}">SEX</router-link>
          <br>
          Basic Route to A chart
          <router-link :to="{name:'chart-normal',params : {label:'การศึกษา',type:'education'}}">Education</router-link>
          <br>
          Basic Route to A chart
          <router-link :to="{name:'chart-range-farmowner',
          params : {label:'รายได้เฉลี่ยต่อปีของการขายโคเนื้อ',type:'avg_cattle_income',min: 50000,max: 200000,step: 3,withNull : true,nullText : 'ยังไม่ได้ขาย'}}"
          >
            avg_cattle_income
          </router-link>
          <br>
          Basic Route to A chart
          <router-link :to="{name:'chart-budget',params : {label:'เงินทุนที่ท่านใช้เลี้ยงโคเนื้อ',type:'budget'}}">Budget</router-link>          <br>
          Basic Route to A chart
          <router-link :to="{name:'chart-groupJoin',params : {label:'การรวมกลุ่มวิสาหกิจชุมชนและสหกรณ์โคเนื้อ',type:'group_joins'}}">groupJoin</router-link>

          <v-expansion-panel >
            <v-expansion-panel-content>
              <div slot="header" >ส่วนที่ 1 ข้อมูลพื้นฐานของเกษตรกร</div>
              <v-card>
                <v-card-text class="grey lighten-3" >
                 <div>-->  เพศ</div>
                  <div>-->  อายุ</div>
                  <div>-->  การศึกษา</div>
                  <div>-->  ที่ตั้งฟาร์มของเกษตรกร</div>
                  <div>-->  อาชีพการเลี้ยงโคเนื้อ(อาชีพหลัก-เสริม)</div>
                  <div>-->  เฉลี่ยรายได้รวมของครอบครัว</div>
                  <div>-->  รายได้จากการประกอบอาชีพของเกษตรกร</div>
                  <div>-->  รายได้เฉลี่ยต่อปีของการขายโคเนื้อ</div>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>

            <v-expansion-panel-content>
              <div slot="header" >ส่วนที่ 2 ข้อมูลการเลี้ยงและสถานภาพฟาร์ม</div>
              <v-card>
                <v-card-text class="grey lighten-3" >
                  <div>-->  วัตถุประสงค์ของการเลี้ยงโคเนื้อ</div>
                  <div>-->  การทำประวัติโคเนื้อ</div>
                  <div>-->  จำนวนโคเนื้อที่เลี้ยง</div>
                  <div>-->  ประสบการณ์การเลี้ยงโคเนื้อ</div>
                  <div>-->  เป้าหมายการเลี้ยงในอนาคต</div>
                  <div>-->  การขึ้นทะเบียนฟาร์มกับภาครัฐ</div>
                  <div>-->  การเกิดโรคในฟาร์ม</div>
                  <div>-->  ค่าใช้จ่ายในการเลี้ยงโคเนื้อ</div>
                  <div>-->   ประวัติการตรวจโรคสัตว์</div>
                  <div>-->   แหล่งน้ำที่ใช้</div>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>

            <v-expansion-panel-content>
              <div slot="header" >ส่วนที่ 3 ข้อมูลแรงงาน พื้นที่ในการเลี้ยง และการจัดการอาหาร</div>
              <v-card>
                <v-card-text class="grey lighten-3" >
                  <div>-->  จำนวนแรงงานภายในครอบครัว</div>
                  <div>-->  จำนวนแรงงานภายนอก</div>
                  <div>-->  ลักษณะการเลี้ยงโคเนื้อ</div>
                  <div>-->  พื้นที่ที่ใช้ในการเลี้ยงโคเนื้อ</div>
                  <div>-->  อาหารที่ใช้เลี้ยงโคเนื้อ</div>
                  <div>-->  การให้แร่ธาตุก้อน</div>
                  <div>-->  การสำรองฟางข้าว หรือเปลือกข้าวโพด</div>
                  <div>-->  แหล่งอาหารหยาบในฤดูแล้ง</div>
                  <div>-->   พื้นที่ถือครองทางการเกษตร</div>
                  <div>-->   การเช่าที่ดินเพื่อใช้ในการเลี้ยง</div>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>

            <v-expansion-panel-content>
              <div slot="header" >ส่วนที่ 4 การผสมพันธ์ุ ประสิทธิภาพการผลิต และการรักษาโรค</div>
              <v-card>
                <v-card-text class="grey lighten-3" >
                  <div>-->  การผสมพันธุ์โคเนื้อในฟาร์ม</div>
                  <div>-->  แหล่งน้ำเชื้อการผสมเทียม</div>
                  <div>-->  ผู้ให้บริการผสมเทียม</div>
                  <div>-->  การตายของโคในรอบปี</div>
                  <div>-->  บุคคลที่ทำการรักษาให้เมื่อโคเจ็บป่วย</div>
                  <div>-->  อัตราส่วนพ่อพันธุ์คุมฝูง</div>
                  <div>-->  การถ่ายพยาธิ</div>
                  <div>-->  วัคซีนป้องกันโรค</div>
                  <div>-->   การจัดการมูลโคในฟาร์ม</div>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>

            <v-expansion-panel-content>
              <div slot="header" >ส่วนที่ 5 ข้อมูลแหล่งเงินทุนที่ใช้ในการเลี้ยงโคเนื้อ</div>
              <v-card>
                <v-card-text class="grey lighten-3" >
                  <div>-->  เงินทุนการเลี้ยงโคเนื้อ</div>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>

            <v-expansion-panel-content>
              <div slot="header" >ส่วนที่ 6 ข้อมูลการตลาด การรวมกลุ่มของสมาชิก(วิสาหกิจชุมชนและสหกรณ์)</div>
              <v-card>
                <v-card-text class="grey lighten-3" >
                  <div>-->  การจำหน่ายโคเนื้อให้กับใคร</div>
                  <div>-->  อายุของโคเนื้อที่จำหน่าย</div>
                  <div>-->  น้ำหนักของโคเนื้อที่ท่านจำหน่าย</div>
                  <div>-->  ลักษณะการจำหน่ายโคเนื้อ</div>
                  <div>-->  การรวมกลุ่มวิสาหกิจชุมชนและสหกรณ์โคเนื้อ</div>
                  <div>-->  ราคาของโคเนื้อที่ขาย และระยะเวลาในการเลี้ยง</div>
                  <div>-->  ความประสงค์ในการรวมกลุ่มวิสาหกิจชุมชนและสหกรณ์โคเนื้อ</div>
                  <div>-->  ความต้องการความช่วยเหลือจากสหกรณ์</div>
                  <div>-->   ความต้องการซื้ออาหารข้นในนามสหกรณ์</div>
                  <div>-->   ระดับความพอใจต่อราคาที่ขาย</div>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>

            <v-expansion-panel-content>
              <div slot="header" >ส่วนที่ 7 การได้รับบริการ การส่งเสริมและสนับสนุนจากหน่วยงานต่างๆ</div>
              <v-card>
                <v-card-text class="grey lighten-3" >
                  <div>-->  หน่วยงานที่ให้บริการส่งเสริมการเลี้ยงโคเนื้อ</div>
                  <div>-->  การเยี่ยมเยือนฟาร์มจากหน่วยงาน</div>
                  <div>-->  การได้รับการสนับสนุนปัจจัยการผลิต</div>
                  <div>-->  การใช้บริการด้านสุขภาพโคจากหน่วยงานของกรมปศุสัตว์</div>
                  <div>-->  การเข้ารับการฝึกอบรมเกี่ยวกับการเลี้ยงโคเนื้อ</div>
                  <div>-->   การไปดูงานเกี่ยวกับการเลี้ยงโคเนื้อ</div>
                  <div>-->  การสนับสนุนให้แม่พันธุ์โคเนื้อมาเลี้ยงเพื่อผลิตลูก</div>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>

            <v-expansion-panel-content>
              <div slot="header" >ส่วนที่ 8 ปัญหา อุปสรรค และข้อเสนอแนะ</div>
              <v-card>
                <v-card-text class="grey lighten-3" >
                  <div>--> ตารางปัญหา อุปสรรคและข้อเสนอแนะ</div>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>



          </v-expansion-panel>
        </v-flex>
        <v-flex md6>
          <v-layout row wrap>
            <v-flex>
              <thailand-north-map-chart title="จำนวนเกษตรกรผู้เลี้ยงโคเนื้อ 4 จังหวัดภาคเหนือ"/>
            </v-flex>
            <v-flex>
              <thailand-province-map-chart :province-id="42"/>
            </v-flex>
            <v-flex>
              <thailand-province-map-chart :province-id="43"/>
            </v-flex>
            <v-flex>
              <thailand-province-map-chart :province-id="44"/>
            </v-flex>
            <v-flex>
              <thailand-province-map-chart :province-id="45"/>



            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-layout>
    </v-container>
</template>
<style scoped></style>
<script>

  import ThailandNorthMapChart from "@/components/maps/ThailandNorthMapChart";
  import ThailandProvinceMapChart from "@/components/maps/ThailandProvinceMapChart";

  export default {
    name: "Home",
    components: {
      ThailandNorthMapChart, ThailandProvinceMapChart
    },
    data: () => ({}),
  }
</script>

<style scoped>

</style>
