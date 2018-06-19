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
        name: "normalChart",
      components: {ProvinceSelect},
      data : () => ({
        province :null,
        chartData : null
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
          let QueryString ="/api/charts/normal/"+type;
          if(this.province && this.province.PROVINCE_ID !=0){
            QueryString += "/" + this.province.PROVINCE_ID
          }
          this.chartData = await  axios.get(QueryString)
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
             height : 400
           },
           title : {
             text  : this.chartTitle
           },
            xAxis: {
              categories: this.chartData.xAxis.categories,
              labels: {
                rotation: -45, align: 'right',
                staggerLines: 1,
                style: {
                  fontSize: '14px',
                  "fontWeight": "bold",
                  autoRotationLimit: 40,
                  textOverflow: 'none',
                  whiteSpace: 'initial',
                }
              }
            },
            yAxis: {
              min: 0,
              title: {
                text: '',
                align: 'high'
              },
              labels: {
                overflow: 'justify',
                style: {
                  fontSize: '20px'
                }
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
              y: 800,
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
