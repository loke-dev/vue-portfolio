<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-1by1">
        <clazy-load :src="this.dataProject.projectImage">
          <img :src="this.dataProject.projectImage" alt="Project image">
          <div class="preloader" slot="placeholder" />
        </clazy-load>
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{this.dataProject.name}}</p>
          <p class="subtitle is-6">{{this.dataProject.year}}</p>
          <span v-for="(tag, index) in this.dataProject.tags" :key="index" class="tag">{{tag}}</span>
        </div>
      </div>

      <div class="content">
        {{this.dataProject.description}}
        <br>
      </div>
      <div class="bottom">
        <a class="button" target="_blank" :href="this.dataProject.repo" :disabled="!this.dataProject.repo">
          <span class="icon">
            <i class="fa fa-github"></i>
          </span>
          <span>GitHub</span>
        </a>
        <a class="button is-primary" target="_blank" :href="this.dataProject.url" :disabled="!this.dataProject.url">
          <span>Demo</span>
        </a>
      </div>      
    </div>
  </div>
</template>

<script>
import { VueClazyLoad } from 'vue-clazy-load'

export default {
  name: 'card',
  props: ['dataProject'],
  components: {
    VueClazyLoad,
  },
}
</script>

<style lang="scss" scoped>
  .tag {
    margin-right: 5px;
    margin-bottom: 5px;
  }

  .card {
        height: 100%;

  }

  .content {
    padding-bottom: 30px;
  }

  .bottom {
    position: absolute;
    bottom: 20px;
  }

  .title {
    font-weight: 400;
  }

  .subtitle {
    padding-top: 3px;
  }

  card-image {
    padding: 20px;
  }

</style>
