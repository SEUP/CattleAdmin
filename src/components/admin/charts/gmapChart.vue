<template >
    <v-container class="grid-list-md fluid" v-if="ready">
        <v-layout row wrap>
            <v-flex xs8>
                <div class="headline">ที่ตั้งฟาร์มของเกษตรกร</div>
                <province-select :value="province"
                                 @change="provinceChange">
                </province-select>

                <gmap-map
                        style="width: 100%; height: 35%"
                        :center="{lat: 19.1378449, lng: 99.9138361}"
                        :zoom="8"
                        class="map-container mt-3">

                    <gmap-marker :key = "index" v-for="(m,index) in chartData" :position.sync="m.position"
                                 :title="m.title"
                                 :clickable="true"
                                 :draggable="true" @g-click="center=m.position">

                        <gmap-info-window :content="m.title" :opened="false"></gmap-info-window>
                    </gmap-marker>
                </gmap-map>
            </v-flex>
            <v-flex xs4 class="mt-3">
                <chartmenu></chartmenu>
            </v-flex>
        </v-layout>
    </v-container>

</template>

<script>

    import ProvinceSelect from "../share/provinceSelect";
    import chartmenu from "../share/ChartsMenu"

    export default {
        name: "chart-gmap",
        components: {
            chartmenu,
            "ProvinceSelect": ProvinceSelect,
        }, data: () => ({
            ready:true,
            province: null,
            chartData: []
        }),
        watch: {
            '$route'(to, from) {
                this.load();
            }
        },
        async created() {
            // await this.load();
        },
        methods: {
            provinceChange: function (ev) {
                if (this.ready) {
                    this.province = ev;
                    if (this.province.province_id !=0) {
                        axios.get('/api/v1/admin/charts/gmap/' + this.province.province_id).then((r) => {
                            let data = r.data;
                            this.setChartData(data)
                        });
                    }else{
                        this.load()
                    }
                }else {

                }

            },
            load: async  function () {
                await axios.get('/api/v1/admin/charts/gmap').then((r) => {
                    let data = r.data;
                    console.log("load")
                    this.setChartData(data)
                    this.ready = true
                });
            },
            setChartData : function (data) {
                this.chartData = data;
            }
        }
    }
</script>

<style scoped>

</style>
