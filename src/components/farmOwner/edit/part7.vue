<template>

    <v-container>
      <v-form>
        <v-flex xs12>
          <p class="title">7.1 หน่วยงานที่ให้บริการส่งเสริมการเลี้ยงโคเนื้อ(ตอบได้มากกว่า 1 ข้อ)</p>
          <v-divider class="my-3"></v-divider>
          <v-flex xs10 offset-xs1>
            <v-checkbox v-model="selected" label="กรมส่งเสริมการเกษตร" color="success" value="กรมส่งเสริมการเกษตร"  ></v-checkbox>
            <v-checkbox v-model="selected" label="กรมปศุสัตว์"  color="success" value="กรมปศุสัตว์"></v-checkbox>
            <v-checkbox v-model="selected" label="องค์กรปกครองส่วนท้องถิ่น(อบต. อบจ. เทศบาล)" color="success" value="องค์กรปกครองส่วนท้องถิ่น(อบต. อบจ. เทศบาล)"></v-checkbox>
            <v-checkbox v-model="selected" label="เอกชน" color="success" value="เอกชน"></v-checkbox>
            <v-checkbox v-model="selected" label="สำนักงานการปฏิรูปที่ดินเพื่อการเกษตร(ส.ป.ก.)" color="success" value="สำนักงานการปฏิรูปที่ดินเพื่อการเกษตร(ส.ป.ก.)"></v-checkbox>
            <v-checkbox v-model="selected" label="อื่นๆ(กลุ่มผู้เลี้ยงโคในหมู่บ้าน)" color="success" value="อื่นๆ(กลุ่มผู้เลี้ยงโคในหมู่บ้าน)"></v-checkbox>
            <v-checkbox v-model="selected" label="ไม่เคยได้รับบริการจากหน่วยงานใดๆ" color="success" value="ไม่เคยได้รับบริการจากหน่วยงานใดๆ"></v-checkbox>
          </v-flex>
        </v-flex>
        <v-flex xs12>
          <p class="title">7.2 ท่านเคยได้รับการเยี่ยมเยือนฟาร์มจากหน่วยงานในข้อ 7.1 หรือไม่</p>
          <v-divider class="my-2"></v-divider>
          <choice-select :value="form.female_breeder_support" type="female_breeder_support" @blue="updateForm" ></choice-select>
        </v-flex>
        <v-flex xs12 class="mt-3">
          <p class="title">7.3 ท่านเคยได้รับการสนับสนุนปัจจัยการผลิตหรือไม่</p>
          <v-divider class="my-2"></v-divider>
          <choice-select :value="form.female_breeder_support" type="female_breeder_support"  @blue="updateForm" ></choice-select>
        </v-flex>
        <v-flex xs12 class="mt-3">
          <p class="title">7.4 การใช้บริการด้านสุขภาพโคจากหน่วยงานของกรมปศุสัตว์</p>
          <v-divider class="my-2"></v-divider>
          <choice-select :value="form.female_breeder_support" type="female_breeder_support" @blue="updateForm"  ></choice-select>
        </v-flex>
        <v-flex xs12 class="mt-3">
          <p class="title">7.5 ท่านเคยเข้ารับการฝึกอบรมเกี่ยวกับการเลี้ยงโคเนื้อหรือไม่</p>
          <v-divider class="my-2"></v-divider>
          <choice-select :value="form.female_breeder_support" type="female_breeder_support"  @blue="updateForm" ></choice-select>
        </v-flex>
        <v-flex xs12 class="mt-3">
          <p class="title">7.6 ท่านเคยไปดูงานเกี่ยวกับการเลี้ยงโคเนื้อหรือไม่</p>
          <v-divider class="my-2"></v-divider>
          <choice-select :value="form.female_breeder_support" type="female_breeder_support"  @blue="updateForm"  ></choice-select>
        </v-flex>
        <v-flex xs12 class="mt-3">
          <p class="title">7.7 ท่านเคยได้รับการสนับสนุนให้แม่พันธุ์โคเนื้อมาเลี้ยงเพื่อผลิตลูกหรือไม่</p>
          <v-divider class="my-2"></v-divider>
          <choice-select :value="form.female_breeder_support" type="female_breeder_support" @blue="updateForm"  ></choice-select>
        </v-flex>
      </v-form>
    </v-container>

</template>

<script>
  import choiceSelect from "@/components/share/choiceSelect"
  import ChoiceCheckBox from "../../share/choiceCheckBox";
    export default {
      components: {
        choiceSelect,
        ChoiceCheckBox,

      },
      name: "part7",

      data (){
        return{
          selected:[],
          form:[]
        }

      },
      async created (){
        this.from = await this.$store.state.farmOwners.farmOwner;

      },
      updateChoice :async function (value) {
        // console.log("IN FuC",value)
        this.form.income_range = value
        this.updateForm()
      },
      updateJobType :  function (value) {
        this.form.jobtypes = value
        this.updateForm()
      },
      updateForm : async function () {
        await this.$store.dispatch("farmOwners/updateState",this.form)
        let data = await this.$store.state.farmOwners.farmOwner
        // console.log("UPDATED",data)
      }
    }
</script>

<style scoped>

</style>
