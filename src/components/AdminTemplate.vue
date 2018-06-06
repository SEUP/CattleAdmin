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
              Home
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="{name : 'admin-chaow'}" exact>
          <v-list-tile-action>
            <v-icon>mdi-account</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Chaow
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="{name : 'admin-got'}" exact>
          <v-list-tile-action>
            <v-icon>mdi-account</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Got
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="{name : 'admin-gotji'}" exact>
          <v-list-tile-action>
            <v-icon>mdi-account</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Gotji
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="{name : 'admin-porramet'}" exact>
          <v-list-tile-action>
            <v-icon>mdi-account</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Porramet
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{name : 'admin-porramet-table'}" exact>
          <v-list-tile-action>
            <v-icon>table</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              PorrametTable
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="{name : 'admin-user'}" exact>
          <v-list-tile-action>
            <v-icon>mdi-account</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              UserData
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="{name : 'admin-nook'}" exact>
          <v-list-tile-action>
            <v-icon>mdi-account</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Nook
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>




        <v-list-tile :to="{name : 'admin-most'}" exact>
          <v-list-tile-action>
            <v-icon>mdi-account</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Most
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="{name : 'admin-mostfarm'}" exact>
          <v-list-tile-action>
            <v-icon>folder_open</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              MostFarm
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="{name : 'admin-usermanagement'}" exact>
          <v-list-tile-action>
            <v-icon>folder_open</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              User Management
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>


        <v-list-tile :to="{name : 'admin-ford'}" exact>
          <v-list-tile-action>
            <v-icon>mdi-account</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Ford
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
      <v-text-field
        flat
        solo-inverted
        prepend-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon large>
        <v-avatar size="32px" tile>
          <img
            src="https://vuetifyjs.com/static/doc-images/logo.svg"
            alt="Vuetify"
          >
        </v-avatar>
      </v-btn>
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
