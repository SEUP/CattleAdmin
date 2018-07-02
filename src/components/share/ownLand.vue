<template>
  <v-layout v-if="items && subItems">
    <v-flex xs12 >
      <v-layout row wrap>
        <v-flex xs12 class="pa-0 ma-0">
          <v-select hide-details
                    :items="items"
                    v-model="selectedValue"
                    item-text="choice"
                    return-object
          ></v-select>
        </v-flex>
        <v-flex xs12>
          <v-layout row>
            <v-flex xs6 class="ma-0 pa-0 mx-2">
              <v-text-field readonly v-model="form.total_own_lands"></v-text-field>
            </v-flex>
            <v-flex xs6 class="ma-0 pa-0 mx-2">
              <v-text-field readonly v-model="form.total_own_lands_sub"></v-text-field>
            </v-flex>
          </v-layout>
          <div v-for="subItem in subItems" :key="subItem.id" class="py-1">
            <v-checkbox
              :label="subItem.choice"
              :item = "subItem"
              hide-details
              class="pa-0 ma-0"
            >
            </v-checkbox>
            <v-layout row class="ml-3">
              <v-flex xs6>
                <v-text-field suffix="ไร่" class="pa-0 ma-0" hide-details placeholder="จำนวน (ไร่)">
                </v-text-field>
              </v-flex>
              <v-flex xs6>
            <v-text-field suffix="งาน" class="pa-0 ma-0" hide-details placeholder="จำนวน (งาน)">
            </v-text-field>
              </v-flex>
            </v-layout>
          </div>
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
    children : []
  };
    export default {
      name: "ownLand",
      data : ()=>({
        items : null,
        subItems: null,
        form : null,
        selectedValue : defaultChoice
      }),
      async created () {
        this.form = await this.$store.state.farmOwners.farmOwner
        this.items = await [defaultChoice].concat(await this.$store.dispatch("choices/getChoicesByType", 'own_land'));
        this.subItems = await this.$store.dispatch("choices/getChoicesByType", 'sub_own_lands');
        console.log(this.items,this.subItems,1)
      }
    }
</script>

<style scoped>

</style>
