<template>
  <v-container mt-3>
    <v-layout row wrap>

      <v-flex>
        <h1 class="display-1">User Management</h1>
      </v-flex>
    </v-layout>
    <v-divider class="mt-2"></v-divider>

    <v-layout row wrap mt-3>
      <v-flex mt-3>
        <v-card>
          <v-footer color="gray">
            <v-spacer></v-spacer>
            <h3>Create User</h3>
            <v-spacer></v-spacer>

          </v-footer>

          <v-form class="mt-3 ml-3 mr-5">
            <v-text-field
              v-model="form.name"
              label="ชื่อ-นามสกุล"
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

            <district-select
              :valProvince="form.user_province"
              :valAmphur="form.user_amphur"
              :valDistrict="form.user_district"
              @change="updateDistrictSelect"></district-select>

            <choice-select :value="form.sex" type="sex" label="sex"></choice-select>


            <h3>Roles</h3>
            <v-container fluid>
              <role-checkbox :value="form.roles" @change="updateRoles"></role-checkbox>
            </v-container>

            <v-btn color="primary" @click="saveUser"> Submit</v-btn>
            <v-btn @click=""> Cancel</v-btn>
          </v-form>


        </v-card>
      </v-flex>
    </v-layout>
  </v-container>


</template>

<script>

  import roleCheckbox from "@/components/role/roleCheckbox";
  import districtSelect from "@/components/share/districtSelect";
  import choiceSelect from "@/components/share/choiceSelect";

  export default {
    name: "create",
    components: {
      roleCheckbox, districtSelect,choiceSelect
    },
    data() {
      return {
        form: {
          user_province: null,
          user_amphur : null,
          user_district : null,
          roles: []
        },
        selected: []
      }
    },
    computed: {
      roles: function () {
        return this.$store.state.roles.rolesData;
      }
    },
    async created() {
    },
    methods: {
      updateDistrictSelect: function (value) {
        this.form.province = value[0];
        this.form.amphure = value[1];
        this.form.district = value[2];

        if (value[0]) {
          this.form.user_province = value[0].PROVINCE_ID;
        }
        if (value[1]) {
          this.form.user_amphur = value[1].AMPHUR_ID;
        }
        if (value[2]) {
          this.form.user_district = value[2].DISTRICT_ID;
        }
        console.log("UPDATE",this.form)
      },
      updateRoles: function (value) {
        let roles = this.form.roles;
        let i = roles.indexOf(value);
        if (i == -1) {
          roles.push(value);
        } else {
          roles.splice(i, 1);
        }
      },
      saveUser: async function () {
        console.log(this.form);
        let user = await this.$store.dispatch("users/createUser", this.form);
        console.log("save User", this.form);
        if(user){this.$router.push({name: "user-index"})}
      }
    }

  }
</script>

<style scoped>

</style>
