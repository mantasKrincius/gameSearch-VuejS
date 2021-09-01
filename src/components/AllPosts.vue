<template>
  <div>
    <Pagination/>
    <div class="main-div">
      <div v-for="(item, index) in displayedPosts" :key="index">
        <PostComponent :item="item"/>
      </div>
    </div>
    <Pagination/>
  </div>
</template>

<script>

import PostComponent from "@/components/PostComponent";
import Pagination from "@/components/Pagination";

export default {
  name: "AllPosts",
  components: {Pagination, PostComponent},
  methods: {
    paginate() {
      let page = this.page;
      let perPage = this.perPage;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);
      return this.posts.slice(from, to);
    },
  },
  computed: {
    page() {
      return this.$store.state.page
    },
    perPage() {
      return this.$store.state.perPage
    },
    pages() {
      return this.$store.state.pages
    },
    displayedPosts() {
      return this.paginate(this.posts);
    },
    posts() {
      return this.$store.state.allPosts
    },
  },
  mounted() {
    this.$store.dispatch('getAllPosts')
  }
}
</script>

<style scoped>
.main-div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>