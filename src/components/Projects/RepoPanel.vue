<template>
  <nav class="panel">
    <p class="panel-heading">
      {{ title }}
      <span class="repo-count">{{ repos.length }}</span>
    </p>
    <a class="panel-block"
      href="#"
      v-for="(repo, index) in repos"
      :key="index"
      @click.prevent="openDetails(repo)"
      :class="{ 'is-active': false }">
      <span class="panel-icon">
        <i class="fa" :class="repo.type === 'career' ? 'fa-code-fork' : 'fa-book'"></i>
      </span>
      {{ repo.name }}
    </a>
  </nav>
</template>

<script>
export default {
  name: 'repoPanel',
  props: {
    title: {
      required: true,
      type: String,
    },
    repos: {
      required: true,
      type: Array,
    },
  },
  methods: {
    openDetails(repo) {
      this.$store.commit('setModalData', repo);
    },
    preloadImages() {
      this.repos.forEach((repo) => {
        const img = new Image();
        const projImg = new Image();
        img.src = cl.url(repo.imageSrc);
        projImg.src = cl.url(repo.projectImage);
      });
    },
  },
  mounted() {
    this.preloadImages();
  },
};
</script>

<style lang="scss" scoped>
  @import '~vars';

  .panel {
    border-radius: 5px;
    border: 1px solid $grey-lighter;
  }

  .panel-heading {
    font-size: 1em;
    border: none;
    border-bottom: 1px solid $grey-lighter;
    border-radius: 4px 4px 0 0;
  }

  .panel-block {
    border: none;

    &:not(:last-child) {
      border-bottom: 1px solid $grey-lighter;
    }

    &:hover,
    &:focus {
      color: $primary;
      .panel-icon {
        color: $primary;
      }
    }
  }

  .repo-count {
    display: inline-block;
    padding: 2px 5px;
    font-size: 12px;
    font-weight: 600;
    line-height: 1;
    color: $white;
    background-color: $grey;
    border-radius: 20px;
  }
</style>
