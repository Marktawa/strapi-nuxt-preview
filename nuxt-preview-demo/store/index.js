// store/index.js
export const state = () => ({
    posts: [],
  })
  export const mutations = {
    STORE_POSTS(state, posts) {
      state.posts = posts
    },
  }
  export const actions = {
    async nuxtServerInit({ commit }) {
      const posts = await this.$axios.$get('http://localhost:1337/api/posts')
        .catch((e) => console.error(e))
      commit('STORE_POSTS', posts.data)
    },
  }