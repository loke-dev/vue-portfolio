<template>
  <div id='portfolio'>
    <q-transition
      appear
      group
      enter="slideInUp"
      leave="SlideInDown"
    >
      <q-card key="card" inline>
        <q-card-media>
          <img class="responsive" src="../../statics/projects/gitgud.png">
        </q-card-media>
        <q-card-separator />
        <q-card-title>
          Gitgud
          <span slot="subtitle">Github dashboard</span>
        </q-card-title>
        <q-card-actions>
          <a target="_blank" href="http://gitgud.nu/"><q-btn color="primary">Demo</q-btn></a>
          <a target="_blank" href="https://github.com/LokeCarlsson/Gitgud"><q-btn color="primary">Github</q-btn></a>
        </q-card-actions>
      </q-card>
      
      <q-card key="card" inline>
        <q-card-media>
          <img class="responsive" src="../../statics/projects/buyone.png">
        </q-card-media>
        <q-card-separator />
        <q-card-title>
          Buyone
          <span slot="subtitle">E-commerce, built with Magento 2</span>
        </q-card-title>
        <q-card-actions>
          <a><q-btn disable color="primary">Demo</q-btn></a>
          <a target="_blank" href="https://github.com/LokeCarlsson/Buyone"><q-btn color="primary">Github</q-btn></a>
        </q-card-actions>
      </q-card>

      <q-card key="card" inline>
        <q-card-media>
          <img class="responsive" src="../../statics/projects/pwd.png">
        </q-card-media>
        <q-card-separator />
        <q-card-title>
          Personal Web Desktop
          <span slot="subtitle">SPA macOS clone</span>
        </q-card-title>
        <q-card-actions>
          <a target="_blank" href="http://pwd.lokecarlsson.se/"><q-btn color="primary">Demo</q-btn></a>
          <a target="_blank" href="https://github.com/LokeCarlsson/PWD"><q-btn color="primary">Github</q-btn></a>
        </q-card-actions>
      </q-card>

      <q-card key="card" inline>
        <q-card-media>
          <img class="responsive" src="../../statics/projects/snippet.png">
        </q-card-media>
        <q-card-separator />
        <q-card-title>
          Snippets
          <span slot="subtitle">Web application for snippet management</span>
        </q-card-title>
        <q-card-actions>
          <a disabled><q-btn color="primary">Demo</q-btn></a>
          <a target="_blank" href="https://github.com/LokeCarlsson/Snippets"><q-btn color="primary">Github</q-btn></a>
        </q-card-actions>
      </q-card>

      <q-card key="card" inline>
        <q-card-media>
          <img class="responsive" src="../../statics/projects/quiz.png">
        </q-card-media>
        <q-card-separator />
        <q-card-title>
          QuizMaster
          <span slot="subtitle">Javascript quiz API</span>
        </q-card-title>
        <q-card-actions>
          <a target="_blank" disabled><q-btn color="primary">Demo</q-btn></a>
          <a target="_blank" href="https://github.com/LokeCarlsson/PWD"><q-btn color="primary">Github</q-btn></a>
        </q-card-actions>
      </q-card>

      <q-card key="card" inline>
        <q-card-media>
          <img class="responsive" src="../../statics/projects/jekyll.png">
        </q-card-media>
        <q-card-separator />
        <q-card-title>
          Jekyll
          <span slot="subtitle">Github pages built with jekyll</span>
        </q-card-title>
        <q-card-actions>
          <a target="_blank" href="https://lokecarlsson.github.io"><q-btn color="primary">Demo</q-btn></a>
          <a target="_blank" href="https://github.com/LokeCarlsson/lokecarlsson.github.io"><q-btn color="primary">Github</q-btn></a>
        </q-card-actions>
      </q-card>

      <q-card key="card" inline>
        <q-card-media>
          <img class="responsive" src="../../statics/projects/lillafro.png">
        </q-card-media>
        <q-card-separator />
        <q-card-title>
          Lilla frö
          <span slot="subtitle">Presentation website/landingpage</span>
        </q-card-title>
        <q-card-actions>
          <a target="_blank" href="http://lillafrö.nu"><q-btn color="primary">Demo</q-btn></a>
          <a target="_blank" href="https://github.com/LokeCarlsson/lillafro"><q-btn color="primary">Github</q-btn></a>
        </q-card-actions>
      </q-card>

      <q-card key="card" inline>
        <q-card-media>
          <img class="responsive" src="../../statics/projects/carleudd.png">
        </q-card-media>
        <q-card-separator />
        <q-card-title>
          Carleudd
          <span slot="subtitle">Simple website built with HTML5 and CSS3</span>
        </q-card-title>
        <q-card-actions>
          <a target="_blank" href="http://carleudd.lokecarlsson.se"><q-btn color="primary">Demo</q-btn></a>
          <a target="_blank" href="https://github.com/LokeCarlsson/carleudd"><q-btn color="primary">Github</q-btn></a>
        </q-card-actions>
      </q-card>
    </q-transition>
  </div>
</template>

<script>
import {
  QCard,
  QCardTitle,
  QCardMedia,
  QCardActions,
  QBtn,
  QCardSeparator,
  QTransition
} from 'quasar'

export default {
  components: {
    QCard,
    QCardTitle,
    QCardMedia,
    QCardActions,
    QBtn,
    QCardSeparator,
    QTransition
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="stylus">
.q-card
  max-width 300px
  min-height 434px
  margin 20px
a
  margin-left 5px
  margin-right 5px

</style>
