<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/sort">Sort by Your wish</router-link>
    </div>
    <Banner/>
    <router-view/>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
export default {
  components: {Banner}
}
</script>

<style>
html {
  margin: 0;
  padding: 0;
  background-color: #f1efef;
  overflow-x: hidden;
}

body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

#app {
  text-align: center;
  color: #2c3e50;
}



.container {
  display: flex;
  margin: 0 auto;
  padding: 0 30px;
  max-width: 1250px;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#nav {
  padding: 30px;
  background-color: black;
  font-size: 20px;
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #e2725b;
}
</style>
