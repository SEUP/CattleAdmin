<template>
  <v-layout column>
    <v-flex>
      <v-card-text>Farm Owners</v-card-text>
      <hr>
      {{Data}}
    </v-flex>
  </v-layout>
</template>

<script>
    export default {
        name: "test3",
      data: () => ({
        Data : null,
        form : {
          keyword : "เสน่ห์",
          page: null,
          with : []
        }
      }),
      async created () {
         this.Data =  await this.$store.dispatch("farmOwners/getFarmOwners",this.form);

      }
    }
</script>

<style scoped>

</style>
