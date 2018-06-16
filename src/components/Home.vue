<template>
  <v-container fluid>
    <v-layout row wrap>


      <v-flex>
        <h1>Hello World</h1>
        <thailand-north-map-chart title="จำนวนเกษตรกรผู้เลี้ยงโคเนื้อ 4 จังหวัดภาคเหนือ"/>
        <thailand-province-map-chart :province-id="42" />
        <thailand-province-map-chart :province-id="43" />
        <thailand-province-map-chart :province-id="44" />
        <thailand-province-map-chart :province-id="45" />

      </v-flex>

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
