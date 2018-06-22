<template>
  <div v-if="form">
    <v-layout class="column">
      <v-flex class="lg12">
        <v-select hide-details
                  :items="items"
                  v-model="selectedMain"
                  :label="label" item-text="choice"
                  @change="updateValue()"
                  color="success">
        </v-select>
      </v-flex>
      <v-flex v-if="selectedMain.id == 202">
        <div v-for="item in items_checkBox" :key="items_checkBox.id">
          <v-layout row >
            <v-flex class="xs6 mt-0">
              <v-checkbox :label="item.choice" hide-details
                          :value="item"
                          v-model="select_Box"
                          color="success"
                          @change="updateValue">
              </v-checkbox>
              <v-text-field hide-details class="pa-0 px-3"
                            placeholder="value of years" :value="item.pivot.remark"
                            v-model="item.pivot.amount"
                            type="NUMBER"
                            @change="updateValue">

              </v-text-field>
            </v-flex>
            <v-flex class="xs6 mt-3">
              <v-select hide-details
                        :items="items_Sub"
                        item-value="choice"
                        v-model="item.pivot.remark"
                        :label="label_Sub" item-text="choice"
                        @change="updateValue()"
                        color="success">>
              </v-select>
            </v-flex>
          </v-layout>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>

  import {mapState} from 'vuex';

  let ChoiceMain = {
    id : 0,
    choice : "กรุณาเลือก",

  };
  let ChoiceSub = {
    id : 0,
    choice : "กรุณาเลือก",

  };
  export default {
    name: "vaccineEver",
    props: {
      type: {
        type: String,
      },
      label: {
        type: String,
        default: "ตัวเลือก"
      },
      label_Sub: {
        type: String,
        default: "ตัวเลือก"
      },
      value: {
        type: Object,
        default : () =>  (ChoiceMain)
      },
      valueBox: {
        type: [Array],
        default: () => []
      },
    },
    data: () => ({
      selectedMain : ChoiceMain,
      select_Sub : ChoiceSub,
      select_Box:[],
      items:[],
      items_Sub :[],
      items_checkBox : []
    }),
    computed: {
      ...mapState({
        form : state => state.farmOwners.farmOwner
      })
    },
    async created() {
      this.items_checkBox = await [].concat(await this.$store.dispatch("choices/getChoicesByType", "vaccine_types"));
      this.items_Sub = await [ChoiceSub].concat(await this.$store.dispatch("choices/getChoicesByType", "vaccined_by"));
      this.items = await [ChoiceMain].concat(await this.$store.dispatch("choices/getChoicesByType", this.type));
      await  this.sync()
      await this.syncCheckbox()


    },
    mounted (){
      console.log(this.form);
    },
    methods :{
      updateValue: function () {
        this.$store.dispatch("farmOwners/updateState",this.form)
      },
      sync : function () {
        this.items.forEach((i) =>{
          if (i.id == this.form[this.type].id){
            this.selectedMain = i ;
          }
        })
      },
      syncCheckbox : function () {
        let selectedchoice = this.select_Box
        let choices = this.items_checkBox
        let selChoice = this.form.vaccine_types
        selChoice.forEach((a) =>{
          if(a.id == choices.id){
            console.log("ssss")
          }
        })
        choices.forEach((i)=>{
          console.log(i.id)
          if(i.id == selChoice.id){
            console.log(i.id,selChoice.id)

          }
        })

      }
    }
  }
</script>

<style scoped>

</style>
