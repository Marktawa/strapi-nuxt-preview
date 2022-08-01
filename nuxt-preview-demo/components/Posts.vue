// /components/Posts.vue

<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <Post v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      posts: (state) => {
        return state.posts
      },
    }),
  },
}
</script>
<style></style>

