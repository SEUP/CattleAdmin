<template>

  <v-layout>
    <p>{{Roles}}</p>
    <v-btn @click = "search">Search</v-btn>
    <hr>
    {{role}}

  </v-layout>

</template>

<script>
    export default {
        name: "test2",
      data: () => ({
        Roles  : {},
        form : {
          keyword : "user",
          with : [],
          page : ''
        }
      }),computed :{
          role () {
            return this.$store.state.roles.rolesData
          }
      },
      async created  () {
        await  this.loadRoles()
      },
      methods : {
          loadRoles : async function () {
            let data = await this.$store.dispatch("roles/getRoles",);
            this.Roles = data
            await console.log("DDD",data)
          },
        search :async function () {
          let data  = await  this.$store.dispatch("roles/searchRoles",this.form)
          this.Roles = await data;
          console.log("Search",data);
        }
      }
    }
</script>

<style scoped>

</style>
