<template>
  <v-flex>
    <v-card>
      <v-card-text>
        <div ref="chart"></div>
      </v-card-text>
    </v-card>
  </v-flex>
</template>
<script>

  import Highcharts from "highcharts/highcharts"
  import Plotly from "plotly.js-dist/plotly"

  export default {
    name: "FarmerBarChart",
    props: {
      title: String,
      dispatchPath: String,
    },
    data: () => ({
      chartData : null
    }),
    watch: {
      '$route'(to, from) {
        this.load();
      }
    },
    mounted() {
      this.load();
    },
    methods: {
      provinceChange: function (ev) {
        this.province = ev;
        this.load();
      },
      load: async function () {
        let data = await this.$store.dispatch(this.dispatchPath)
        this.chartData = data;
        this.displayChart()
      },
      displayChart: function () {
        let chart = this.$refs.chart; // getElementBy ID | $refs

        let options = {
          title : this.title
        }

        this.chartData.type = 'bar'
        Plotly.newPlot(chart, [
          this.chartData
        ],options
        );

      }
    }
  }
</script>

<style scoped>

</style>
