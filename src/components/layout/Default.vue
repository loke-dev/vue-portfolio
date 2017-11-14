<template>
  <q-layout v-model="sides" ref="layout" view="hHh LpR lFf" :right-breakpoint="1100">
    <!-- Header -->
    <q-toolbar slot="header">
      <q-btn flat @click="$refs.layout.toggleLeft()">
        <q-icon name="menu" />
      </q-btn>
      <q-toolbar-title>
        Loke Carlsson
        <span slot="subtitle">WebDeveloper</span>
      </q-toolbar-title>
    </q-toolbar>
    <!-- Navigation -->
    <!-- <q-tabs slot="navigation">
      <q-route-tab slot="title" icon="view_quilt" to="/test-layout/about" replace hide="icon" label="About" />
      <q-route-tab slot="title" icon="view_day" to="/test-layout/toolbar" replace hide="icon" label="Toolbar" />
      <q-route-tab slot="title" icon="view_day" to="/test-layout/tabs" replace label="Tabs" />
      <q-route-tab slot="title" icon="input" to="/test-layout/drawer" replace label="Drawer" />
    </q-tabs> -->
    <!-- Left Side Panel -->
    <div slot="left">
      <q-list name="List" no-border link inset-separator>
        <q-side-link item to="/" exact>
          <q-item-side icon="home" />
          <q-item-main label="Home" sublabel="Go back to the start page" />
        </q-side-link>
        <q-side-link item to="/portfolio" exact>
          <q-item-side icon="developer board" />
          <q-item-main label="Portfolio" sublabel="My projects" />
        </q-side-link>
        <q-side-link item to="/about" exact>
          <q-item-side icon="account box" />
          <q-item-main label="About" sublabel="Read about Loke" />
        </q-side-link>
      </q-list>
      <q-list>
        <q-collapsible icon="insert emoticon" label="Stuff" sublabel="Fun and games">
          <div>
            <q-side-link item to="/bot" exact>
              <q-item-side icon="memory" />
              <q-item-main label="Bot" sublabel="Chat with me!" />
            </q-side-link>
            <q-side-link item to="/deer" exact>
              <q-item-side icon="repeat" />
              <q-item-main label="Forever Deer" sublabel="How tall is it?" />
            </q-side-link>
            <q-side-link item to="/cookie" exact>
              <q-item-side icon="blur circular" />
              <q-item-main label="Cookie Clicker" sublabel="Get all them cookies!" />
            </q-side-link>
          </div>
        </q-collapsible>
      </q-list>
    </div>
    
    <!-- sub-routes get injected here: -->
    <router-view />
    
  </q-layout>
</template>

<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QSearch,
  QTabs,
  QRouteTab,
  QBtn,
  QIcon,
  QItemSide,
  QItemMain,
  QSideLink,
  QListHeader,
  QScrollArea,
  QList,
  QItem,
  QItemTile,
  QItemSeparator,
  QCollapsible
} from 'quasar'
import MessageBar from '../bot/ChatBar'

export default {
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QSearch,
    QTabs,
    QRouteTab,
    QBtn,
    QIcon,
    QItemSide,
    QItemMain,
    QSideLink,
    QListHeader,
    QScrollArea,
    QList,
    QItem,
    QItemTile,
    QItemSeparator,
    MessageBar,
    QCollapsible
  },
  data () {
    return {
      sides: {
        left: true,
        right: false,
        delayMs: 1000
      }
    }
  },
  methods: {
    messageFromAI (message) {
      console.log(message)
    },
    messageReceived (message) {
      console.log(message)
    },
    messageSent (message) {
      console.log(message)
    }
  }
}
</script>

<style scoped lang="stylus">
#bot
  max-width 750px
  margin-left auto
  margin-right auto

#messages-container
  margin-top 20px

.layout-aside-right
  top: 50px!important
</style>
