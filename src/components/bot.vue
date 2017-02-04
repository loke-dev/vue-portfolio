<template>
  <div id='bot'>
    <h4>
      Ask me anything!
    </h4>
    <p>
      Either write your question or press voice button and ask something!
    </p>

    <button class="primary medium circular" @click="send()">
      <i class="">mic</i>
    </button>

    <input class="full-width no-border" placeholder="Ask your question here.">

    <hr>

  </div>
</template>

<script>
import { Toast } from 'quasar'
export default {
  data () {
    return {
    }
  },
  methods: {
    record () {
      Toast.create({
        html: 'Now recording!',
        icon: 'mic'
      })
    },
    send () {
    //   const client = new ApiAiClient('${process.env.API_AI_TOKEN}', {streamClientClass: ApiAiStreamClient});
    //   .textRequest('Hello!')
    //   .then((response) => {
    //     console.log(response);
    //   })
    // .catch((error) => {
    //   console.log(error);
    // })
      let vm = this
      var data = {
        query: 'messageText',
        lang: 'en',
        v: '20150910',
        sessionId: 'somethingreallyrandom'
      }
      this.$http.get('/query', {params: data})
      .then(function (result) {
        vm.receiveMessage(result.data)
      })
    },
    receiveMessage (response) {
      console.log(response)
    },
    scrollToBottom () {
      setTimeout(() => {
        document.getElementById('messages-container-end')
          .scrollIntoView()
      }, 1000)
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
