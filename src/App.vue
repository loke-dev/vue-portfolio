
<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <router-view></router-view>
  </div>
</template>

<script>
import bot from './components/bot.vue'
/*
 * Root component
 */
export default {
  name: 'bot',
  components: {
    bot
  }
}
</script>

<style></style>
