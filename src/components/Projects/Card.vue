<template>
  <div class="card">
    <div class="card-image ">
      <figure class="image is-1by1">
        <img :src="this.dataProject.projectImage" alt="Project image">
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
      <a class="button">
        <span class="icon">
          <i class="fa fa-github"></i>
        </span>
        <span>GitHub</span>
      </a>
      <a class="button is-primary" :disabled="!this.dataProject.url">
        <span>Demo</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: ['dataProject'],
}
</script>

<style lang="scss" scoped>
  .tag {
    margin-right: 5px;
    margin-bottom: 5px;
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
