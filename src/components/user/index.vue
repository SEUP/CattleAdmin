<template>
    <v-container >
      <v-layout align-center>
        <v-flex>
          <h1 class="display-2">จัดการข้อมูลผู้ใช้ระบบ</h1>
        </v-flex>
      </v-layout>
      <v-divider class="my-3"></v-divider>
      <v-layout row>
        <v-flex xs12 >
          <v-card>
            <v-layout row>
              <v-flex xs3 >
                <v-btn color="info">เพิ้ม</v-btn>
              </v-flex>
              <v-flex xs7 offset-xs6>
                <v-text-field
                  id="testing"
                  name="input-1"
                  label="ค้นหา"
                  append-icon="mdi-magnify"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-divider class="my-3"></v-divider>
            <v-data-table
              :headers="headers"
              :items="item"
              hide-actions
              class="elevation-1"
            >
              <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.email }}</td>
                <td>{{ props.item.role }}</td>
                <td>{{ props.item.atdes}}</td>
                <td>{{ props.item.action }}</td>
                <div>
                  <v-btn  color="success" @click>Edit</v-btn>
                  <v-btn  color="error"@click>Delete</v-btn>
                </div>
              </template>
            </v-data-table>
            <div class="text-xs-center">
              <v-pagination :length="1" v-model="page"></v-pagination>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
  </v-container>
</template>


<script>
  export default {
    data: () => ({
      headers:[
        {text: "name", align:"center" ,value:"name"},
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

      ],item :[{name:"paikung",email:"paikung@root", role:"admin" ,atdes: "เมือง นางเเล เชียงราย"
      }]
    })
  }
</script>




