<template>
  <div class="hero">
    <img class="hero-image" alt="hero logo" src="../assets/img/logo.png" />
    <h2 class="hero-title" v-html="settings.hero_title" />
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

<style lang="sass">
.hero
  text-align: center
  width: 100vw
  margin: 0 auto
  margin-bottom: 50px
  padding: 19rem 0 8rem 0
  position: relative
  justify-content: inherit !important
  height: 100vh
  background-image: linear-gradient(to top, #12282b, #2f434a, #11252db0), url(../assets/img/desk.jpg)
  background-position: top
  background-repeat: no-repeat
  background-size: cover

  @media (max-width: 560px)
    padding: 17rem 0 8rem 0

  @media (max-width: 430px)
    padding: 15rem 0 8rem 0

.hero-title 
  margin: 0
  padding: 0
  font-size: 1.5em
  font-weight: 200
  color: white
  line-height: 1.68
  padding: 40px 20px
  opacity: 0.6

.hero-image
  padding-bottom: 30px
  max-width: 800px
  width: 90vw
  margin: 0 auto

.coffee-stain
  opacity: 0.1
</style>
