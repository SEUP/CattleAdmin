<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawerRight"
      fixed
      right
      clipped
      app
    >
      <v-list dense>
        <v-list-tile @click.stop="right = !right">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="blue-grey"
      dark
      fixed
      app
      clipped-right
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Toolbar</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click.stop="left = !left">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer
      v-model="left"
      temporary
      fixed
    ></v-navigation-drawer>
    <v-content>
      <v-container>
        <v-layout row>
          <v-flex>
            <v-carousel>
              <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
            </v-carousel>
          </v-flex>
          <v-flex class="pa-2">
            <img src="https://images-na.ssl-images-amazon.com/images/I/51oXwXn8%2BZL._SX376_BO1,204,203,200_.jpg">
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-navigation-drawer
      v-model="right"
      right
      temporary
      fixed
    ></v-navigation-drawer>
    <v-footer color="blue-grey" class="white--text" app>
      <span>Vuetify</span>
      <v-spacer></v-spacer>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: true,
      drawerRight: true,
      right: null,
      left: null, items: [
        {
          src: 'http://www.gamechannel.hu/pictures/hirblock/kiszivargott-az-elso-battlefield-5-kep-irany-a-vilaghaboru_1.jpg'
        },
        {
          src: 'https://media.contentapi.ea.com/content/bf/en-us/games/battlefield-1/premium/_jcr_content/par/bfpremiumhero/premiumContent/bfpremiumcontent_1_c/contentImages/bfpremiumimage_1/image.img.jpg'
        },
        {
          src: 'https://www.pcgamesn.com/sites/default/files/Battlefield%201%20port%20review.jpg'
        },
        {
          src: 'https://content.ebgames.com.au/website/images/detail/217221_detail_1000.jpg'
        }
      ]
    }),
    props: {
      source: String
    }
  }
</script>
