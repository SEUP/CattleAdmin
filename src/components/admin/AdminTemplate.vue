<template>
  <v-app id="inspire" >
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

    <v-navigation-drawer
      width="240"
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile :to="{name : 'admin-home'}" exact>
          <v-list-tile-action>
            <v-icon>mdi-home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              หน้าหลัก
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider></v-divider>

        <!--addFarmOwner-->
        <v-list-tile :to="{name : 'farmOwner-addFarmOwner'}" exact>
          <v-list-tile-action>
            <v-icon>mdi-plus</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              บันทึกข้อมูลเกษตรกรใหม่
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <!--farmOwner-->
        <v-list-tile :to="{name : 'farmOwner-index'}" exact>
          <v-list-tile-action>
            <v-icon>mdi-magnify</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              ค้นหาเกษตรกร
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <!--farmOwner-->
        <v-list-tile :to="{name : 'admin/report'}" exact>
          <v-list-tile-action>
            <v-icon>mdi-chart-areaspline</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              แผนภูมิรายงาน
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="{name : 'admin/farmer/report'}" exact>
          <v-list-tile-action>
            <v-icon>mdi-chart-areaspline</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              แผนภูมิรายงานสมาร์ทฟาร์ม
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <!--download form-->
        <v-list-tile href="./static/questionaire.pdf" target="_blank" exact>
          <v-list-tile-action>
            <v-icon>mdi-file-document</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              ดาวน์โหลดเเบบสอบถาม
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>

        <!--Users-->
        <v-list-tile :to="{name : 'user-index'}" exact>
          <v-list-tile-action>
            <v-icon>mdi-account-box</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              จัดการผู้ดูแลระบบ
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="{name : 'farmer-index'}" exact>
          <v-list-tile-action>
            <v-icon>mdi-account-circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              จัดการผู้ใช้เกษตรกร
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>

        <!--role-->
        <v-list-tile :to="{name : 'role-index'}" exact>
          <v-list-tile-action>
            <v-icon>mdi-account-key</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              จัดการสิทธิ์การใช้งาน
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>

      <!-- manual-->
        <v-list-group
        >
          <template slot="activator" >
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>mdi-book-multiple-variant</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  คู่มือการใช้งานระบบ
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>

          <v-list-tile
            href="./static/manual_complete.pdf" target="_blank" exact
          >
            <v-list-tile-action>
              <v-icon>mdi-checkbox-blank-circle</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>รายงานฉบับสมบูรณ์</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>


          <v-list-tile
            href="./static/android.pdf" target="_blank" exact
          >
            <v-list-tile-action>
              <v-icon>mdi-checkbox-blank-circle</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Android</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>


          <v-list-tile
            href="./static/ios.pdf" target="_blank" exact
          >
            <v-list-tile-action>
              <v-icon>mdi-checkbox-blank-circle</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>IOS</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>


      </v-list>

    </v-navigation-drawer>

    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="blue darken-3" dark app fixed dense class="elevation-0">
      <v-toolbar-title class="ma-0">
        <v-toolbar-side-icon @click.stop="drawer = !drawer" class="ma-0 "></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Cattle Information System</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu offset-y offset-x v-if="userData">
        <v-toolbar-title slot="activator">
          <v-btn flat>
            {{userData.username}}
            <v-icon>arrow_drop_down</v-icon>
          </v-btn>
        </v-toolbar-title>
        <v-list>
          <v-list-tile :to="{name:'user-userProfile',params : {id:userData.id,username:userData.username}}" class="black--text">
            <v-list-tile-title >
              <v-icon>mdi-account</v-icon>
              User Profile
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile :to="{name:'Login'}" @click="logout">
            <v-list-tile-title class="black--text">
              <v-icon>mdi-exit-to-app</v-icon>
              Logout
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

  import Base from "@/components/admin/Base"

  export default {
    extends : Base,
    props: {
      source: String
    },
    data: () => ({
      drawer: null,
      userData : null,
      items: [
        {
          action: 'manual',
          title: 'คู่มือ',
          items: [
            { title: 'List Item' }
          ]
        },
      ]
    }),
    async mounted () {
      let user = await this.$store.dispatch("admin/login/loadUser");
      this.checkUser(user)
      this.userData = user
    },
    methods : {
      checkUser : function (user) {
        if(!user){
          this.$router.push({name: 'Login'})
        }
      },
      logout : function () {
        console.log("logout")
        this.$store.dispatch("admin/login/logout")
      }
    }
  }
</script>
