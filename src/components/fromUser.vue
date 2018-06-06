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
            </v-bottom-sheet>
          </div>
          <v-layout row>
            <v-flex xs4>
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
          <v-data-table
            :headers="headers"
            :items="item"
            hide-actions
            class="elevation-1"
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.id }}</td>
              <td>{{ props.item.email }}</td>
              <td>{{ props.item.role }}</td>
              <td>{{ props.item.atdes}}</td>
              <td>{{ props.item.action }}</td>
              <div>
                <v-btn  color="success">Edit</v-btn>
                <v-btn  color="error">Delete</v-btn>
              </div>
            </template>
          </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      headers:[
        {text: "ID", align:"center" ,value:"id"},
        {text: "Email", align:"left" ,value:"email"},
        {text: "Role", align:"left" ,value:"role"},
        {text: "จังหวัด อำเภอ ตำบล", align:"left" ,value:"atdes"},
        {text: "Action", align:"left" ,value:"action"},


      ],
      sheet: false,
      tiles: [
        { img: 'keep.png', title: 'Keep' },
        { img: 'inbox.png', title: 'Inbox' },
        { img: 'hangouts.png', title: 'Hangouts' },
        { img: 'messenger.png', title: 'Messenger' },
        { img: 'google.png', title: 'Google+' }

      ],item :[{ID:454545,email:"paikung@root", role:"admin" ,atdes: "เมือง นางเเล เชียงราย"
      }]
    })
  }
</script>




