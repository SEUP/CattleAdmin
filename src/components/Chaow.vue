<template>

  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs12>
            <v-alert :value="true" type="success">
              This is a success alert.
            </v-alert>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs6>
            <img src="@/assets/xxx.jpeg">

            <v-btn color="success">Success</v-btn>
          </v-flex>
          <v-flex xs6>
            <v-card>
              <v-card-media
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJpmNbQur9fVYe_LnZ2P8W8WtQ7jQVSvPxQc3l8S8F2xqxlLo"
                height="200px">
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                  <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat color="orange">Share</v-btn>
                <v-btn flat color="orange">Explore</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    components : {},
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }
</script>
