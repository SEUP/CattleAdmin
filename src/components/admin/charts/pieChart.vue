<template>
  <v-container class="grid-list-md fluid">
    <v-layout row wrap>
      <v-flex xs8>
        <div class="headline">{{$route.params.label}}</div>
        <province-select :value="province" @change="provinceChange"></province-select>

        <v-card class="mt-3">
          <v-card-text class="subheader black--text">{{$route.params.label}}</v-card-text>
          <v-divider/>
          <div class="mt-3" ref="chart"></div>
        </v-card>

      </v-flex>
      <v-flex xs4 class="mt-3">
        <chartmenu></chartmenu>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import provinceSelect from "@/components/admin/share/provinceSelect"
  import Highcharts from "highcharts/highcharts"
  import chartmenu from "../share/ChartsMenu"

  export default {
    name: "pieChart",
    components: {
      provinceSelect,
      chartmenu,
    },
    data: () => ({
      province: null,
      chartData: null,
    }),
    watch: {
      '$route'(to, from) {
        // Whatever you need to change route
        this.load();
      }
    },
    mounted() {
      this.load();
    },
    methods: {

      provinceChange: function (ev) {
        this.province = ev;
        console.log(this.province);
        this.load();
      },
      load: async function () {
        let type = this.$route.params.type;
        let QueryString = "pie/" + type;
        if (this.province && this.province.province_id != 0) {
          QueryString += "/" + this.province.province_id;
        }
        this.chartData = await this.$store.dispatch("admin/charts/getChart",QueryString)
        this.displayChart();
      },
      displayChart: function () {
        let chart = this.$refs.chart;
        Highcharts.chart(chart, {
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
          },
          title: {
            text: null,
          },
          tooltip: this.chartData.tooltip,
          plotOptions: {

            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: true,
                formatter: function () {
                  // display only if larger than 1
                  return this.y > 1 ? '<b>' + this.point.name + ': </b> ' + this.y + ' คน' : null;
                },

                style: {
                  fontWeight: 'bold',
                  fontSize: '16px',
                  width: '100px'
                }
              },
            }
          },
          series: this.chartData.series,
        })
      }
    }

  }
</script>

<style scoped>

</style>
