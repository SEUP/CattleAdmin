<template>
  <v-container class="grid-list-md">
    <v-layout row wrap>
      <v-flex xs12>
        <div class="headline">{{$route.params.label}}</div>
        <province-select :value="province" @change="provinceChange"></province-select>
      </v-flex>
      <v-flex>
        <div ref="chart"></div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import provinceSelect from "@/components/share/provinceSelect"
  import Highcharts from "highcharts/highcharts"

  export default {
    name: "pieChart",
    components: {
      provinceSelect
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
        let QueryString = "/api/charts/pie/" + type;
        if (this.province && this.province.PROVINCE_ID != 0) {
          QueryString += "/" + this.province.PROVINCE_ID;
        }
        this.chartData = await axios.get(QueryString).then((r) => {
          return r.data
        })
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
