<template>
  <div>
    <div
      class="project"
      v-for="(project, index) in projects"
      :key="index">
      <Card :data-image="project.projectImage"
      @click="showDetails">
        <h1 slot="header">{{ project.name }}</h1>
        <p slot="content">{{ project.description }}</p>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from './Card';

export default {
  name: 'project-list',
  components: {
    Card,
  },
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeIdx: 0,
    };
  },
  mounted() {
    this.setActiveProject(this.projects[0], 0);
  },
  methods: {
    showDetails() {
      this.$store.commit('setShowDetails', true);
    },
    setActiveProject(project, index) {
      this.activeIdx = index;
      this.$store.commit('setActiveProject', project);
    },
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
</style>
