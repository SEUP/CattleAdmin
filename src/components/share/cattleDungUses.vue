<template>
  <div v-if="ready">
    <v-layout row wrap  v-for="item in items" :key="item.id">
      <v-flex xs12>
        <v-checkbox :label="item.choice" hide-details
                    class="pa-0 ma-0"
                    :value="item"
                    v-model="selected"
                    @change="updateChoice"
                    :input-value="value"
                    color="success"
        >
        </v-checkbox>
      </v-flex>
      <v-flex xs12 v-if="item.has_text" class="pa-0 ma-0 ml-4">
        <v-text-field
          hide-details class="pa-0 ma-0"
          placeholder="บาท/ปี" type="number"
          v-model="item.pivot.remark"
          @change="updateChoice"
          color="success"
        ></v-text-field>
      </v-flex>
      <v-flex xs12 v-if="item.children.length > 0" class="pa-0 ma-0 ml-4">
        <v-select
          class="ma-0"
          :items="item.children"
          item-text="choice"
          placeholder = 'กรุณาเลือก'
          v-model="selectSelect"
          @change="updateSelect"
          return-object
        ></v-select>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
  let defaultChoice = {
  id : 0,
  has_text :0,
  choice : "กรุณาเลือก",
};
  export default {
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
      ready : false,
      items: [],
      selected: [],
      selectSelect : defaultChoice
    }),
    async created () {
      this.items = await this.$store.dispatch("choices/getChoicesByType", this.type)
      await this.sync()
      // console.log(this.items)
    },
    methods: {
      syncSelect :function (item,val){
        item.children = [defaultChoice].concat(item.children)
        item.children.forEach((i)=>{
          console.log(this.selectSelect)
          val.children.forEach((v)=>{
           if(v.id == i.id){
             i=v
             this.selectSelect = i
          }
          })
        })
        item = val
        return item
      },
      sync: function () {
        let items = this.items
        let sel = this.value
        let items_length = this.items.length;
        let sel_length = this.value.length;
        for (let i = 0; i < items_length; i++) {
          items[i] = Object.assign(items[i], {pivot: {remark: null}})
          for (let j = 0; j < sel_length; j++) {
            if (items[i].id == sel[j].id) {
              if(items[i].id == 208){
                items[i] = this.syncSelect(items[i],sel[j])
              }else{
                items[i] = sel[j]
              }
              this.selected.push(sel[j])
            }
          }
        }
        this.ready = true
      },
      updateSelect : function (sel) {
        sel.forEach((i)=>{
          // console.log(i)
          if(i.children.length > 0 ){
            i.children = [this.selectSelect]
            // console.log(i)
            }
        })
      },
      updateChoice : function () {
       let sel =  this.updateSelect(this.selected)
        //-------------------

        //-------------------
        this.$emit("change",sel)
      }
    },


  }

</script>
