<template>
  <v-card color="white" style="cursor : pointer" :to="{name:'farmer-index'}">
    <v-card-title primary-title class="purple darken-1 white--text">
      <v-flex xs3 class="pa-0">
        <v-icon color="white" style="font-size:5em;">mdi-account-search</v-icon>
      </v-flex>
      <v-flex xs9 class="text-xs-right">
        <div style="width:100%">
          <div class="display-2">{{count}}</div>
          <div>สมาชิกสมาร์ทฟาร์มเมอร์</div>
        </div>
      </v-flex>
    </v-card-title>
    <v-card-actions class="light-blue--text text--darken-2">
      <div class="">จัดการสมาชิกสมาร์ทฟาร์มเมอร์</div>
      <v-spacer/>
      <v-icon color="light-blue darken-2">mdi-arrow-right-bold-circle</v-icon>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "FarmerCard",
    data: () => ({
      count : 0
    }),
    async mounted (){
      let count = await this.$store.dispatch("admin/summary/countFarmer")
      this.count = count;
    }
  }
</script>

<style scoped>

</style>
