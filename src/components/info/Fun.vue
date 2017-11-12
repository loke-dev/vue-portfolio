<template>
  <div id='fun'>
			<q-tabs>
				<q-route-tab
					icon="mail"
					to="/mails"
					exact
					slot="title"    
				/>
				<q-route-tab
					icon="alarm"
					to="/alarms"
					exact
					slot="title"
				/>
			</q-tabs>
  </div>
</template>

<script>
import {
  QTabs,
  QTab,
  QOptionGroup
} from 'quasar'
export default {
  components: {
    QTabs,
    QTab,
    QOptionGroup
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
