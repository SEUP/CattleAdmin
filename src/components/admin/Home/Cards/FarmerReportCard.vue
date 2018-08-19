<template>
  <v-card color="white" style="cursor : pointer" :to="{name:'admin/farmer/report'}">
    <v-card-title primary-title class="teal darken-3 white--text">
      <v-flex xs3 class="pa-0">
        <v-icon color="white" style="font-size:5em;">mdi-chart-areaspline</v-icon>
      </v-flex>
      <v-flex xs9 class="text-xs-right">
        <div style="width:100%">
          <div class="display-2">รายงาน 2</div>
          <div>กราฟ แผนภูมิ แผนที่</div>
        </div>
      </v-flex>
    </v-card-title>
    <v-card-actions class="light-blue--text text--darken-2">
      <div class="">สถิติสมาชิกสมาร์ทฟาร์ม</div>
      <v-spacer/>
      <v-icon color="light-blue darken-2">mdi-arrow-right-bold-circle</v-icon>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "FarmerReportCard"
  }
</script>

<style scoped>

</style>
