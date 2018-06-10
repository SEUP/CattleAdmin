<template>
  <v-card>
    <v-container>
      <v-form>
        <v-flex xs12>
          <p class="title">7.7 ท่านเคยได้รับการสนับสนุนให้แม่พันธุ์โคเนื้อมาเลี้ยงเพื่อผลิตลูกหรือไม่</p>
          <v-divider class="my-3"></v-divider>
          <choice-select type="female_breeder_support" ></choice-select>
        </v-flex>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
  import choiceSelect from "@/components/share/choiceSelect";
  import ChoiceSelect from "../share/choiceSelect";
    export default {
      components: {choiceSelect},
      name: "part7",

      data(){
          return{
            selected:[]
          }
      }
    }
</script>

<style scoped>

</style>
