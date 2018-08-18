<template>
  <v-container class="grid-list-md">
    <v-layout row wrap>
      <v-flex xs12>
        <v-card-text class="display-1  pa-0 text-xs-center text-md-left">
          <v-icon color="primary" x-large>mdi-home</v-icon>
          ยินดีต้อนรับสู่ระบบฐานข้อมูลเกษตรกรผู้เลี้ยงโคเนื้อ
        </v-card-text>
        <v-divider class="my-3"></v-divider>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex md4 xs6>
        <add-farm-owner-card/>
      </v-flex>
      <v-flex md4 xs6>
        <search-card/>
      </v-flex>
      <v-flex md4 xs6>
        <report-card/>
      </v-flex>
      <v-flex md4 xs6>
        <farmer-card/>
      </v-flex>
      <v-flex md4 xs6>
        <user-card/>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style scoped></style>
<script>
  import ChartsMenu from "@/components/share/ChartsMenu";
  import ThailandNorthMapChart from "@/components/maps/ThailandNorthMapChart";
  import ThailandProvinceMapChart from "@/components/maps/ThailandProvinceMapChart";
  import SearchCard from "@/components/admin/Home/Cards/SearchCard";
  import ReportCard from "@/components/admin/Home/Cards/ReportCard";
  import UserCard from "@/components/admin/Home/Cards/UserCard";
  import FarmerCard from "@/components/admin/Home/Cards/FarmerCard";
  import AddFarmOwnerCard from "@/components/admin/Home/Cards/AddFarmOwnerCard";

  export default {
    name: "Home",
    components: {
      AddFarmOwnerCard,
      FarmerCard,
      UserCard,
      ReportCard,
      SearchCard,
      ThailandNorthMapChart, ThailandProvinceMapChart, ChartsMenu
    },
    data: () => ({}),
  }
</script>

<style scoped>

</style>
