<template>
  <v-app id="inspire">
    <loading :active.sync="spinnerVisible"></loading>
    <v-snackbar
      :timeout="6000"
      :color="'error'"
      :multi-line="true"
      :vertical="true"
      v-model="showError">
      <ul>
        <li v-for="value in error">{{value}}</li>
      </ul>
      <v-btn dark flat @click.native="$store.dispatch('error/toggleError',false)">Close</v-btn>
    </v-snackbar>

    <v-content class="bgImg">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <v-layout align-center justify-end>
              <v-flex xs12 lg6>
                <v-card class="elevation-20 DelBG ">
                  <v-card-text text-xs-center class="display-3 textwhite ">
                    <h4 class="light italic ">Reset Password</h4>
                  </v-card-text>
                  <v-card-text>
                    <v-form>
                      <v-text-field dark prepend-icon="email" name="email" label="Email" v-model="form.email"
                                    :error-messages="error.email" type="text" color="white"
                      ></v-text-field>
                      <v-layout>
                        <v-spacer></v-spacer>
                        <router-link :to="{name :'Login'}">
                          Back
                        </router-link>
                      </v-layout>

                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn block outline @click="resetPassword()" color="success">Reset Password</v-btn>
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
  .bgImg {
    background-image: url("../../../static/loginBG.jpg");

    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .DelBG {
    background-color: rgba(0, 0, 0, 0.75);
    opacity: 30%;
    border-radius: 5px;
  }

  .blurBG {
    filter: blur(5px);
  }

  .textwhite {
    color: white;
  }
</style>

<script>
  import Base from "@/components/admin/Base"

  export default {
    extends: Base,
    name: 'Login',
    data() {
      return {
        form: {},
      }
    },
    watch: {
      '$route': function () {
        this.form = {}
      }
    },
    methods: {
      resetPassword: async function () {
        let result = await this.$store.dispatch("login/resetPassword", this.form);

        if (result) {
          this.$router.push({name: 'Login'})
        }
      }
    }
  }
</script>
