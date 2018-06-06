<template>
  <v-container mt-3>
    <v-layout row wrap>

      <v-flex>
        <h1 class="display-1">User Management</h1>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>

    <v-layout row wrap mt-3>
      <v-flex mt-3>
        <v-card>
          <v-footer color="gray">
            <v-spacer></v-spacer>
            <h3>Create User</h3>
            <v-spacer></v-spacer>

          </v-footer>

          <v-form class="mt-3 ml-3 mr-5">
            <h3>First Name</h3>
            <v-text-field
              v-model="form.name"
              label="First Name"
              required
            ></v-text-field>
            <h3>E-mail</h3>
            <v-text-field
              v-model="form.email"
              label="E-mail"
              required
            ></v-text-field>
            <h3>Username</h3>
            <v-text-field
              v-model="form.username"
              label="Username"
              required
            ></v-text-field>
            <h3>Password</h3>
            <v-text-field
              type="password"
              v-model="form.password"
              label="Password"
              required
            ></v-text-field>
            <h3>Verify Password</h3>
            <v-text-field
              type="password"
              v-model="form.password_confirmation"
              label="Verify Password"
              required
            ></v-text-field>

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

  export default {
    name: "create",
    components : {
      roleCheckbox
    },
    data() {
      return {
        form : {
          roles : []
        },
        selected: []
      }
    },
    computed : {
      roles : function () {
        return this.$store.state.roles.rolesData;
      }
    },
    async created() {
    },
    methods : {
      updateRoles : function(value){
        let roles = this.form.roles;
        let i = roles.indexOf(value);
        if( i == -1 ) {
          roles.push(value);
        }else {
          roles.splice(i,1);
        }
      },
      saveUser : function () {
        let user = this.$store.dispatch("users/saveUser",this.form);
        console.log("save User",this.form);
        this.$router.push({name : "user-index"})
      }
    }

    }
</script>

<style scoped>

</style>
