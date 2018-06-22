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
      selectedMain : ChoiceMain,
      items:[],
    }),
    computed: {
      ...mapState({
        form : state => state.farmOwners.farmOwner
      })
    },
    async created() {
      this.items_checkBox = await [].concat(await this.$store.dispatch("choices/getChoicesByType", "vaccine_types"));
      this.items = await [ChoiceMain].concat(await this.$store.dispatch("choices/getChoicesByType", this.type));
      await  this.sync()

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
            console.log(i.id == this.form[this.type].id);
            this.selectedMain = i ;
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
