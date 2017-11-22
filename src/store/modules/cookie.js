import producers from '../../assets/producers'
import * as types from '../mutation-types'

const state = {
  producers: producers,
  cookies: 1
}

const mutations = {
  [types.INCREMENT_COOKIE] (state) {
    state.cookies++
  },
  [types.INCREMENT_COOKIES] (state, { cookies }) {
    state.cookies += cookies
  },
  [types.BUY_PRODUCER] (state, { producerId }) {
    state.producers = state.producers.map(producer => {
      if (producer.id === producerId) {
        producer.purchased++
        state.cookies -= producer.price
        producer.price = 1.22 * producer.price
      }
    })
  }
}

const actions = {
  buyProducer ({ commit }, producerId) {
    commit(types.BUY_PRODUCER, producerId)
  },
  clickCookie ({ commit }, cookies) {
    commit(types.INCREMENT_COOKIE, cookies)
  },
  addCookies ({ commit }, cookies) {
    commit(types.INCREMENT_COOKIE, cookies)
  }
}

const getters = {
  cps: state => state.producers.map(x => x.cookiePerSeconds * x.purchased).reduce((a, b) => a + b, 0),
  producers: state => state.producers
}

const cookie = {
  state,
  mutations,
  actions,
  getters
}

export default cookie
