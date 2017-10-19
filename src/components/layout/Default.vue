<template>
  <q-layout v-model="sides" ref="layout" view="hHh LpR lFr" :right-breakpoint="1100">
    <!-- Header -->
    <q-toolbar slot="header">
      <q-btn flat @click="sides.left = !sides.left">
        <q-icon name="menu" />
      </q-btn>
      <q-toolbar-title>
        Loke Carlsson
        <span slot="subtitle">Portfolio</span>
      </q-toolbar-title>
      <q-btn flat @click="sides.right = !sides.right">
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
        <q-list-header>Essential Links</q-list-header>
        <q-side-link item to="/" exact>
          <q-item-side icon="home"  />
          <q-item-main label="Home" sublabel="Go back to the start page" />
        </q-side-link>
        <q-side-link item to="/bot" exact>
          <q-item-side icon="memory" />
          <q-item-main label="Bot" sublabel="" />
        </q-side-link>
        <q-side-link item to="/deer" exact>
          <q-item-side icon="repeat" />
          <q-item-main label="Endless deer" sublabel="" />
        </q-side-link>
        <q-side-link item to="/portfolio" exact>
          <q-item-side icon="laptop" />
          <q-item-main label="Portfolio" sublabel="My projects" />
        </q-side-link>
        <q-side-link item to="/about" exact>
          <q-item-side icon="account box" />
          <q-item-main label="About" sublabel="Read about Loke" />
        </q-side-link>
      </q-list>
    </div>
    <!-- Right Side Panel -->
    <div swipe-only slot="right">
      <q-list highlight>
        <q-list-header>Recent chats</q-list-header>
        <q-item>
          <q-item-main>
            <q-item-tile label>John Doe</q-item-tile>
            <q-item-tile sublabel>Quasar enthusiast</q-item-tile>
          </q-item-main>
          <q-item-side right>
            <q-item-tile icon="chat_bubble" color="green" />
          </q-item-side>
        </q-item>
        <q-item>
          <q-item-main label="John Doe" sublabel="Quasar enthusiast" />
          <q-item-side right icon="chat_bubble" />
        </q-item>
        <q-item-separator />
        <q-list-header>Previous chats</q-list-header>
        <q-item>
          <q-item-main label="Jack Doe" />
        </q-item>
      </q-list>
    </div>
    <!-- sub-routes get injected here: -->
    <router-view />
    <!-- Footer -->
    <q-toolbar v-if="['Bot'].indexOf($route.name) > -1" slot="footer">
      <q-toolbar-title>
        Layout Footer
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
  QItemSeparator
} from 'quasar'

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
    QItemSeparator
  },
  data () {
    return {
      sides: {
        left: true,
        right: false
      }
    }
  }
}
</script>

<style>
#bot {
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
}
#messages-container {
  margin-top: 20px;
}
</style>
