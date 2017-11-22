<template>
  <div id='messages-container'>
    <q-transition
      appear
      group
      enter="fadeInUp"
      leave="fadeOut"
    >
    <div
      v-for='message in messages'
      :item="message"
      :index="message"
      :key="message"
      :class='message.type'
      class='message-container' 
    >
      <div class="message-box">
        <div
          class='message'> {{message.text}} </div>
        <div style="flex:1;min-width:20%" ></div>
      </div>
    </div>
    </q-transition>
    <div id='messages-container-end' ></div>
  </div>
</template>

<script>
import store from '../../store'
import {
  QItemSeparator,
  QTransition
} from 'quasar'

export default {
  components: {
    QItemSeparator,
    QTransition
  },
  store,
  computed: {
    messages () {
      return store.state.bot.messages
    }
  }
}
</script>
<style>
.received {
  padding-top:10px;
  padding-left:14px;
}
.sent {
  padding-top: 10px;
  padding-right:14px;
  display:flex;
}
.received .message-box {
  display:flex;
}
.message {
  max-width: 400px;
}
.received .message {
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 15px;
  background-color: #FFE082;
  color: black;
}
.sent .message-box {
  margin-left:auto;
}
.sent .message {
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 15px;
  background-color: #81D4FA;
  color: black;
}
.author {
  font-Size: 14px;
  padding-left: 10;
  padding-bottom: 5;
  color: #928585;
}
</style>
