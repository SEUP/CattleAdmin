<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <h3 class="display-1"><v-icon x-large color="primary">mdi-numeric-7-box</v-icon>&ensp;ส่วนที่ 7 การได้รับบริการ การส่งเสริมและสนับสนุนจากหน่วยงานต่างๆ </h3>
        <v-divider class="my-3"></v-divider>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs7 offset-xs2>
        <v-expansion-panel>
          <v-expansion-panel-content v-for="(item,i) in 5" :key="i">
            <div slot="header">{{"TO DO รอข้อมูล"}}</div>
            <v-card>
              <v-card-text class="grey lighten-3">{{"TO DO"}}</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    export default {
        name: "part"
    }
</script>

<style scoped>

</style>
