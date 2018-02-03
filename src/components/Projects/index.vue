<template>
  <section id="projects" class="section no-h-padding">
    <div class="block has-text-centered">
      <h2 class="title is-2">Projects</h2>
      <separator></separator>
    </div>
  <!-- <div class="cardContainer">
    <Card data-image="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=">
      <h1 slot="header">Canyons</h1>
      <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </Card>

    <Card data-image="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=">
      <h1 slot="header">Canyons</h1>
      <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </Card>

    <Card data-image="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=">
      <h1 slot="header">Beaches</h1>
      <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </Card>

    <Card data-image="https://images.unsplash.com/photo-1479644025832-60dabb8be2a1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=">
      <h1 slot="header">Trees</h1>
      <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </Card>
    
    <Card data-image="https://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?dpr=2&auto=compress,format&fit=crop&w=1199&h=811&q=80&cs=tinysrgb&crop=">
      <h1 slot="header">Lakes</h1>
      <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </Card>
  </div> -->

    <project-list class="cardContainer" :projects="projects"></project-list>

  
  </section>
</template>

<script>
import { mapState } from 'vuex';

import RepoPanel from './RepoPanel';
import ProjectList from './ProjectList';
import ProjectDetails from './ProjectDetails';
import Timeline from './Timeline';
import Card from './Card';

import projects from './projects';

export default {
  name: 'projects',
  components: {
    RepoPanel,
    ProjectList,
    ProjectDetails,
    Timeline,
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
