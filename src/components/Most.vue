<template>

  <v-layout row wrap>
    <v-flex pb-3 xs12 class="display-1">
      Most Intawong Posts
    </v-flex>
    <v-flex>
      <template v-for=" post in posts">
        <h3>{{post.title}}</h3>
        <p>{{post.body}}</p>
      </template>

    </v-flex>

  </v-layout>



</template>

<script>
  export default {
    name: "Most",
    data: () => ({
      posts : []
    }),
    async created(){
      console.log(1);
      await this.load();
      console.log(5);
    },
    methods :{
      load : async function () {
        console.log(2);
        await axios.get("https://jsonplaceholder.typicode.com/posts")
          .then((response) => {
            console.log(3);
            this.display(response.data);
        })
          .catch((error) => {
            console.log(3);
            console.log(error);
          })
        console.log(4)
      },
        display : function (data) {
          this.posts = data ;
        },
    }

  }
</script>

<style scoped>

</style>
