<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex pb-3 xs12 class="display-1">
        Chissanupong Posts
      </v-flex>

      <v-flex>
        <template v-for="post in posts">
        <h1>{{post.title}}</h1>
        <p>{{post.body}}</p>
        <hr/>
        </template>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    export default {
      name: "ford",
      data: () => ({
        posts : []
      }),
      async created() {
        await this.load();
        console.log('thfth');
      },
      methods: {
        load: async function () {
          axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
              console.log(response);
              this.display(response.data);

            })
            .catch((error) =>{
              console.log(error);
            })
        },
        display: function (data) {
          this.posts = data;
        }
      }
    }

</script>

<style scoped>

</style>
