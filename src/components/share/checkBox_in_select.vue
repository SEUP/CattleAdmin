<template>
 <v-layout class="pa-0 py-1">
   <v-flex xs12 >
     <v-select hide-details
               :items="items"
               item-text="choice"
              v-model="selectedValuechoice"
     ></v-select>
     <div v-if="selectedValuechoice.id == 202">
       <v-layout v-for="item in items_Box">
         <v-flex class="ml-s xs6"  >
           <v-checkbox :label="item.choice" hide-details :value="item"
                       :input-value="value_Box"
                       v-model="selected"
                       @change="updateChoice"
                       color="success">

           </v-checkbox>
           <v-text-field
             hide-details class="pa-0 px-3"
             placeholder="จำนวนครั้ง/ปี" :value="item.pivot.remark"
             v-model="item.pivot.remark"
             @change="updateChoice">
           </v-text-field>
         </v-flex>
         <v-flex class="xs6">
           <h3 class="caption">By</h3>
           <v-select hide-details
             :items="items_select"
             v-model="selectedValue"
             :label="label" item-text="choice"
             @change="updateChoice"
             class="">

           </v-select>
         </v-flex>
       </v-layout>
     </div>
   </v-flex>
 </v-layout>
</template>

<script>


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
        },
        value_Box: {
          type: [Array],
          default: () => []
        },
        value_select: {
          type: Object,
          default : () =>  (defaultChoice)
        },
      },
      data :  () => ({
        items: [],
        items_Box:[],
        items_select:[],
        selected :[],
        selectedValuechoice: defaultChoice,
        selectedValue : defaultChoice
      }),
      async created() {
        this.items = await [defaultChoice].concat(await this.$store.dispatch("choices/getChoicesByType", this.type));
        this.items_Box = await [].concat(await this.$store.dispatch("choices/getChoicesByType",'vaccine_types'));
        this.items_select = await [defaultChoice].concat(await this.$store.dispatch("choices/getChoicesByType",'vaccined_by'));


        await this.sync()
      },
      methods:{
        sync: function () {
          let items = this.items
          let sel = this.value
          let items_length = this.items.length;
          let sel_length = this.value.length;
          for (let i = 0; i < items_length; i++) {
            items[i] = Object.assign(items[i], {pivot: {remark: null}})
            for (let j = 0; j < sel_length; j++) {
              if (items[i].id == sel[j].id) {
                items[i] = sel[j]
                this.selected.push(sel[j])
              }
            }
          }
        },
        updateChoice : function () {
          this.$emit("change",this.selected,this.selectedValue)
        },
        updateValue: async function () {
          await this.$emit('change', this.selectedValue)

        }
      }
    }
</script>

<style scoped>

</style>
