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
     <v-flex class="pb-2">
       <v-text-field hide-details class="pa-0 pb-1" placeholder="โปรดระบุ" v-if="item.has_text"></v-text-field>
       <v-layout>
         <v-flex xs12 md4  mr-1>
           <v-text-field type="number" hide-details class="pa-0 pb-1" placeholder="จำนวน"></v-text-field>
         </v-flex>
         <v-flex xs12 md4  mx-1>
           <v-select type="number" hide-details class="pa-0 pb-1" placeholder="เเหล่งที่มา" :items="source_opt" dense></v-select>
         </v-flex>
         <v-flex xs12 md4  mx-1>
           <v-text-field  hide-details class="pa-0 pb-1" placeholder="แหล่งที่มาอื่นๆ"></v-text-field>
         </v-flex>
         <v-flex xs12 md4  ml-1>
           <v-text-field type="number" hide-details class="pa-0 pb-1" placeholder="ราคา"></v-text-field>
         </v-flex>
       </v-layout>
     </v-flex>
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
        farmOwner : {},
        allChoice: [],
        items: [],
        childItems: [],
        selected: [],
        childSelected: [],
        source_opt : ["ตลาดโค","พ่อค้าคนกลาง","ในหมู่บ้าน","โครงการหลวง","ผลิตเองในฟาร์ม","อื่นๆ"]
      }),
      async created() {
        this.allChoice = await this.$store.dispatch("choices/getChoices")
        this.items = await this.$store.dispatch("choices/getChoicesByType", this.type)
        this.farmOwner = await this.$store.state.farmOwners.farmOwner
        // await console.log("ALL CHOICE", this.allChoice)
        await this.getChildren()
        await this.getSelectChildren()
        // await console.log("IN CT",this.value[0].id)
      },
      methods: {
        getChildren: async function () {
          let obj =this.allChoice
          let items = this.items
          let child = []
          Object.keys(obj).forEach(function(key) {
            // console.log("IN LOOP",obj[key][0].id, idVal)
            obj[key].forEach( (i) => {
              items.forEach( (j) => {
                if (i.parent_id == j.id) {
                  child.push(i)
                  // console.log("TRUE");
                }
              })

            })
          })
          this.childItems = child;
          console.log(this.childItems)
        },
        getSelectChildren : async function () {
          await console.log("FARMONWER",this.farmOwner)
        }
      }
    }
</script>

<style scoped>

</style>
