<template>
  <section id="projects" class="section no-h-padding">
    <div class="block has-text-centered">
      <h2 class="title is-2">Projects</h2>
      <separator></separator>
    </div>
    <project-list class="cardContainer" :projects="projects"></project-list>
  </section>
</template>

<script>
import { mapState } from 'vuex';

import ProjectList from './ProjectList';
import Card from './Card';

import projects from './projects';

export default {
  name: 'projects',
  components: {
    ProjectList,
    Card,
  },
  data() {
    return {
      projects,
      mode: 'Designer',
    };
  },
  computed: {
    ...mapState([
      'activeProject',
      'showDetails',
    ]),
    career() {
      return projects.filter(p => p.type === 'career');
    },
    personal() {
      return projects.filter(p => p.type === 'personal');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~vars';
@import '~bulma/sass/utilities/mixins';

.section.no-h-padding {
  padding: 3rem 0;
}

.cardContainer {
  padding: 40px 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.mode-select {
  line-height: 2.25rem;
  margin-bottom: 3rem;
}

.developer {
  padding: 0 1.5rem;
}

.designer {
  position: relative;
  background-color: $dark;

  & > .column {
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
  .details {
    &.active {
      @include mobile {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 0;
      }
    }
  }
}
</style>
