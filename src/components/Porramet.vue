<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      class="grey lighten-4"
      app
    >
      <v-list
        dense
        class="grey lighten-4"
      >
        <template v-for="(item, i) in items">
          <v-layout
            v-if="item.heading"
            :key="i"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-right">
              <v-btn small flat>edit</v-btn>
            </v-flex>
          </v-layout>
          <v-divider
            v-else-if="item.divider"
            :key="i"
            dark
            class="my-3"
          ></v-divider>
          <v-list-tile
            v-else
            :key="i"
            @click=""
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grey--text">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="amber" app absolute clipped-left>
      <v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5">Google&nbsp;<span class="text">Keep</span></span>
      <v-text-field
        solo-inverted
        flat
        label="Search"
        prepend-icon="search"
      ></v-text-field>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container column wrap>
        <v-layout>
          <v-flex>
            <v-carousel>
              <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
            </v-carousel>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'http://cuttriss.co.nz/wp-content/uploads/2016/11/bg-green.png'
          },
          {
            src: 'data:image/jpeg;base64,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'
          },
          {
            src: 'http://p.motionelements.com/stock-video/nature/me7846189-green-leaf-front-bg-k-4k-a0060.jpg'
          },
          {
            src: 'https://images.fineartamerica.com/images-medium-large/leaf-isolated-on-white-background-mongkol-chakritthakool.jpg'
          }
        ]
      }
    }
  }
</script>

<style>
  #keep main .container {
    height: 660px;
  }
  .navigation-drawer__border {
    display: none;
  }
  .text {
    font-weight: 400;
  }
</style>
