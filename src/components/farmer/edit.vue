<template>
  <v-container mt-3 >
    <v-layout row wrap>

      <v-flex>
        <h1 class="display-1">Edit Farmer</h1>
      </v-flex>
    </v-layout>
    <v-divider class="mt-2"></v-divider>

    <v-layout row wrap mt-3 v-if="form">
      <v-flex mt-3>
        <v-card>
          <v-footer color="gray">
            <v-spacer></v-spacer>
            <h3></h3>
            <v-spacer></v-spacer>

          </v-footer>

          <v-form class="mt-3 ml-3 mr-5">
            <v-text-field
              v-model="form.firstname"
              label="ชื่อ"
              required

            ></v-text-field>

            <v-text-field
              v-model="form.lastname"
              label="นามสกุล"
              required
            ></v-text-field>

            <v-text-field
              v-model="form.personal_id"
              label="รหัสบัตรประจำตัวประชาชน"
              required
            ></v-text-field>

            <v-text-field
              v-model="form.email"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="form.username"
              label="Username"
              required
            ></v-text-field>

            <v-text-field
              type="password"
              v-model="form.password"
              label="Password"
              required
            ></v-text-field>

            <v-text-field
              type="password"
              v-model="form.password_confirmation"
              label="Verify Password"
              required
            ></v-text-field>

            <v-divider class="my-5"></v-divider>
            <v-text-field
              v-model="form.house_address"
              label="ที่อยู่"
              required
            ></v-text-field>

            <district-select
              :valProvince="form.house_province"
              :valAmphur="form.house_amphur"
              :valDistrict="form.house_district"
              @change="updateDistrictSelect"></district-select>
            <v-text-field
              v-model="form.house_zipcode"
              label="รหัสไปรษณีย์"
              required
            ></v-text-field>


            <v-btn color="primary" @click="saveFarmer"> Submit</v-btn>
            <v-btn @click="$router.go(-1)">Cancel</v-btn>
          </v-form>


        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
  import districtSelect from "@/components/share/districtSelect";
  import Base from "@/components/Base"
  export default {
    name: "addFarmer",
    extend : Base,
    components : {
      districtSelect
    },
    data() {
      return {
        form : null,
        getFarmer :{
          id : null,
        },
      }
    },
    computed : {},
    async created() {
      this.getFarmer.id = this.$route.params.id;
      await this.load() ;
      await  console.log("start", this.form)
    },
    methods : {
      updateDistrictSelect: function (value) {
        this.form.house_province = value[0];
        this.form.house_amphur = value[1];
        this.form.house_district = value[2];

        if (value[0]) {
          this.form.house_province = value[0].province_id;
        }
        if (value[1]) {
          this.form.house_amphur = value[1].amphur_id;
        }
        if (value[2]) {
          this.form.house_district = value[2].district_id;
        }
      },
      saveFarmer: async function () {
        let farmer = await this.$store.dispatch("farmers/updateFarmer", this.form);
        console.log("save Farmer", this.form);
        if (farmer) {
          this.$router.go(-1)
        }
      },
      load: async function () {
        let data = await  this.$store.dispatch("farmers/getFarmerById", this.getFarmer);
        this.form = data

      },
    }
  }
</script>

<style scoped>

</style>
