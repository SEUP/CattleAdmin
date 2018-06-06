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
            <v-footer color="gray" >
              <v-spacer></v-spacer>
              <h3>Create User</h3>
              <v-spacer></v-spacer>

            </v-footer>

            <v-form v-model="valid" class="mt-3 ml-3 mr-5">
              <h3>First Name</h3>
              <v-text-field
                v-model="firstname"
                label="First Name"
                required
              ></v-text-field>
              <h3>Last Name</h3>
              <v-text-field
                v-model="lastname"
                label="Last Name"
                required
              ></v-text-field>
              <h3>E-mail</h3>
              <v-text-field
                v-model="email"
                label="E-mail"
                required
              ></v-text-field>
              <h3>Username</h3>
              <v-text-field
                v-model="username"
                label="Username"
                required
              ></v-text-field>
              <h3>Password</h3>
              <v-text-field
                type="password"
                v-model="password"
                label="Password"
                required
              ></v-text-field>
              <h3>Verify Password</h3>
              <v-text-field
                type="password"
                v-model="password_confirmation"
                label="Verify Password"
                required
              ></v-text-field>

              <h3>Roles</h3>
              <v-container fluid>
                <v-checkbox color="black" v-model="selected" label="ผู้ดูแลระบบ" value="ผู้ดูแลระบบ"></v-checkbox>
                <v-checkbox color="black" v-model="selected" label="ผู้ใช้งานระดับจังหวัด" value="ผู้ใช้งานระดับจังหวัด"></v-checkbox>
                <v-checkbox color="black" v-model="selected" label="ผู้ใช้งานระดับอำเภอ" value="ผู้ใช้งานระดับอำเภอ"></v-checkbox>
                <v-checkbox color="black" v-model="selected" label="ผู้ใช้งานระดับตำบล" value="ผู้ใช้งานระดับตำบล"></v-checkbox>
              </v-container>

              <v-btn color="primary" @click="saveUser()"> Submit </v-btn>
              <v-btn  @click="back()"> Cancel </v-btn>
            </v-form>

          </v-card>
        </v-flex>
      </v-layout>
    </v-container>





</template>

<script>
    export default {
        name: "UserManagement",
        data () {
          return {
            selected: []
        }
      }
    }
</script>

<style scoped>

</style>
