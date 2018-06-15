<template>
  <div>

    <v-layout column>
      <v-flex v-for="mainBreed in choices[type]" :key="mainBreed.id">
        <v-checkbox :label="mainBreed.choice" hide-details
                    :value="mainBreed"
                    v-model="selMainBreeds"
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
                        @change=""
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
      value: {
        type: Array,
        Default: [],
      }
    },
    data: () => ({
      choices: [],
      selMainBreeds: [],
      selSubBreeds: {},
      form: null,
    }),
    async mounted() {
      console.log("HELLO");
      this.form = await this.$store.state.farmOwners.farmOwner
      this.choices = await this.$store.dispatch("choices/getChoices")
      console.log(this.value)
      this.sync();
    },
    methods: {
      childrenSync: function (type, order) {
        let childrenForm = this.form[type]
        let childrenChoice = this.choices[type];

        let mainLength = childrenChoice.length;
        let selectLength = childrenForm.length;

        for (let i = 0; i < mainLength; i++) {
          for (let j = 0; j < selectLength; j++) {
            try {
              if (childrenChoice[i].id == childrenForm[j].id) {
                childrenChoice[i] = childrenForm[j]
                if (!this.selSubBreeds[type]) {
                  this.selSubBreeds[type] = []

                  this.selSubBreeds[type] = Object.assign(this.selSubBreeds[type], []);

                }
                this.selSubBreeds[type].push(childrenChoice[i]);
              }
            } catch (e) {
              console.log(childrenChoice[i], childrenForm[j])
            }


          }
        }
      },
      sync: function () {
        let main = this.choices[this.type];
        let select = this.value;

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
