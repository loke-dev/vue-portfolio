import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

//  Generate a sessionID
function guid () {
  function s4 () {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4()
}

export default new Vuex.Store({
  state: {
    sessionId: guid(),
    messages: []
  },
  mutations: {
    setSessionId (state, id) {
      state.sessionId = id
    },
    push (state, message) {
      state.messages.push(message)
    },
    pop: state => state.messages.pop(),
    clear (state) { state.messages = [] }
  },
  plugins: [
    createPersistedState()
  ]
})
