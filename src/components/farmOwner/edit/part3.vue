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
      <h2>3.4 พื้นที่ถือครองทางการเกษตร</h2>
      <v-divider class="mt-3"></v-divider>
      <v-flex xs6>
        <choice-select type="own_land" label=" ">
        </choice-select>
      </v-flex>
    </v-flex>

    <v-flex xs12>
      <h2>3.5 การเช่าที่ดินเพื่อใช้ในการเลี้ยง</h2>
      <v-divider class="mt-3"></v-divider>
      <v-flex xs6>
        <choice-select type="rent_land" label=" ">
        </choice-select>
      </v-flex>
    </v-flex>

    <v-flex xs12>
      <h2>3.6 พื้นที่ที่ใช้ในการเลี้ยงโคเนื้อ</h2>
      <v-divider class="mt-3"></v-divider>
      <v-flex xs6>
        <choice-select type="use_land" label=" ">
        </choice-select>
      </v-flex>
    </v-flex>

    <v-flex xs12 class="mt-2">
      <h2>3.7 อาหารที่ท่านใช้เลี้ยงโคเนื้อเป็นอาหารประเภทใด (ตอบได้มากกว่า 1 ข้อ)</h2>
      <v-divider class="mt-3"></v-divider>
      <v-container fluid>
        <v-checkbox v-model="selected" label="อาหารหยาบอย่างเดียว" value="อาหารหยาบอย่างเดียว"></v-checkbox>
        <v-checkbox v-model="selected" label="ทั้งอาหารข้นและอาหารหยาบ" value="ทั้งอาหารข้นและอาหารหยาบ"></v-checkbox>
        <v-checkbox v-model="selected" label="อาหารผสมครบส่วน(TMR)" value="อาหารผสมครบส่วน(TMR)"></v-checkbox>
      </v-container>
    </v-flex>

    <v-flex xs12 class="mt-2">
      <h2>3.8 แหล่งที่มาของอาหารข้นหรืออาหารผสมครบส่วน</h2>
      <v-divider class="mt-3 mb-5"></v-divider>
    </v-flex>

    <v-flex xs12>
      <h2>3.9 ท่านเคยให้แร่ธาตุก้อนหรือไม่</h2>
      <v-divider class="mt-3"></v-divider>
      <v-flex xs6>
        <choice-select type="minerals_feed" label=" ">
        </choice-select>
      </v-flex>
    </v-flex>

    <v-flex xs12>
      <h2>3.10 ท่านมีการสำรองฟางข้าว หรือเปลือกข้าวโพดไว้ใช้เลี้ยงโคหรือไม่</h2>
      <v-divider class="mt-3"></v-divider>
      <v-flex xs6>
        <choice-select type="feedstock" label=" ">
        </choice-select>
      </v-flex>
    </v-flex>

    <v-flex xs12 class="mt-2">
      <h2>3.11 ท่านใช้แหล่งอาหารหยาบในฤดูแล้งจาก</h2>
      <v-divider class="mt-3"></v-divider>
      <v-container fluid>
        <v-checkbox v-model="selected" label="ที่ส่วนตัวหรือไร่นาตัวเอง" value="ที่ส่วนตัวหรือไร่นาตัวเอง"></v-checkbox>
        <v-checkbox v-model="selected" label="ที่สาธารณะประโยชน์" value="ทที่สาธารณะประโยชน์"></v-checkbox>
        <v-checkbox v-model="selected" label="แปลงปลูกหญ้าของตนเอง" value="แปลงปลูกหญ้าของตนเอง"></v-checkbox>
        <v-checkbox v-model="selected" label="ตามไร่นาของคนอื่น" value="ตามไร่นาของคนอื่น"></v-checkbox>
        <v-checkbox v-model="selected" label="ฟางข้าวหรือเปลือกข้าวโพดแห้ง" value="ฟางข้าวหรือเปลือกข้าวโพดแห้ง"></v-checkbox>
        <v-checkbox v-model="selected" label="ฟางข้าวหรือเปลือกข้าวโพดหมักหรือปรุงแต่งเก็บไว้" value="ฟางข้าวหรือเปลือกข้าวโพดหมักหรือปรุงแต่งเก็บไว้"></v-checkbox>
      </v-container>
    </v-flex>

  </v-container>
</template>


<script>
  import ChoiceSelect from "../../share/choiceSelect";

  export default {
    components: {ChoiceSelect},
    name: "past3",
    data() {
      return {
        selected: [''],
      }
      }
    }
</script>
