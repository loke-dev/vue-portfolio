//  Generate a sessionID
const guid = () => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4()
}

const state = {
  sessionId: guid(),
  messages: []
}

const mutations = {
  SET_SESSION_ID (state, id) {
    state.sessionId = id
  },
  PUSH (state, message) {
    state.messages.push(message)
  },
  pop: state => state.messages.pop(),
  clear (state) { state.messages = [] }
}

const actions = {}

const bot = {
  state,
  mutations,
  actions
}

export default bot
