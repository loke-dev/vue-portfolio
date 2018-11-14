<template>
  <section id="hero">
    <div class="hero header-image"
      :class="{ 'is-primary': isPrimary }">
      <div class="hero-head">
        <nav-bar />
      </div>
      <div class="hero-body">
        
        <div class="container has-text-centered">
          <div class="image logotype">
            <img src="../assets/img/logo.png">
          </div>
          <separator color="white"></separator>
          <h5 class="subtitle is-5">{{ subtitle }}</h5>
        </div>
      </div>
      <div class="hero-foot">
        <div class="container has-text-centered">
          <a v-scroll-to="'#about'">
            <i class="fa fa-chevron-down scroll-down"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from './NavBar';

export default {
  name: 'hero',
  components: {
    NavBar,
  },
  data() {
    return {
      title: 'Portfolio',
      subtitle: 'Building the web, one line of code at a time.',
      isPrimary: true,
    };
  },
  methods: {
    navHandler() {
      const { innerHeight, scrollY } = window;
      this.isPrimary = (scrollY + 52) < innerHeight;
    },
  },
  mounted() {
    sr.reveal('#hero .hero-body > .container *', 200);
    sr.reveal('#hero .hero-foot', 200);

    window.addEventListener('scroll', this.navHandler.bind(this));
  },
};
</script>

<style lang="scss" scoped>
  @import '~vars';

  #hero {
    position: relative;
    height: 100vh;
    width: 100vw;
    user-select: none;
  }

  .logotype {
    user-select: none;
    pointer-events: none;
    padding-bottom: 20px;
    max-width: 784px;
    margin: 0 auto;
  }

  .hero {
    .nav {
      background: $white;
      position: fixed;
      left: 0;
      right: 0;
      transition: all ease 0.25s;
    }

    &.is-primary {
      .nav {
        background: transparent;
        box-shadow: none;
      }
    }
  }

  .header-image {
    background: #0F2027;
    background: linear-gradient(to right, #2f454e, #203A43, #11252d);
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .hero-body {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .title {
    text-transform: uppercase;
  }

  .scroll-down {
    font-size: 36px;
    opacity: 0.5;
    transition: all ease-in 0.2s;
    padding-bottom: 3rem;

    &:hover {
      opacity: 1;
      transform: scale(1.25);
    }
  }
</style>
