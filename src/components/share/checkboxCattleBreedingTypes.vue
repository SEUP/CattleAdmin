<template>
 <div>
   <v-layout column v-for="item in items" :key="item.id">
     <v-flex xs12>
       <v-checkbox :label="item.choice" hide-details
                   :value = "item"
                   v-model="selected"
                   :input-value = "value"
                   color="success"
                   class="pa-0"
       >
       </v-checkbox>
     </v-flex>
     <v-flex class="pb-2" v-if="item.children">
       <div v-if="item.has_text">
         <v-text-field hide-details class="pa-0 pb-1" placeholder="โปรดระบุ" ></v-text-field>
         <v-layout>
           <v-flex xs12 md4  mx-1>
             <v-text-field type="number" hide-details class="pa-0 pb-1" placeholder="จำนวน"></v-text-field>
           </v-flex>
           <v-flex xs12 md4  mx-1>
             <v-select type="number" hide-details class="pa-0 pb-1" placeholder="เเหล่งที่มา" :items="source_opt" dense></v-select>
           </v-flex>
           <v-flex xs12 md4  mx-1>
             <v-text-field  hide-details class="pa-0 pb-1" placeholder="แหล่งที่มาอื่นๆ"></v-text-field>
           </v-flex>
           <v-flex xs12 md4  mx-1>
             <v-text-field type="number" hide-details class="pa-0 pb-1" placeholder="ราคา"></v-text-field>
           </v-flex>
         </v-layout>
       </div>

       <v-layout v-for="children in item.children" :key="children.id">
         <v-flex>
           <v-checkbox :label="children.choice" class="pa-0" hide-details v-model="selected.children"></v-checkbox>
           <v-layout>
             <v-flex xs12 md4  mx-1>
               <v-text-field type="number" hide-details class="pa-0 pb-1" placeholder="จำนวน"></v-text-field>
             </v-flex>
             <v-flex xs12 md4  mx-1>
               <v-select type="number" hide-details class="pa-0 pb-1" placeholder="เเหล่งที่มา" :items="source_opt" dense></v-select>
             </v-flex>
             <v-flex xs12 md4  mx-1>
               <v-text-field  hide-details class="pa-0 pb-1" placeholder="แหล่งที่มาอื่นๆ"></v-text-field>
             </v-flex>
             <v-flex xs12 md4  mx-1>
               <v-text-field type="number" hide-details class="pa-0 pb-1" placeholder="ราคา"></v-text-field>
             </v-flex>
           </v-layout>
         </v-flex>
       </v-layout>
     </v-flex>
     <v-divider class="my-2"></v-divider>
   </v-layout>
 </div>
</template>
<script>

    export default {
      name: "checkboxCattleBreedingTypes",
      props: {
        value: {
          type: [Array],
          default: () => []
        },
        type: {
          type: String,
        }
      },
      data: () => ({
        items: [],
        selected: [],
        source_opt : ["ตลาดโค","พ่อค้าคนกลาง","ในหมู่บ้าน","โครงการหลวง","ผลิตเองในฟาร์ม","อื่นๆ"]
      }),
      async created() {
        this.items = await this.$store.dispatch("choices/getChoicesByType", this.type)
      },
      methods: {
        sync : function () {
          let items = this.items
          let sel = this.value
          let items_length = this.items.length;
          let sel_length = this.value.length;
          for(let i =0;i<items_length;i++){
            items[i] = Object.assign(items[i],{pivot:{remark: null}})
            for (let j =0;j<sel_length;j++){
              if (items[i].id == sel[j].id) {
                items[i] = sel[j]
                this.selected.push(sel[j])
              }
            }
          }
        },
      }
    }
</script>

<style scoped>

</style>
