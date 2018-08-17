<template>
  <v-card color="white" style="cursor : pointer" :to="{name:'user-index'}">
    <v-card-title primary-title class="red darken-3 white--text">
      <v-flex xs3 class="pa-0">
        <v-icon color="white" style="font-size:5em;">mdi-account</v-icon>
      </v-flex>
      <v-flex xs9 class="text-xs-right">
        <div style="width:100%">
          <div class="display-2">ผู้ใช้</div>
          <div>จัดการ กำหนดสิทธิ์</div>
        </div>
      </v-flex>
    </v-card-title>
    <v-card-actions class="light-blue--text text--darken-2">
      <div class="">จัดการผู้ใช้ระบบ</div>
      <v-spacer/>
      <v-icon color="light-blue darken-2">mdi-arrow-right-bold-circle</v-icon>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "UserCard"
  }
</script>

<style scoped>

</style>
