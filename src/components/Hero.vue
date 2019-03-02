<template>
  <div class="hero">
    <img class="hero-image" src="../assets/img/logo.png" />
    <h2 class="hero-subtitle" v-html="settings.hero_subtitle" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json")
    }
  }
}
</script>

<style>
.hero {
    text-align: center;
    width: 700px;
    margin: 0 auto;
    padding: 4rem 0 8rem 0;
    position: relative;
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
    line-height: 1.68;
    padding: 0;
    margin: 0;
    opacity: 0.6;
}
.hero-image {
  padding-bottom: 30px;
  max-width: 784px;
  margin: 0 auto;
}
</style>
