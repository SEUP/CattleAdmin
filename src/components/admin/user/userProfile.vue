<template>
  <v-container v-if="form">
  <v-layout>
    <v-flex xs12>
      <v-card-text class="display-1 ma-0 pa-0">แก้ไขข้อมูลส่วนตัว</v-card-text>
      <v-divider class="my-2"></v-divider>
      <v-card>
        <v-divider class="pt-1 orange"></v-divider>
        <v-card-text>เเก้ไขโปรไฟล์</v-card-text>
        <v-divider></v-divider>
        <div class="mx-5 my-2">
          <v-text-field  label="Username" v-model="form.username"
                         :error-messages="error.username"
          ></v-text-field>
          <v-text-field  label="Email"  readonly
                         v-model="form.email"
          ></v-text-field>
          <v-text-field  label="Password"
                         type="password"
                         v-model="form.password"
          ></v-text-field>
          <v-text-field  label="Verify Password"
                         type="password"
                         v-model="form.password_confirmation"
                         :error-messages="error.password"
          ></v-text-field>
        </div>
        <div class="text-xs-center">
        <v-btn depressed color="success" @click="saveUser()">save Change</v-btn>
        <v-btn outline @click="$router.go(-1)">cancel</v-btn>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
  import Base from "@/components/admin/base";
    export default {
      name: "userProfile",
      extends : Base,
      data : () => ({
        form : null
      }),
      async mounted () {
        let id = await this.$route.params.id
        this.load({id:id})
      },
      methods : {
        saveUser: async  function () {
          let user = await this.$store.dispatch("admin/users/updateUser", this.form);
          console.log("save User", user);
          if(user) {
            this.$router.push({name: "user-index"})
          }

        },
        load: async function (id) {
          let data = await this.$store.dispatch("admin/users/getUserById", id);
          this.form = data
        },
        goBack : function () {
          this.$router.go(-1)
        }
      }

    }
</script>

<style scoped>

</style>
