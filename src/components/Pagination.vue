<template>
  <div class="mainDiv">
    <div class="pagination-button">
      <button type="button" v-if="page != 1" @click="setPrevious"> Previous</button>
    </div>
    <div class="pagination-button ">
      <button class="active" type="button" v-for="pageNumber in pages.slice(page-1, page+5)"
              @click="setPage(pageNumber)"> {{ pageNumber }}
      </button>
    </div>
    <div class="pagination-button">
      <button type="button" @click="setNext" v-if="page < pages.length"> Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.posts.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    setPage(pageNumber) {
      this.$store.commit('setPage', pageNumber)
    },
    setPrevious() {
      this.$store.commit('setPrevious')
    },
    setNext() {
      this.$store.commit('setNext')
    }
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
    posts() {
      return this.$store.state.allPosts
    },

  },
  watch: {
    posts() {
      this.setPages()
    },
  },
}
</script>

<style scoped>
.mainDiv {
  display: flex;
  justify-content: center;
  margin: 10px;
}

.pagination-button{
  margin: 1px;
  padding: 5px;
}

</style>