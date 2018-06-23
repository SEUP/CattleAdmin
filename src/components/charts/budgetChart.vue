<template>
  <v-container class="grid-list-md fluid">
    <v-layout row wrap>
      <v-flex xs8>
        <div class="headline">{{$route.params.label}}</div>
        <province-select :value="province"
                         @change="provinceChange">
        </province-select>
        <v-card class="mt-3">
          <v-card-text class="subheader black--text">เงินทุนที่ท่านใช้เลี้ยงโคเนื้อ</v-card-text>
          <v-divider/>
          <div ref="budget_source"></div>
        </v-card>
        <v-card>
          <v-card-text class="subheader black--text">ยอดรวมเงินกู้ แยกตามแหล่งเงินกู้</v-card-text>
          <v-divider/>
          <div ref="loan_types"></div>
        </v-card>
        <v-card>
          <v-card-text class="subheader black--text">จำนวนคนตามยอดกู้ แยกตามแหล่งเงินกู้</v-card-text>
          <v-divider/>
          <div ref="total_budget"></div>
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
  import Highcharts from "highcharts/highcharts";
  import chartmenu from "../share/ChartsMenu"


  export default {
      name: "budget",
      components : {ProvinceSelect,chartmenu},
      data: () => ({
        province : null,
        chartData : [
          {},{}
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
        load :async function () {
          let QueryString ="budget";
          if(this.province && this.province.PROVINCE_ID !=0){
            QueryString += "/" + this.province.PROVINCE_ID
          }
          this.chartData[0] = await  await this.$store.dispatch("charts/getChart",QueryString)

          let QueryString2 ="range/farm-owner/total_budget/"+this.min + "/"+this.max + "/"+this.step ;
          if(this.province && this.province.PROVINCE_ID !=0){
            QueryString2 += "/" + this.province.PROVINCE_ID
          }
          this.chartData[1] = await this.$store.dispatch("charts/getChart",QueryString2)

          this.displayChart(0);
          this.displayChart(1);
          this.displayChart(2);
        },
        displayChart : function (chartNumber) {

          if (chartNumber == 0) {
            let budget_source = this.$refs.budget_source ; // getElementBy ID | $refs
            Highcharts.chart(budget_source,{
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
                      return this.y > 1 ? '<b>' + this.point.name + ': </b> ' + this.y + ' คน' : null;
                    }
                  },
                }
              }
              ,
              series: this.chartData[0].series,
            });
          }else if (chartNumber == 1) {
            let loan_types = this.$refs.loan_types ; // getElementBy ID | $refs
            Highcharts.chart(loan_types,{
              chart: {
                type: 'column'
              },
              title: {
                text: "ยอดรวมเงินกู้ แยกตามแหล่งเงินกู้",
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
                      return this.y >= 1 ? '<b>' + this.y + ' บาท' : null;
                    }
                  }
                }
              },
              series: this.chartData[0].drilldown,
            });
          }else if (chartNumber==2) {
            let total_budget = this.$refs.total_budget; // getElementBy ID | $refs
            Highcharts.chart(total_budget, {
              chart: {
                type: 'column'
              },
              title: {
                text: "จำนวนคนตามยอดกู้ แยกตามแหล่งเงินกู้",
              },
              xAxis: {
                categories: this.chartData[1].xAxis.categories,
              },
              yAxis: {
                min: 0,
                title: {
                  text: this.chartTitle,
                },
                labels: {
                  overflow: 'justify'
                }
              },
              tooltip: this.chartData[1].tooltip,
              plotOptions: {
                column: {
                  dataLabels: {
                    enabled: true
                  },
                  formatter: function () {
                    // display only if larger than 1
                    return this.y >= 1 ? '<b>' + this.y + ' คน' : null;
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
                shadow: true
              },
              credits: {
                enabled: false
              },
              series: this.chartData[1].series,
            });
          }
        }
      }
    }
</script>

<style scoped>

</style>
