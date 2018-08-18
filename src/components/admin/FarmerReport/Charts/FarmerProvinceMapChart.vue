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
    }),
    async mounted() {
      this.title += MapData[this.provinceId][1];

      let mapChart = this.$refs.mapChart;
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
              tooltip: {
                headerFormat: '<span style="font-size:10px">{series.name}</span><br/>',
                pointFormatter: function () {

                  var amphurName = this.amphur_name ? this.amphur_name : this.properties.amphur_name;
                  var value = this.value ? this.value : 0;

                  return amphurName + " : " + value + " คน";
                }
              },
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
