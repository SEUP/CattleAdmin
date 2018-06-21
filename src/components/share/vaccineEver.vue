<template>
  <div v-if="form">
    <v-layout class="column">
      <v-flex class="lg12">
        <v-select hide-details
                  :items="items"
                  v-model="ChoiceMain"
                  :label="label" item-text="choice"
                  @change="updateValue(type,ChoiceMain)"
                  color="success">
        </v-select>
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
      value: {
        type: Object,
        default : () =>  (ChoiceMain)
      }
    },
    data: () => ({
      ChoiceMain : ChoiceMain,
      Main :[ChoiceMain],
      selMain : ChoiceMain,
      items:[],
      items_checkBox:[]
    }),
    computed: {
      ...mapState({
        form : state => state.farmOwners.farmOwner
      })
    },
    async created() {
      this.items_checkBox = await [].concat(await this.$store.dispatch("choices/getChoicesByType", "vaccine_types"));
      this.items = await [ChoiceMain].concat(await this.$store.dispatch("choices/getChoicesByType", this.type));
    },
    mounted (){
      console.log(this.form);
    },
    methods :{
      updateValue: function (type, value) {

        this.$store.dispatch("farmOwners/updateChoices", {type: type, value: value})
      }
    }
  }
</script>

<style scoped>

</style>
