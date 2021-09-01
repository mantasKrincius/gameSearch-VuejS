<template>
  <div>
    <div class="search-div" id="pop-up">
      <label for="platform">Choose a Platform:</label>
      <select id="platform" name="platforms" v-model="sortType.platform" required>
        <option value="pc">Pc</option>
        <option value="steam">Steam</option>
        <option value="epic-games-store">Epic Games Store</option>
        <option value="ubisoft">Ubisoft</option>
        <option value="gog">GoG</option>
        <option value="itchio">Itchio</option>
        <option value="ps4">PS4</option>
        <option value="xbox-one">xBoxOne</option>
        <option value="switch">Switch</option>
        <option value="android">Android</option>
        <option value="ios">IOS</option>
        <option value="vr">VR</option>
        <option value="battlenet">Battlenet</option>
        <option value="origin">Origin</option>
        <option value="drm-free">DRM free</option>
      </select>

      <label for="type">Choose a Type:</label>
      <select id="type" name="types" v-model="sortType.type" required>
        <option value="game">Game</option>
        <option value="loot">Loot</option>
        <option value="beta">Bet</option>
      </select>

      <label for="sortBy">Sort By:</label>
      <select id="sortBy" name="sorts" v-model="sortType.sortBy" required>
        <option value="date">Date</option>
        <option value="value">Value</option>
        <option value="popularity">Popularity</option>
      </select>
      <button @click="getGameBy">Search</button>
    </div>
    {{ message }}

    <div class="results-div">
      <div v-for="(item, index) in sortedGames" :key="index">
        <PostComponent :item="item"/>
      </div>
    </div>

  </div>
</template>

<script>
import PostComponent from "@/components/PostComponent";

export default {
  name: "SortBy",
  components: {PostComponent},
  data() {
    return {
      sortType: {
        platform: "",
        type: "",
        sortBy: ""
      },
      message: ""
    }
  },
  methods: {
    getGameBy() {
      if (this.sortType.platform && this.sortType.type && this.sortType.sortBy) {
        this.$store.dispatch('getGameBy', this.sortType)
        this.message = ""
      } else {
        this.message = "Please choose all options"
      }
    },
  },
  computed: {
    sortedGames() {
      return this.$store.state.sortedGame
    }
  }
}
</script>

<style scoped>
.results-div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.search-div {
  position: relative;
  padding: 30px;
  background-color: #fff;
  margin: 0 10px;
}

select {
  margin: 10px;
}

#pop-up {
  top: -650px;
  animation: drop 1s ease forwards;
}

@keyframes drop {
  0% {
    opacity: 0
  }
  70% {
    transform: translateY(700px)
  }
  100% {
    transform: translateY(650px);
    opacity: 1;
  }
}
</style>