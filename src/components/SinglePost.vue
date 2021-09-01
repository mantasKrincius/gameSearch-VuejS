<template>
  <div class="container mobile">
    <div class="f-grow ">
      <img class="singlePostImg" :src="singlePost.thumbnail"/>
    </div>
    <div class="f-grow">
      <div class="title">
        <h2>{{ singlePost.title }}</h2>
      </div>
      <h4>Number of users who have it: <u>{{ singlePost.users }} </u></h4>
      <h4>Game type: <b>{{ singlePost.type }}</b></h4>
      <h4>Status: {{ singlePost.status }} untill: {{ singlePost.end_date }}</h4>
      <h4>Platforms: {{ singlePost.platforms }}</h4>
      <h4>Seller page: <a :href="singlePost.gamerpower_url" target="_blank">{{ singlePost.gamerpower_url }}</a></h4>
      <h4>Game website: <a :href="singlePost.open_giveaway_url" target="_blank">{{ singlePost.open_giveaway_url }}</a></h4>
      <div>
        <h3>Descripiton</h3>
        <p>{{ singlePost.description }}</p>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "SinglePost",
  computed: {
    singlePost() {
      return this.$store.state.singlePost
    }
  }
}
</script>

<style scoped>


.f-grow {
  flex-grow: 1;
}

.singlePostImg {
  width: 600px;
  height: 500px;
  padding: 10px;
}

@media (max-width: 600px) {
  .mobile {
    flex-wrap: wrap;
  }
}
</style>