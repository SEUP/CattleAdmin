<template>
  <div v-if="form">
    <v-layout column wrap>
      <v-flex xs12 >
        <v-card-text class="pa-2 title">2.1 การเลี้ยงโคเนื้อของท่านมีวัตถุประสงค์เพื่ออะไร (เลือกได้มากกว่า 1 ข้อ)</v-card-text>
        <v-divider></v-divider>
        <div class="ma-2 mx-4" >
            <choice-check-box type="farm_purposes" :value="form.farm_purposes">
            </choice-check-box>
        </div>

        <v-card-text class="pa-2 title">2.2 ท่านมีการจดบันทึกข้อมูลหรือทำประวัติโคเนื้อหรือไม่</v-card-text>
        <v-divider></v-divider>
        <div class="ma-2 mx-4" >
            <choice-select type="farm_record" :value="form.farm_record">
            </choice-select>
        </div>

        <v-card-text class="pa-2 title">2.3 จำนวนโคเนื้อที่เกษตกรเลี้ยงทั้งหมด (ตัว)</v-card-text>
        <v-divider></v-divider>
        <div class="ma-2 mx-4" >
            <v-text-field v-model="this.form.total_master_breeding_types" disabled>
            </v-text-field>
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
