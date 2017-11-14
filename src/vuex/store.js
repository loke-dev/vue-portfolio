import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import bot from './bot'
import cookie from './cookie'

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
