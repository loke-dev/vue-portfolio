<template>
  <div>
    <div class="layout-padding deer"><pre>/|       |\
  `__\\       //__'
     ||      ||
   \__`\     |'__/
     `_\\   //_'
     _.,:---;,._
     \_:     :_/
       |@. .@|
       |     |
       ,\.-./ \
                ;;`-'   `---__________-----.-.
                ;;;                         \_\
                ';;;                         |
                  ;    |                      ;
                  \   \     \        |      /
                    \_, \    /        \     |\
                      |';|  |,,,,,,,,/ \    \ \_
                      |  |  |           \   /   |
                      \  \  |           |  / \  |
                       | || |           | |   | |
                       | || |           | |   | |
                       | || |           | |   | |
                       | || |           | |   | |</pre>

      <q-infinite-scroll :handler="loadMore">
        <pre v-bind:item="item" v-bind:index="index" v-bind:key="item.id" v-for="(item, index) in items" class="">                     | || |           | |   | |</pre>
      </q-infinite-scroll>
      <pre>                     |_||_|           |_|   |_|
                      /_//_/           /_/   /_/</pre>
    </div>
  </div>
</template>

<script>
import {
  QInfiniteScroll,
  QChip,
  QSpinnerDots
} from 'quasar'
export default {
  components: {
    QInfiniteScroll,
    QChip,
    QSpinnerDots
  },
  data () {
    return {
      items: [{}, {}, {}, {}, {}]
    }
  },
  methods: {
    loadMore (index, done) {
      setTimeout(() => {
        let items = []
        for (let i = 0; i < 7; i++) {
          items.push({})
        }
        this.items = this.items.concat(items)
        done()
      }, 50)
    }
  }
}
</script>

<style>
pre {
  margin: 0;
}
.deer {
  width: 400px;
  margin: 0 auto 0 auto;
}
</style>
