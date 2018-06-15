<template>
  <div>
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
          แสดงหมายเหตุเพันธุ์พื้นเมือง
        </v-flex>
        <v-flex class="pl-3" v-else>
          <v-flex v-for="subBreed in choices[mainBreed.children[0].type]" :key="subBreed.id">
            <v-checkbox :label="subBreed.choice" hide-details
                        :value="subBreed"
                        v-model="selSubBreeds[mainBreed.children[0].type]"
                        color="success"
                        @change="updateValue(mainBreed.children[0].type,selSubBreeds[mainBreed.children[0].type])"
            ></v-checkbox>
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
        Default: [],
      },
      label: {
        type: String,
        Default: "ตัวเลือก"
      },
    },
    data: () => ({
      choices: [],
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
    }),
    async mounted() {
      console.log("HELLO");
      this.form = await this.$store.state.farmOwners.farmOwner
      this.choices = await this.$store.dispatch("choices/getChoices")
      this.sync();
    },
    methods: {
      updateValue: function (type, value) {
        // console.log(this.form[type],value)
        // this.form[type] = value;
        this.$store.dispatch("farmOwners/updateChoices", {type: type, value: value})
      },
      childrenSync: function (type, order) {
        let childrenForm = this.form[type];
        let childrenChoice = this.choices[type];

        let mainLength = childrenChoice.length;
        let selectLength = childrenForm.length;

        for (let i = 0; i < mainLength; i++) {
          for (let j = 0; j < selectLength; j++) {
            try {
              if (childrenChoice[i].id == childrenForm[j].id) {
                childrenChoice[i] = childrenForm[j];
                console.log(this.selSubBreeds);
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
        let select = this.form[this.type];

        let mainLength = main.length;
        let selectLength = select.length;

        for (let i = 0; i < mainLength; i++) {
          for (let j = 0; j < selectLength; j++) {
            if (main[i].id == select[j].id) {
              main[i] = select[j]
              this.selMainBreeds.push(main[i]);
              // sync children
              this.childrenSync(main[i].children[0].type);

            }
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
