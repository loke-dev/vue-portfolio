<template>
<div id='messages-container'>
<div
  v-for='message in messages'
  :class='message.type'
  class='message-container' >
  <div class="message-box">
    <div
      class='message'> {{message.text}} </div>
    <div style="flex:1;min-width:20%" ></div>
  </div>
</div>
<div id='messages-container-end' ></div>
</div>
</template>
<script>
import store from './store'
export default {
  store,
  computed: {
    messages () {
      return store.state.messages
    }
  }
}
</script>
<style>
.received {
  padding-top:10px; padding-left:14px;
}
.sent {
  padding-top: 10px; padding-right:14px;display:flex;
}
.received .message-box {
  display:flex;
}
.received .message {
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 15px;
  background-color: white;
  color: #535050;
  word-break: break-all;
}
.sent .message-box {
  margin-left:auto;
}
.sent .message {
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 15px;
  background-color: #8BDB3A;
  color: #535050;
  word-break: break-all;
}
.author {
  fontSize: 14px;
  padding-left: 10;
  padding-bottom: 5;
  color: #928585;
}
</style>