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
      <q-btn v-if="['Bot'].indexOf($route.name) > -1" flat @click="$refs.layout.toggleRight()">
        <q-icon mat="help_outline" />
      </q-btn>
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
        <q-collapsible icon="insert emoticon" label="Fun stuff" sublabel="Games and other various fun stuff">
          <div>
            <q-side-link item to="/bot" exact>
              <q-item-side icon="memory" />
              <q-item-main label="Bot" sublabel="Chat with me!" />
            </q-side-link>
            <q-side-link item to="/deer" exact>
              <q-item-side icon="repeat" />
              <q-item-main label="Forever Deer"  />
            </q-side-link>
          </div>
        </q-collapsible>
      </q-list>
    </div>
    <!-- Right Side Panel -->
    <div v-show="['Bot'].indexOf($route.name) > -1" slot="right" style="width: 100%; height: 100%">
      <big style="top: 10px;">Example questions</big>
      <div style="padding: 20px;">
          <p>What's your name?</p>
          <p>Who created you?</p>
          <p>How can I contact you?</p>
          <p>What is your github?</p>
          <p>Can I reach you by email?</p>
          <p>Can I see your linkedin profile?</p>
          <p>How tall is barack obama?</p>
      </div>
    </div>

    <!-- sub-routes get injected here: -->
    <router-view />
    <!-- Footer -->
    <q-toolbar v-if="['Bot'].indexOf($route.name) > -1" slot="footer">
      <q-toolbar-title>
        <message-bar
          initial-message='Welcome, you can ask me anything! You can find some example questions if you press the button in the top right corner'
          v-on:message-sent='messageSent'
          v-on:message-received='messageReceived'
          v-on:message-from-ai='messageFromAI'>
        </message-bar>
      </q-toolbar-title>
    </q-toolbar>
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
        right: false
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
