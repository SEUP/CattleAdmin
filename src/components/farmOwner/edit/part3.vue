<template>
  <div v-if="form">
    <v-layout column wrap>
      <v-flex xs12>

        <v-card-text class="pa-2 title">3.1 จำนวนแรงงานที่ใช้เลี้ยงโค (คน)</v-card-text>
        <v-divider></v-divider>
        <div class="ma-2 mx-4">
          <v-text-field label="3.1.1 จำนวนแรงงานภายในครอบครัว" placeholder="จำนวนแรงงานภายในครอบครัว" v-model="form.total_workers_amount" @blur="updateForm"></v-text-field>
          <v-text-field label="3.1.2 จำนวนแรงงานภายนอก" placeholder="จำนวนแรงงานภายนอก" v-model="form.external_workers_amount" @blur="updateForm" ></v-text-field>

        </div>

        <v-card-text class="pa-2 title">3.2 แหล่งน้ำที่ใช้ในการเลี้ยง</v-card-text>
        <v-divider></v-divider>
        <div class="ma-2 mx-4">
          <choice-check-box type="water_source_types"
                            :value="form.water_source_types"
                            @change="form.water_source_types = $event"
                            @blur="updateForm"
          >

          </choice-check-box>
        </div>

        <v-card-text class="pa-2 title">3.3 ลักษณะการเลี้ยงโคเนื้อของท่าน</v-card-text>
        <v-divider></v-divider>
        <div class="ma-2 mx-4">
          <choice-check-box type="take_care_types"
                            :value="form.take_care_types"
                            @change="form.take_care_types = $event"
                            @blur="updateForm"
          >

          </choice-check-box>
        </div>

        <v-card-text class="pa-2 title">3.4 พื้นที่ถือครองทางการเกษตร</v-card-text>
        <v-divider></v-divider>
        <div class="ma-2 mx-4">
          <choice-select label=" " type="own_land" :value="form.own_land"
                         @change="form.own_land = $event">

          </choice-select>
        </div>

        <v-card-text class="pa-2 title">3.5 การเช่าที่ดินเพื่อใช้ในการเลี้ยง</v-card-text>
        <v-divider></v-divider>
        <div class="ma-2 mx-4">
          <choice-select label=" " type="rent_land" :value="form.rent_land"
                         @change="form.rent_land = $event">

          </choice-select>
        </div>

        <v-card-text class="pa-2 title">3.6 พื้นที่ที่ใช้ในการเลี้ยงโคเนื้อ</v-card-text>
        <v-divider></v-divider>
        <div class="ma-2 mx-4">
          <choice-select label=" " type="use_land" :value="form.use_land"
                         @change="form.use_land = $event">

          </choice-select>
        </div>

        <v-card-text class="pa-2 title">3.7 อาหารที่ท่านใช้เลี้ยงโคเนื้อเป็นอาหารประเภทใด (ตอบได้มากกว่า 1 ข้อ)
        </v-card-text>
        <v-divider></v-divider>
        <div class="ma-2 mx-4">
          <choice-check-box type="feed_types"
                            :value="form.feed_types"
                            @change="form.feed_types = $event"
                            @blur="updateForm"
          >

          </choice-check-box>
        </div>

        <v-card-text class="pa-2 title">3.8 แหล่งที่มาของอาหารข้นหรืออาหารผาชสมครบส่วน</v-card-text>
        <v-divider></v-divider>
        <div class="ma-2 mx-4">
          <choice-check-box type="feed_sources"
                            :value="form.feed_sources"
                            @change="form.feed_sources = $event"
                            @blur="updateForm"
          >

          </choice-check-box>
        </div>

        <v-card-text class="pa-2 title">3.9 ท่านเคยให้แร่ธาตุก้อนหรือไม่</v-card-text>
        <v-divider></v-divider>
        <div class="ma-2 mx-4">
          <choice-select label=" " type="minerals_feed" :value="form.minerals_feed"
                         @change="form.minerals_feed = $event">

          </choice-select>
        </div>

        <v-card-text class="pa-2 title">3.10 ท่านมีการสำรองฟางข้าว หรือเปลือกข้าวโพดไว้ใช้เลี้ยงโคหรือไม่</v-card-text>
        <v-divider></v-divider>
        <div class="ma-2 mx-4">
          <choice-select label=" " type="feedstock" :value="form.feedstock"
                         @change="form.feedstock = $event">

          </choice-select>
        </div>

        <v-card-text class="pa-2 title">3.11 ท่านใช้แหล่งอาหารหยาบในฤดูแล้งจาก</v-card-text>
        <v-divider></v-divider>
        <div class="ma-2 mx-4">
          <choice-check-box type="feed_summer_sources"
                            :value="form.feed_summer_sources"
                            @change="form.feed_summer_sources = $event"
                            @blur="updateForm"
          >

          </choice-check-box>
        </div>

      </v-flex>
    </v-layout>
  </div>
</template>


<script>
  import ChoiceSelect from "../../share/choiceSelect";
  import ChoiceCheckBox from "../../share/choiceCheckBox";
  import DistrictSelect from "../../share/districtSelect";

  export default {
    components: {ChoiceSelect, ChoiceCheckBox, DistrictSelect},
    name: "past3",
    data : () =>({
      form : undefined
    }),
    async created  () {
      //this.form = await this.$store.state.farmOwners.farmOwner
    },
    methods :{
      updateForm : async function () {
        // console.log("P1",this.form)
        await this.$store.dispatch("farmOwners/updateState",this.form)
        let data = await this.$store.state.farmOwners.farmOwner
      }
    }
  }
</script>
