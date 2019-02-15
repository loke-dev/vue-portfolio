<template>
    <footer class="footer">
        <span class="" v-html="settings.footer" />
        <span>icons here</span>
    </footer>
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
.footer
    font-size: 0.8rem
    padding: 4rem
    margin: 75px 0 0
    background-color: var(--color-base-1)

.footer-content

.footer-content > span
</style>
