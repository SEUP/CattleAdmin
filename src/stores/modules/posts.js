export default {
  namespaced: true,
  state: {
    hello: "Hello World",
    postList: [
      {
        title: "Title",
        body: "Body",
      }
    ]
  },
  mutations: {
    setPostLists: function (state, posts) {
      state.postList = posts;
    },
    insertPost: function (state, post) {
      state.postList.unshift(post);
    }
  },
  actions: {
    load: async function (context) {
      await axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((r) => {
          let posts = r.data;
          context.commit("setPostLists", posts)
        })
        .catch((e) => {

        })

    },
    save: async function (context, form) {
      await axios.post("https://jsonplaceholder.typicode.com/posts",form)
        .then((r) => {
          context.commit('insertPost', r.data);
        })
        .catch((e) => {

        });
    },
  },
  getters: {}
};
