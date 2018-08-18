<template>
  <v-container class="grid-list-md">
    <v-layout row wrap>

      <v-layout row wrap>
        <v-flex xs12>
          <v-card-text class="headline  pa-0 text-xs-center text-md-left">
            <v-icon color="primary" x-large>mdi-chart-bar</v-icon>
            รายงานสมาชิกเกษตรกรระบบใหม่ 4 จังหวัดภาคเหนือ
          </v-card-text>
          <v-divider class="my-3"></v-divider>
        </v-flex>

        <v-flex xs6>
          <farmer-north-map-chart title="สมาชิกเกษตรกรระบบใหม่ 4 จังหวัดภาคเหนือ"/>
        </v-flex>

        <v-flex xs6>
          <farmer-province-map-chart :province-id="42"/>
        </v-flex>
        <v-flex xs6>
          <farmer-province-map-chart :province-id="43"/>
        </v-flex>
        <v-flex xs6>
          <farmer-province-map-chart :province-id="44"/>
        </v-flex>
        <v-flex xs6>
          <farmer-province-map-chart :province-id="45"/>
        </v-flex>

      </v-layout>
    </v-layout>
  </v-container>
</template>
<style scoped></style>
<script>

  import FarmerNorthMapChart from "./Charts/FarmerNorthMapChart";
  import FarmerProvinceMapChart from "./Charts/FarmerProvinceMapChart";

  export default {
    name: "FamerReportIndex",
    components: {
      FarmerProvinceMapChart,
      FarmerNorthMapChart
    },
    data: () => ({}),
  }
</script>

<style scoped>

</style>
