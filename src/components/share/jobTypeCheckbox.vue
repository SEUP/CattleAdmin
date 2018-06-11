<template>
  <v-layout column pa-0>
    <v-flex>
      <v-checkbox :label="items[0].choice"  v-model="selectedValue" :value="items[0].choice" @change ="updateSelectedValueOutput" hide-details></v-checkbox>
      <v-checkbox :label="items[1].choice"  v-model="selectedValue" :value="items[1].choice" @change ="updateSelectedValueOutput" hide-details></v-checkbox>
      <v-checkbox :label="items[2].choice"  v-model="selectedValue" :value="items[2].choice" @change ="updateSelectedValueOutput" hide-details></v-checkbox>
      <v-checkbox :label="items[3].choice"  v-model="selectedValue" :value="items[3].choice" @change ="updateSelectedValueOutput" hide-details></v-checkbox>
      <v-checkbox :label="items[4].choice"  v-model="selectedValue" :value="items[4].choice" @change ="updateSelectedValueOutput" hide-details></v-checkbox>
      <v-checkbox :label="items[5].choice"  v-model="selectedValue" :value="items[5].choice" @change ="updateSelectedValueOutput" hide-details></v-checkbox>

      <v-checkbox :label="items[6].choice"  v-model="selectedValue" :value="items[6].choice" @change ="updateSelectedValueOutput" hide-details></v-checkbox>
        <v-text-field v-model="text1" hide-details class="pa-0 px-3" placeholder="โปรดระบุ" ></v-text-field>
      <v-checkbox :label="items[7].choice"  v-model="selectedValue" :value="items[7].choice" @change ="updateSelectedValueOutput" hide-details></v-checkbox>
        <v-text-field v-model="text1" hide-details class="pa-0 px-3" placeholder="โปรดระบุ" ></v-text-field>
      <v-checkbox :label="items[8].choice"  v-model="selectedValue" :value="items[8].choice" @change ="updateSelectedValueOutput" hide-details></v-checkbox>
        <v-text-field v-model="text1" hide-details class="pa-0 px-3" placeholder="โปรดระบุ" ></v-text-field>
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
        await this.sync()
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
