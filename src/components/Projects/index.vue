<template>
  <section id="projects" class="section no-h-padding">
    <div class="block has-text-centered">
      <h2 class="title is-2">Projects</h2>
      <separator></separator>
    </div>
    <div class="cardContainer columns">
      <div
        class="project tile column is-3"
        v-for="(project, index) in projects"
        :key="index">
        <Card class="reveal" :data-project="project">
        </Card>
      </div>
    </div>
  </section>
</template>

<script>
import Card from './Card';
import projects from './projects';

export default {
  name: 'projects',
  components: {
    Card,
  },
  mounted() {
    sr.reveal('#projects .reveal', 200);
  },
  data() {
    return {
      projects,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '~vars';
@import '~bulma/sass/utilities/mixins';

.project-list {
  padding: 1.5rem 0;

  @include mobile {
      padding: 1.5rem 1rem;
  }

  .project {
    padding: 0.5rem 1rem;

    a {
      position: relative;
      color: rgba($white, 0.7);
      transition: color 0.2s linear;

      &::after {
        content: '';
        background-color: $white;
        position: absolute;
        height: 2px;
        width: 0;
        left: -0.1rem;
        bottom: -0.25rem;
        transition: width 0.2s linear;
      }

      &.active {
        color: $white;

        &::after {
          width: calc(100% + 0.25rem);
        }
      }

      &:hover {
        color: $white;
      }
    }
  }
}

.section.no-h-padding {
  padding: 3rem 0;
}

.cardContainer {
  padding: 40px 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
