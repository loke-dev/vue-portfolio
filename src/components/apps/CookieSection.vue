<template>
  <div>
    <q-chip avatar="../../statics/svg/cookie.svg" color="primary">
      {{ cookies.toLocaleString('sv-SE', { maximumFractionDigits: 0 }) }}
    </q-chip>
    <q-chip color="green">
      {{ cps }}/s
    </q-chip>
    
    <div class='cookie-container'>
      <div class='cookie-wrapper'>
        <img ref='cookie' class='cookie' @click='clickCookie' src='../../statics/svg/cookie.svg' alt='Cookie'>
      </div>
    </div>
  </div>
</template>

<script>
import Store from '../../vuex/store'
import animate from '../../assets/animate'
import { popUp } from '../../assets/ui'
import { QTransition, QChip } from 'quasar'
export default {
  components: {
    Store,
    QTransition,
    QChip
  },
  computed: {
    cookies: () => Store.state.cookie.cookies,
    cps: () => Store.state.cookie.cps
  },
  methods: {
    clickCookie (e) {
      e.preventDefault()
      this.showPopup(e)
      Store.commit('ADD_COOKIES', { cookies: Math.ceil(Store.state.cookie.cps / 5) })
      animate(this.$refs.cookie, 'scale-up', 100)
    },
    showPopup (e) {
      popUp('+' + Math.ceil(Store.state.cookie.cps / 5), '32px', 'fadeOutUp', e)
    }
  }
}
</script>

<style scoped lang="stylus">
.cookie-container
  display: flex
  flex-direction: column
  justify-content: center
  user-select: none
  font-size: 32px
  text-align: center
  color: black
  user-select: none
  cursor: default

.cookie-count
  -webkit-transition: 1s ease-in-out;
  -moz-transition: 1s ease-in-out;
  -ms-transition: 1s ease-in-out;
  -o-transition: 1s ease-in-out;
  transition: 1s ease-in-out;

.content
  align-items: center
  text-align: center
  justify-content: center

.cookie-wrapper
  width: 100%
  height: 100%
  text-align: center
  display: flex
  justify-content: center
  align-items: center

.cookie
  width: 500px
  padding-top: 60px
  padding-bottom: 30px
  cursor: pointer
  transition: all 0.5s
  -webkit-user-drag: none
  -khtml-user-drag: none
  -moz-user-drag: none
  -o-user-drag: none

.plus1
  font-size: 18px
  font-weight: bold
  color: white
  border: solid 1px black

.scale-up
  transform: scale(1.25)
</style>
