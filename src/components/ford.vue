<template>
  <v-container fluid>
    <v-layout row wrap>

      <v-flex pb-3 xs-12>
        <v-text-field label="Post title" v-model="form.title"/>
        <v-text-field label="Post Content" multi-line v-model="form.body"/>
        <v-btn color="primary" @click="save()">Submit</v-btn>
      </v-flex>
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
         form: {}
      }),
        computed : {
          posts () {
            return this.$store.state.posts.postList;
          }
      },

      async created() {
        await this.load();
        console.log('thfth');
      },
      methods: {
        save:async function(){
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

<style scoped>

</style>
