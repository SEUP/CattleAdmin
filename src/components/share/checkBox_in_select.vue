<template>
 <v-layout class="pa-0 py-1">
   <v-flex xs12 >
     <v-select hide-details
               :items="items"
               item-text="choice"
              v-model="selectedValuechoice"
              class="mb-2"
     ></v-select>

     <div v-if="selectedValuechoice.id == 202">

       <v-layout  class="mt-3 " v-for="(item,index) in items_Box" v-bind:key="item.id" >

         <!--1-->
         <v-layout row v-if="index == 0" >
             <v-flex class="xs6" >
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
                         v-model="selectedValue1"
                         item-text="choice"
                         @change="updateChoice"
                         class="">

               </v-select>
             </v-flex>
          </v-layout>

         <!--2-->
         <v-layout row v-if="index == 1" >
           <v-flex class="xs6" >
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
                       v-model="selectedValue2"
                       item-text="choice"
                       @change="updateChoice"
                       class="">

             </v-select>
           </v-flex>
         </v-layout>

         <!--3-->
         <v-layout row v-if="index == 2" >
           <v-flex class="xs6" >
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
                       v-model="selectedValue3"
                       item-text="choice"
                       @change="updateChoice"
                       class="">

             </v-select>
           </v-flex>
         </v-layout>

         <!--4-->
         <v-layout row v-if="index == 3" >
           <v-flex class="xs6" >
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
                       v-model="selectedValue4"
                       item-text="choice"
                       @change="updateChoice"
                       class="">

             </v-select>
           </v-flex>
         </v-layout>
       </v-layout>

     </div>
   </v-flex>
 </v-layout>
</template>

<script>



  let defaultChoice = {
    id : 0,
    has_text :0,
    choice : "กรุณาเลือก",
    pivot:{remark: null,amount:null}
  };
    export default {
      name: "checkBox_in_select",
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
          default: ""
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
        selectedValue1 : defaultChoice,
        selectedValue2 : defaultChoice,
        selectedValue3 : defaultChoice,
        selectedValue4 : defaultChoice
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
          this.$emit("change",this.selected,this.selectedValuechoice, this.selectedValue1,this.selectedValue2,this.selectedValue3,this.selectedValue4)
        },
        updateValue: async function () {
          await this.$emit('change', this.selectedValue1,this.selectedValuechoice,this.selectedValue2,this.selectedValue3,this.selectedValue4)

        }
      }
    }
</script>

<style scoped>

</style>
