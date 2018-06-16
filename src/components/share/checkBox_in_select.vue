<template>
 <v-layout class="pa-0 py-1">
   <v-flex xs12 >
     <v-select hide-details
               :items="items"
               item-text="choice"
              v-model="selectedValue"
     ></v-select>
     <div v-if="selectedValue.id == 202">
       <v-layout row>
         <v-flex class="xs12">
            <vaccine-choice type="vaccine_types"></vaccine-choice>
         </v-flex>

       </v-layout>
     </div>
   </v-flex>
 </v-layout>
</template>

<script>

  import VaccineChoice from "./vaccineChoice";
  import ChoiceSelect from "./choiceSelect";

  let defaultChoice = {
    id : 0,
    has_text :0,
    choice : "กรุณาเลือก",
    pivot:{remark: null,amount:null}
  };
    export default {
      name: "checkBox_in_select",
      components: {
        VaccineChoice,
        ChoiceSelect},
      props: {
        singleLine : {
          type : Boolean,
          default : false
        },
        type: {
          type: String,
        },
        label: {
          type: String,
          default: "ตัวเลือก"
        },
        value: {
          type: Object,
          default : () =>  (defaultChoice)
        }
      },
      data :  () => ({
        items: [],
        selectedValue : defaultChoice
      }),
      async created() {
        this.items = await [defaultChoice].concat(await this.$store.dispatch("choices/getChoicesByType", this.type));
        await this.sync()
      },
    }
</script>

<style scoped>

</style>
