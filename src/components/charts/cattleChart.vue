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
          <v-card-text class="subheader black--text">พ่อพันธุ์โคเนื้อที่เลี้ยง</v-card-text>
          <v-divider/>
          <div ref="map_male_breeding"></div>
        </v-card>
      </v-flex>

      <v-flex xs12>
        <v-card>
          <v-card-text class="subheader black--text">แม่พันธุ์โคเนื้อที่เลี้ยง</v-card-text>
          <v-divider/>
          <div ref="map_female_breeding"></div>
        </v-card>
      </v-flex>

      <v-flex xs12>
        <v-card>
          <v-card-text class="subheader black--text">โคเพศผู้อายุมากกว่า 6 เดือนขึ้นไปแต่ไม่ใช่พ่อพันธุ์คุมฝูง</v-card-text>
          <v-divider/>
          <div ref="map_male_over_six_breeding"></div>
        </v-card>
      </v-flex>

      <v-flex xs12>
        <v-card>
          <v-card-text class="subheader black--text">โคเพศเมียอายุมากกว่า 6 เดือนขึ้นไปแต่ยังไม่ตั้งท้อง</v-card-text>
          <v-divider/>
          <div ref="map_female_over_six_breeding"></div>
        </v-card>
      </v-flex>

      <v-flex xs12>
        <v-card>
          <v-card-text class="subheader black--text">ลูกโคเพศผู้อายุน้อยกว่า 6 เดือน</v-card-text>
          <v-divider/>
          <div ref="map_male_under_six_breeding"></div>
        </v-card>
      </v-flex>

      <v-flex xs12>
        <v-card>
          <v-card-text class="subheader black--text">ลูกโคเพศเมียอายุน้อยกว่า 6 เดือน</v-card-text>
          <v-divider/>
          <div ref="map_female_under_six_breeding"></div>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>

</template>

