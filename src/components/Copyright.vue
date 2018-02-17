<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p class="reveal">
          © 2018 Loke Carlsson, made with lots of ❤️ and steeming hot ☕️.
        </p>
        <p class="reveal">
          <a class="icon"
            v-for="item in social"
            :href="item.link"
            :key="item.id"
            target="_blank"
            rel="noopener">
            <b-icon :icon="item.icon"></b-icon>
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'copyright',
  mounted() {
    sr.reveal('.footer .reveal', 250);
  },
  data() {
    return {
      social: [
        {
          icon: 'facebook',
          link: 'https://www.facebook.com/lokecarlsson1',
        },
        {
          icon: 'linkedin',
          link: 'https://linkedin.com/in/loke-carlsson',
        },
        {
          icon: 'twitter',
          link: 'https://twitter.com/loke_carlsson',
        },
        {
          icon: 'google-plus',
          link: 'https://plus.google.com/+LokeCarlsson',
        },
        {
          icon: 'github',
          link: 'https://github.com/LokeCarlsson',
        },
      ],
    };
  },
};
</script>
