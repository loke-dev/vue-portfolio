<template>
  <header class="header" :class="{sticky: $route.path === '/'}">
    <div class="container">
      <div class="nav left">
        <g-link class="nav__link" :to="{ name: 'home' }">Home</g-link>
      </div>
      <nav class="nav right">
        <g-link class="nav__link" :to="{ name: 'journal' }">Blog</g-link>
        <g-link class="nav__link" :to="{ name: 'contact' }">Contact</g-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json")
    }
  }
}
</script>

<style lang="sass" scoped>
.header
  position: relative
  height: 3rem
  z-index: 10
  background-color: white
  color: pink

.header.sticky
  position: fixed
  top: 0
  left: 0
  width: 100%

.header > .container
  display: flex
  align-items: center
  justify-content: space-between
  height: 100%

.home-link
  text-decoration: none

.logo
  height: 1.5rem

.site-name
  font-size: 0.9rem
  font-weight: 700
  letter-spacing: 0.05em
  text-decoration: none
  text-transform: uppercase

.nav > *
  font-size: 0.9rem
  font-weight: 600
  text-decoration: none
  margin-top: 4px
  margin-right: 3rem
  padding-bottom: 4px
  border-bottom: 1px solid
  border-color: transparent
  transition: border 0.15s

.nav > *:last-of-type
  margin: 0

.nav > *:hover
  border-color: inherit

.nav > .active--exact
  border-color: inherit

</style>
