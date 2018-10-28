/* eslint-disable no-new */

import Vue from 'vue';
import ScrollReveal from 'scrollreveal';
import VueScrollTo from 'vue-scrollto';
import Buefy from 'buefy';
import moment from 'moment';

import 'core-js';
import './assets/styles/main.scss';

import App from './App';
import store from './stores';
import Separator from './common/Separator';

Vue.use(Buefy, {
  defaultIconPack: 'fa',
});
Vue.use(VueScrollTo, {
  duration: 1000,
  offset: 0,
  easing: 'ease-in-out',
});

window.sr = ScrollReveal();
Vue.component('separator', Separator);
Vue.prototype.moment = moment;

new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
