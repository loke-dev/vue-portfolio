<template>
  <div class="hero">
    <img class="hero-image" alt="hero logo" src="../assets/img/logo.png" />
    <h2 class="hero-subtitle" v-html="settings.hero_subtitle" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json"),
    }
  },
}
</script>

<style>
.hero {
  text-align: center;
  width: 100vw!important;
  margin: 0 auto;
  margin-bottom: 50px;
  padding: 16rem 0 8rem 0;
  position: relative;
  justify-content: inherit!important;
  height: 100vh;
  background: linear-gradient(to right, #2f454e, #203A43, #11252d);
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  padding: 0;
  margin: 0 0 2rem 0;
}
.hero-title p,
.hero-subtitle p {
  margin: 0;
  padding: 0;
}
.hero-subtitle {
  font-size: 1.15em;
  font-weight: 400;
  color: white;
  line-height: 1.68;
  padding: 40px 20px;
  opacity: 0.6;
}
.hero-image {
  padding-bottom: 30px;
  max-width: 800px;
  width: 90vw;
  margin: 0 auto;
}
</style>
