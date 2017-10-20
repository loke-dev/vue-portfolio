// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)

import Vue from 'vue'
import Quasar, { AddressbarColor } from 'quasar'
import router from './router'
import axios from 'axios'

AddressbarColor.set('#027be3')

Vue.config.productionTip = false
Vue.use(Quasar) // Install Quasar Framework

// axios setup:
axios.defaults.baseURL = 'https://api.api.ai/api'
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.API_AI_TOKEN}`
axios.defaults.headers.post['Content-Type'] = 'application/json'
Vue.prototype.$http = axios

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
import 'quasar-extras/ionicons'
import 'quasar-extras/fontawesome'
import 'quasar-extras/animate'

/* eslint-disable no-new */
new Vue({
  el: '#q-app',
  router,
  render: h => h(require('./App').default)
})
