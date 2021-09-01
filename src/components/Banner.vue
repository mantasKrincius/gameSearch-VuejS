<template>
  <div class="banner">
    <div class="banner-bg">
      <img
          src="https://png.pngtree.com/background/20210711/original/pngtree-fantasy-forest-banner-background-illustration-picture-image_1101012.jpg"/>
      <div class="banner-bg second-banner-animation">
        <h1>Offers will be available till: 2021/10/01</h1>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Banner"
}
</script>

<style scoped>

.banner img {
  width: 100%;
  height: 350px;
  padding: 0;
}

.banner {
  height: 350px;
}

.banner-bg {
  color: white;
  display: flex;
}

/*.banner-animation {*/
/*  position: absolute;*/
/*  left: 0;*/
/*  animation-name: moving-banner;*/
/*  animation-duration: 20s;*/
/*  animation-fill-mode: both;*/
/*  animation-iteration-count: infinite;*/
/*  animation-timing-function: linear;*/
/*}*/
/*@keyframes moving-banner {*/
/*  from{transform: translateX(-1000px)}*/
/*  to{transform: translateX(2400px)}*/
/*}*/

.second-banner-animation {
  position: absolute;
  left: 0;
  animation-name: moving-banner2;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}


@keyframes moving-banner2 {
  from {
    transform: translateX(-100px)
  }
  to {
    transform: translateX(1900px)
  }
}

</style>