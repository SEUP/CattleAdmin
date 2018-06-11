<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <h3 class="display-1">
          <v-icon x-large color="primary">mdi-numeric-3-box</v-icon>&ensp;ส่วนที่ 3 ข้อมูลแรงงาน พื้นที่ในการเลี้ยง
          และการจัดการอาหาร
        </h3>
        <v-divider class="my-3"></v-divider>
      </v-flex>
    </v-layout>
    <v-flex xs12>
      <h2>3.1 จำนวนแรงงานที่ใช้เลียงโค(คน)</h2>

    </v-flex>
    <v-text-field xs10
                  v-model="name"
                  :rules="nameRules"
                  :counter="3"
                  label="จำนวน"
                  required
    ></v-text-field>
    <v-divider class="mt-2"></v-divider>
    <v-flex class="mt-1">
      <h4>3.1.1 จำนวนแรงงานภายในครอบครัว</h4>
      <v-text-field xs3
                    v-model="name"
                    :rules="nameRules"
                    :counter="3"
                    label="จำนวน"
                    required
      ></v-text-field>
      <h4>3.1.2 จำนวนแรงงานภายในนอก</h4>
      <v-text-field xs3
                    v-model="name"
                    :rules="nameRules"
                    :counter="3"
                    label="จำนวน"
                    required
      ></v-text-field>
    </v-flex>

    <v-flex xs12 class="mt-2">
      <h2>3.2 แหล่งน้ำที่ใช้ในการเลี้ยง</h2>
      <v-divider class="mt-3"></v-divider>
      <v-container fluid>
        <v-checkbox v-model="selected" label="ชลประทาน" value="ชลประทาน"></v-checkbox>
        <v-checkbox v-model="selected" label="บ่อบาดาน" value="บ่อบาดาน"></v-checkbox>
        <v-checkbox v-model="selected" label="น้ำประปา" value="น้ำประปา"></v-checkbox>
        <v-checkbox v-model="selected" label="บ่อน้ำตื้น" value="บ่อน้ำตื้น"></v-checkbox>
      </v-container>

    </v-flex>
    <v-flex xs12 class="mt-2">
      <h2>3.3 ลักษณะการเลี้ยงโคเนื้อของท่าน</h2>
      <v-divider class="mt-3"></v-divider>
      <v-container fluid>
        <v-checkbox v-model="selected" label="ขังคอกตลอดเวลา" value="ขังคอกตลอดเวลา"></v-checkbox>
        <v-checkbox v-model="selected" label="กักขังกึ่งปล่อย" value="กักขังกึ่งปล่อย"></v-checkbox>
        <v-checkbox v-model="selected" label="ปล่อยทุ่ง" value="ปล่อยทุ่ง"></v-checkbox>
      </v-container>

    </v-flex>
    <v-flex xs12>
      <h2>3.4 จำนวนแรงงานที่ใช้เลียงโค(คน)</h2>
      <v-divider class="mt-3"></v-divider>
      <v-flex xs6>
        <v-subheader>Standard</v-subheader>
      </v-flex>
      <v-flex xs6>
        <v-select
          :items="items1"
          v-model="e1"
          label="กรุณาเลือก"
          single-line
        ></v-select>
      </v-flex>
    </v-flex>

  </v-container>
</template>


<script>
  export default {
    name: "past3",
    data() {
      return {
        selected: [''],
        e1: null,

        items1:[
          {text:'มีพื้นที่ถือครอง'},
          {text:'ไม่มีพื้นที่ถือครอง'}
        ]
      }
    }
  }
</script>
