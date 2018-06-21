<template>
  <v-layout class="column">
    <v-flex >
      <v-card>
        <v-card-title class="title">ส่วนที่ 1 ข้อมูลพื้นฐานของเกษตรกร</v-card-title>
        <v-divider ></v-divider>
        <v-card-text class="pl-3">
          <ul class="pl-3">
          <li> <v-btn block :to="{name:'chart-pie',params : {label:'เพศ',type:'sex'}}">เพศ</v-btn></li>
          <li>  <v-btn  block :to="{name:'chart-range-farmowner',params : {label:'อายุ',type:'age',min: 15,max: 70,step: 8,withNull : true,nullText : '0-15'}}">อายุ</v-btn></li>
          <li> <v-btn block  :to="{name:'chart-normal',params : {label:'การศึกษา',type:'education'}}">การศึกษา</v-btn></li>
          <li>ที่ตั้งฟาร์มของเกษตรกร</li>
          <li> <v-btn block :to="{name:'chart-pie',params : {label:'อาชีพการเลี้ยงโคเนื้อ(อาชีพหลัก-เสริม)',type:'cattle_job'}}">อาชีพการเลี้ยงโคเนื้อ(อาชีพหลัก-เสริม)</v-btn></li>
          <li> <v-btn block :to="{name:'chart-normal',params : {label:'เฉลี่ยรายได้รวมของครอบครัว',type:'income_range'}}">เฉลี่ยรายได้รวมของครอบครัว</v-btn></li>
          <li> <v-btn block  :to="{name:'chart-normal',params : {label:'รายได้จากการประกอบอาชีพของเกษตรกร',type:'jobtypes'}}">รายได้จากการประกอบอาชีพของเกษตรกร</v-btn></li>
          <li> <v-btn block :to="{name:'chart-range-farmowner',
          params : {label:'รายได้เฉลี่ยต่อปีของการขายโคเนื้อ',type:'avg_cattle_income',min: 50000,max: 200000,step: 3,withNull : true,nullText : 'ยังไม่ได้ขาย'}}"
          >รายได้เฉลี่ยต่อปีของการขายโคเนื้อ
          </v-btn></li>
          </ul>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex >
      <v-card>
        <v-card-title class="title">ส่วนที่ 2 ข้อมูลการเลี้ยงและสถานภาพฟาร์ม</v-card-title>
        <v-divider ></v-divider>
        <v-card-text class="pl-3">
          <ul class="pl-3">
          <li>  <v-btn block :to="{name:'chart-normal',params : {label:'วัตถุประสงค์ของการเลี้ยงโคเนื้อ',type:'farm_purposes'}}">วัตถุประสงค์ของการเลี้ยงโคเนื้อ</v-btn></li>
          <li><v-btn block :to="{name:'chart-pie',params : {label:'การทำประวัติโคเนื้อ',type:'farm_record'}}">การทำประวัติโคเนื้อ</v-btn></li>
          <li><v-btn block :to="{name:'chart-cattle',params : {label:'จำนวนโคเนื้อที่เลี้ยง'}}">จำนวนโคที่เลี้ยง</v-btn></li>
          <li><v-btn block :to="{name:'chart-normal',params : {label:'ประสบการณ์การเลี้ยงโคเนื้อ',type:'farm_exp'}}">ประสบการณ์การเลี้ยงโคเนื้อ</v-btn></li>
          <li><v-btn block :to="{name:'chart-normal',params : {label:'เป้าหมายการเลี้ยงในอนาคต',type:'farm_future'}}">เป้าหมายการเลี้ยงในอนาคต</v-btn></li>
          <li>การขึ้นทะเบียนฟาร์มกับภาครัฐ</li>
          <li> <v-btn block :to="{name:'chart-multiChoice',params : {label:'การเกิดโรคในฟาร์ม',type:'abortion,tuberculosis,foot_mouth_disease,disease_other'}}">การเกิดโรคในฟาร์ม</v-btn></li>
          <li> <v-btn  block :to="{name:'chart-range-farmowner',params : {label:'ค่าใช้จ่ายในการเลี้ยงโคเนื้อ (บาท ต่อ เดือน)',type:'total_expense_amount',min: 1000,max: 10000,step: 3,withNull : true,nullText : 'ยังไม่ได้ขาย'}}">ค่าใช้จ่ายในการเลี้ยงโคเนื้อ</v-btn></li>
          <li><v-btn block :to="{name:'chart-normal',params : {label:'ประวัติการตรวจโรคสัตว์',type:'farm_disease_check'}}">ประวัติการตรวจโรคสัตว์</v-btn></li>
          <li><v-btn block :to="{name:'chart-normal',params : {label:'แหล่งน้ำที่ใช้',type:'water_source_types'}}">แหล่งน้ำที่ใช้</v-btn></li>
          </ul>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex >
      <v-card>
        <v-card-title class="title">ส่วนที่ 3 ข้อมูลแรงงาน พื้นที่ในการเลี้ยง และการจัดการอาหาร</v-card-title>
        <v-divider ></v-divider>
        <v-card-text class="pl-3">
          <ul class="pl-3">
          <li>วัตถุประสงค์ของการเลี้ยงโคเนื้อ</li>
          <li>การทำประวัติโคเนื้อ</li>
          <li>จำนวนโคเนื้อที่เลี้ยง</li>
          <li>ประสบการณ์การเลี้ยงโคเนื้อ</li>
          <li>เป้าหมายการเลี้ยงในอนาคต)</li>
          <li>การขึ้นทะเบียนฟาร์มกับภาครัฐ</li>
          <li>การเกิดโรคในฟาร์ม</li>
          <li>ค่าใช้จ่ายในการเลี้ยงโคเนื้อ</li>
          <li>ประวัติการตรวจโรคสัตว์</li>
          <li>แหล่งน้ำที่ใช้อ</li>
          </ul>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex >
      <v-card>
        <v-card-title class="title">ส่วนที่ 4 การผสมพันธ์ุ ประสิทธิภาพการผลิต และการรักษาโรค</v-card-title>
        <v-divider ></v-divider>
        <v-card-text class="pl-3">
          <ul class="pl-3">
          <li><v-btn block :to="{name:'chart-pie',params : {label:'การผสมพันธุ์โคเนื้อในฟาร์ม',type:'farm_breeding_type'}}">การผสมพันธุ์โคเนื้อในฟาร์ม</v-btn></li>
          <li><v-btn block :to="{name:'chart-normal',params : {label:'แหล่งน้ำเชื้อการผสมเทียม',type:'inseminate_sources'}}">แหล่งน้ำเชื้อการผสมเทียม</v-btn></li>
          <li><v-btn block :to="{name:'chart-normal',params : {label:'ผู้ให้บริการผสมเทียม',type:'breeders'}}">ผู้ให้บริการผสมเทียม</v-btn></li>
          <li><v-btn block :to="{name:'chart-normal',params : {label:'การตายของโคในรอบปี',type:'cattle_death'}}">การตายของโคในรอบปี</v-btn></li>
          <li><v-btn block :to="{name:'chart-normal',params : {label:'บุคคลที่ทำการรักษาให้เมื่อโคเจ็บป่วย',type:'disease_cured_by'}}">บุคคลที่ทำการรักษาให้เมื่อโคเจ็บป่วย</v-btn></li>
          <li><v-btn  block :to="{name:'chart-range-farmowner',params : {label:'อัตราส่วนพ่อพันธุ์คุมฝูง',type:'breeding_rate',min: 1,max: 20,step: 3}}">อัตราส่วนพ่อพันธุ์คุมฝูง</v-btn></li>
          <li><v-btn  block :to="{name:'chart-doublePivot',params : {label:'การถ่ายพยาธิ',type:'dewormed_amount'}}">การถ่ายพยาธิ</v-btn></li>
          <li><v-btn block  :to="{name:'chart-double',params : {label:'วัคซีนป้องกันโรค',type:'vaccine_ever'}}">วัคซีนป้องกันโรค</v-btn></li>
          <li><v-btn block :to="{name:'chart-normal',params : {label:'การจัดการมูลโคในฟาร์ม',type:'cattle_dung_uses'}}">การจัดการมูลโคในฟาร์ม</v-btn></li>
          </ul>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex>
      <v-card>
        <v-card-title class="title">ส่วนที่ 5 ข้อมูลแหล่งเงินทุนที่ใช้ในการเลี้ยงโคเนื้อ</v-card-title>
        <v-divider ></v-divider>
        <v-card-text >
          <ul class="pl-3">
            <li><v-btn block :to="{name:'chart-budget',params : {label:'เงินทุนที่ท่านใช้เลี้ยงโคเนื้อ',type:'budget'}}">เงินทุนที่ท่านใช้เลี้ยงโคเนื้อ</v-btn></li>
          </ul>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex >
      <v-card>
        <v-card-title class="title">ส่วนที่ 6 ข้อมูลการตลาด การรวมกลุ่มของสมาชิก(วิสาหกิจชุมชนและสหกรณ์)</v-card-title>
        <v-divider ></v-divider>
        <v-card-text >
          <ul class="pl-3">
            <li>การจำหน่ายโคเนื้อให้กับใคร</li>
            <li>อายุของโคเนื้อที่จำหน่าย</li>
            <li>น้ำหนักของโคเนื้อที่ท่านจำหน่าย</li>
            <li>ลักษณะการจำหน่ายโคเนื้อ</li>
            <li>การรวมกลุ่มวิสาหกิจชุมชนและสหกรณ์โคเนื้อ</li>
            <li>ราคาของโคเนื้อที่ขายและระยะเวลาในการเลี้ยง</li>
            <li>ความประสงค์ในการรวมกลุ่มวิสาหกิจชุมชนและสหกรณ์โคเนื้อ</li>
            <li>ความต้องการความช่วยเหลือจากสหกรณ์</li>
            <li>ความต้องการซื้ออาหารข้นในนามสหกรณ์</li>
            <li>ระดับความพอใจต่อราคาที่ขาย</li>
          </ul>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex >
      <v-card>
        <v-card-title class="title">ส่วนที่ 7 การได้รับบริการ การส่งเสริมและสนับสนุนจากหน่วยงานต่างๆ</v-card-title>
        <v-divider ></v-divider>
        <v-card-text >
          <ul class="pl-3">
            <li><v-btn block :to="{name:'chart-normal',params : {label:'หน่วยงานที่ให้บริการส่งเสริมการเลี้ยงโคเนื้อ',type:'support_sources'}}">หน่วยงานที่ให้บริการส่งเสริมการเลี้ยงโคเนื้อ</v-btn></li>
            <li><v-btn block :to="{name:'chart-pie',params : {label:'การเยี่ยมเยือนฟาร์มจากหน่วยงาน',type:'support_visit'}}">การเยี่ยมเยือนฟาร์มจากหน่วยงาน</v-btn></li>
            <li><v-btn block :to="{name:'chart-pie',params : {label:'การได้รับการสนับสนุนปัจจัยการผลิต',type:'production_support'}}">การได้รับการสนับสนุนปัจจัยการผลิต</v-btn></li>
            <li><v-btn block :to="{name:'chart-pie',params : {label:'การใช้บริการด้านสุขภาพโคจากหน่วยงานของกรมปศุสัตว์',type:'cattle_heath_support'}}">การใช้บริการด้านสุขภาพโคจากหน่วยงานของกรมปศุสัตว์</v-btn></li>
            <li><v-btn block :to="{name:'chart-pie',params : {label:'การเข้ารับการฝึกอบรมเกี่ยวกับการเลี้ยงโคเนื้อ',type:'training_support'}}">การเข้ารับการฝึกอบรมเกี่ยวกับการเลี้ยงโคเนื้อ</v-btn></li>
            <li><v-btn block :to="{name:'chart-pie',params : {label:'การไปดูงานเกี่ยวกับการเลี้ยงโคเนื้อ',type:'observe_support'}}">การไปดูงานเกี่ยวกับการเลี้ยงโคเนื้อ</v-btn></li>
            <li><v-btn block :to="{name:'chart-pie',params : {label:'การสนับสนุนให้แม่พันธุ์โคเนื้อมาเลี้ยงเพื่อผลิตลูก',type:'female_breeder_support'}}">การสนับสนุนให้แม่พันธุ์โคเนื้อมาเลี้ยงเพื่อผลิตลูก</v-btn></li>
          </ul>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex >
      <v-card>
        <v-card-title class="title">ส่วนที่ 8 ปัญหา อุปสรรค และข้อเสนอแนะ</v-card-title>
        <v-divider ></v-divider>
        <v-card-text >
          <ul class="pl-3">
            <li>ตารางปัญหา อุปสรรคและข้อเสนอแนะ</li>
          </ul>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
    export default {
        name: "charts-menu"
    }
</script>

<style scoped>

</style>
