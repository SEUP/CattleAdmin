<template>
  <v-container class="grid-list-md">
    <v-layout row wrap>

      <v-layout row wrap>
        <v-flex xs12 >
          <v-card-text class="display-1  pa-0 text-xs-center text-md-left">
            <v-icon color="primary" x-large>mdi-chart-bar</v-icon>แผนภูมิรายงานเกษตรกรผู้เลี้ยงโคเนื้อ 4 จังหวัด พะเยา เชียงราย แพร่ น่าน
          </v-card-text>
          <v-divider class="my-3"></v-divider>
        </v-flex>
        <v-flex md6>


          <charts-menu>

          </charts-menu>

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
    name: "Report",
    components: {
      ThailandNorthMapChart, ThailandProvinceMapChart,ChartsMenu
    },
    data: () => ({}),
  }
</script>

<style scoped>

</style>
