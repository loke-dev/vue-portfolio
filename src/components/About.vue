<template>
  <section id="about" class="section">
    <div class="container has-text-centered">
      <div class="image avatar">
        <img src="../assets/img/profile.png">
      </div>
      <h2 class="title is-2">About</h2>
      <separator></separator>
      <div class="about-text block">
        I'm Loke, a webdeveloper from <a href="https://goo.gl/maps/yDZuGKwtraM2">Kalmar</a>.
        <br>
        Since I was a kid I have had an interest for computers and creating stuff and this have led me to the world wide web as a developer creating all kind of stuff!
        <br>
        Currently studying on my third year at <a href="https://lnu.se/">Linneaus University</a> in Kalmar, Sweden.
        I have completed the two year <a href="https://lnu.se/program/webbprogrammerare/kalmar-ht/">Webdeveloper Programme</a>
        and now studying for my bachelor's degree in <a href="https://lnu.se/program/pabyggnadsutbildning-inom-datavetenskap-kandidatexamen/">Computer Science</a>.
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {};
  },
  mounted() {
    sr.reveal('#about .block', 200);
  },
};
</script>

<style lang="scss" scoped>
  @import '~vars';

  .avatar {
    height: 200px;
    width: 200px;
    margin: 1rem auto;

    img {
      user-select: none;
      pointer-events: none;
      border-radius: 200px;
      border: 3px solid $secondary;
    }
  }

  .about-text {
    max-width: $tablet;
    margin: auto;
  }
</style>
