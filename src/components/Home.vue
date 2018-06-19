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
