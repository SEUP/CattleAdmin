<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="display-1" mb-3>
        paikung
      </v-flex>
      <v-flex>

        <template v-for="post in posts">
        <h1> {{post.title}} </h1>
        <p>{{post.body}}</p>
        <hr/>
        </template>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

  export default {
    name: "paikung",
    data: () => ({
      posts: []
    }),
    async created() {
      console.log(1);
      await this.load();
      console.log(5)
    },
    methods: {
      load:async function () {
        console.log(2)

        await axios.get("https://jsonplaceholder.typicode.com/posts")
          .then((response) => {
            console.log(3);
            this.display(response.data);
          })
          .catch((error) => {
            console.log(error);
            console.log(3);
          })
        console.log(4);
      },
      display: function (data) {
      this.posts = data ;
      }
    }
  }
</script>
