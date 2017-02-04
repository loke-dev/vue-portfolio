// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
import axios from 'axios'

// Install Quasar Framework
Vue.use(Quasar)

// axios setup:
axios.defaults.baseURL = 'https://api.api.ai/api'
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.API_AI_TOKEN}`
axios.defaults.headers.post['Content-Type'] = 'application/json'
Vue.prototype.$http = axios

console.log('API token: ' + process.env.API_AI_TOKEN)

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    render: h => h(require('./App'))
  })
})
