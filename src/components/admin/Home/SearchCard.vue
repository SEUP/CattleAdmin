<template>
  <v-card color="white" style="cursor : pointer" :to="{name:'farmOwner-index'}">
    <v-card-title primary-title class="green white--text">
      <v-flex xs3 class="pa-0">
        <v-icon color="white" style="font-size:5em;">mdi-magnify</v-icon>
      </v-flex>
      <v-flex xs9 class="text-xs-right">
        <div style="width:100%">
          <div class="display-2">ค้นหา</div>
          <div>ค้นหาเกษตกร</div>
        </div>
      </v-flex>
    </v-card-title>
    <v-card-actions class="light-blue--text text--darken-2">
      <div class="">ค้นหาข้อมูลเกษตกร</div>
      <v-spacer/>
      <v-icon color="light-blue darken-2">mdi-arrow-right-bold-circle</v-icon>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "SearchCard"
  }
</script>

<style scoped>

</style>
