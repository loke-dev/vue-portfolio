import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import bot from './modules/bot'
import cookie from './modules/cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    bot,
    cookie
  },
  plugins: [
    createPersistedState()
  ]
})
