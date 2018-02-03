<template>
  <section id="fork">
      <div class="hero is-dark">
        <div class="hero-body has-text-centered">
          <h2 class="title is-3">
            Want to Vue the code for this portfolio?
          </h2>
          <separator color="white"></separator>
          <h5 class="subtitle is-5">Fork this project on GitHub.</h5>
          <div class="columns is-centered is-vcentered">
            <div class="reveal column is-narrow techs">
              <a href="https://vuejs.org/" target="_blank" rel="noopener">
                <img src="../assets/img/vue.png" alt="Vue">
              </a>
            </div>
            <div class="reveal column is-narrow">
              <span class="plus">+</span>
            </div>
            <div class="reveal column is-narrow techs">
              <a href="http://bulma.io/" target="_blank" rel="noopener">
                <img src="../assets/img/bulma.png" alt="Bulma">
              </a>
            </div>
          </div>
          <div class="block reveal">
            <a class="button grow"
              target="_blank"
              rel="noopener"
              href="https://github.com/samrose3/vue-portfolio">
              <span>Fork</span>
              <b-icon icon="code-fork" size="is-small" />
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
