import Vue from 'vue'
import VueRouter from 'vue-router'

import NotFoundView from './components/error/error404.vue'
import PaymentRequiredView from './components/error/error402.vue'

import HomeView from './components/layout/home.vue'
import BotView from './components/bot.vue'
import AboutView from './components/about.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: HomeView,
      children: [
        {
          path: '',
          component: BotView,
          name: 'Bot',
          description: 'Bot view'
        },
        {
          path: '/about',
          component: AboutView,
          name: 'About',
          description: 'About, info and stuff'
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
