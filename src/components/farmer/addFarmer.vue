<template>
  <v-container mt-3>
    <v-layout row wrap>

      <v-flex>
        <h1 class="display-1">Farmer Management</h1>
      </v-flex>
    </v-layout>
    <v-divider class="mt-2"></v-divider>

    <v-layout row wrap mt-3>
      <v-flex mt-3>
        <v-card>
          <v-footer color="gray">
            <v-spacer></v-spacer>
            <h3>Create Farmer</h3>
            <v-spacer></v-spacer>

          </v-footer>

          <v-form class="mt-3 ml-3 mr-5">
            <v-text-field
              label="ชื่อ"
              required
            ></v-text-field>

            <v-text-field
              label="นามสกุล"
              required
            ></v-text-field>

            <v-text-field
              label="รหัสบัตรประจำตัวประชาชน"
              required
            ></v-text-field>

            <v-text-field
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field

              label="Username"
              required

            ></v-text-field>

            <v-text-field
              type="password"

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
              label="ที่อยู่"
              required
            ></v-text-field>

            <district-select
              @change="updateDistrictSelect"></district-select>
            <v-text-field
              label="รหัสไปรษณีย์"
              required
            ></v-text-field>


            <v-btn color="primary" @click="saveUser"> Submit</v-btn>
            <v-btn @click="$router.go(-1)">Cancel</v-btn>
          </v-form>


        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
  import districtSelect from "@/components/share/districtSelect";
    export default {
        name: "addFarmer",
      components : {
          districtSelect
      }
    }
</script>

<style scoped>

</style>
