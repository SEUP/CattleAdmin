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
      <v-divider class="my-3"></v-divider>
      <choice-check-box type="water_source_types"></choice-check-box>
    </v-flex>

    <v-flex xs12 class="mt-2">
      <h2>3.3 ลักษณะการเลี้ยงโคเนื้อของท่าน</h2>
      <v-divider class="my-3"></v-divider>
      <choice-check-box type="take_care_types"></choice-check-box>
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
      <v-divider class="my-3"></v-divider>
      <choice-check-box type="feed_types"></choice-check-box>
    </v-flex>

    <v-flex xs12 class="mt-2">
        <h2>3.8 แหล่งที่มาของอาหารข้นหรืออาหารผาชสมครบส่วน</h2>
        <v-divider class="my-3"></v-divider>
        <choice-check-box type="feed_sources"></choice-check-box>
      </v-flex>

    <v-flex xs12 class="mt-2">
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
      <v-divider class="my-3"></v-divider>
      <choice-check-box type="feed_summer_sources"></choice-check-box>
    </v-flex>

  </v-container>
</template>


<script>
  import ChoiceSelect from "../../share/choiceSelect";
  import ChoiceCheckBox from "../../share/choiceCheckBox";

  export default {
    components: {ChoiceSelect,ChoiceCheckBox},
    name: "past3",
    data() {
      return {
        selected: [''],
      }
      }
    }
</script>