<script>
  import ProvinceSelect from "../share/provinceSelect";
  import Highcharts from "highcharts/highcharts"
    export default {
      name: "cattleChart",
      components : {ProvinceSelect},
      data: () => ({
        province : null,
        chartData : [
          {},{},{},{},{},{}
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
          let male ="cattle/พ่อพันธุ์โคเนื้อที่เลี้ยง/male_breeding_types";
          if(this.province && this.province.PROVINCE_ID !=0){
            male += "/" + this.province.PROVINCE_ID
          }
          this.chartData[0] = await this.$store.dispatch("charts/getChart",male)
          this.displayChart(0);

          let female ="cattle/แม่พันธุ์โคเนื้อที่เลี้ยง/female_breeding_types";
          if(this.province && this.province.PROVINCE_ID !=0){
            female += "/" + this.province.PROVINCE_ID
          }
          this.chartData[1] = await this.$store.dispatch("charts/getChart",female)
          this.displayChart(1);

          let maleOverSix ="cattle/โคเพศผู้อายุมากกว่า 6 เดือนขึ้นไปแต่ไม่ใช่พ่อพันธุ์คุมฝูง/male_over_six_breeding_types";
          if(this.province && this.province.PROVINCE_ID !=0){
            maleOverSix += "/" + this.province.PROVINCE_ID
          }
          this.chartData[2] = await this.$store.dispatch("charts/getChart",maleOverSix)
          this.displayChart(2);

          let femaleOverSix ="cattle/โคเพศเมียอายุมากกว่า 6 เดือนขึ้นไปแต่ยังไม่ตั้งท้อง/female_over_six_breeding_types";
          if(this.province && this.province.PROVINCE_ID !=0){
            femaleOverSix += "/" + this.province.PROVINCE_ID
          }
          this.chartData[3] = await this.$store.dispatch("charts/getChart",femaleOverSix)
          this.displayChart(3);

          let maleUnderSix ="cattle/ลูกโคเพศผู้อายุน้อยกว่า 6 เดือน/male_under_six_breeding_types";
          if(this.province && this.province.PROVINCE_ID !=0){
            maleUnderSix += "/" + this.province.PROVINCE_ID
          }
          this.chartData[4] = await this.$store.dispatch("charts/getChart",maleUnderSix)
          this.displayChart(4);

          let femaleUnderSix ="cattle/ลูกโคเพศเมียอายุน้อยกว่า 6 เดือน/female_under_six_breeding_types";
          if(this.province && this.province.PROVINCE_ID !=0){
            femaleUnderSix += "/" + this.province.PROVINCE_ID
          }
          this.chartData[5] = await this.$store.dispatch("charts/getChart",femaleUnderSix)
          this.displayChart(5);

        },
        displayChart : function (chartNumber) {
          if (chartNumber == 0) {
            let male = this.$refs.map_male_breeding
            Highcharts.chart(male,{
              chart: {
                type: 'column'
              },
              title: {
                text: 'พ่อพันธุ์โคเนื้อที่เลี้ยง',
              },
              xAxis: {
                type: 'category',
                labels: {
                  style: {
                    fontSize: "16px"
                  }
                }
              },
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
                    fontSize: "16px"
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
              series: this.chartData[0].series,
              drilldown: this.chartData[0].drilldown,
            })
          } else if (chartNumber == 1) {
            let female = this.$refs.map_female_breeding;
            Highcharts.chart(female,{
              chart: {
                type: 'column'
              },
              title: {
                text: 'แม่พันธุ์โคเนื้อที่เลี้ยง',
              },
              xAxis: {
                type: 'category',
                labels: {
                  style: {
                    fontSize: "16px"
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
                    fontSize: "16px"
                  }
                }
              },
              legend: {
                enabled: false
              },
              tooltip: this.chartData[1].tooltip,
              plotOptions: {
                series: {
                  borderWidth: 0,
                  dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                  }
                }
              },
              series: this.chartData[1].series,
              drilldown: this.chartData[1].drilldown,
            });
          } else if (chartNumber == 2) {
            let maleOverSix = this.$refs.map_male_over_six_breeding
            Highcharts.chart(maleOverSix,{
              chart: {
                type: 'column'
              },
              title: {
                text: 'โคเพศผู้อายุมากกว่า 6 เดือนขึ้นไปแต่ไม่ใช่พ่อพันธุ์คุมฝูง',
              },
              xAxis: {
                type: 'category',
                labels: {
                  style: {
                    fontSize: "16px"
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
                    fontSize: "16px"
                  }
                }
              },
              legend: {
                enabled: false
              },
              tooltip: this.chartData[2].tooltip,
              plotOptions: {
                series: {
                  borderWidth: 0,
                  dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                  }
                }
              },
              series: this.chartData[2].series,
              drilldown: this.chartData[2].drilldown,
            });
          } else if (chartNumber == 3) {
            let femaleOverSix = this.$refs.map_female_over_six_breeding
            Highcharts.chart(femaleOverSix,{
              chart: {
                type: 'column'
              },
              title: {
                text: 'โคเพศเมียอายุมากกว่า 6 เดือนขึ้นไปแต่ยังไม่ตั้งท้อง',
              },
              xAxis: {
                type: 'category',
                labels: {
                  style: {
                    fontSize: "16px"
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
                    fontSize: "16px"
                  }
                }
              },
              legend: {
                enabled: false
              },
              tooltip: this.chartData[3].tooltip,
              plotOptions: {
                series: {
                  borderWidth: 0,
                  dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                  }
                }
              },
              series: this.chartData[3].series,
              drilldown: this.chartData[3].drilldown,
            });
          } else if (chartNumber == 4) {
            let maleUnderSix = this.$refs.map_male_under_six_breeding
            Highcharts.chart(maleUnderSix,{
              chart: {
                type: 'column'
              },
              title: {
                text: 'ลูกโคเพศผู้อายุน้อยกว่า 6 เดือน',
              },
              xAxis: {
                type: 'category',
                labels: {
                  style: {
                    fontSize: "16px"
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
                    fontSize: "16px"
                  }
                }
              },
              legend: {
                enabled: false
              },
              tooltip: this.chartData[4].tooltip,
              plotOptions: {
                series: {
                  borderWidth: 0,
                  dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                  }
                }
              },
              series: this.chartData[4].series,
              drilldown: this.chartData[4].drilldown,
            });
          } else if (chartNumber == 5) {
            let femaleUnderSix = this.$refs.map_female_under_six_breeding
            Highcharts.chart(femaleUnderSix,{
              chart: {
                type: 'column'
              },
              title: {
                text: 'ลูกโคเพศเมียอายุน้อยกว่า 6 เดือน',
              },
              xAxis: {
                type: 'category',
                labels: {
                  style: {
                    fontSize: "16px"
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
                    fontSize: "16px"
                  }
                }
              },
              legend: {
                enabled: false
              },
              tooltip: this.chartData[5].tooltip,
              plotOptions: {
                series: {
                  borderWidth: 0,
                  dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                  }
                }
              },
              series: this.chartData[5].series,
              drilldown: this.chartData[5].drilldown,
            });
          }
        }
      }

    }
</script>

<style scoped>

</style>
