<template>
  <v-card>
    <v-container>
      <v-form>
        <v-flex xs12>
          <p class="title">7.1 หน่วยงานที่ให้บริการส่งเสริมการเลี้ยงโคเนื้อ(ตอบได้มากกว่า 1 ข้อ)</p>
          <v-divider class="my-3"></v-divider>
          <v-flex xs10 offset-xs1>
            <v-checkbox v-model="selected" label="กรมส่งเสริมการเกษตร" color="success" value="กรมส่งเสริมการเกษตร"></v-checkbox>
            <v-checkbox v-model="selected" label="กรมปศุสัตว์"  color="success" value="กรมปศุสัตว์"></v-checkbox>
            <v-checkbox v-model="selected" label="องค์กรปกครองส่วนท้องถิ่น(อบต. อบจ. เทศบาล)" color="success" value="องค์กรปกครองส่วนท้องถิ่น(อบต. อบจ. เทศบาล)"></v-checkbox>
            <v-checkbox v-model="selected" label="อกชน" color="success" value="เอกชน"></v-checkbox>
            <v-checkbox v-model="selected" label="สำนักงานการปฏิรูปที่ดินเพื่อการเกษตร(ส.ป.ก.)" color="success" value="สำนักงานการปฏิรูปที่ดินเพื่อการเกษตร(ส.ป.ก.)"></v-checkbox>
            <v-checkbox v-model="selected" label="อื่นๆ(กลุ่มผู้เลี้ยงโคในหมู่บ้าน)" color="success" value="อื่นๆ(กลุ่มผู้เลี้ยงโคในหมู่บ้าน)"></v-checkbox>
            <v-checkbox v-model="selected" label="ไม่เคยได้รับบริการจากหน่วยงานใดๆ" color="success" value="ไม่เคยได้รับบริการจากหน่วยงานใดๆ"></v-checkbox>
          </v-flex>
        </v-flex>
        <v-flex xs12>
          <p class="title">7.2 ท่านเคยได้รับการเยี่ยมเยือนฟาร์มจากหน่วยงานในข้อ 7.1 หรือไม่</p>
          <v-divider class="my-3"></v-divider>
          <choice-select type="female_breeder_support" ></choice-select>
        </v-flex>
        <v-flex xs12>
          <p class="title">7.3 ท่านเคยได้รับการสนับสนุนปัจจัยการผลิตหรือไม่</p>
          <v-divider class="my-3"></v-divider>
          <choice-select type="female_breeder_support" ></choice-select>
        </v-flex>
        <v-flex xs12>
          <p class="title">7.4 การใช้บริการด้านสุขภาพโคจากหน่วยงานของกรมปศุสัตว์</p>
          <v-divider class="my-3"></v-divider>
          <choice-select type="female_breeder_support" ></choice-select>
        </v-flex>
        <v-flex xs12>
          <p class="title">7.5 ท่านเคยเข้ารับการฝึกอบรมเกี่ยวกับการเลี้ยงโคเนื้อหรือไม่</p>
          <v-divider class="my-3"></v-divider>
          <choice-select type="female_breeder_support" ></choice-select>
        </v-flex>
        <v-flex xs12>
          <p class="title">7.6 ท่านเคยไปดูงานเกี่ยวกับการเลี้ยงโคเนื้อหรือไม่</p>
          <v-divider class="my-3"></v-divider>
          <choice-select type="female_breeder_support" ></choice-select>
        </v-flex>
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
