<template>
  <div id='bot'>
    <p>
      <messages></messages>
    </p>
  </div>
</template>

<script>
import Messages from '../bot/ChatMessages'
import store from '../bot/store'
export default {
  store,
  name: 'Chat',
  components: {
    Messages
  }
}
</script>

<style scoped>
.primary {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
