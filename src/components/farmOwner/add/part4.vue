<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>

        <p class="title">4.1 ผสมพันธุ์โคเนื้อในฟาร์มของท่าน</p>
        <v-divider class="my-3"></v-divider>
        <choice-select type="farm_breeding_type" class="ml-3"></choice-select>

      </v-flex>
    </v-layout>

    <v-layout row wrap mt-5>
      <v-flex xs12>
        <p class="title" >4.2 การผสมเทียมใช้น้ำเชื้อจากแหล่งใด</p>
        <v-divider class="my-3"></v-divider>
        <choice-check-box type="inseminate_sources"></choice-check-box>
      </v-flex>

      <v-flex mt-3>
        <p class="title" >4.2.1 ผู้ให้บริการผสมเทียมคือใคร</p>
        <v-divider class="my-3"></v-divider>
        <choice-check-box type="breeders"></choice-check-box>
      </v-flex>
    </v-layout>

    <v-layout row wrap mt-5>
      <v-flex xs12>
        <p class="title">4.3 การใช้พ่อพันธุ์คุมฟูง</p>
        <v-divider class="my-3"></v-divider>
        <v-text-field
          class="mt-3 ml-3"
          label="อัตราส่วนพ่อพันธุ์คุมฟูง 1 ตัวต่อแม่พันธุ์(ตัว)">
        </v-text-field>
      </v-flex>
    </v-layout>

    <v-layout row wrap mt-5>
      <v-flex xs12>
        <p class="title">4.4 การตายของโคในรอบปี</p>
        <v-divider class="my-3"></v-divider>
        <choice-select type="cattle_death" class="ml-3"></choice-select>
      </v-flex>

      <v-flex mt-3>
        <p class="title">4.4.1 สาเหตุการตาย</p>
        <v-divider class="my-3"></v-divider>
        <choice-check-box type="cattle_death_causes"></choice-check-box>
      </v-flex>
    </v-layout>

    <v-layout row wrap mt-5>
      <v-flex xs12>
        <p class="title">4.5 เมื่อโคเจ็บป่วยบุคคลที่ทำการรักษาให้(ตอบได้มากกว่า1ข้อ)</p>
        <v-divider class="my-3"></v-divider>
        <choice-check-box type="disease_cured_by"></choice-check-box>
      </v-flex>
    </v-layout>

    <v-layout row wrap mt-5>
      <v-flex xs12>
        <p class="title">4.6 การถ่ายพยาธิ(ครั้ง/ปี)</p>
        <v-divider class="my-3"></v-divider>
        <ChoiceSelect type="dewormed_amount"></ChoiceSelect>
      </v-flex>
    </v-layout>

    <v-layout row wrap mt-5>
      <v-flex xs12>
        <p class="title">4.7 ท่านได้ทำวัคซีนป้องกันโรคให้กับโคเนื้อที่เลี้ยงหรือไม่</p>
        <v-divider class="my-3"></v-divider>
        <ChoiceSelect type="vaccine_ever"></ChoiceSelect>
      </v-flex>
    </v-layout>

    <v-layout row wrap mt-5>
      <v-flex xs12>
        <p class="title">4.8 ท่านมีการจัดการมูลโคในฟาร์มของท่านอย่างไร (เลือกได้มากกว่า 1 ข้อ)</p>
        <v-divider class="my-3"></v-divider>
        <choice-check-box type="cattle_dung_uses"></choice-check-box>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
    import ChoiceSelect from "../../share/choiceSelect";
    import ChoiceCheckBox from "../../share/choiceCheckBox";

    export default {
        name: "part4",
      components: {ChoiceCheckBox, ChoiceSelect },
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
