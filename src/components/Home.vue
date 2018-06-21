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
          <router-link :to="{name:'chart-budget',params : {label:'เงินทุนที่ท่านใช้เลี้ยงโคเนื้อ',type:'budget'}}">Budget</router-link>
          <br>
          Basic Route to A chart
          <router-link :to="{name:'chart-groupJoin',params : {label:'การรวมกลุ่มวิสาหกิจชุมชนและสหกรณ์โคเนื้อ',type:'group_joins'}}">groupJoin</router-link>
          <br>
          Basic Route to A chart
          <router-link :to="{name:'chart-cattle',params : {label:'จำนวนโคเนื้อที่เลี้ยง'}}">cattle</router-link>
          <br>
          Basic Route to A chart
          <router-link :to="{name:'chart-double',params : {label:'การขึ้นทะเบียนฟาร์มกับภาครัฐ',type:'use_land'}}">double</router-link>
          <br>
          Basic Route to A chart
          <router-link :to="{name:'chart-multiChoice',params : {label:'การเกิดโรคในฟาร์ม',type:'abortion'}}">multiChoice</router-link>
          <br>
          Basic Route to A chart
          <router-link :to="{name:'chart-doublePivot',params : {label:'การถ่ายพยาธิ',type:'dewormed_amount'}}">doublePivot</router-link>
          <br>
          Basic Route to A chart
          <router-link :to="{name:'chart-suggestion'}">suggestion</router-link>

        <charts-menu></charts-menu>

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
  import ChartsMenu from "./share/ChartsMenu";
  import ThailandNorthMapChart from "@/components/maps/ThailandNorthMapChart";
  import ThailandProvinceMapChart from "@/components/maps/ThailandProvinceMapChart";

  export default {
    name: "Home",
    components: {
      ThailandNorthMapChart, ThailandProvinceMapChart,ChartsMenu
    },
    data: () => ({}),
  }
</script>

<style scoped>

</style>
