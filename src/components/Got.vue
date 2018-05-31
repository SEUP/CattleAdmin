<template>
  <v-container fluid>
    <v-layout>
      <h1>Got</h1>
      <v-layout column>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-container fluid grid-list-md>
              <v-layout row wrap>
                <v-flex
                  v-for="card in cards"
                  v-bind="{ [`xs${card.flex}`]: true }"
                  :key="card.title"
                >
                  <v-card>
                    <v-card-media
                      :src="card.src"
                      height="400px"
                    >
                      <v-container fill-height fluid>
                        <v-layout fill-height>
                          <v-flex xs12 align-end flexbox>
                            <span class="headline white--text" v-text="card.title"></span>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card-media>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn icon>
                        <v-icon>favorite</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon>bookmark</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon>share</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>

  export default {
    name: "Got",
    data: () => ({

    }),
      data: () => ({
        cards: [
          { title: 'So good', src: 'https://images7.alphacoders.com/411/thumb-1920-411820.jpg', flex: 12 },
          { title: 'Favorite trips', src: 'http://cdn.wonderfulengineering.com/wp-content/uploads/2016/01/Desktop-Wallpaper-4.jpg', flex: 6 },
          { title: 'Best airlines', src: 'https://images.pexels.com/photos/17679/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350', flex: 6 }
        ]
      })
  }
</script>
