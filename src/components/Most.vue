<template>
 <v-container fluid>
  <v-layout row wrap>

    <v-flex pb-3 xs-12>
      <v-text-field label="Post Title" v-model="from.title"/>
      <v-text-field label="Post Body" multi-line v-model="from.body"/>
      <v-btn color="pink" @click="save()"> Submit </v-btn>
    </v-flex>

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

 </v-container>

</template>

<script>
  export default {
    name: "Most",
    data: () => ({
      from:{}
    }),
    computed : {
      posts(){
        return this.$store.state.posts.postList;
      }
    },
    async created(){
      await this.load();
      console.log("1");
    },
    methods :{
      save : async function(){
        await this.$store.dispatch("posts/save",this.from);
        this.from = {};
      },

      load : async function () {
        await this.$store.dispatch("posts/load");
      },
        display : function (data) {
          this.posts = data ;
        },
    }

  }
</script>

<style scoped>

</style>
