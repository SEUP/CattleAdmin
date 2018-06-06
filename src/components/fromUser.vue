<template>
  <v-container>
    <v-layout>
      <v-flex >
        <!--<h1 class="display-1">จัดการข้อมูลผู้ใช้ระบบ</h1>-->

        <v-card>
          <h1 class="display-1">จัดการข้อมูลผู้ใช้ระบบ</h1>



          <v-divider></v-divider>
          <div class="text-xs-left">
            <v-bottom-sheet v-model="sheet">
              <v-btn slot="activator" color="green" dark>เพิ่มผู้ใช้</v-btn>
              <v-list>
                <v-subheader>Open in</v-subheader>
                <v-list-tile
                  v-for="tile in tiles"
                  :key="tile.title"
                  @click="sheet = false"
                >

                  <v-list-tile-avatar>
                    <v-avatar size="32px" tile>
                      <img :src="`/static/doc-images/bottom-sheets/${tile.img}`" :alt="tile.title">
                    </v-avatar>
                  </v-list-tile-avatar>
                  <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-bottom-sheet>
          </div>

          <v-layout row>
            <v-flex xs10 offset-xs1>
              <v-text-field
                id="testing"
                name="input-1"
                label="ค้นหา"
                append-icon="mdi-magnify"
                color="green"
              ></v-text-field>

            </v-flex>

          </v-layout>

          <v-divider></v-divider>
          <v-data-table>

          </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      sheet: false,
      tiles: [
        { img: 'keep.png', title: 'Keep' },
        { img: 'inbox.png', title: 'Inbox' },
        { img: 'hangouts.png', title: 'Hangouts' },
        { img: 'messenger.png', title: 'Messenger' },
        { img: 'google.png', title: 'Google+' }
      ]
    })
  }
</script>




