<template>
  <v-container class="grid-list-md fluid">
    <v-layout row wrap>
      <v-flex xs8>
        <div class="headline">{{$route.params.label}}</div>
        <province-select :value="province"
                         @change="provinceChange">
        </province-select>
        <v-card class="mt-3">
          <v-card-text class="subheader black--text">{{$route.params.label}}</v-card-text>
          <v-divider/>
          <div class="mt-3" ref="master"></div>
        </v-card>

        <v-card class="mt-3">
          <v-card-text class="subheader black--text">{{$route.params.label}}</v-card-text>
          <v-divider/>
          <div class="mt-3" ref="sub"></div>
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
      name: "doublePivot",
      components : {ProvinceSelect,chartmenu},
      data: () => ({
        type : null,
        province : null,
        chartData : [
          {},{},{}
        ]
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
        provinceChange: function (ev) {
          this.province = ev;
          this.load();
        },
        load : async function () {
          this.type = this.$route.params.type;
          let label = this.$route.params.label;
          let QueryString = "doublePivot/"+label+"/"+this.type
            if (this.province && this.province.province_id != 0) {
                QueryString += "/" + this.province.province_id;
            }
          this.chartData = await this.$store.dispatch("charts/getChart",QueryString)
          this.displayChart(0);
          this.displayChart(1);
          this.displayChart(2);
        },
        displayChart: function (chartNumber) {
          if (chartNumber == 0) {
            let master = this.$refs.master;
            Highcharts.chart(master,{
              chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
              },
              title: {
                text: null,
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
                    },
                    style: {
                      fontWeight: 'bold',
                      fontSize: '16px',
                      width: '100px'
                    }
                  },
                }
              }
              ,
              series: this.chartData[0].series,
            });
          } else if (chartNumber == 1) {
            let sub = this.$refs.sub;
            Highcharts.chart(sub,{
              chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'column'
              },
              title: {
                text: null,
              },
              tooltip: this.chartData[1].tooltip,
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
              series: this.chartData[1].series,
            });
          }
        }


      }
    }
</script>

<style scoped>

</style>
