<template>
  <v-card>
    <v-layout row>
      <v-flex xs12>
        <p class="title">7.1 หน่วยงานที่ให้บริการส่งเสริมการเลี้ยงโคเนื้อ(ตอบได้มากกว่า 1 ข้อ)</p>
        <v-divider class="my-0"></v-divider>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <p class="title">7.2 ท่านเคยได้รับการเยี่ยมเยือนฟาร์มจากหน่วยงานในข้อ 7.1 หรือไม่</p>
        <v-divider class="my-0"></v-divider>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <p class="title">7.3 ท่านเคยได้รับการสนับสนุนปัจจัยการผลิตหรือไม่</p>
        <v-divider class="my-0"></v-divider>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <p class="title">7.4 การใช้บริการด้านสุขภาพโคจากหน่วยงานของกรมปศุสัตว์</p>
        <v-divider class="my-0"></v-divider>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <p class="title">7.5 ท่านเคยเข้ารับการฝึกอบรมเกี่ยวกับการเลี้ยงโคเนื้อหรือไม่</p>
        <v-divider class="my-0"></v-divider>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <p class="title">7.6 ท่านเคยไปดูงานเกี่ยวกับการเลี้ยงโคเนื้อหรือไม่</p>
        <v-divider class="my-0"></v-divider>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <p class="title">7.7 ท่านเคยได้รับการสนับสนุนให้แม่พันธุ์โคเนื้อมาเลี้ยงเพื่อผลิตลูกหรือไม่</p>
        <v-divider class="my-0"></v-divider>
        <!--<choice-select :value="form.sex" type="sex" label="sex"></choice-select>-->
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
  import choiceSelect from "@/components/share/choiceSelect";
    export default {
        name: "part7",
      component :{
          choiceSelect
      },
      data(){
          return{
            selected:[]
          }
      }
    }
</script>

<style scoped>

</style>
