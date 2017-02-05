<template>
  <div id='bot'>
    <!-- <h5>
      Either write your question or press voice button and ask something!
    </h5> -->

    <message-bar
      initial-message='Welcome, you can ask me anything! You can find some example questions if you press the button in the top right corner'
      v-on:message-sent='messageSent'
      v-on:message-received='messageReceived'
      v-on:message-from-ai='messageFromAI'>
    </message-bar>

    <p style="text-align: center;">
      <messages ></messages>
    </p>

  </div>
</template>

<script>
import MessageBar from '../bot/ChatBar'
import Messages from '../bot/ChatMessages'
import store from '../bot/store'
export default {
  store,
  name: 'Chat',
  components: {
    Messages,
    MessageBar
  },
  methods: {
    messageFromAI (message) {
      console.log(message)
    },
    messageReceived (message) {
      console.log(message)
    },
    messageSent (message) {
      console.log(message)
    }
  }
}
</script>

<style scoped>
.primary {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
