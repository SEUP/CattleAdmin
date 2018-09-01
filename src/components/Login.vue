<template>
  <v-app id="inspire">
    <loading :active.sync="spinnerVisible"></loading>
    <v-snackbar
      :timeout="6000"
      :color="'error'"
      :multi-line="true"
      :vertical="true"
      v-model="showError">
      <ul >
        <li v-for="value in error">{{value}}</li>
      </ul>
      <v-btn dark flat @click.native="$store.dispatch('error/toggleError',false)">Close</v-btn>
    </v-snackbar>

    <v-content class="bgImg">
      <v-container fill-height >
        <v-layout align-center>
          <v-flex text-xs-center>
            <v-layout align-center justify-end>
              <v-flex xs12 lg6>
                <v-card class="elevation-20 DelBG ">
                  <v-card-text text-xs-center class="display-3 textwhite " >
                    <h4 class="light italic ">ยินดีต้อนรับ</h4>
                  </v-card-text>
                  <v-card-text >
                    <v-form>
                      <v-text-field dark prepend-icon="person" name="login" label="Username" v-model="form.username"
                                    :error-messages="error.username" type="text" color="white"
                      ></v-text-field>
                      <v-text-field  dark id="password" prepend-icon="lock" name="password" label="Password"
                                     :error-messages="error.password"
                                     v-model="form.password" type="password" color="white" @keypress.13s="login()"></v-text-field>


                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn block outline @click="login()" color="success">เข้าสู่ระบบ</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<style scoped>
  .bgImg{
    background-image: url("../../static/loginAdminBG.jpg");

    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .DelBG{
    background-color: rgba(0,0,0,0.75);
    opacity: 30%;
    border-radius: 5px;
  }
  .blurBG{
    filter: blur(5px);
  }
  .textwhite{
    color: white;
  }
</style>

<script>
  import Base from "@/components/Base"

  export default {
    extends: Base,
    name: 'Login',
    data() {
      return {
        form: {},
      }
    },
    methods: {
      login: async function () {
        let token = await this.$store.dispatch("login/getToken", this.form);
        if (token) {
          await this.$store.dispatch("login/getUser", token);
          this.$router.push({name: 'admin-home'})
        }
      }
    }
  }
</script>
