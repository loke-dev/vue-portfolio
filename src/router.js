import Vue from 'vue'
import VueRouter from 'vue-router'

// Error pages
import NotFoundView from './components/error/404.vue'
import PaymentRequiredView from './components/error/402.vue'

// Layouts
import DefaultLayout from './components/layout/Default.vue'
import BotLayout from './components/layout/Bot.vue'
import CookieLayout from './components/layout/Cookie.vue'

// Components
import BotView from './components/bot/Chat.vue'
import AboutView from './components/info/About.vue'
import PortfolioView from './components/info/Portfolio.vue'
import HomeView from './components/info/Home.vue'
import DeerView from './components/apps/Deer.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
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
          path: '/portfolio',
          component: PortfolioView,
          name: 'Portfolio',
          description: 'My projects'
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
          name: 'deer',
          description: 'Foreverscrolling deer'
        },
        {
          path: '/cookie',
          component: CookieLayout,
          name: 'Cookie',
          description: 'Cookie clicker'
        }
      ]
    },
    {
      path: '',
      component: BotLayout,
      children: [
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
