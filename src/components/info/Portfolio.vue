<template>
  <div id='portfolio'>
    
    
    <q-card inline>
      <q-card-media>
        <img class="responsive" src="../../statics/buyone.png">
      </q-card-media>
      <q-card-separator />
      <q-card-title>
        Buyone
        <span slot="subtitle">E-commerce, built with Magento 2</span>
      </q-card-title>
      <q-card-actions>
        <a><q-btn disable color="primary">Demo</q-btn></a>
        <a href="https://github.com/LokeCarlsson/Buyone"><q-btn color="primary">Github</q-btn></a>
      </q-card-actions>
    </q-card>

    <q-card inline>
      <q-card-media>
        <img class="responsive" src="../../statics/pwd.png">
      </q-card-media>
      <q-card-separator />
      <q-card-title>
        Personal Web Desktop
        <span slot="subtitle">A single page application designed to imitate macOS</span>
      </q-card-title>
      <q-card-actions>
        <a disabled><q-btn color="primary">Demo</q-btn></a>
        <a href="https://github.com/LokeCarlsson/PWD"><q-btn color="primary">Github</q-btn></a>
      </q-card-actions>
    </q-card>

    <q-card inline>
      <q-card-media>
        <img class="responsive" src="../../statics/jekyll.png">
      </q-card-media>
      <q-card-separator />
      <q-card-title>
        Jekyll
        <span slot="subtitle">Github pages built with jekyll</span>
      </q-card-title>
      <q-card-actions>
        <a href="https://lokecarlsson.github.io"><q-btn color="primary">Demo</q-btn></a>
        <a href="https://github.com/LokeCarlsson/lokecarlsson.github.io"><q-btn color="primary">Github</q-btn></a>
      </q-card-actions>
    </q-card>

    <q-card inline>
      <q-card-media>
        <img class="responsive" src="../../statics/carleudd.png">
      </q-card-media>
      <q-card-separator />
      <q-card-title>
        Carleudd
        <span slot="subtitle">Simple website built with HTML5 and CSS3</span>
      </q-card-title>
      <q-card-actions>
        <a disabled><q-btn color="primary">Demo</q-btn></a>
        <a href="https://github.com/LokeCarlsson/lokecarlsson.github.io"><q-btn color="primary">Github</q-btn></a>
      </q-card-actions>
    </q-card>

    <h1>More to come...</h1>
  </div>
</template>

<script>
import {
  QCard,
  QCardTitle,
  QCardMedia,
  QCardActions,
  QBtn,
  QCardSeparator
} from 'quasar'

export default {
  components: {
    QCard,
    QCardTitle,
    QCardMedia,
    QCardActions,
    QBtn,
    QCardSeparator
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
.q-card
  max-width 300px
  
a
  margin-left 5px
  margin-right 5px

</style>
