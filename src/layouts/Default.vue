<template>
  <div class="layout" :class="{ 'sticky-header': $route.path === '/' }">
    <div id="content-wrapper">
      <Header/>
      <slot/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>


<style lang="sass">
*
  box-sizing: border-box

body, html
  height: 100%

#app
  display: flex
  flex-direction: column
  height: 100%

#content-wrapper
  flex: 1 0 auto

body
  --color-theme: #26a69a
  --color-base: rgb(255, 255, 255)
  --color-base-1: rgb(243, 243, 243)
  --color-contrast: rgb(0, 0, 0)
  --color-contrast-1: rgb(43, 43, 43)
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif
  margin: 0
  padding: 0
  font-size: 16px
  background: var(--color-base)
  color: var(--color-contrast)
  transition: background 0.5s ease

body.dark
  --color-base: rgb(0, 0, 0)
  --color-base-1: rgb(43, 43, 43)
  --color-contrast: rgb(255, 255, 255)
  --color-contrast-1: rgb(243, 243, 243)

h1
  letter-spacing: -0.01em

.layout
  padding: 0

.container
  max-width: 1200px
  margin: 0 auto
  padding: 0 2rem

@media (min-width: 860px)
  .container
    padding: 0 6rem

a
  color: #333!important

img
  max-width: 100%

.label
  display: block
  font-weight: 700
  margin-bottom: 0.5rem

</style>
