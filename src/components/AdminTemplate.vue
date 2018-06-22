<template>
  <v-app id="inspire" v-if="userData">
    <v-navigation-drawer
      width="230"
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
        <v-divider></v-divider>

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
        <v-divider></v-divider>

        <!--report-->


        <!--download form-->
        <v-list-tile href="http://mct.ict.up.ac.th:10007/file/questionaire.pdf" exact>
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

        <!--role-->
        <v-list-tile :to="{name : 'role-index'}" exact>
          <v-list-tile-action>
            <v-icon>mdi-account-key</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              จัดการสิทธิ์ผู้ใช้
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
              จัดการข้อมูลผู้ใช้ระบบ
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>

      </v-list>

    </v-navigation-drawer>

    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="blue darken-3" dark app fixed dense class="elevation-0">
      <v-toolbar-title class="ml-0 pl-3 mr-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Cattle Information System</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu offset-y offset-x>
        <v-toolbar-title slot="activator">
          <v-btn flat>
            {{userData.username}}
            <v-icon>arrow_drop_down</v-icon>
          </v-btn>
        </v-toolbar-title>
        <v-list>
          <v-list-tile :to="{name:'user-userProfile',params : {id:userData.id,username:userData.username}}">
            <v-list-tile-title >
              <v-icon>mdi-account</v-icon>
              User Profile
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile :to="{name:'Login'}">
            <v-list-tile-title>
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
  export default {
    props: {
      source: String
    },
    data: () => ({
      drawer: null,
      userData : null
    }),
    async mounted () {
      let user = await this.$store.dispatch("login/loadUser");
      //this.checkUser(user)
      this.userData = user
    },
    methods : {
      checkUser : function (user) {
        console.log("user",user)
        if(!user){
          this.$router.push({name: 'Login'})
        }
      }
    }
  }
</script>
