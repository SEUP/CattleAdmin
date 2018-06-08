<template>
  <v-app id="inspire">
    <v-navigation-drawer
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

        <!--farmOwner-->
        <v-list-tile :to="{name : 'user-create'}" exact>
          <v-list-tile-action>
            <v-icon>mdi-plus</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              บันทึกข้อมูลเกษตรใหม่
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

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



      </v-list>

     </v-navigation-drawer>

    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="blue darken-3" dark app fixed>
      <v-toolbar-title class="ml-0 pl-3 mr-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Cattle Information System</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu offset-y offset-x>
        <v-toolbar-title slot="activator">
          <v-btn flat>
            <v-icon>settings</v-icon>
            <v-icon>arrow_drop_down</v-icon>
          </v-btn>
        </v-toolbar-title>
        <v-list >
          <v-list-tile >
            <v-list-tile-title >
              <v-icon >mdi-account</v-icon>
              User Profile
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile >
            <v-list-tile-title >
              <v-icon >exit_to_app</v-icon>
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
    })
  }
</script>
