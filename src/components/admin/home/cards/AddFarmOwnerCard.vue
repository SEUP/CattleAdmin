<template>
  <v-card color="white" style="cursor : pointer" :to="{name:'farmOwner-addFarmOwner'}">
    <v-card-title primary-title class="light-blue darken-2 white--text">
      <v-flex xs3 class="pa-0">
        <v-icon color="white" style="font-size:5em;">mdi-plus-box</v-icon>
      </v-flex>
      <v-flex xs9 class="text-xs-right">
        <div style="width:100%">
          <div class="display-2">{{count}}</div>
          <div>จำนวนเกษตรกรทั้งหมด</div>
        </div>
      </v-flex>
    </v-card-title>
    <v-card-actions class="light-blue--text text--darken-2">
      <div class="">บันทึกข้อมูลเกษตรกรใหม่</div>
      <v-spacer/>
      <v-icon color="light-blue darken-2">mdi-arrow-right-bold-circle</v-icon>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "AddFarmOwnerCard",
    data: () => ({
      count : 0
    }),
    async mounted (){
      let count = await this.$store.dispatch("admin/summary/countFarmOwner")
      this.count = count;
    }
  }
</script>

<style scoped>

</style>
