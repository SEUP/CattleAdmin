<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex pb-3 xs-12>
        <v-text-field v-model="form.title" label="Post Title" />
        <v-text-field v-model="form.body" label="Post Content" multi-line/>
        <v-btn color="primary" @click="save()">Submit</v-btn>
      </v-flex>
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
      form : {}
    }),
    computed:{
      posts() {
        return this.$store.state.posts.postList
      }
    },
    async created() {
      console.log(1);
      await this.load();
      console.log(5);
    },
    methods: {
      save: async function () {
        await this.$store.dispatch("posts/save",this.form);
        this.form = {};
      },
      load: async function () {
        await this.$store.dispatch("posts/load")
      },
      display: function (data) {
        this.posts = data;
      }
    }
  }
</script>
