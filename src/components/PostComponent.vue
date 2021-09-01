<template>
  <div class="post-card" :style="worth < 10 ? green : yellow">
    <h2>{{ item.title }}</h2>
    <img :src="item.image" alt="Game picture"/>
    <h3>{{ item.type }}</h3>
    <h4>{{ item.published_date }}</h4>
    <h3>{{ item.worth }}</h3>
    <div class="button-div"  >
      <button @click="moreInfo">More info</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostComponent",
  props: ['item'],
  data() {
    return {
      yellow: {
        backgroundColor: '#fdfd96'
      },
      green: {
        backgroundColor: '#32cd32'
      },
      worth: 0
    }
  },
  methods: {
    moreInfo() {
      this.$router.push(`/gameid/${this.item.id}`)
      this.$store.dispatch('moreInfo', this.item.id)
    },
  },
  beforeUpdate() {
    this.worth = this.item.worth
    this.worth = this.worth.split('$')[1];
  },
 mounted() {
    this.worth = this.item.worth
  }
}
</script>

<style scoped>
.post-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 550px;
  margin: 5px;
  background-color: antiquewhite;
}

.post-card img {
  width: 350px;
  height: 450px;
}

h2 {
  width: 350px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}

h3, h4 {
  margin: 0;
  padding: 10px;
}

.button-div {
  padding: 10px;
}
</style>
