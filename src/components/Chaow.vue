<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex pb-3 xs12 class="display-1">
        Chaow Posts
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
    name: "Chaow",
    data: () => ({
      posts : []
    }),
    async created() {
      console.log(1);
      await this.load();
      console.log(5);
    },
    methods: {
      load: async function () {
        console.log(2);
        await axios.get("https://jsonplaceholder.typicode.com/posts")
          .then((r) => {
            console.log(3);
            this.display(r.data);
          })
          .catch((e) => {
            console.log(3);
            console.log(e);
          })
        console.log(4);
      },
      display: function (data) {
        this.posts = data;
      }
    }
  }
</script>
