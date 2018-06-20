<template>
  <v-container class="grid-list-md">
    <v-layout row wrap>
      <v-flex xs12>
        <div class="headline">{{$route.params.label}}</div>
        <province-select :value="province"
                         @change="provinceChange">
        </province-select>
      </v-flex>

      <v-flex xs12>
        <v-card>
          <v-card-text class="subheader black--text">เงินทุนที่ท่านใช้เลี้ยงโคเนื้อ</v-card-text>
          <v-divider/>
          <div ref="master"></div>
        </v-card>
      </v-flex>

      <v-flex xs12 >
        <v-card>
          <v-card-text class="subheader black--text">ยอดรวมเงินกู้ แยกตามแหล่งเงินกู้</v-card-text>
          <v-divider/>
          <div ref="sub"></div>
        </v-card>
      </v-flex>

      <v-flex xs12 v-if = "type = 'use_land'">
        <v-card>
          <v-card-text class="subheader black--text">ยอดรวมเงินกู้ แยกตามแหล่งเงินกู้</v-card-text>
          <v-divider/>
          <div ref="sum_use_land"></div>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>

</template>

<script>
  import ProvinceSelect from "../share/provinceSelect";
  import Highcharts from "highcharts/highcharts"
    export default {
      name: "doubleChart",
      components : {ProvinceSelect},
      data: () => ({
        type : null,
        province : null,
        chartData : [
          {},{},{}
        ],
        min : 50000,
        max : 500000,
        step : 5
      }),
      watch : {
        '$route'(to,from){
          this.load();
        }
      },
      mounted () {
        this.load ();
      },
      methods : {
        provinceChange : function (ev) {
          this.province = ev;
          this.load();
        },
        load : async function () {
          this.type = this.$route.params.type;
          let label = this.$route.params.label;
          this.chartData[0] = axios.get("api/charts/double/"+label+"/"+this.type)
            .then( (response) => {
              return response.data
            });
          this.displayChart(0);
          this.displayChart(1);
          this.displayChart(2);
        },
        displayChart : function (chartNumber) {
          if(chartNumber==0) {
            let marter = this.$refs.master;
            Highcharts.chart(marter,{
              chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
              },
              title: {
                text: this.chartTitle,
              },
              tooltip: this.chartData[0].tooltip,
              plotOptions: {
                pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                    enabled: true,
                    formatter: function () {
                      // display only if larger than 1
                      return this.y >= 1 ? '<b>' + this.point.name + ': </b> ' + this.y + ' คน' : null;
                    }
                  },
                }
              }
              ,
              series: this.chartData[0].series,
            });
          }else if(chartNumber==1){
            let sub = this.$refs.master;
            Highcharts.chart(sub,{
              chart: {
                type: 'column'
              },
              title: {
                text: this.chartTitle,
              },
              xAxis: this.chartData[0].xAxis,
              yAxis: {
                min: 0,
                title: {
                  text: '',
                  align: 'high'
                },
                labels: {
                  overflow: 'justify',
                  style: {
                    fontSize: '10px'
                  }
                }
              },
              legend: {
                enabled: false
              },
              tooltip: this.chartData[0].tooltip,
              plotOptions: {
                column: {
                  pointPadding: 0.2,
                  borderWidth: 0,
                  dataLabels: {
                    enabled: true,
                    style: {
                      fontSize: '20px'
                    },
                    formatter: function () {
                      // display only if larger than 1
                      return this.y >= 1 ? '<b>' + this.y + ' คน' : null ;
                    }
                  }
                }
              },
              series: this.chartData[0].drilldown,
            });
          }else if(chartNumber==2) {
            let sumUseLand = this.$refs.sum_use_land;
            Highcharts.chart(sumUseLand,{
              chart: {
                type: 'column'
              },
              title: {
                text: "รวมขนาดพื้นที่(ไร่) แยกตามพื้นที่ที่ใช้ในการเลี้ยงโคเนื้อ",
              },
              xAxis: this.chartData[0].xAxis,
              yAxis: {
                min: 0,
                title: {
                  text: '',
                  align: 'high'
                },
                labels: {
                  overflow: 'justify',
                  style: {
                    fontSize: '10px'
                  }
                }
              },
              legend: {
                enabled: false
              },
              tooltip: this.chartData[0].tooltip,
              plotOptions: {
                column: {
                  pointPadding: 0.2,
                  borderWidth: 0,
                  dataLabels: {
                    enabled: true,
                    style: {
                      fontSize: '20px'
                    },
                    formatter: function () {
                      // display only if larger than 1
                      return this.y >= 1 ? '<b>' + this.y + ' ไร่' : null;
                    }
                  }
                }
              },
              series: this.chartData[0].area,
            });
          }
        }
      }

    }
</script>

<style scoped>

</style>
