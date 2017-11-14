<template>
  <div id="cookie">
    <div class="row">
      <div class="col-sm-8">
        <CookieSection />
      </div>
      <div class="col-sm-4">
        <ShopSection />
      </div>
    </div>
  </div>
</template>

<script>
import CookieSection from '../apps/CookieSection'
import ShopSection from '../apps/ShopSection'
import Store from '../../vuex/store'

export default {
  components: {
    CookieSection,
    ShopSection
  },
  data () {
    return {
      delayMs: 1000
    }
  },
  computed: {
    producers: function () {
      return Store.state.cookie.producers
    }
  },
  mounted () {
    this.farmProducers()
  },
  methods: {
    farmProducers () {
      setInterval(() => {
        Store.commit('ADD_COOKIES', { cookies: Store.state.cookie.cps })
        Store.commit('COUNT_COOKIES')
      }, this.delayMs)
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
