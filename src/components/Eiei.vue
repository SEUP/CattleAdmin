<template>
  <v-app
    id="inspire"
    dark
  >

    <v-toolbar
      color="purple"
      dense
      fixed
      clipped-left
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <span class="group pa-2">
        <v-icon x-large>home</v-icon></span>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">Love me Love my Cat</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 650px">
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="search"
          color="white"
          hide-details
        ></v-text-field>
      </v-layout>
    </v-toolbar>
    <v-content>
        <v-layout justify-center align-center>
          <v-flex >
            <v-layout align-center>
              <v-carousel>
                <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
              </v-carousel>
              <v-bottom-nav :value="true" :active.sync="e1" absolute color="transparent">
                <v-btn flat color="teal" value="recent">
                  <span>Recent</span>
                  <v-icon>history</v-icon>
                </v-btn>
                <v-btn flat color="teal" value="favorites">
                  <span>Favorites</span>
                  <v-icon>favorite</v-icon>
                </v-btn>
                <v-btn flat color="teal" value="nearby">
                  <span>Nearby</span>
                  <v-icon>place</v-icon>
                </v-btn>
              </v-bottom-nav>
            </v-layout>

          </v-flex>
        </v-layout>
    </v-content>
  </v-app>
</template>
<script>
  export default {
    name: 'Eiei',
    data() {
      return {
        currencies: [
          'USD', 'JPY', 'THB'
        ],
        selectedCurrency: "",
        msg: 'Welcome to Your Vue.js App',
        output : null,
        items: [
          {
            src: 'https://wallpaper.campus-star.com/app/uploads/2016/08/ScottishFold-cat6.jpg'
          },
          {
            src: 'https://wallpaper.campus-star.com/app/uploads/2016/08/ScottishFold-cat8.jpg'
          },
          {
            src: 'https://wallpaper.campus-star.com/app/uploads/2016/08/ScottishFold-cat3.jpg'
          },
          {
            src: 'https://wallpaper.campus-star.com/app/uploads/2016/08/ScottishFold-cat1.jpg'
          }
        ]

      }
    },
    methods: {
      updateData: async function (event) {
        console.log(event);

        let result = await axios.get("http://data.fixer.io/api/latest", {
          params: {
            access_key: "69e2a60ca026b20ae9bca7a62a57dddc",
            symbols: event,
          }})
          .then( (response) => {
            console.log(response);
            return response;
          })
          .catch((error) => {
            return null;
          })
        if(result){
          this.output = result.data;
        }

      }
    }
  }
</script>
