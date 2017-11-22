<template>
  <div class="shop">
    <q-card class="card" key="card" inline>
        <q-card-title>
          {{ producer.name }}
          <span slot="subtitle">
            +{{ producer.cookiePerSeconds.toLocaleString('sv-SE', { maximumFractionDigits: 2 }) }} cookies/s
          </span>
        </q-card-title>
        <div class="row">
          <div class="col-8 price">
            <img class="icon" src="../../statics/svg/cookie.svg" alt="">
            <div :class="{'text-green': canBuy === true, 'text-red': canBuy === false }">{{ producer.price.toLocaleString('sv-SE', { maximumFractionDigits: 0 }) }}</div>
          </div>
          <div class="col-4 count" ref="count">
            <span>{{ producer.purchased }}</span>
          </div>
        </div>
        <q-card-actions>
          <q-btn @click="buy" class="buyButton" color="primary">Buy</q-btn>
        </q-card-actions>
      </q-card>
  </div>
</template>

<script>
import Store from '../../store'
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
    Store,
    QCard,
    QCardTitle,
    QCardMedia,
    QCardActions,
    QBtn,
    QCardSeparator
  },
  props: ['producer'],
  computed: {
    totalCookies: () => Store.state.cookie.cookies,
    canBuy: function () { return this.totalCookies >= this.producer.price }
  },
  methods: {
    buy () {
      if (this.canBuy) {
        Store.commit('BUY_PRODUCER', { producerId: this.producer.id })
        Store.commit('COUNT_COOKIES')
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.card
  min-width: 300px

.buyButton
  width: 80px
  margin: 0 auto

.shop
  user-select: none

.price
  display: flex

.count
  font-size: 32px
  opacity: 0.3
  padding-left: 25px

.icon
  width: 20px
  height: 20px
  margin-right: 5px
  margin-left: 10px

.text-green
  color: green

.text-red
  color: red
</style>
