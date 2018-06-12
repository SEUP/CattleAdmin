<template>
  <v-layout column pa-0 v-if = "items !== []" >
    <v-flex v-for = "item in items" :key="items.choice">
      <v-checkbox :label="item.choice"  v-model="selectedValue" :value="item.choice"
                  @change ="updateSelectedValueOutput" hide-details></v-checkbox>
        <v-text-field  hide-details class="pa-0 px-3" placeholder="โปรดระบุ" v-if="item.has_text" :value="item.pivot">{{"adad"}}</v-text-field>
    </v-flex>
  </v-layout>

</template>

<script>
    export default {
      name: "jobTypeCheckbox",
      props : {
        type : {
          type : String
        },
        value : {
          type : Array,
          default : null
        }
      },
      data : () => ({
        textChildren: "",
        selectedValue : [],
        selectedValueOutput : [],
        items : []
      }),
      async created () {
        let choice = await  this.$store.dispatch("choices/getChoicesByType",this.type);
        this.items = await choice
        console.log(this.items)
        await this.sync()

      },

      watch : {
        items : {
          handler : function (newText,oldText) {
            console.log("IN watch ",newText,oldText)
          },
          deep : true
       }
    },
      methods : {
        sync : function () {
          this.selectedValue = []
          this.items.forEach((i) => {
            this.value.forEach((j) => {
              if (i.id == j.id){
                this.selectedValue.push(j.choice)
                this.updateSelectedValueOutput
              }
            })
          })
        },
        updateText : async function (id) {
          await this.updateSelectedValueOutput()
          for(i=0;i<this.selectedValueOutput.length;i++){
            if(this.selectedValueOutput[i].id == id){
              this.selectedValueOutput[i].children = this.textChildren
              this.updateValue()
            }
          }
        },

        updateSelectedValueOutput : function() {
          this.selectedValueOutput = []
          // console.log("JJJ",this.selectedValue)
          this.items.forEach((i) => {
            this.selectedValue.forEach((j) => {
              if (i.choice == j){
                this.selectedValueOutput.push(i)
                this.updateValue()
              }
            })
          })
          // console.log(this.selectedValueOutput)
        },
        updateValue : function () {
          // console.log("I ",this.selectedValueOutput)
          this.$emit('change', this.selectedValueOutput)
        }
      }
    }
</script>

<style scoped>

</style>
