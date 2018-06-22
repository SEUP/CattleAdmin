<template>
  <v-container fluid class="grid-list-md">
    <v-layout row wrap>

      <v-layout row wrap>
        <v-flex md6>

          <router-link :to="{name:'chart-normal',params : {label:'การตายของโคในรอบปี',type:'cattle_death'}}">death</router-link>

          <router-link :to="{name:'chart-groupJoin',params : {label:'การรวมกลุ่มวิสาหกิจชุมชนและสหกรณ์โคเนื้อ',type:'group_joins'}}">groupJoin</router-link>

          <router-link :to="{name:'chart-double',params : {label:'การขึ้นทะเบียนฟาร์มกับภาครัฐ',type:'farm_register_status'}}">double</router-link>


          <router-link :to="{name:'chart-doublePivot',params : {label:'การถ่ายพยาธิ',type:'dewormed_amount'}}">doublePivot</router-link>

          <router-link :to="{name:'chart-suggestion'}">suggestion</router-link>
          <router-link :to="{name:'chart-sold'}">sold</router-link>

        <charts-menu></charts-menu>

        </v-flex>
        <v-flex md6>
          <v-layout row wrap>
            <v-flex>
              <thailand-north-map-chart title="จำนวนเกษตรกรผู้เลี้ยงโคเนื้อ 4 จังหวัดภาคเหนือ"/>
            </v-flex>
            <v-flex>
              <thailand-province-map-chart :province-id="42"/>
            </v-flex>
            <v-flex>
              <thailand-province-map-chart :province-id="43"/>
            </v-flex>
            <v-flex>
              <thailand-province-map-chart :province-id="44"/>
            </v-flex>
            <v-flex>
              <thailand-province-map-chart :province-id="45"/>



            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-layout>
    </v-container>
</template>
<style scoped></style>
<script>
  import ChartsMenu from "./share/ChartsMenu";
  import ThailandNorthMapChart from "@/components/maps/ThailandNorthMapChart";
  import ThailandProvinceMapChart from "@/components/maps/ThailandProvinceMapChart";

  export default {
    name: "Home",
    components: {
      ThailandNorthMapChart, ThailandProvinceMapChart,ChartsMenu
    },
    data: () => ({}),
  }
</script>

<style scoped>

</style>
