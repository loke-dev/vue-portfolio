<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <header></header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import home from './components/info/Home.vue'
/*
 * Root component
 */
export default {
  name: 'home',
  components: {
    home
  }
}
</script>

<style scoped lang="stylus">
@import '~variables'

main
  text-align center
  margin-top 40px

header
  margin 0
  height 10px
  background-color $primary
</style>
