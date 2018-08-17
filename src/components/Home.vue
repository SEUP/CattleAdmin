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
        <add-card/>
      </v-flex>
      <v-flex md4 xs6>
        <search-card/>
      </v-flex>
      <v-flex md4 xs6>
        <report-card/>
      </v-flex>
      <v-flex md4 xs6>
        <user-card/>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style scoped></style>
<script>
  import ChartsMenu from "./share/ChartsMenu";
  import ThailandNorthMapChart from "@/components/maps/ThailandNorthMapChart";
  import ThailandProvinceMapChart from "@/components/maps/ThailandProvinceMapChart";

  import AddCard from "@/components/admin/Home/AddCard"
  import SearchCard from "./admin/Home/SearchCard";
  import ReportCard from "./admin/Home/ReportCard";
  import UserCard from "./admin/Home/UserCard";

  export default {
    name: "Home",
    components: {
      UserCard,
      ReportCard,
      SearchCard,
      ThailandNorthMapChart, ThailandProvinceMapChart, ChartsMenu, AddCard
    },
    data: () => ({}),
  }
</script>

<style scoped>

</style>
