<template>
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">{{ post.attributes.title }}</h5>
        <p class="card-text">
          {{ post.attributes.description }}
        </p>
        <nuxt-link :to="`/posts/${post.id}`" class="btn btn-primary text-white"
          >View Post</nuxt-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
<style scoped>
a {
  color: inherit;
}
</style>