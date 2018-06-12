<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card-text class="display-1  pa-0 mb-3 text-xs-center text-md-left">
          เเก้ไขข้อมูลเกษตรกร
        </v-card-text>

        <v-divider></v-divider>
        <v-layout row wrap class="justify-center pt-2">
          <v-flex mx-3>
            <v-card>
              <v-divider class="divider-bold indigo"></v-divider>
              <v-stepper v-model="steper" vertical non-linear>

                <div id="f1">
                  <v-stepper-step :complete="steper > 1" :step="1" editable>ส่วนที่ 1 <small>ข้อมูลพื้นฐานของเกษตรกร</small></v-stepper-step>
                  <v-stepper-content :step="1">
                    <v-card class="elevation-0" style="border:#e5e5e5 1px solid">
                      <v-card-text v-if = "p1">
                        <part1 :ID ="this.id"></part1>
                      </v-card-text>
                    </v-card>
                    <v-btn color="primary" @click.native="steper = 2" >Continue</v-btn>
                    <v-btn flat  @click.native="steper=0" outline>Cancel</v-btn>
                  </v-stepper-content>
                </div>

                <div id="f2">
                  <v-stepper-step :complete="steper > 2" :step="2" editable>ส่วนที่ 2 <small>ข้อมูลการเลี้ยงเเละสถานภาพฟาร์ม</small></v-stepper-step>
                  <v-stepper-content :step="2">
                    <v-card class="elevation-0" style="border:#e5e5e5 1px solid">
                      <v-card-text>
                        <!---->     <span style="background-color: grey;height: 500px;width: 700px"></span>
                      </v-card-text>
                    </v-card>
                    <v-btn color="primary" @click.native="steper = 3" >Continue</v-btn>
                    <v-btn flat  @click.native="steper=0" outline>Cancel</v-btn>
                  </v-stepper-content>
                </div>

                <div id="f3">
                  <v-stepper-step :complete="steper > 3" :step="3" editable>ส่วนที่ 3<small>ข้อมูลแรงงาน พื้นที่ในการเลี้ยง และการจัดการอาหาร</small></v-stepper-step>
                  <v-stepper-content :step="3">
                    <v-card class="elevation-0" style="border:#e5e5e5 1px solid">
                      <v-card-text>
                        <Part3></Part3>
                      </v-card-text>
                    </v-card>
                    <v-btn color="primary" @click.native="steper = 4" >Continue</v-btn>
                    <v-btn flat  @click.native="steper=0" outline>Cancel</v-btn>
                  </v-stepper-content>
                </div>

                <div id="f4">
                  <v-stepper-step :complete="steper > 4" :step="4" editable>ส่วนที่ 4<small>การผสมพันธ์ุ ประสิทธิภาพการผลิต และการรักษาโรค</small></v-stepper-step>
                  <v-stepper-content :step="4">
                    <v-card class="elevation-0" style="border:#e5e5e5 1px solid">
                      <v-card-text>
                        <!---->     <span style="background-color: grey;height: 500px;width: 700px"></span>
                      </v-card-text>
                    </v-card>
                    <v-btn color="primary" @click.native="steper = 5" >Continue</v-btn>
                    <v-btn flat  @click.native="steper=0" outline>Cancel</v-btn>
                  </v-stepper-content>
                </div>

                <div id="f5">
                  <v-stepper-step :complete="steper > 5" :step="5" editable>ส่วนที่ 5<small>ข้อมูลแหล่งเงินทุนที่ใช้ในการเลี้ยงโคเนื้อ</small></v-stepper-step>
                  <v-stepper-content :step="5">
                    <v-card class="elevation-0" style="border:#e5e5e5 1px solid">
                      <v-card-text>
                        <!---->     <span style="background-color: grey;height: 500px;width: 700px"></span>
                      </v-card-text>
                    </v-card>
                    <v-btn color="primary" @click.native="steper = 6" >Continue</v-btn>
                    <v-btn flat  @click.native="steper=0" outline>Cancel</v-btn>
                  </v-stepper-content>
                </div>

              <div id="f6">
                <v-stepper-step :complete="steper > 6" :step="6" editable>ส่วนที่ 6<small>ข้อมูลการตลาด การรวมกลุ่มของสมาชิก(วิสาหกิจชุมชนและสหกรณ์)</small></v-stepper-step>
                <v-stepper-content :step="6">
                  <v-card class="elevation-0" style="border:#e5e5e5 1px solid">
                    <v-card-text>
                      <!---->  <part6 :ID="this.id"></part6>
                    </v-card-text>
                  </v-card>
                  <v-btn color="primary" @click.native="steper = 7" >Continue</v-btn>
                  <v-btn flat  @click.native="steper=0" outline>Cancel</v-btn>
                </v-stepper-content>
              </div>

              <div id="f7">
                <v-stepper-step :complete="steper > 7" :step="7" editable>ส่วนที่ 7<small>การได้รับบริการ การส่งเสริมและสนับสนุนจากหน่วยงานต่างๆ</small></v-stepper-step>
                <v-stepper-content :step="7">
                  <v-card class="elevation-0" style="border:#e5e5e5 1px solid">
                    <v-card-text>
                      <!---->  <part7 :ID ="this.id"></part7>
                    </v-card-text>
                  </v-card>
                  <v-btn color="primary" @click.native="steper = 8" >Continue</v-btn>
                  <v-btn flat  @click.native="steper=0" outline>Cancel</v-btn>
                </v-stepper-content>
              </div>

                <div id="f8">
                  <v-stepper-step :complete="steper > 8" :step="8" editable>ส่วนที่ 8<small>ปัญหา อุปสรรค และข้อเสนอแนะ</small></v-stepper-step>
                  <v-stepper-content :step="8">
                    <v-card class="elevation-0" style="border:#e5e5e5 1px solid">
                      <v-card-text>
                        <!---->     <span style="background-color: grey;height: 500px;width: 700px"></span>
                      </v-card-text>
                    </v-card>
                    <v-btn color="success">save</v-btn>
                    <v-btn flat @click.native="steper=0" outline>Cancel</v-btn>
                  </v-stepper-content>
                </div>
              </v-stepper>
            </v-card>
          </v-flex>

        </v-layout>
      </v-flex>

      <v-flex v-if="showRightMenu" xs1>
        <v-layout row>
          <v-flex >
            <div class="right_menu_fixed hidden-sm-and-down">
              <v-divider class="divider-bold success"></v-divider>
              <v-list class="card-border">
                <v-list-tile class="text-xs-center">
                  <v-btn color="success" depressed block @click.native = "updateFarmOwner">Save All</v-btn>
                </v-list-tile>
                <v-divider></v-divider>

                <v-list-tile @click="elFocus(1)"  >
                  <v-icon >extension</v-icon>
                  <v-spacer></v-spacer>
                  <v-list-tile-content>ส่วนที่ 1</v-list-tile-content>
                </v-list-tile>

                <v-list-tile @click="elFocus(2)">
                  <v-icon >extension</v-icon>
                  <v-spacer></v-spacer>
                  <v-list-tile-content>ส่วนที่ 2</v-list-tile-content>
                </v-list-tile>

                <v-list-tile @click="elFocus(3)"  >
                  <v-icon >extension</v-icon>
                  <v-spacer></v-spacer>
                  <v-list-tile-content>ส่วนที่ 3</v-list-tile-content>
                </v-list-tile>

                <v-list-tile @click="elFocus(4)"  >
                  <v-icon >extension</v-icon>
                  <v-spacer></v-spacer>
                  <v-list-tile-content>ส่วนที่ 4</v-list-tile-content>
                </v-list-tile>

                <v-list-tile @click="elFocus(5)">
                  <v-icon >extension</v-icon>
                  <v-spacer></v-spacer>
                  <v-list-tile-content>ส่วนที่ 5</v-list-tile-content>
                </v-list-tile>

                <v-list-tile @click="elFocus(6)" >
                  <v-icon >extension</v-icon>
                  <v-spacer></v-spacer>
                  <v-list-tile-content>ส่วนที่ 6</v-list-tile-content>
                </v-list-tile>

                <v-list-tile @click="elFocus(7)"  >
                  <v-icon >extension</v-icon>
                  <v-spacer></v-spacer>
                  <v-list-tile-content>ส่วนที่ 7</v-list-tile-content>
                </v-list-tile>

                <v-list-tile @click="elFocus(8)">
                  <v-icon >extension</v-icon>
                  <v-spacer></v-spacer>
                  <v-list-tile-content>ส่วนที่ 8</v-list-tile-content>
                </v-list-tile>
              </v-list>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>


      <v-fab-transition>
        <v-btn
          color="red"
          dark
          fab
          fixed
          bottom
          right
          @click = "showRightMenu = !showRightMenu"
        >
          <v-icon>mdi-view-sequential</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-layout>
  </v-container>

</template>

<script>
  import Part1 from "./part1"
  import Part3 from "./part3"
  import Part7 from "./part7"
  import Part6 from "./part6"
  export default {
    name: "edit",
    components : {
      Part1,
      Part3,
      Part6,
      Part7
    },
    data: () => ({
      p1 : false,
      id : undefined,
      steper : 1,
      showRightMenu:true,
      farmOwner : null,
    })
    ,async created () {
      let farmOwnerId  = await this.$route.params.id;
      // await console.log("ID In Edit",this.$route.params.id)
      this.id = await farmOwnerId
      if(this.id){
        this.p1 = true
        await this.loadData(farmOwnerId)
      }



    }
    ,methods: {
      elFocus : function (el) {
        this.steper = el
      },
      updateFarmOwner : async function () {
        let data = await this.$store.dispatch("farmOwners/updateFarmOwner")
        await console.log("SAVE",data)
      },

      }

  }
</script>
