<template>
  <div v-if="isReady">
    <v-layout column>
      <v-flex v-for="mainBreed in choices[type]" :key="mainBreed.id">
        <v-checkbox :label="mainBreed.choice" hide-details
                    :value="mainBreed"
                    v-model="selMainBreeds"
                    @change="updateValue(type,selMainBreeds)"
                    color="success"
        >
        </v-checkbox>
        <v-flex v-if="mainBreed.choice == 'พันธุ์พื้นเมือง' || mainBreed.choice == 'พันธุ์อื่นๆ'">
          <template>
            <v-text-field placeholder="โปรดระบุ" hide-details class="pa-0 py-1"
                          v-model="mainBreed.pivot.remark" @blur="updateValue(type,selMainBreeds)"/>
            <v-layout>
              <v-flex xs12 md4 mx-1>
                <v-text-field placeholder="จำนวน" class="pa-0 py-1" type="number" hide-details
                              v-model="mainBreed.pivot.amount" @blur="updateValue(type,selMainBreeds)"/>
              </v-flex>
              <v-flex xs12 md4 mx-1>
                <v-select placeholder="เเหล่งที่มา" class="pa-0 py-1" hide-details dense
                          :items="source_opt" v-model="mainBreed.pivot.source_opt"
                          @change="updateValue(type,selMainBreeds)"
                />
              </v-flex>
              <v-flex xs12 md4 mx-1>
                <v-text-field placeholder="เเหล่งที่มาอื่นๆ" class="pa-0 py-1" hide-details
                              v-model="mainBreed.pivot.source" @blur="updateValue(type,selMainBreeds)"/>
              </v-flex>
              <v-flex xs12 md4 mx-1>
                <v-text-field placeholder="ราคา" class="pa-0 py-1" type="number" hide-details
                              v-model="mainBreed.pivot.price" @blur="updateValue(type,selMainBreeds)"/>
              </v-flex>
            </v-layout>
          </template>
        </v-flex>
        <v-flex class="pl-3" v-else>
          <v-flex v-for="subBreed in choices[mainBreed.children[0].type]" :key="subBreed.id">
            <v-checkbox :label="subBreed.choice" hide-details
                        :value="subBreed"
                        v-model="selSubBreeds[mainBreed.children[0].type]"
                        color="success"
                        @change="updateValue(mainBreed.children[0].type,selSubBreeds[mainBreed.children[0].type])"
            ></v-checkbox>
            <template>
              <v-layout>
                <v-flex xs12 md4 mx-1>
                  <v-text-field placeholder="จำนวน" class="pa-0 py-1" type="number" hide-details
                                v-if="subBreed.pivot" v-model="subBreed.pivot.amount"
                                @blur="updateValue(mainBreed.children[0].type,selSubBreeds[mainBreed.children[0].type])"
                  />
                </v-flex>
                <v-flex xs12 md4 mx-1>
                  <v-select placeholder="เเหล่งที่มา" class="pa-0 py-1" hide-details dense
                            v-model="subBreed.pivot.source_opt"
                            :items="source_opt"
                            @change="updateValue(mainBreed.children[0].type,selSubBreeds[mainBreed.children[0].type])"
                  />
                </v-flex>
                <v-flex xs12 md4 mx-1>
                  <v-text-field placeholder="เเหล่งที่มาอื่นๆ" class="pa-0 py-1" hide-details v-model="subBreed.pivot.source"
                                @blur="updateValue(mainBreed.children[0].type,selSubBreeds[mainBreed.children[0].type])"
                  />
                </v-flex>
                <v-flex xs12 md4 mx-1>
                  <v-text-field placeholder="ราคา" class="pa-0 py-1" type="number" hide-details v-model="subBreed.pivot.price"
                                @blur="updateValue(mainBreed.children[0].type,selSubBreeds[mainBreed.children[0].type])"/>
                </v-flex>
              </v-layout>
            </template>
          </v-flex>
        </v-flex>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: "cattle-data",
    props: {
      type: {
        type: String,
        default: [],
      },
    },
    data: () => ({
      source_opt: ['ตลาดโค', 'พ่อค้าคนกลาง', 'ในหมู่บ้าน', 'โครงการหลวง', 'ผลิตเองในฟาร์ม', 'อื่นๆ'],
      choices: [],
      selMainBreeds2: [],
      selMainBreeds: [],
      selSubBreeds: {
        female_breeding_types: [],
        female_int_breeding_types: [],
        female_mixed_breeding_types: [],
        female_over_six_breeding_types: [],
        female_over_six_int_breeding_types: [],
        female_over_six_mixed_breeding_types: [],
        female_under_six_breeding_types: [],
        female_under_six_int_breeding_types: [],
        female_under_six_mixed_breeding_types: [],

        male_breeding_types: [],
        male_int_breeding_types: [],
        male_mixed_breeding_types: [],
        male_over_six_breeding_types: [],
        male_over_six_int_breeding_types: [],
        male_over_six_mixed_breeding_types: [],
        male_under_six_breeding_types: [],
        male_under_six_int_breeding_types: [],
        male_under_six_mixed_breeding_types: [],
      },
      form: null,
      isReady: false,
    }),
    async created() {
      this.form = await this.$store.state.farmOwners.farmOwner
      this.choices = await this.$store.dispatch("choices/getChoices")
      this.sync();
    },
    methods: {
      updateValue: function (type, value) {
        this.updateTotal(type, value)
        this.$store.dispatch("farmOwners/updateChoices", {type: type, value: value})
      },
      childrenSync: function (type, order) {
        let childrenForm = this.form[type];
        let childrenChoice = this.choices[type] ? this.choices[type] : [];

        let mainLength = childrenChoice.length;
        let selectLength = childrenForm ?  childrenForm.length : 0;

        for (let i = 0; i < mainLength; i++) {
          for (let j = 0; j < selectLength; j++) {
            try {
              if (childrenChoice[i].id == childrenForm[j].id) {
                childrenChoice[i] = childrenForm[j];
                if (this.selSubBreeds[type]) {
                  this.selSubBreeds[type].push(childrenChoice[i]);
                } else {
                  this.selSubBreeds[type] = [childrenChoice[i]]
                }
              }
            } catch (e) {
              console.log(childrenChoice[i], childrenForm[j])
            }

          }
        }
      },
      sync: function () {
        let main = this.choices[this.type];
        let select = this.form[this.type] ? this.form[this.type] : [] ;
        let mainLength = main.length;
        let selectLength = select.length;

        for (let i = 0; i < mainLength; i++) {
          for (let j = 0; j < selectLength; j++) {
            if (main[i].id == select[j].id) {
              main[i] = select[j]
              this.selMainBreeds.push(main[i]);
              // sync children
              if (main[i].children.length > 0) {
                this.childrenSync(main[i].children[0].type);
              }
            }
          }
        }
        this.choices[this.type] = main
        this.isReady = true;
      },
      updateTotalMaster : function (type,newVal) {
        let master = this.form.total_master_breeding_types;
        let oldVal = this.form[type] ? this.form[type] : 0 ;
        master -= oldVal;
        master += newVal;
        this.form.total_master_breeding_types = master
      },
      updateTotal : function (type, value) {
        // loop in value
        let sumVal = 0;
        for(let i =0 ;i<value.length;i++){
          let val = value[i]
          if(val.children.length > 0 ){ //  ถ้ามี child พันธุ์ต่างๆประเทศ ผสม ถ้าเปลั้ยนจากตัวหลัก
            let valChildType = val.children[0].type
            let valChild = this.form[valChildType] ? this.form[valChildType] : [] ;
            let sumValChildAmount = 0;
            for(let k = 0 ;k<valChild.length;k++){
              let valChildAmount = valChild[k].pivot.amount  ? valChild[k].pivot.amount : 0 ;
                sumValChildAmount += parseInt(valChildAmount)
            }
            let totalValChildType = "total_"+valChildType
            this.form[totalValChildType] = sumValChildAmount
            sumVal += sumValChildAmount
          }else { // พัน พื้นเมือง เเละ อื่นๆ ถ้าเปลี่ยนจากตัวหลัก หรือ พันธุ์ต่างๆประเทศ ผสม ถ้ามีการเปลี่ยนเเปลงที่ ตัว นั้น
            let valAmount = parseInt(val.pivot.amount ? val.pivot.amount : 0) ;
            sumVal += valAmount
            let mainId = [52,55]
            if (mainId.includes(val.id)){ // ถ้าเป็น พันพื้นเมือง อื่นๆ
              let totalMainType = "total_"+val.type
              this.updateTotalMaster(totalMainType,sumVal)
              this.form[totalMainType] = sumVal
            }else { // ถ้าเป็น พันธ์ ต่างประเทศ ลุกผลม
              // update self main Type
              let mainType  = "" ;

              if(type.startsWith('female_over_six')){
                mainType = "total_female_over_six_breeding_types"
              }else if (type.startsWith('female_under_six')){
                mainType = "total_female_under_six_breeding_types"
              }else if (type.startsWith('female')){
                mainType = "total_female_breeding_types"
              }else if (type.startsWith('male_over_six')){
                mainType = "total_male_over_six_breeding_types"
              }else if (type.startsWith('male_under_six')){
                mainType = "total_male_under_six_breeding_types"
              }else if (type.startsWith('male')){
                mainType = "total_male_breeding_types"
              }

              let mainVal = this.form[mainType] ? this.form[mainType] : 0 ;
              let totalSubType = "total_"+val.type;
              let subVal = this.form[totalSubType] ? this.form[totalSubType] : 0 ;
              mainVal -= subVal
              let totalSubVal = this.form[totalSubType] ? this.form[totalSubType] : 0 ;
              this.updateTotalMaster(totalSubType,sumVal)
              this.form[totalSubType] = sumVal
              mainVal += sumVal
              this.form[mainType] = mainVal >= 0 ? mainVal : 0
            }
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
