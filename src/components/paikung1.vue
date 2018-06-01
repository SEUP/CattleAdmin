<template>
  <v-container fluid>
    <v-layout row wrap>

      <v-flex pb-3 sx-12>
        <v-text-field v-model="form.model" label="post title"  />
        <v-text-field label="post content" multi-line />
        <v-btn color="primary" @click="save()"> submit </v-btn>
      </v-flex>

      <v-flex mb-3xs12 class="display-1" >
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
      form : {}
    }),
    computed : {
      posts () {
        return this.$store.state.posts.postList;
      }
    },
    async created() {
      console.log(1);
      await this.load();
      console.log(5);
    },
    methods: {
      save : async function(){
        await this.$store.dispatch("posts/save",this.form);
        this.form = {};
      },
      load: async function () {
        await this.$store.dispatch("posts/load");
      },
      display: function (data) {
        this.posts = data;
      }
    }
  }
</script>
