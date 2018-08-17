<template>
  <div>
    {{admin}} <br/>
    {{farmer}} <br/>
  </div>
</template>

<script>
  export default {
    name: "CrossLogin",
    data: () => ({
      admin: null,
      farmer : null,
    }),
    created() {
      this.admin = this.$route.params.admin;
      this.farmer = this.$route.params.farmer;

      this.login();
      this.$router.replace("/farmer/index")
    },
    methods :{
      login(){

      }
    }
  }
</script>

<style scoped>

</style>
