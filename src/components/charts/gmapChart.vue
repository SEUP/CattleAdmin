<template>
  <v-container class="grid-list-md">
    <v-layout row wrap>
      <v-flex xs12>
        <div class="headline">ที่ตั้งฟาร์มของเกษตรกร</div>
        <province-select :value="province"
                         @change="provinceChange">
        </province-select>
      </v-flex>
      <v-flex xs12 style="height: 600px;">
        <gmap-map
          style="width: 100%; height: 100%"
          :center="{lat: 19.1378449, lng: 99.9138361}"
          :zoom="8"
          class="map-container">

          <gmap-marker :key="m.PROVINCE_ID" v-for="m in chartData" :position.sync="m.position"
                       :title="m.title"
                       :clickable="true"
                       :draggable="true" @g-click="center=m.position">

            <gmap-info-window :content="m.title" :opened="false"></gmap-info-window>
          </gmap-marker>
        </gmap-map>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>

  import ProvinceSelect from "../share/provinceSelect";

  export default {
    name: "chart-gmap",
    components: {
      "ProvinceSelect": ProvinceSelect,
    }, data: () => ({
      province: null,
      chartData: []
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
        if (this.province) {
          axios.get('/api/charts/gmap/' + this.province.PROVINCE_ID).then((r) => {
            let data = r.data;
            this.chartData = data;
          });
        }

      },
      load: function () {
        axios.get('/api/charts/gmap').then((r) => {
          let data = r.data;
          this.chartData = data;
        });
      }
    }
  }
</script>

<style scoped>

</style>
