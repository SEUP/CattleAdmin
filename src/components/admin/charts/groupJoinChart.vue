<template>
  <v-container class="grid-list-md fluid">
    <v-layout row wrap>
      <v-flex xs8>
        <div class="headline">{{$route.params.label}}</div>
        <province-select :value="province"
                         @change="provinceChange">
        </province-select>
        <div class="mt-3" ref="chart"></div>
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
      name: "groupJoin",
      components : {ProvinceSelect,chartmenu},
      data: () => ({
        province : null,
        chartData : {},

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
          let type = this.$route.params.type;
          let QueryString ="groupJoin/"+type;
          if(this.province && this.province.province_id !=0){
            QueryString += "/" + this.province.province_id
          }
          this.chartData = await   this.$store.dispatch("admin/charts/getChart",QueryString)
          this.displayChart();
        },
        displayChart: function () {
          let chart = this.$refs.chart ; // getElementBy ID | $refs
          Highcharts.chart(chart,{
            chart: {
              type: 'column',
              height: 600,
            },
            title: {
              text: null,
            },
            xAxis: {
              categories: this.chartData.xAxis.categories,
              labels: {
                style: {
                  fontSize: '14px',
                  "fontWeight": "bold",
                }
              }
            },
            yAxis: {
              min: 0,
              title: {
                text: this.chartTitle,
              },
              labels: {
                overflow: 'justify',
              }
            },
            tooltip: this.chartData.tooltip,
            plotOptions: {
              column: {
                // animation: false,
                dataLabels: {
                  enabled: true,
                  style: {
                    fontSize: '20px'
                  },formatter: function () {
                    // display only if larger than 1
                    return this.y >= 1 ? '<b>' + this.y + ' คน' : null;
                  }
                }
              }
            },
            legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'top',
              x: -40,
              y: 80,
              floating: true,
              borderWidth: 1,
              backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
              shadow: true,
              enabled : false,
            },
            credits: {
              enabled: false
            },
            series: this.chartData.series,
          });
        }
      }
    }
</script>

<style scoped>

</style>
