<template>
    <v-container v-if="form != null">
      <v-form>
        <v-flex xs12>
          <p class="title">7.1 หน่วยงานที่ให้บริการส่งเสริมการเลี้ยงโคเนื้อ(ตอบได้มากกว่า 1 ข้อ)</p>
          <v-divider class="my-3"></v-divider>
          <choice-check-box :value="form.support_visit" type="support_sources" @change="form.support_visit = $event"></choice-check-box>
        </v-flex>
        <v-flex xs12>
          <p class="title">7.2 ท่านเคยได้รับการเยี่ยมเยือนฟาร์มจากหน่วยงานในข้อ 7.1 หรือไม่</p>
          <v-divider class="my-2"></v-divider>
          <choice-select :value="form.support_visit" type="support_visit"  @change="form.support_visit = $event" ></choice-select>
        </v-flex>
        <v-flex xs12 class="mt-3">
          <p class="title">7.3 ท่านเคยได้รับการสนับสนุนปัจจัยการผลิตหรือไม่</p>
          <v-divider class="my-2"></v-divider>
          <choice-select :value="form.support_visit" type="support_visit" @change="form.support_visit= $event"  ></choice-select>
        </v-flex>
        <v-flex xs12 class="mt-3">
          <p class="title">7.4 การใช้บริการด้านสุขภาพโคจากหน่วยงานของกรมปศุสัตว์</p>
          <v-divider class="my-2"></v-divider>
          <choice-select :value="form.support_visit" type="support_visit" @change="support_visit = $event" ></choice-select>
        </v-flex>
        <v-flex xs12 class="mt-3">
          <p class="title">7.5 ท่านเคยเข้ารับการฝึกอบรมเกี่ยวกับการเลี้ยงโคเนื้อหรือไม่</p>
          <v-divider class="my-2"></v-divider>
          <choice-select :value="form.support_visit" type="support_visit" @change="form.support_visit=$event" ></choice-select>
        </v-flex>
        <v-flex xs12 class="mt-3">
          <p class="title">7.6 ท่านเคยไปดูงานเกี่ยวกับการเลี้ยงโคเนื้อหรือไม่</p>
          <v-divider class="my-2"></v-divider>
          <choice-select :value="form.support_visit" type="support_visit" @change="form.support_visit=$event" ></choice-select>
        </v-flex>
        <v-flex xs12 class="mt-3">
          <p class="title">7.7 ท่านเคยได้รับการสนับสนุนให้แม่พันธุ์โคเนื้อมาเลี้ยงเพื่อผลิตลูกหรือไม่</p>
          <v-divider class="my-2"></v-divider>
          <choice-select :value="form.support_visit" type="support_visit" @change="form.support_visit=$event" ></choice-select>
        </v-flex>
      </v-form>
    </v-container>

</template>

<script>
  import choiceSelect from "@/components/share/choiceSelect"
  import ChoiceCheckBox from "../../share/choiceCheckBox";

    export default {
      components: {
        choiceSelect,
        ChoiceCheckBox,
      },
      watch :{
        form : {
          deep : true,
          handler :  function (newVal,oldVal) {
            this.updateForm()
          }
        }
      },
      name: "part7",
      data (){
        return{
          form:null
        }
      },
      async created (){
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
