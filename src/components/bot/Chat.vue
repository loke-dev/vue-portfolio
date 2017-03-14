<template>
  <div id='bot'>

    <div slot="header" class="toolbar top inverted ">
      <div class="auto flex justify-center within-iframe-hide">
          <message-bar
            initial-message='Welcome, you can ask me anything! You can find some example questions if you press the button in the top right corner'
            v-on:message-sent='messageSent'
            v-on:message-received='messageReceived'
            v-on:message-from-ai='messageFromAI'>
          </message-bar>
      </div>
    </div>
    
    <p>
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
