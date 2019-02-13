<template>
  <section id="skills" class="section">
    <div class="block has-text-centered">
      <h2 class="title is-2">Skills</h2>
      <h5 class="subtitle is-5">Technologies I work in most frequently.</h5>
    </div>
    <div class="skills columns is-multiline is-mobile">
      <div class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop"
        v-for="(skill, index) in skills"
        :key="index">
        <div class="skill">
          <a class="image"
            target="_blank"
            rel="noopener"
            :href="skill.url"
            :title="skill.name">
              <img :src="skill.image" :alt="skill.name">
              <div class="preloader" slot="placeholder" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import skills from './skills';

export default {
  name: 'skills',
  data() {
    return {
      skills,
    };
  },
  components: {
  },
};
</script>

<style lang="sass" scoped>
  .columns
    justify-content: center

  .skill img
    padding: 0.5em
    margin: 0 auto
    max-width: 110px
    transition: all 0.15s ease-in
    &:hover
      transform: scale(1.1)
      cursor: pointer
</style>
