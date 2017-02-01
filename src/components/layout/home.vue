<template>
  <q-layout>
    <div slot="header" class="toolbar">
      <button class="" @click="$refs.leftDrawer.open()">
        <i>menu</i>
      </button>
      <q-toolbar-title :padding="1">
        Loke Carlsson
      </q-toolbar-title>
      <button @click="$refs.rightDrawer.open()">
        <i>help</i>
      </button>
    </div>

    <!-- <q-tabs slot="navigation" class="justified">
      <q-tab icon="view_quilt" route="/showcase/layout" exact replace>About</q-tab>
      <q-tab icon="view_day" route="/showcase/layout/toolbar" replace>Toolbar</q-tab>
      <q-tab icon="view_day" route="/showcase/layout/tabs" replace>Tabs</q-tab>
      <q-tab icon="input" route="/showcase/layout/drawer" replace>Drawer</q-tab>
    </q-tabs> -->

    <q-drawer swipe-only ref="leftDrawer">
      <div class="toolbar blue">
        <q-toolbar-title :padding="1">
            Loke Carlsson
        </q-toolbar-title>
      </div>

      <div class="list no-border platform-delimiter">
        <q-drawer-link icon="home" to="/" exact>
          Home
        </q-drawer-link>
        <hr>
        <!-- <div class="list-label">Links</div> -->
        <q-drawer-link icon="account_box" to="/about">
          About
        </q-drawer-link>
      </div>
    </q-drawer>

    <router-view class="layout-view"></router-view>

    <q-drawer right-side swipe-only ref="rightDrawer">
      <div class="toolbar blue">
        <q-toolbar-title :padding="1">
            Example questions
        </q-toolbar-title>
      </div>

      <p style="padding: 25px;" class="text-grey-7">
        <ul>
          <li>What's your name?</li>
          <li>Who created you?</li>
          <li>How can I contact you?</li>
          <li>What is your github?</li>
          <li>Can I reach you by email?</li>
          <li>Can I see your linkedin profile?</li>
          <li>How tall is barack obama?</li>
        </ul>
      </p>
    </q-drawer>

    <!-- <div slot="footer" class="toolbar">
      <div class="auto flex justify-center within-iframe-hide">
        <button v-go-back="'/showcase'">
          <i class="on-left">
            replay
          </i>
          Back to Showcase
        </button>
      </div>
      <q-toolbar-title :padding="0" class="within-iframe-only">
        Footer
      </q-toolbar-title>
    </div> -->


  </q-layout>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>
</style>
