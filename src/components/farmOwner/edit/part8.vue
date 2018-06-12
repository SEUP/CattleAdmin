<template>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <p class="title">8.1 ปัญหาและอุปสรรคในการเลี้ยงโคเนื้อของท่านคือ</p>
          <v-divider class="my-3"></v-divider>
          <v-text-field
            class="mt-3 ml-3"
            multi-line
            label="ปัญหาและอุปสรรคในการเลี้ยงโคเนื้อของท่านคือ">
          </v-text-field>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12>
          <p class="title">8.2 ท่านมีข้อเสนอแนะในการพัฒนาระบบการผลิตและการตลาดโคเนื้อในเขตพื้นที่ เชียงราย พะเยา แพร่ น่าน อย่างไร</p>
          <v-divider class="my-3"></v-divider>
          <v-text-field
            class="mt-3 ml-3"
            multi-line
            label="ข้อเสนอแนะในการพัฒนาระบบการผลิตและการตลาดโคเนื้อในเขตพื้นที่ เชียงราย พะเยา แพร่ น่าน อย่างไร">
          </v-text-field>
        </v-flex>
      </v-layout>

    </v-container>
</template>

<script>
    export default {
        name: "part8"
    }
</script>

<style scoped>

</style>
