<template>
  <v-container class="grid-list-md fluid">
    <v-layout row wrap>
      <v-flex xs8>
        <div class="headline">{{$route.params.label}}</div>
        <province-select :value="province"
                         @change="provinceChange">
        </province-select>
        <v-card class="mt-3">
          <v-card-text class="subheader black--text">{{head1}}</v-card-text>
          <v-divider/>
          <div ref="master"></div>
        </v-card>
        <v-card class="mt-3">
          <v-card-text class="subheader black--text">{{head2}}</v-card-text>
          <v-divider/>
          <div ref="sub"></div>
        </v-card>
        <v-card class="mt-3" v-if = "type == 'use_land'">
          <v-card-text class="subheader black--text">{{head3}}</v-card-text>
          <v-divider/>
          <div ref="sum_use_land"></div>
        </v-card>
      </v-flex>

      <v-flex xs4 class="mt-3">
        <chartmenu></chartmenu>
      </v-flex>

    </v-layout>
  </v-container>

</template>

<script>
  import ProvinceSelect from "../share/provinceSelect";
  import Highcharts from "highcharts/highcharts"
  import chartmenu from "../share/ChartsMenu"
    export default {
      name: "doubleChart",
      components : {ProvinceSelect,chartmenu},
      data: () => ({
        head1 : null,
        head2 : null,
        head3 : null,
        type : null,
        province : null,
        chartData : [
          {},{},{}
        ],
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
          this.head1 = label
          this.head2 = label
          this.head3 = label
          let QueryString = "double/"+label+"/"+this.type
            if (this.province && this.province.province_id != 0) {
                QueryString += "/" + this.province.province_id;
            }
          this.chartData[0] = await this.$store.dispatch("admin/charts/getChart",QueryString)
          this.displayChart(0);
          this.displayChart(1);
          this.displayChart(2);
        },
        displayChart : function (chartNumber) {
          if(chartNumber==0) {
            let master = this.$refs.master;
            Highcharts.chart(master,{
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
            let sub = this.$refs.sub;
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
                text: "รวมขนาดพื้นที่ (ไร่) แยกตามพื้นที่ที่ใช้ในการเลี้ยงโคเนื้อ",
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
