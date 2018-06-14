
<template>

    <v-container v-if="form != null">
      <v-form>
        <v-flex xs12>
          <p class="title">6.1 ท่านจำหน่ายโคเนื้อให้กับใคร</p>
          <v-divider class="my-3"></v-divider>
          <v-flex xs10 offset-xs1>
           <choice-check-box :value="form.seller_types" @change="from.seller_types=$event" type="seller_types"></choice-check-box>
          </v-flex>
        </v-flex>
        <v-flex xs12>
          <p class="title">6.2 อายุของโคเนื้อที่ท่านจำหน่าย(ปี)</p>
          <choiceSelect :value="form.age_breeding_sale" @change="from.age_breeding_sale=$event" type="age_breeding_sale"></choiceSelect>
        </v-flex>
        <v-flex xs12>
          <p class="title">6.3 น้ำหนักของโคเนื้อที่ท่านจำหน่าย(กิโลกรัม)</p>
          <choiceSelect :value="form.weight_range_sale" @change="from.weight_range_sale=$event" type="weight_range_sale"></choiceSelect>
        </v-flex>
        <v-flex xs12>
          <p class="title">6.4 ลักษณะการจำหน่าย</p>
          <choice-check-box :value="form.cattle_sale_methods" @change="from.cattle_sale_methods=$event"   type="cattle_sale_methods"></choice-check-box>
        </v-flex>
        <v-flex xs12>
          <p class="title">6.5 ถ้าท่านรวมกลุ่มวิสาหกิจชุมชนและสหกรณ์โคเนื้อเมื่อใด</p>
          <choice-check-box   :value="form.group_joins" @change="from.group_joins=$event"  type="group_joins"></choice-check-box>
        </v-flex>
        <v-flex xs12>
          <p class="title">6.6 ถ้ายังไม่เข้ารวมกลุ่มท่านมีความประสงค์ในการรวมกลุ่มวิสาหกิจชุมชนและสหกรณ์โคเนื้อหรือไม่</p>
          <choiceSelect   :value="form.cattle_heath_support" @change="from.cattle_heath_support=$event"   type="cattle_heath_support"></choiceSelect>
        </v-flex>
        <v-flex xs12>
          <p class="title">6.7 ท่านต้องการให้สหกรณ์ช่วยเหลือในด้านใด</p>
          <choice-check-box  :value="form.cooperative_help_types" @change="from.cooperative_help_types=$event"  type="cooperative_help_types"></choice-check-box>
        </v-flex>
        <v-flex xs12>
          <p class="title">6.8 ท่านต้องการซื้ออาหารข้นในนามสหกรณ์หรือไม่</p>
          <v-divider class="my-3"></v-divider>
          <choice-select :value="form.emale_breeder_support" @change="from.emale_breeder_support=$event" type="female_breeder_support" ></choice-select>
        </v-flex>
        <v-flex xs12>
          <p class="title">6.9 ท่านขายโคเนื้อได้ราคาเท่าไหร่และใช้เวลาในการเลี้ยงนานเท่าใด</p>
          <choice-check-box   :value="form.cattle_sales" @change="from.cattle_sales=$event" type="cattle_sales"></choice-check-box>
        </v-flex>
        <v-flex xs12>
          <p class="title">6.10 ท่านพอใจกับราคาที่ขายได้หรือไม่</p>
          <choiceSelect   :value="sale_satisfaction" @change="from.sale_satisfaction=$event" type="sale_satisfaction"></choiceSelect>
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
  watch :{
    form : {
      deep : true,
        handler :  function (newVal,oldVal) {
        this.updateForm()
      }
    }
  },

    data (){
      return{
        selected:[],
        form:[]
      }

    },async created (){
      this.form = await this.$store.state.farmOwners.farmOwner;
      // console.log("IN C",this.form)
    },methods : {
      updateForm : async function () {
        // console.log("TO UPDATE",this.form)
        await this.$store.dispatch("farmOwners/updateState",this.form)
        let data = await this.$store.state.farmOwners.farmOwner
        // console.log("UPDATED",data)
      }
    }
  }
</script>

<style scoped>

</style>
