import producers from '../assets/producers'

const state = {
  producers: producers,
  cookies: 0,
  cps: () => {
    let cookieCount = 0
    for (let producer of state.producers) {
      cookieCount += producer.cookiePerSeconds * producer.purchased
    }
    return cookieCount
  }
}

const mutations = {
  BUY_PRODUCER (state, { producerId }) {
    state.producers = state.producers.map(producer => {
      console.log(producer)
      if (producer.id === producerId) {
        producer.purchased++
        state.cookies -= producer.price
        producer.price = 1.22 * producer.price
      }

      return producer
    })
  },
  CLICK_COOKIE (state) {
    state.cookies++
  },
  ADD_COOKIES (state, { cookies }) {
    state.cookies += cookies
  }
}

const actions = {}

const cookie = {
  state,
  mutations,
  actions
}

export default cookie
