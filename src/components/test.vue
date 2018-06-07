<template>
<v-container fluid>
  <v-layout row wrap>
    <v-flex>
      {{Users}}
    </v-flex>
    <hr>
    <v-flex>
      <v-btn @click="createUser()">New User</v-btn>
      <v-btn @click="editUser()">Edit User</v-btn>
      <v-btn @click="delUser()">Delete User</v-btn>
      <hr>
    </v-flex>
    {{userData}}
  </v-layout>
</v-container>
</template>

<script>
    export default {
        name: "test",
      data : () => ({
        idForDel : 4,
        form : {
          keyword : "",
          page : null,
          with : null
        },
        formData : {"id":1,"name":"SuperAdministrator",
          "personal_id":null,"email":"superadministrator@app.com",
          "username":"superadministrator","created_at":"2018-05-24 03:43:16",
          "updated_at":"2018-05-24 03:43:16","user_province":null,"user_amphur"
            :null,"user_district":null},

        formData2 : {"name":"Farmer","password" : "123456","password_confirmation":"123456",
          "email":"farmer@app.com","username":"farmer2",
          "created_at":"2018-05-24 03:43:17","updated_at":"2018-05-24 03:43:17"},

        Users: null

      }),
      async created () {
        await  this.loadData()
      },
      computed :  {
        userData  (){
         return this.$store.state.users.userData
        }
    }
      ,
      methods : {
          loadData :async function () {
            let data =  await this.$store.dispatch("users/getUsers",this.form)
            console.log("IN test",data)
            this.Users  = data

          },
          createUser : async function () {
            let data = await this.$store.dispatch("users/createUser",this.formData2)
            await console.log ("IN Vue Create",data)
          },
          editUser : async function () {
            let  data = await  this.$store.dispatch("users/updateUser",this.formData)
            await console.log("In Vue Edit",data)
          },
          delUser :async function () {
            let data = await this.$store.dispatch("users/deleteUserById",this.idForDel)
            await  console.log(data,"has been destroy (In Vue)")
          }

      }
    }
</script>

<style scoped>


</style>
