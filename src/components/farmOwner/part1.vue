<template>
    <div>
      <v-layout column wrap>
        <v-flex xs12>
          <v-card-text class="pa-2 title">1.1 ข้อมูลทั่วไป</v-card-text>
          <v-divider></v-divider>
          <div class="ma-2 mx-4">
            <v-text-field label="ชื่อ" placeholder="กรุณากรอกชื่อ"></v-text-field>
            <v-text-field label="นามสกุล" placeholder="กรุณากรอกนามสกุล"></v-text-field>
            <v-text-field label="รหัสประจำตัวประชาชน" placeholder="กรุณากรอกรหัสประจำตัวประชาชน"></v-text-field>
          </div>
        <v-card-text class="pa-2 title">1.2 ที่อยู่ตามสำเนาทะเบียนบ้าน</v-card-text>
          <v-divider></v-divider>
          <div class="ma-2 mx-4">
            <v-text-field label="บ้านเลขที่" placeholder="บ้านเลขที่"></v-text-field>
            <v-text-field label="หมู่" placeholder="หมู่"></v-text-field>
            <district-select></district-select>
            <v-text-field label="รหัสไปรษณีย์" placeholder="รหัสไปรษณีย์"></v-text-field>
            <v-text-field label="โทรศัพท์บ้าน" placeholder="โทรศัพท์บ้าน"></v-text-field>
            <v-text-field label="โทรศัพท์มือถือ" placeholder="โทรศัพท์มือถือ"></v-text-field>
            <v-text-field label="Email" placeholder="Email"></v-text-field>
          </div>
          <v-card-text class="pa-2 title">1.3 ที่อยู่ฟาร์ม</v-card-text>
          <v-divider></v-divider>
          <div class="ma-2 mx-4">
            <v-text-field label="ที่ตั้งฟาร์มเลขที่" placeholder="ที่ตั้งฟาร์มเลขที่"></v-text-field>
            <v-text-field label="หมู่" placeholder="หมู่"></v-text-field>
            <district-select></district-select>
          </div>
          <v-card-text class="pa-2 title">1.4 ตำแหน่งพิกัด GPS ของฟาร์ม</v-card-text>
          <v-divider></v-divider>
          <div class="ma-2 mx-4">
            <v-text-field label="พิกัดฟาร์ม (lat)" placeholder="พิกัดฟาร์ม (lat)"></v-text-field>
            <v-text-field label="พิกัดฟาร์ม (lng)" placeholder="พิกัดฟาร์ม (lng)"></v-text-field>
          </div>
          <v-card-text class="pa-2 title">1.5 สถานะทางครอบครัว</v-card-text>
          <v-divider></v-divider>
          <div class="ma-2 mx-4">
            <choice-select type="sex" label="เพศ" ></choice-select>
            <v-text-field label="อายุ" placeholder="อายุ" type="number"></v-text-field>
            <choice-select label="สถานภาพ" type="personal_status"></choice-select>
            <choice-select label="สถานภาพในครอบครัว" type="family_status"></choice-select>
          </div>
          <v-card-text class="pa-2 title">1.6 การศึกษา</v-card-text>
          <v-divider></v-divider>
          <div class="ma-2 mx-4">
            <choice-select label="การศึกษา" type="education"></choice-select>
          </div>
          <v-card-text class="pa-2 title">1.7 สถานภาพทางสังคม</v-card-text>
          <v-divider></v-divider>
          <div class="ma-2 mx-4">
            <choice-select type="social_status" label="สถานภาพทางสังคม"></choice-select>
          </div>
          <v-card-text class="pa-2 title">1.8 การเลี้ยงโคเนื้อ</v-card-text>
          <v-divider></v-divider>
          <div class="ma-2 mx-4">
            <choice-select type="cattle_job" label="การเลี้ยงโคเนื้อเป็น"></choice-select>
          </div>
          <v-card-text class="pa-2 title">1.9 ท่านมีรายได้จากการประกอบอาชีพอะไรบ้าง (เลือกได้มากกว่า 1 ข้อ)</v-card-text>
          <v-divider></v-divider>
          <div class="ma-2 mx-4">
            เช็คบอค
          </div>
          <v-card-text class="pa-2 title">1.10 ท่านมีรายได้รวมของครัวเรือนเฉลี่ยเท่าไหร่ (บาท/ปี)</v-card-text>
          <v-divider></v-divider>
          <div class="ma-2 mx-4">
            <choice-select type="income_range" label="ท่านมีรายได้รวมของครัวเรือนเฉลี่ยเท่าไหร่ (บาท/ปี)"></choice-select>
          </div>
          <v-card-text class="pa-2 title">1.11 รายได้เฉลี่ยต่อปีของการขายโคเนื้อ (บาท)</v-card-text>
          <v-divider></v-divider>
          <div class="ma-2 mx-4">
            <v-text-field placeholder="รายได้เฉลี่ยต่อปีของการขายโคเนื้อ (บาท)" label="รายได้เฉลี่ยต่อปีของการขายโคเนื้อ (บาท)"
                          hint="*หากยังไม่มีรายได้จากการขายโคเนื้อ ให้เว้นว่างช่องนี้ไว้" persistent-hint type="number"></v-text-field>
          </div>


        </v-flex>

      </v-layout>
    </div>
</template>

<script>
    import DistrictSelect from "../share/districtSelect";
    import ChoiceSelect from "../share/choiceSelect";
    export default {
      name: "part1",
      components: {ChoiceSelect, DistrictSelect},
      data : () =>({
        form : {}
      }),
      methods : {
        updateDistrictSelect: function (value) {
          this.form.province = value[0];
          this.form.amphure = value[1];
          this.form.district = value[2];

          if (value[0]) {
            this.form.user_province = value[0].PROVINCE_ID;
          }
          if (value[1]) {
            this.form.user_amphur = value[1].AMPHUR_ID;
          }
          if (value[2]) {
            this.form.user_district = value[2].DISTRICT_ID;
          }
        },
      }
    }
</script>

<style scoped>

</style>
