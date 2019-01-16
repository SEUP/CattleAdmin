<template>
  <v-flex>
    <v-card>
      <v-card-title>
        <div class="headline">{{title}}</div>
      </v-card-title>
      <v-card-text>
        <div ref="mapChart"></div>
        <v-btn ref="showDialog" @click="dialog = true" color="info">เต็มจอ</v-btn>
      </v-card-text>
    </v-card>

    <v-dialog v-model="dialog" width="100%">
      <v-card>
        <v-toolbar>
          <v-toolbar-title>{{title}}</v-toolbar-title>
          <v-spacer/>
          <v-btn @click="dialog = false" color="error">ปิด</v-btn>
        </v-toolbar>
        <v-card-title>
          <div class="headline"></div>
        </v-card-title>
        <v-card-text>
          <div ref="mapChart2" style="height: 650px;"></div>
        </v-card-text>

        <v-card-text v-if="tableData">
          <h3 class="text-md-center">ตารางเเสดง{{title}}</h3>
          <v-data-table :headers="headers" :items="tableData" hide-actions>
            <template
              slot="items"
              slot-scope="props"
              v-if="props.item.province_id >=42 && props.item.province_id <=45 "
            >
              <td>{{props.item.province_name}}</td>
              <td>{{props.item.value}}</td>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-flex>
</template>

<script>
import Highcharts from "highcharts/highmaps";
import North from "@/maps/North";

export default {
  name: "FarmerNorthMapChart",
  components: {},
  props: {
    provinceId: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ""
    }
  },
  watch: {},
  data: () => ({
    Highcharts: Highcharts,
    options: null,
    options2: null,
    dialog: false,
    tableData: null,
    headers: [
      { text: "จังหวัด", value: "amphur_name", sortable: false },
      { text: "จำนวน (คน)", value: "amphur_name", sortable: false }
    ]
  }),
  async mounted() {
    let mapChart = this.$refs.mapChart;
    let mapChart2 = this.$refs.mapChart2;

    let response = await axios
      .get("/api/v1/admin/farmer-charts/map-data")
      .then(r => {
        this.tableData = r.data;
        return r.data;
      });
    this.options = {
      title: {
        text: null
      },
      plotOptions: {
        series: {
          point: {
            events: {
              click: function() {
                console.log(this);
              }
            }
          }
        }
      },
      colorAxis: {},
      tooltip: {
        formatter: function() {
          return `${this.point.province_name} : ${this.point.value}`;
        }
      },
      series: [
        {
          cursor: "pointer",
          name: "จำนวนเกษตรกร",
          type: "map",
          mapData: North,
          data: response,
          joinBy: ["id", "province_id"],

          dataLabels: {
            enabled: true,
            color: "#FFFFFF",
            format: "{point.province_name}<br/>{point.value} คน"
          }
        }
      ]
    };
    this.options2 = {
      title: {
        text: null
      },
      plotOptions: {
        series: {
          point: {
            events: {
              click: function() {
                console.log(this);
              }
            }
          }
        }
      },
      colorAxis: {},
      tooltip: {
        formatter: function() {
          console.log(this);
          return `${this.point.province_name} : ${this.point.value}`;
        }
      },
      series: [
        {
          cursor: "pointer",
          name: "จำนวนเกษตรกร",
          type: "map",
          mapData: North,
          data: response,
          joinBy: ["id", "province_id"],

          dataLabels: {
            enabled: true,
            color: "#FFFFFF",
            format: "{point.province_name}<br/>{point.value} คน"
          }
        }
      ]
    };
    Highcharts.mapChart(mapChart, this.options);
    Highcharts.mapChart(mapChart2, this.options2);
  }
};
</script>

<style scoped>
</style>
