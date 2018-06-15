<template>
  <v-container v-if="form">
    <v-layout row wrap>
      <v-flex xs12>

        <p class="title">5.1 เงินทุนที่ท่านใช้เลี้ยงโคเนื้อ</p>

        <v-divider class="my-3"></v-divider>
        <choice-select type="budget_source" class="ml-5" :value="form.budget_source" single-line ></choice-select>

      </v-flex>
    </v-layout>

    <v-layout row wrap mt-5>
      <v-flex xs12>
        <p class="title" >5.2 แหล่งเงินทุนกู้ยืม</p>
        <v-divider class="my-3"></v-divider>
        <checkbox-budgetsource type="loan_types"></checkbox-budgetsource>
      </v-flex>
    </v-layout>

    <v-layout row wrap mt-5>
      <v-flex xs12>
        <p class="title" >5.3 เงินทุนในการเลี้ยงโคเนื้อรวมทั้งหมด (บาท) (รวมจาก 5.1 และ 5.2)</p>
        <v-divider class="my-3"></v-divider>
        <v-text-field
          class="mt-3"
          label="จำนวนเงิน"
          disabled
          v-model="totalBudget"
        > <!--ทุกครั้ง ที่ ข้างบนมีการเปลี่ยนเเปลง ตจ้องโหลด เสตจ ใหม่ ข้อมูลจึงจะอัพเดท-->
        </v-text-field>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
  import ChoiceSelect from "../../share/choiceSelect";
  import checkboxBudgetsource from "../../share/checkboxBudgetsource";

  export default {
    name: "Part5",
    components: {checkboxBudgetsource, ChoiceSelect },
    data : () =>({
      form : undefined
    }),
    async created  () {
      this.form = await this.$store.state.farmOwners.farmOwner;
      this.sumBudget()
    },
    computed : {
      totalBudget : function(){
        let total = 0;
        total += this.form.budget_source.pivot.amount;
        total += 10000;

        this.form.total_budget = total;
        //return this.form.total_budget
        return 1000000;
      }
    },
    methods : {
      sumBudget : async function () {
        this.$store.dispatch("farmOwners/sumBudget")

      }
    }
  }

</script>

<style scoped>

</style>
