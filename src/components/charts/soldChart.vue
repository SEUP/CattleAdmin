<template>
  <v-container class="grid-list-md fluid">
    <v-layout row wrap>
      <v-flex xs8>
        <div class="headline">ราคาของโคเนื้อที่ขาย และระยะเวลาในการเลี้ยง</div>
        <province-select :value="province"
                         @change="provinceChange">
        </province-select>

        <v-card class="mt-3">
          <v-card-text class="subheader black--text"> พ่อพันธุ์ </v-card-text>
          <v-divider/>
          <div ref="male_cattle_price_range_sale"></div>
          <div ref="male_cattle_age_range_sale"></div>
        </v-card>
        <v-card>
          <v-card-text class="subheader black--text"> แม่พันธุ์ </v-card-text>
          <v-divider/>
          <div ref="female_cattle_price_range_sale"></div>
          <div ref="female_cattle_age_range_sale"></div>
        </v-card>
        <v-card>
          <v-card-text class="subheader black--text"> โคขุน </v-card-text>
          <v-divider/>
          <div ref="khoon_cattle_price_range_sale"></div>
          <div ref="khoon_cattle_age_range_sale"></div>
        </v-card>
        <v-card>
          <v-card-text class="subheader black--text"> โครุ่น </v-card-text>
          <v-divider/>
          <div ref="teen_cattle_price_range_sale"></div>
          <div ref="teen_cattle_age_range_sale"></div>
        </v-card>
        <v-card>
          <v-card-text class="subheader black--text"> โครุ่น </v-card-text>
          <v-divider/>
          <div ref="teen_cattle_price_range_sale"></div>
          <div ref="teen_cattle_age_range_sale"></div>
        </v-card>
        <v-card>
          <v-card-text class="subheader black--text"> อื่นๆ  </v-card-text>
          <v-divider/>
          <div ref="other_cattle_price_range_sale"></div>
          <div ref="other_cattle_age_range_sale"></div>
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
      name: "soldChart",
      components : {ProvinceSelect,chartmenu},
      data: () => ({
        province : null,
        chartData : [
          {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
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
        load :async function () {
          let CP239 ="price_range_sale/239";
          if(this.province && this.province.PROVINCE_ID !=0){
            CP239 += "/" + this.province.PROVINCE_ID
          }
          this.chartData[0] = await  await this.$store.dispatch("charts/getChart",CP239)
          this.displayChart(0);

          let CA239 ="age_range_sale/239";
          if(this.province && this.province.PROVINCE_ID !=0){
            CA239 += "/" + this.province.PROVINCE_ID
          }
          this.chartData[1] = await  await this.$store.dispatch("charts/getChart",CA239)
          this.displayChart(1);

          let CP240 ="price_range_sale/240";
          if(this.province && this.province.PROVINCE_ID !=0){
            CP240 += "/" + this.province.PROVINCE_ID
          }
          this.chartData[2] = await  await this.$store.dispatch("charts/getChart",CP240)
          this.displayChart(2);

          let CA240 ="age_range_sale/240";
          if(this.province && this.province.PROVINCE_ID !=0){
            CA240 += "/" + this.province.PROVINCE_ID
          }
          this.chartData[3] = await  await this.$store.dispatch("charts/getChart",CA240)
          this.displayChart(3);

          let CP241 ="price_range_sale/241";
          if(this.province && this.province.PROVINCE_ID !=0){
            CP241 += "/" + this.province.PROVINCE_ID
          }
          this.chartData[4] = await  await this.$store.dispatch("charts/getChart",CP241)
          this.displayChart(4);

          let CA241 ="age_range_sale/241";
          if(this.province && this.province.PROVINCE_ID !=0){
            CA241 += "/" + this.province.PROVINCE_ID
          }
          this.chartData[5] = await  await this.$store.dispatch("charts/getChart",CA241)
          this.displayChart(5);

          let CP242 ="price_range_sale/242";
          if(this.province && this.province.PROVINCE_ID !=0){
            CP242 += "/" + this.province.PROVINCE_ID
          }
          this.chartData[6] = await  await this.$store.dispatch("charts/getChart",CP242)
          this.displayChart(6);

          let CA242 ="age_range_sale/242";
          if(this.province && this.province.PROVINCE_ID !=0){
            CA242 += "/" + this.province.PROVINCE_ID
          }
          this.chartData[7] = await  await this.$store.dispatch("charts/getChart",CA242)
          this.displayChart(7);

          let CP243 ="price_range_sale/243";
          if(this.province && this.province.PROVINCE_ID !=0){
            CP243 += "/" + this.province.PROVINCE_ID
          }
          this.chartData[8] = await  await this.$store.dispatch("charts/getChart",CP243)
          this.displayChart(8);

          let CA243 ="age_range_sale/243";
          if(this.province && this.province.PROVINCE_ID !=0){
            CA243 += "/" + this.province.PROVINCE_ID
          }
          this.chartData[9] = await  await this.$store.dispatch("charts/getChart",CA243)
          this.displayChart(9);
        },
        displayChart:function(chartNumber){
          if (chartNumber == 0) {
            let male_cattle_price_range_sale = this.$refs.male_cattle_price_range_sale;
            Highcharts.chart(male_cattle_price_range_sale,{
              chart: {
                type: 'column'
              },
              title: {
                text: 'ราคาของโคเนื้อที่ขาย',
              },
              xAxis: this.chartData[0].xAxis,
              yAxis: {
                min: 0,
                title: {
                  text: '',
                  align: 'high'
                }
                ,
                labels: {
                  overflow: 'justify',
                  style: {
                    fontSize: this.fontSize
                  }
                }
              }
              ,
              legend: {
                enabled: false
              }
              ,
              tooltip: this.chartData[0].tooltip,
              plotOptions: {
                series: {
                  borderWidth: 0,
                  dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                  }
                }
              }
              ,
              series: this.chartData[0].series
            })
          }else   if (chartNumber == 1) {

            let male_cattle_age_range_sale = this.$refs.male_cattle_age_range_sale;
            Highcharts.chart(male_cattle_age_range_sale,{
              chart: {
                type: 'column'
              },
              title: {
                text: 'ระยะเวลาการเลี้ยง',
              },
              xAxis: this.chartData[1].xAxis,
              yAxis: {
                min: 0,
                title: {
                  text: '',
                  align: 'high'
                }
                ,
                labels: {
                  overflow: 'justify',
                  style: {
                    fontSize: this.fontSize
                  }
                }
              }
              ,
              legend: {
                enabled: false
              }
              ,
              tooltip: this.chartData[1].tooltip,
              plotOptions: {
                series: {
                  borderWidth: 0,
                  dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                  }
                }
              }
              ,
              series: this.chartData[1].series
            })
          }else if (chartNumber == 2) {

            let female_cattle_price_range_sale = this.$refs.female_cattle_price_range_sale;
            Highcharts.chart(female_cattle_price_range_sale,{
              chart: {
                type: 'column'
              },
              title: {
                text: 'ราคาของโคเนื้อที่ขาย',
              },
              xAxis: this.chartData[2].xAxis,
              yAxis: {
                min: 0,
                title: {
                  text: '',
                  align: 'high'
                }
                ,
                labels: {
                  overflow: 'justify',
                  style: {
                    fontSize: this.fontSize
                  }
                }
              }
              ,
              legend: {
                enabled: false
              }
              ,
              tooltip: this.chartData[2].tooltip,
              plotOptions: {
                series: {
                  borderWidth: 0,
                  dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                  }
                }
              }
              ,
              series: this.chartData[2].series
            })
          }else   if (chartNumber == 3) {
            let female_cattle_age_range_sale = this.$refs.female_cattle_age_range_sale;
            Highcharts.chart(female_cattle_age_range_sale,{
              chart: {
                type: 'column'
              },
              title: {
                text: 'ระยะเวลาการเลี้ยง',
              },
              xAxis: this.chartData[3].xAxis,
              yAxis: {
                min: 0,
                title: {
                  text: '',
                  align: 'high'
                }
                ,
                labels: {
                  overflow: 'justify',
                  style: {
                    fontSize: this.fontSize
                  }
                }
              }
              ,
              legend: {
                enabled: false
              }
              ,
              tooltip: this.chartData[3].tooltip,
              plotOptions: {
                series: {
                  borderWidth: 0,
                  dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                  }
                }
              }
              ,
              series: this.chartData[3].series
            })
          }else if (chartNumber == 4) {
            let khoon_cattle_price_range_sale = this.$refs.khoon_cattle_price_range_sale;
            Highcharts.chart(khoon_cattle_price_range_sale,{
              chart: {
                type: 'column'
              },
              title: {
                text: 'ราคาของโคเนื้อที่ขาย',
              },
              xAxis: this.chartData[4].xAxis,
              yAxis: {
                min: 0,
                title: {
                  text: '',
                  align: 'high'
                }
                ,
                labels: {
                  overflow: 'justify',
                  style: {
                    fontSize: this.fontSize
                  }
                }
              }
              ,
              legend: {
                enabled: false
              }
              ,
              tooltip: this.chartData[4].tooltip,
              plotOptions: {
                series: {
                  borderWidth: 0,
                  dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                  }
                }
              }
              ,
              series: this.chartData[4].series
            })
          }else   if (chartNumber == 5) {
            let khoon_cattle_age_range_sale = this.$refs.khoon_cattle_age_range_sale;
            Highcharts.chart(khoon_cattle_age_range_sale,{
              chart: {
                type: 'column'
              },
              title: {
                text: 'ระยะเวลาการเลี้ยง',
              },
              xAxis: this.chartData[5].xAxis,
              yAxis: {
                min: 0,
                title: {
                  text: '',
                  align: 'high'
                }
                ,
                labels: {
                  overflow: 'justify',
                  style: {
                    fontSize: this.fontSize
                  }
                }
              }
              ,
              legend: {
                enabled: false
              }
              ,
              tooltip: this.chartData[5].tooltip,
              plotOptions: {
                series: {
                  borderWidth: 0,
                  dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                  }
                }
              }
              ,
              series: this.chartData[5].series
            })
          }else if (chartNumber == 6) {
            let teen_cattle_price_range_sale = this.$refs.teen_cattle_price_range_sale;
            Highcharts.chart(teen_cattle_price_range_sale,{
              chart: {
                type: 'column'
              },
              title: {
                text: 'ราคาของโคเนื้อที่ขาย',
              },
              xAxis: this.chartData[6].xAxis,
              yAxis: {
                min: 0,
                title: {
                  text: '',
                  align: 'high'
                }
                ,
                labels: {
                  overflow: 'justify',
                  style: {
                    fontSize: this.fontSize
                  }
                }
              }
              ,
              legend: {
                enabled: false
              }
              ,
              tooltip: this.chartData[6].tooltip,
              plotOptions: {
                series: {
                  borderWidth: 0,
                  dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                  }
                }
              }
              ,
              series: this.chartData[6].series
            })
          }else   if (chartNumber == 7) {
            let teen_cattle_age_range_sale = this.$refs.teen_cattle_age_range_sale;
            Highcharts.chart(teen_cattle_age_range_sale,{
              chart: {
                type: 'column'
              },
              title: {
                text: 'ระยะเวลาการเลี้ยง',
              },
              xAxis: this.chartData[7].xAxis,
              yAxis: {
                min: 0,
                title: {
                  text: '',
                  align: 'high'
                }
                ,
                labels: {
                  overflow: 'justify',
                  style: {
                    fontSize: this.fontSize
                  }
                }
              }
              ,
              legend: {
                enabled: false
              }
              ,
              tooltip: this.chartData[7].tooltip,
              plotOptions: {
                series: {
                  borderWidth: 0,
                  dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                  }
                }
              }
              ,
              series: this.chartData[7].series
            })
          }else if (chartNumber == 8) {
            let other_cattle_price_range_sale = this.$refs.other_cattle_price_range_sale;
            Highcharts.chart(other_cattle_price_range_sale,{
              chart: {
                type: 'column'
              },
              title: {
                text: 'ราคาของโคเนื้อที่ขาย',
              },
              xAxis: this.chartData[8].xAxis,
              yAxis: {
                min: 0,
                title: {
                  text: '',
                  align: 'high'
                }
                ,
                labels: {
                  overflow: 'justify',
                  style: {
                    fontSize: this.fontSize
                  }
                }
              }
              ,
              legend: {
                enabled: false
              }
              ,
              tooltip: this.chartData[8].tooltip,
              plotOptions: {
                series: {
                  borderWidth: 0,
                  dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                  }
                }
              }
              ,
              series: this.chartData[8].series
            })
          }else   if (chartNumber == 9) {
            let other_cattle_age_range_sale = this.$refs.other_cattle_age_range_sale;
            Highcharts.chart(other_cattle_age_range_sale,{
              chart: {
                type: 'column'
              },
              title: {
                text: 'ระยะเวลาการเลี้ยง',
              },
              xAxis: this.chartData[9].xAxis,
              yAxis: {
                min: 0,
                title: {
                  text: '',
                  align: 'high'
                }
                ,
                labels: {
                  overflow: 'justify',
                  style: {
                    fontSize: this.fontSize
                  }
                }
              }
              ,
              legend: {
                enabled: false
              }
              ,
              tooltip: this.chartData[9].tooltip,
              plotOptions: {
                series: {
                  borderWidth: 0,
                  dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                  }
                }
              }
              ,
              series: this.chartData[9].series
            })
          }

        }
      }
    }
</script>

<style scoped>

</style>
