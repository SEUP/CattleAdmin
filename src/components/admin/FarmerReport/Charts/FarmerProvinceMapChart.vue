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
  import {Phayao, Phrae, Nan, ChiangRai} from '@/maps/Provinces'

  const MapData = {
    42: [Phrae, "แพร่"],
    43: [Nan, "น่าน"],
    44: [Phayao, "พะเยา"],
    45: [ChiangRai, "เชียงราย"],
  }

  export default {
    name: "FarmerProvinceMapChart",
    components: {},
    props: {
      provinceId: {
        type: Number,
      },
    },
    data: () => ({
      title: "จำนวนเกษตรกรผู้เลี้ยงโคเนื้อจังหวัด",
      Highcharts: Highcharts,
      options: null,
      options2: null,
      dialog: false,
    }),
    async mounted() {
      this.title += MapData[this.provinceId][1];

      let mapChart = this.$refs.mapChart;
      let mapChart2 = this.$refs.mapChart2;

      let response = await axios.get('/api/v1/admin/farmer-charts/map-data/' + this.provinceId).then((r) => {
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
          formatter: function () {
            let point = this.point
            let amphurName = point.amphur_name
            let value = point.value ? point.value : 0;

            return `${amphurName} : ${value} คน`;
          }
        },

        series: [
          {
            cursor: 'pointer',
            name: "จำนวนเกษตรกร",
            type: "map",
            mapData: MapData[this.provinceId][0],
            data: response,
            joinBy: ['amphur_id', 'amphur_id'],
            dataLabels: {
              enabled: true,
              color: '#FFFFFF',
              formatter: function () {
                var amphurName = this.point.amphur_name ? this.point.amphur_name : this.point.properties.amphur_name;
                var value = this.point.value ? this.point.value : 0;

                return amphurName + " : " + value + " คน";
              },

            },
          }
        ],
      }
      this.options2 = {
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
          formatter: function () {
            let point = this.point
            let amphurName = point.amphur_name
            let value = point.value ? point.value : 0;

            return `${amphurName} : ${value} คน`;
          }
        },

        series: [
          {
            cursor: 'pointer',
            name: "จำนวนเกษตรกร",
            type: "map",
            mapData: MapData[this.provinceId][0],
            data: response,
            joinBy: ['amphur_id', 'amphur_id'],
            dataLabels: {
              enabled: true,
              color: '#FFFFFF',
              formatter: function () {
                var amphurName = this.point.amphur_name ? this.point.amphur_name : this.point.properties.amphur_name;
                var value = this.point.value ? this.point.value : 0;

                return amphurName + " : " + value + " คน";
              },

            },
          }
        ],
      }

      Highcharts.mapChart(mapChart, this.options);
      Highcharts.mapChart(mapChart2, this.options2);

    }
  }
</script>

<style scoped>

</style>
