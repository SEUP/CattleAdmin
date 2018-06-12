<template>
  <v-layout column >
    <v-flex v-for="item in items" :key="item.id">
      <v-checkbox :label="item.choice" hide-details
                  :value="item"
                  v-model="selected"
                  @change = "updateChoice"
                  :input-value = "value"
      >
      </v-checkbox>
      <v-text-field v-if="item.has_text"
                    hide-details class="pa-0 px-3"
                    placeholder="โปรดระบุ" :value="item.pivot.remark"
                    v-model="item.pivot.remark"
                    @change = "updateChoice"
      ></v-text-field>
    </v-flex>
  </v-layout>

</template>
<script>

  export default {
    props : {
      value : {
        type : [Array],
        default : () => []
      },
      type : {
        type : String,
      }
    },
    data:() => ({
      items: [],
      selected : [],
    }),
    methods : {
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
      load :async function () {
        this.items = await this.$store.dispatch("choices/getChoicesByType",this.type)
        await this.sync()
        console.log("V",this.value)
        console.log("S",this.selected)
        console.log("I",this.items)
      },
      updateChoice : function () {
        this.$emit("change",this.selected)
        console.log("emit",this.selected)
      }
    },
    created : function () {
      this.load()
    },


  }

</script>
