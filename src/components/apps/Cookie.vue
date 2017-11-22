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
import { mapGetters, mapActions } from 'vuex'

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
    ...mapGetters([
      `producers`,
      `cps`
    ]),
    mounted () {
      this.farmProducers()
    },
    methods: {
      ...mapActions([
        `buyProducer`,
        `addCookies`
      ]),
      farmProducers () {
        setInterval(() => {
          this.addCookies(this.cps)
        }, this.delayMs)
      }
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
