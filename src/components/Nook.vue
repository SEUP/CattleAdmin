<template>
  <v-app
    id="inspire"
    dark
  >
    
    <v-toolbar
      color="red"
      dense
      fixed
      clipped-left
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-icon class="mx-3">fab fa-youtube</v-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">Nookiiz</span>
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
      <v-container fill-height>
        <v-layout justify-center align-center>
            <input type="number" v-model="num1">
            <input type="number" v-model="num2">
            =<input type="number" v-model="ans">
            
            <!-- <v-btn color="success" v-on:click="Test">Test</v-btn> -->
            <v-menu transition="slide-y-transition">
            <v-btn slot="activator" dark color="danger">Operator</v-btn>
            <v-list>
                <v-btn v-text="'บวก'" v-on:click="compute(num1,num2,operators['+'])"></v-btn><br>
                <v-btn v-text="'ลบ'" v-on:click="compute(num1,num2,operators['-'])"></v-btn><br>
                <v-btn v-text="'คูณ'" v-on:click="compute(num1,num2,operators['*'])"></v-btn><br>
                <v-btn v-text="'หาร'" v-on:click="compute(num1,num2,operators['/'])"></v-btn><br>
            </v-list>
            </v-menu>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: true,
      items: [
        { icon: 'trending_up', text: 'Most Popular' },
        { icon: 'subscriptions', text: 'Subscriptions' },
        { icon: 'history', text: 'History' },
        { icon: 'featured_play_list', text: 'Playlists' },
        { icon: 'watch_later', text: 'Watch Later' }
      ],
      items2: [
        { picture: 28, text: 'Joseph' },
        { picture: 38, text: 'Apple' },
        { picture: 48, text: 'Xbox Ahoy' },
        { picture: 58, text: 'Nokia' },
        { picture: 78, text: 'MKBHD' }
      ],
      ans : 0,
      num1 : 3,
      num2 : 4,
      
      operators : {
          '+' : (a,b) => { return a+b },
          '-' : (a,b) => { return a-b },
          '*' : (a,b) => { return a*b },
          '/' : (a,b) => { return a/b }
      }
      
    }),
    props: {
      source: String
    },
    methods: {
        compute : function(a,b,func) {
            let x = func(parseInt(a),parseInt(b));
            this.ans = x;
        }
        
    }
  }
</script>