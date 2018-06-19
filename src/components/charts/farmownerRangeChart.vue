<template>
  <v-container class="grid-list-md">
    <v-layout row wrap>
      <v-flex xs12>
        <div class="headline">{{$route.params.label}}</div>
        <province-select :value="province"
                           @change="provinceChange">
        </province-select>
      </v-flex>
      <v-flex>
        <div ref="chart"></div>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
  import ProvinceSelect from "../share/provinceSelect";
  import Highcharts from "highcharts/highcharts"
    export default {
      name: "farmownerRangeChart",
      components : {
        ProvinceSelect
      },
      data : () => ({
        province :null,
        chartData : null,
        min: 50000,
        max: 200000,
        step: 3,
        withNull : true,
        nullText : "ยังไม่ได้ขาย"

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
          let QueryString ="/api/charts/range/farm-owner/"+type+"/"+this.min+"/"+this.max+"/"+this.step;
          if(this.province && this.province.PROVINCE_ID !=0){
            QueryString += "/" + this.province.PROVINCE_ID
          }
          this.chartData = await  axios.get(QueryString,{params : {withNull: this.withNull, nullText: this.nullText}})
            .then( (response) => {
              return response.data
            })
            .catch( (err) => {
              return null
            });
          this.displayChart();
        },
        displayChart : function () {
          let chart = this.$refs.chart ; // getElementBy ID | $refs
          Highcharts.chart(chart,{
            chart : {
              type: 'column',
              height : 600
            },
            title : {
              text  : null
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
                dataLabels: {
                  enabled: true
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
          })
        }

      }
    }
</script>

<style scoped>

</style>
