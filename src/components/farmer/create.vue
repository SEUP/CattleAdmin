<template>
  <v-container mt-3>
    <v-layout row wrap>

      <v-flex>
        <h1 class="display-1">Create Farmer</h1>
      </v-flex>
    </v-layout>
    <v-divider class="mt-2"></v-divider>

    <v-layout row wrap mt-3>
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
              :error-messages="error.firstname"
              required

            ></v-text-field>

            <v-text-field
              v-model="form.lastname"
              :error-messages="error.lastname"
              label="นามสกุล"
              required
            ></v-text-field>

            <v-text-field
              v-model="form.personal_id"
              :error-messages="error.personal_id"
              label="รหัสบัตรประจำตัวประชาชน"
              required
            ></v-text-field>
            <v-text-field
              v-model="form.phone_number"
              :error-messages="error.phone_number"
              label="เบอร์โทร"
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
              :error-messages="error.username"
              required
            ></v-text-field>

            <v-text-field
              type="password"
              v-model="form.password"
              :error-messages="error.password"
              label="Password"
              required
            ></v-text-field>

            <v-text-field
              type="password"
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
  import Base from "../../components/Base";
    export default {
      name: "addFarmer",
      extends : Base,
      components : {
          districtSelect
      },
      data() {
          return {
            form : {
              house_province : null,
              house_amphur : null,
              house_district : null,
            }
          }
      },
      async mounted (){
      },
      methods : {
          saveFarmer : async function () {
            let farmer = await this.$store.dispatch("farmers/createFarmer", this.form);
            if(farmer){
              this.$router.go(-1)
            }
        },
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
      }
    }
</script>

<style scoped>

</style>
