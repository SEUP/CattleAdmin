<template>
  <v-container mt-3>
    <v-layout row wrap>

      <v-flex>
        <h1 class="display-1">User Management</h1>
      </v-flex>
    </v-layout>
    <v-divider class="mt-2"></v-divider>

    <v-layout row wrap mt-3 v-if="form">
      <v-flex mt-3>
        <v-card>
          <v-footer color="gray">
            <v-spacer></v-spacer>
            <h3>User edit</h3>
            <v-spacer></v-spacer>

          </v-footer>

          <v-form class="mt-3 ml-3 mr-5">
            <v-text-field
              v-model="form.name"
              :error-messages="error.name"
              label="ชื่อ-นามสกุล"

            ></v-text-field>

            <v-text-field
              v-model="form.email"
              label="E-mail"
              :error-messages="error.email"
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
              v-model="form.password_confirmation"
              :error-messages="error.password_confirmation"
              label="Verify Password"
              required
            ></v-text-field>

            <district-select
              :valProvince="form.user_province"
              :valAmphur="form.user_amphur"
              :valDistrict="form.user_district"
              @change="updateDistrictSelect"></district-select>
            <template v-if="admin.id != form.id">
            <h3>Roles</h3>
            <v-container fluid>
              <role-checkbox :value="form.roles" @change="updateRoles"></role-checkbox>
            </v-container>
            </template>

            <v-btn color="primary" @click="saveUser"> Submit</v-btn>
            <v-btn @click="$router.go(-1)"> Cancel</v-btn>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>


</template>

<script>

  import roleCheckbox from "@/components/admin/role/roleCheckbox";
  import districtSelect from "@/components/admin/share/districtSelect";
  import Base from "@/components/admin/base";
  import {mapState} from 'vuex'

  export default {
    name: "edit",
    extends : Base,
    components: {
      roleCheckbox, districtSelect
    },
    data() {
      return {
        getUser:{
          id: null,
          with : ['roles']
        },
        form: null,
      }
    },
    computed: {
      ...mapState ({
        admin: state => state.admin.login.user
      })
    },
    async created() {
      if(!this.admin){
       this.$store.dispatch("admin/login/loadUser")
      }
      this.getUser.id = this.$route.params.id;
      await this.load();
      await console.log("start",this.form)

    },
    methods: {
      updateDistrictSelect: function (value) {
        this.form.province = value[0];
        this.form.amphur = value[1];
        this.form.district = value[2];

        if (value[0]) {
          this.form.user_province = value[0].province_id;
        }
        if (value[1]) {
          this.form.user_amphur = value[1].amphur_id;
        }
        if (value[2]) {
          this.form.user_district = value[2].district_id;
        }
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
        let user = await this.$store.dispatch("admin/users/updateUser", this.form);
        console.log("save User", this.form);
        if (user){
          this.$router.go(-1)
        }

      },
      load: async function () {
        let data = await this.$store.dispatch("admin/users/getUserById", this.getUser);
        this.form = data

      }
    }

  }
</script>

<style scoped>

</style>
