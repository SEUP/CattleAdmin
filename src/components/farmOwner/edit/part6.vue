
<template>

    <v-container>
      <v-form>
        <v-flex xs12>
          <p class="title">6.1 ท่านจำหน่ายโคเนื้อให้กับใคร</p>
          <v-divider class="my-3"></v-divider>
          <v-flex xs10 offset-xs1>
           <choice-check-box type="seller_types"></choice-check-box>
          </v-flex>
        </v-flex>
        <v-flex xs12>
          <p class="title">6.2 อายุของโคเนื้อที่ท่านจำหน่าย(ปี)</p>
          <choiceSelect type="age_breeding_sale"></choiceSelect>
        </v-flex>
        <v-flex xs12>
          <p class="title">6.3 น้ำหนักของโคเนื้อที่ท่านจำหน่าย(กิโลกรัม)</p>
          <choiceSelect type="weight_range_sale"></choiceSelect>
        </v-flex>
        <v-flex xs12>
          <p class="title">6.4 ลักษณะการจำหน่าย</p>
          <choice-check-box type="cattle_sale_methods"></choice-check-box>
        </v-flex>
        <v-flex xs12>
          <p class="title">6.5 ถ้าท่านรวมกลุ่มวิสาหกิจชุมชนและสหกรณ์โคเนื้อเมื่อใด</p>
          TODO
        </v-flex>
        <v-flex xs12>
          <p class="title">6.6 ถ้ายังไม่เข้ารวมกลุ่มท่านมีความประสงค์ในการรวมกลุ่มวิสาหกิจชุมชนและสหกรณ์โคเนื้อหรือไม่</p>
          <choiceSelect type="cattle_heath_support"></choiceSelect>
        </v-flex>
        <v-flex xs12>
          <p class="title">6.7 ท่านต้องการให้สหกรณ์ช่วยเหลือในด้านใด</p>
          <choice-check-box type="cooperative_help_types"></choice-check-box>
        </v-flex>
        <v-flex xs12>
          <p class="title">6.8 ท่านต้องการซื้ออาหารข้นในนามสหกรณ์หรือไม่</p>
          <v-divider class="my-3"></v-divider>
          <choice-select type="female_breeder_support" ></choice-select>
        </v-flex>
        <v-flex xs12>
          <p class="title">6.9 ท่านขายโคเนื้อได้ราคาเท่าไหร่และใช้เวลาในการเลี้ยงนานเท่าใด</p>
          TODO
        </v-flex>
        <v-flex xs12>
          <p class="title">6.10 ท่านพอใจกับราคาที่ขายได้หรือไม่</p>
          <choiceSelect type="sale_satisfaction"></choiceSelect>
        </v-flex>
      </v-form>
    </v-container>

</template>


<script>
  import ChoiceSelect from "../../share/choiceSelect";
  import ChoiceCheckBox from "../../share/choiceCheckBox";
  export default {
    components: {ChoiceSelect,ChoiceCheckBox},
    name: "part6",

    data (){
      return{
        selected:[],
        form:[]
      }

    }
  }
</script>

<style scoped>

</style>
