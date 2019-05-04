<template>
  <section id="fork">
      <div class="hero is-light">
        <div class="hero-body has-text-centered">
          <h2 class="title is-3">
            New site!
          </h2>
          <separator></separator>
          <h5 class="subtitle is-5">I have created a new site which replaces this one, created in Gridsome with some awesome tech. </h5>
          <div class="block reveal">
            <a class="button is-primary grow"
              target="_blank"
              rel="noopener"
              href="https://loke.dev">
              <span>Loke.dev</span>
            </a>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'fork',
  data() {
    return {};
  },
  mounted() {
    sr.reveal('#fork .reveal', 250);
  },
};
</script>

<style lang="scss" scoped>
  @import '~vars';

  .plus {
    color: $white;
    font-size: 2rem;
  }

  img {
    max-height: 100px;
  }
</style>
