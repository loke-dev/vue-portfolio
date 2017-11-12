<template>
  <div id='bot'>
    <p>
      <messages name="message"> </messages>
    </p>
  </div>
</template>

<script>
import Messages from '../bot/ChatMessages'
import store from '../bot/store'

export default {
  store,
  components: {
    Messages
  }
}
</script>

<style scoped lang="stylus">
.primary
  margin-top: 20px
  margin-bottom: 20px
</style>
