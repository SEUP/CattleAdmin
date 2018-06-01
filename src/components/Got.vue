<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="display-1" mb-3>
        Got
      </v-flex>
      <v-flex>
        <template v-for="post in posts">
          <h3>{{post.title}}</h3>
          <p>{{post.body}}</p>
          <hr/>
        </template>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

  export default {
    name: "Got",
    data: () => ({
      posts: []
    }),
    async created() {
      await this.load();
      console.log("yyy")
    },
    methods: {
      load: async function () {

        await axios.get("https://jsonplaceholder.typicode.com/posts")
          .then((response) => {
            console.log(response);
            this.display(response.data);

          })
          .catch((error) => {
            console.log(error);
          })
      },
      display: function (data) {
        this.posts = data;
      }
    }
  }
</script>
