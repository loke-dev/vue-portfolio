<template>
  <form v-on:submit.prevent='messageAdded' >
  <input type="text" v-model='currentMessage'
    class='msg' value="" placeholder="Type your message here" >
    <button disabled class="primary medium circular" @click="send(event)">
      <i class="">mic</i>
    </button>
  </form>
</template>

<script>
import store from './store'
export default {
  store,
  name: 'MessageBar',
  props: {
    initialMessage: { type: String, default: null }
  },
  data () {
    return {
      currentMessage: null
    }
  },
  mounted () {
    let vm = this
    if (vm.$store.state.messages.length <= 0) {
      vm.addMessageFromBot(this.initialMessage)
    }
  },
  methods: {
    scrollToBottom () {
      setTimeout(() => {
        document.getElementById('messages-container-end')
          .scrollIntoView()
      }, 1000)
    },
    commitMessage (message, type) {
      store.commit('push', message)
      this.scrollToBottom()
      this.$emit(`message-${type}`, message)
    },
    addMessageFromBot (text, type) {
      let message = {
        text: text,
        type: 'received',
        avatar: 'https://pbs.twimg.com/media/Cf8LodkW8AElRO1.png',
        fromName: 'Bot',
        date: new Date()
      }
      this.commitMessage(message)
    },
    addMessageFromUser (text) {
      let message = {
        text: text,
        type: 'sent',
        fromName: 'User',
        date: new Date()
      }
      this.commitMessage(message)
    },
    messageAdded () {
      this.addMessageFromUser(this.currentMessage)
      this.sendMessage(this.currentMessage)
      this.currentMessage = null
    },
    sendMessage (messageText) {
      let vm = this
      var data = {
        query: messageText,
        lang: 'en',
        v: '20150910',
        sessionId: store.state.sessionId
      }
      this.$http.get('/query', {params: data})
        .then(function (result) {
          vm.receiveMessage(result.data)
        })
    },
    receiveMessage (response) {
      let responseMessage = response.result.speech
      if (response.result.fulfillment &&
          response.result.fulfillment.speech) {
        responseMessage = response.result.fulfillment.speech
      }
      this.addMessageFromBot(responseMessage)
      this.$emit('message-from-ai', response)
    }
  }
}
</script>
<style scoped>
form {
  display: flex;
  width: 100%;
  padding: 5px;
  justify-content: space-around;
  align-items: stretch;
}
.msg {
  width:95%;
  line-height: 38px;
  font-size: 17px;
  padding-left:10px;
}
.msg-send {
  width: 40px;
  line-height: 3;
  text-align: center;
}

buttom, .primary {
  min-width: 56px;
}
</style>
