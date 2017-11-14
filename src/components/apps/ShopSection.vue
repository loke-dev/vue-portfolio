<template>
    <section class='shop-container'>
        <div class='shop-list'>
            <Shop v-for='producer in producers' :producer='producer' :key='producer.name' />
        </div>
    </section>
</template>

<script>
import Store from '../../vuex/store'
import Shop from './Shop'
export default {
  components: {
    Store,
    Shop
  },
  computed: {
    producers: () => Store ? Store.state.cookie.producers : null
  }
}
</script>


<style scoped lang="stylus">
.shop-container 
  cursor: default
</style>
