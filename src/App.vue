
<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <router-view></router-view>
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

<style></style>
