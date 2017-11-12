<template>
  <div class="error-page window-height window-width bg-light column items-center">
    <div class="error-code bg-primary flex items-center justify-center">
      402
    </div>
    <div>
      <div class="error-card card bg-white column items-center justify-center">
        <q-icon name="error_outline" class="text-grey-5" />
        <p class="caption text-center">Payment required!</p>
        <p class="text-center group">
          <q-btn v-if="canGoBack" name="goBack" @click="goBack" color="primary" icon="keyboard_arrow_left">
            Go back
          </q-btn>
          <router-link to="/">
            <q-btn icon="home" color="primary">
              Go home
            </q-btn>
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  QBtn,
  QChip,
  QCard,
  QCardMain,
  QCardTitle,
  QCardSeparator,
  QIcon
} from 'quasar'

export default {
  components: {
    QBtn,
    QChip,
    QCard,
    QCardMain,
    QCardTitle,
    QCardSeparator,
    QIcon
  },
  data () {
    return {
      canGoBack: window.history.length > 1
    }
  },
  methods: {
    goBack () {
      window.history.go(-1)
    }
  }
}
</script>

<style scoped lang="stylus">
.error-page
  .error-code
    height 50vh
    width 100%
    padding-top 15vh
    font-size 30vmax
    color rgba(255, 255, 255, .2)
    overflow hidden
  .error-card
    margin-top -25px
    width 90vw
    max-width 600px
    padding 50px
    i
      font-size 5rem
</style>
