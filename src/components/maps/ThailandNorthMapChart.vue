<template>
  <v-flex>
    <v-card>
      <v-card-title>
        <div class="headline">{{title}}</div>
      </v-card-title>
      <v-card-text>
        <div ref="mapChart"></div>
        <v-btn ref="showDialog" @click="dialog = true" color="info">เต็มจอ</v-btn>

      </v-card-text>
    </v-card>
    <v-dialog v-model="dialog" width="100%">
      <v-card>
        <v-toolbar>
          <v-toolbar-title>{{title}}</v-toolbar-title>
          <v-spacer/>
          <v-btn @click="dialog = false" color="error">ปิด</v-btn>
        </v-toolbar>
        <v-card-title>
          <div class="headline"></div>
        </v-card-title>
        <v-card-text>
          <div ref="mapChart2" style="height: 650px;"></div>
        </v-card-text>
      </v-card>
    </v-dialog>

  </v-flex>
</template>

<script>
  import Highcharts from 'highcharts/highmaps'
  import North from '@/maps/North'

  export default {
    name: "ThailandNorthMapChart",
    components: {},
    props: {
      provinceId: {
        type: Number,
        default: 0,
      },
      title: {
        type: String,
        default: ""
      }
    },
    data: () => ({
      Highcharts: Highcharts,
      options: null,
      options2 :null,
      dialog : false
    }),
    async mounted() {
      let mapChart = this.$refs.mapChart;
      let mapChart2 = this.$refs.mapChart2;

      let response = await axios.get('/api/v1/admin/charts/map-data').then((r) => {
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
        tooltip: {
          headerFormat: 'จำนวนเกษตรกร',
          formatter: function () {
            return `${this.point.province_name} : ${this.point.value}`
          }
        },

        series: [
          {
            cursor: 'pointer',
            name: "จำนวนเกษตรกร",
            type: "map",
            mapData: North,
            data: response,
            joinBy: ['id', 'province_id'],

            dataLabels: {
              enabled: true,
              color: '#FFFFFF',
              format: '{point.province_name}<br/>{point.value} คน'
            },
          }
        ],
      }
      this.options2 = _.cloneDeep(this.options)
      Highcharts.mapChart(mapChart, this.options);
      Highcharts.mapChart(mapChart2, this.options2);


    }
  }
</script>

<style scoped>

</style>
