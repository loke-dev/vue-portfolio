<template>
  <div id='bot'>
    <h4>
      Ask me anything!
    </h4>
    <p>
      Either write your question or press voice button and ask something!
    </p>

    <button class="primary medium circular" @click="record()">
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
