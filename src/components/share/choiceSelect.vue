<template>
  <v-layout class="pa-0 py-1" >
    <v-flex xs12 v-if = "!singleLine">
      <v-select hide-details
        :items="items"
        v-model="selectedValue"
        :label="label" item-text="choice"
      ></v-select>
      <v-text-field placeholder="โปรดระบุ" class="pa-0 py-2" v-if="HasText" hide-details
                    v-model="selectedValue.pivot.remark"  @blur = "updateValue">

      </v-text-field>
    </v-flex>

    <v-flex xs12 v-if = "singleLine">
      <v-layout row>
        <v-flex xs6>
          <v-select hide-details
                    :items="items"
                    v-model="selectedValue"
                    :label="label" item-text="choice"
          ></v-select>
        </v-flex>
        <v-flex xs6 mx-3>
          <v-text-field placeholder="โปรดระบุ" v-if="HasText" hide-details
                        v-model="selectedValue.pivot.remark" @blur = "updateValue">

          </v-text-field>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
  let defaultChoice = {
    id : 0,
    has_text :0,
    choice : "กรุณาเลือก",
    pivot:{remark: null}
  };
  export default {
    name: "choiceSelect",
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
        default: defaultChoice
      }
    },
    data() {
      return {
        HasText : false,
        selectedValue: defaultChoice,
        items: [],
      }
    },
    async created() {
      this.items = await [defaultChoice].concat(await this.$store.dispatch("choices/getChoicesByType", this.type));
      await this.sync()
    },
    watch :{
      selectedValue : {
        deep : true,
        handler :  function (newVal,oldVal) {
          this.updateValue()
        }
      }

    },
    methods: {
      sync: function () {
        this.items.forEach((i) => {
          i = Object.assign(i,{pivot:{remark: null}})
          if (i.id == this.value.id) {
            this.selectedValue = i
            if (this.value.pivot.remark) {
              this.selectedValue.pivot.remark = this.value.pivot.remark
            }
              // this.updateValue();
          }
        })
        // console.log("IN CHO",this.selectedValue)
      },
      checkHasText : function () {
        // console.log(this.selectedValue)
        if(this.selectedValue.has_text){
          this.HasText = true
        }else{
          this.HasText = false
        }

      },
      updateValue: async function () {
        // console.log("UPDATE select",this.selectedValue)
        await this.checkHasText()
        await this.$emit('change', this.selectedValue)

      }
    }
  }
</script>
