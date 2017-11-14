import producers from '../assets/producers'

const state = {
  producers: producers,
  cookies: 1,
  cps: 0
}

const mutations = {
  BUY_PRODUCER (state, { producerId }) {
    state.producers = state.producers.map(producer => {
      if (producer.id === producerId) {
        producer.purchased++
        state.cookies -= producer.price
        producer.price = 1.22 * producer.price
      }

      return producer
    })
  },
  CLICK_COOKIE (state, { cookies }) {
    state.cookies += cookies
  },
  ADD_COOKIES (state, { cookies }) {
    state.cookies += cookies
  },
  COUNT_COOKIES (state) {
    let cookieCount = 1
    for (let producer of state.producers) {
      cookieCount += producer.cookiePerSeconds * producer.purchased
    }
    state.cps = cookieCount
  }
}

const actions = {}

const cookie = {
  state,
  mutations,
  actions
}

export default cookie
