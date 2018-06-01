<template>
  <v-container fluid>
    <v-layout row wrap>
        <v-flex pb-3 xs-12>
            <v-text-field label="Post Title" v-model="form.title"/>
            <v-text-field label="Post Content" v-model="form.content" multi-line=""/>
            <v-btn color="red" @click="save()">Submit</v-btn>
        </v-flex>
        <v-flex xs12>
            <H1>Chaos</H1>
        </v-flex>
        <v-flex xs-12>
            <v-flex>
                <div v-bind:key="post" v-for="post in posts"> 
                    <h1>{{post.id}}.{{post.title}}</h1>
                    <p>{{post.body}}</p>
                    <hr>
                </div>
            </v-flex>
        </v-flex>
    </v-layout>
  </v-container>
  
</template>

<script>
  export default {
    name: "Nook",
    
   data: () => ({
      form : {}
    }),
    computed : {
      posts () {
        return this.$store.state.posts.postList;
      }
    },
    async created() {
      await this.load();
    },
    methods :{
        save : async function () {
            await this.$store.dispatch("posts/save",this.form);
            this.form = {};
        },
        load: async function () {
            await this.$store.dispatch("posts/load");
        },
        display: function (data) {
            this.posts
        }
    }
  }
</script>
