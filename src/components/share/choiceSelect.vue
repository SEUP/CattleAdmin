<template>
  <v-layout class="pa-0 py-1" >
    <v-flex xs12 v-if = "!singleLine">
      <v-select hide-details
                :items="items"
                v-model="selectedValue"
                :label="label" item-text="choice"
                @change="updateChoice"

      ></v-select>
      <div v-if="selectedValue.has_text">
        <v-text-field placeholder="โปรดระบุจำนวนเงิน" class="pa-0 py-2"  hide-details
                      v-if="selectedValue.type == 'budget_source'"
                      v-model="selectedValue.pivot.amount"  @blur="updateValue">
        </v-text-field>

        <v-text-field placeholder="โปรดระบุ" class="pa-0 py-2"  hide-details v-else
                      v-model="selectedValue.pivot.remark"  @blur="updateValue">
        </v-text-field>


      </div>
    </v-flex>

    <v-flex xs12 v-if = "singleLine">
      <v-layout row>
        <v-flex xs6>
          <v-select hide-details
                    :items="items"
                    v-model="selectedValue"
                    :label="label" item-text="choice"
                    @change="updateChoice"

          ></v-select>
        </v-flex>
        <v-flex xs6 mx-3 v-if="selectedValue.has_text">

          <v-text-field placeholder="โปรดระบุจำนวนเงิน" class=""  hide-details
                        v-if="selectedValue.type == 'budget_source'"
                        v-model="selectedValue.pivot.amount"  @blur="updateValue">
          </v-text-field>

          <v-text-field placeholder="โปรดระบุ" class=""  hide-details v-else
                        v-model="selectedValue.pivot.remark"  @blur="updateValue">
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
    pivot:{remark: null,amount:null}
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
    methods: {
      sync: function () {
        this.items.forEach((i) => {
          i = Object.assign(i,{pivot:{remark: null , amount : null}});
          if (i.id == this.value.id) {
            this.selectedValue = i;
            if (this.value.pivot.remark) {
              this.selectedValue.pivot.remark = this.value.pivot.remark
            }else if(this.value.pivot.amount) {
              this.selectedValue.pivot.amount = this.value.pivot.amount
            }
          }
        })
      },
      updateChoice : async function (choice)  {
        this.selectedValue = choice
        console.log("update",this.selectedValue)
        await this.updateValue()
      },
      updateValue: async function () {
        await this.$emit('change', this.selectedValue)

      }
    }
  }
</script>
