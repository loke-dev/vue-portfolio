<template>
  <footer class="footer">
    <span class="copyright" v-html="settings.footer"/>
    <div>
      <font-awesome class="icon"
        v-for="item in social"
        :href="item.link"
        :key="item.id"
        :icon="['fab', `${item.icon}`]"
        target="_blank"
        rel="noopener" />
      </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json"),
      social: [
        {
          icon: "facebook",
          link: "https://www.facebook.com/carlssonloke"
        },
        {
          icon: "linkedin",
          link: "https://linkedin.com/in/lokecarlsson"
        },
        {
          icon: "twitter",
          link: "https://twitter.com/carlssonloke"
        },
        {
          icon: "github",
          link: "https://github.com/LokeCarlsson"
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>
.footer
  display: flex
  flex-direction: column
  align-items: center
  font-size: 0.8rem
  padding: 4rem
  margin: 75px 0 0
  background-color: var(--color-base-1)

.copyright
  padding-bottom: 20px

.icon
  font-size: 50px

</style>
