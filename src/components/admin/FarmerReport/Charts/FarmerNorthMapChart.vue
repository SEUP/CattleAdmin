<template>
  <v-flex>
    <v-card>
      <v-card-title>
        <div class="headline">{{title}}</div>
      </v-card-title>
      <v-card-text>
        <div ref="mapChart"></div>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
  import Highcharts from 'highcharts/highmaps'
  import North from '@/maps/North'

  export default {
    name: "FarmerNorthMapChart",
    components: {},
    props: {
      provinceId: {
        type: Number,
        default: 0,
      },
      title : {
        type : String,
        default : ""
      }
    },
    data: () => ({
      Highcharts: Highcharts,
      options: null,
    }),
    async mounted() {
      let mapChart = this.$refs.mapChart;
      let response = await axios.get('/api/v1/admin/farmer-charts/map-data').then((r) => {
        return r.data
      });
      this.options = {
        title: {
          text: null,
        },
        plotOptions: {
          series: {
            point: {
              events: {
                click: function () {
                  console.log(this);
                }
              }
            }
          }
        },
        colorAxis: {},

        series: [
          {
            cursor: 'pointer',
            name: "จำนวนเกษตรกร",
            type: "map",
            mapData: North,
            data : response,
            joinBy: ['id', 'province_id'],

            dataLabels: {
              enabled: true,
              color: '#FFFFFF',
              format: '{point.province_name}<br/>{point.value} คน'
            },
          }
        ],
      },
        Highcharts.mapChart(mapChart, this.options);
    }
  }
</script>

<style scoped>

</style>
