<template>
  <div v-if="form">
    <v-layout column wrap>
      <v-flex xs12 >
        <v-card-text class="pa-2 title">2.1 การเลี้ยงโคเนื้อของท่านมีวัตถุประสงค์เพื่ออะไร (เลือกได้มากกว่า 1 ข้อ)</v-card-text>
        <v-divider></v-divider>
        <div class="ma-2 mx-4" >
            <choice-check-box type="farm_purposes" :value="form.farm_purposes"></choice-check-box>
        </div>

        <v-card-text class="pa-2 title">2.2 ท่านมีการจดบันทึกข้อมูลหรือทำประวัติโคเนื้อหรือไม่</v-card-text>
        <v-divider></v-divider>
        <div class="ma-2 mx-4" >
            <choice-select type="farm_record" :value="form.farm_record"></choice-select>
        </div>

        <v-card-text class="pa-2 title">2.3 จำนวนโคเนื้อที่เกษตกรเลี้ยงทั้งหมด (ตัว)</v-card-text>
        <v-divider></v-divider>
        <div class="ma-2 mx-4" >
            <v-text-field label="จำนวน" v-model="form.total_master_breeding_types" disabled></v-text-field>
        </div>

        <v-card-text class="pa-2 title">2.4 พ่อพันธุ์โคเนื้อที่เลี้ยง</v-card-text>
        <v-divider></v-divider>
        <div class="ma-2 mx-4" >
            <v-text-field  label="จำนวน" v-model="form.total_male_breeding_types" disabled>
            </v-text-field>
        </div>

        <v-card-text class="pa-2 title">2.5 แม่พันธุ์โคเนื้อที่เลี้ยง</v-card-text>
        <v-divider></v-divider>
        <div class="ma-2 mx-4" >
            <v-text-field  label="จำนวน" v-model="form.total_female_breeding_types" disabled>
            </v-text-field>
        </div>
        <v-card-text class="pa-2 title">2.6 โคเพศผู้อายุมากกว่า 6 เดือนขึ้นไปแต่ไม่ใช่พ่อพันธุ์คุมฝูง</v-card-text>
        <v-divider></v-divider>
        <div class="ma-2 mx-4" >
            <v-text-field  label="จำนวน" v-model="form.total_male_over_six_breeding_types" disabled>
            </v-text-field>
        </div>

        <v-card-text class="pa-2 title">2.7 โคเพศเมียอายุมากกว่า 6 เดือนขึ้นไปแต่ยังไม่ตั้งท้อง</v-card-text>
        <v-divider></v-divider>
        <div class="ma-2 mx-4" >
            <v-text-field  label="จำนวน" v-model="form.total_female_over_six_breeding_types" disabled>
            </v-text-field>
        </div>

        <v-card-text class="pa-2 title">2.8 ลูกโคเพศผู้อายุน้อยกว่า 6 เดือน</v-card-text>
        <v-divider></v-divider>
        <div class="ma-2 mx-4" >
            <v-text-field  label="จำนวน" v-model="form.total_male_under_six_breeding_types" disabled>
            </v-text-field>
        </div>

        <v-card-text class="pa-2 title">2.8 ลูกโคเพศผู้อายุน้อยกว่า 6 เดือน</v-card-text>
        <v-divider></v-divider>
        <div class="ma-2 mx-4" >
            <v-text-field  label="จำนวน" v-model="form.total_male_under_six_breeding_types" disabled>
            </v-text-field>
        </div>

        <v-card-text class="pa-2 title">2.9 ลูกโคเพศเมียอายุน้อยกว่า 6 เดือน</v-card-text>
        <v-divider></v-divider>
        <div class="ma-2 mx-4" >
            <v-text-field  label="จำนวน" v-model="form.total_male_under_six_breeding_types" disabled>
            </v-text-field>
        </div>

        <v-card-text class="pa-2 title">2.10 ค่าใช้จ่ายในการเลี้ยงโคเนื้อ</v-card-text>
        <v-divider></v-divider>
        <div class="ma-2 mx-4" >
          <v-text-field  label="ค่าใช้จ่ายโดยประมาณ (บาท/เดือน)" v-model="form.total_expense_amount" type="number">
          </v-text-field>
          <v-text-field  label="ค่ายา (บาท/เดือน)" v-model="form.drug_price" type="number">
          </v-text-field>
          <v-text-field  label="ค่าอาหารและแร่ธาตุ (บาท/เดือน)" v-model="form.food_price" type="number">
          </v-text-field>
          <v-text-field  label="อื่นๆ" v-model="form.expense_price" type="number">
          </v-text-field>
        </div>

        <v-card-text class="pa-2 title">2.11 ท่านมีประสบการณ์การเลี้ยงโคเนื้อมานานแค่ไหน</v-card-text>
        <v-divider></v-divider>
        <div class="ma-2 mx-4" >
          <choice-select  type="farm_exp" :value = "form.farm_exp"></choice-select>
        </div>

        <v-card-text class="pa-2 title">2.12 ท่านมีเป้าหมายในการเลี้ยงในอนาคตอย่างไร</v-card-text>
        <v-divider></v-divider>
        <div class="ma-2 mx-4" >
          <choice-select  type="farm_future" :value = "form.farm_future"></choice-select>
        </div>

        <v-card-text class="pa-2 title">2.13 การขึ้นทะเบียนฟาร์มกับภาครัฐ</v-card-text>
        <v-divider></v-divider>
        <div class="ma-2 mx-4" >
          <choice-select  type="farm_register_status" :value = "form.farm_register_status"></choice-select>
        </div>

        <v-card-text class="pa-2 title">2.14 ประวัติการตรวจโรคสัตว์ในฟาร์มของท่าน</v-card-text>
        <v-divider></v-divider>
        <div class="ma-2 mx-4" >
          <choice-select  type="farm_disease_check" :value = "form.farm_disease_check"></choice-select>
        </div>

        <v-card-text class="pa-2 title">2.15 สถานภาพการระบาดของโรคในฟาร์มของท่านเป็นอย่างไร</v-card-text>
        <v-divider></v-divider>
        <div class="ma-2 mx-4" >
          <choice-select  label="โรคแท้งติดต่อ" type="abortion" :value = "form.abortion"></choice-select>
          <choice-select  label="โรควัณโรค" type="tuberculosis" :value = "form.tuberculosis"></choice-select>
          <choice-select  label="โรคปากและเท้าเปื่อย" type="foot_mouth_disease" :value = "form.foot_mouth_disease"></choice-select>
          <div class="mt-3">
            <v-card-text class="pa-0">โรคอื่นๆ</v-card-text>
            <choice-check-box type = "disease_other" :value="form.disease_other" singleLine></choice-check-box>
          </div>

        </div>

      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import ChoiceSelect from "../../share/choiceSelect";
  import ChoiceCheckBox from "../../share/choiceCheckBox";
    export default {
      name: "part2",
      components: {ChoiceSelect, ChoiceCheckBox},
      data : () =>({
        form : undefined
      }),
      async created  () {
          this.form = await this.$store.state.farmOwners.farmOwner
      },
    }
</script>

<style scoped>

</style>
