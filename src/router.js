import Vue from 'vue'
import VueRouter from 'vue-router'

import NotFoundView from './components/error/404.vue'
import PaymentRequiredView from './components/error/402.vue'

import DefaultLayout from './components/layout/Default.vue'

import BotView from './components/bot/Chat.vue'
import DeerView from './components/apps/Deer.vue'
import AboutView from './components/info/About.vue'
import HomeView from './components/info/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          component: HomeView,
          name: 'Home',
          description: 'Starting page'
        },
        {
          path: '/about',
          component: AboutView,
          name: 'About',
          description: 'About, info and stuff'
        },
        {
          path: '/deer',
          component: DeerView,
          name: 'Deer',
          description: 'Endless deer'
        },
        {
          path: '/bot',
          component: BotView,
          name: 'Bot',
          description: 'Bot view'
        }
      ]
    },
    {
      path: '/cash',
      component: PaymentRequiredView
    },
    {
      path: '*',
      component: NotFoundView
    }
  ]
})
