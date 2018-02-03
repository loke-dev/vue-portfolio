<template>
  <transition name="slide-fade">
    <div class="modal" v-if="repo">
      <div class="modal-background" @click.self="closeModal">
        <div class="modal-close" @click="closeModal"></div>
        <div class="card">
          <div class="card-image">
            <figure class="image">
            <img :src="repoImgUrl"
                :srcset="`${repoImgUrl} 640w`"
                :alt="repo.name"></img>
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                  <figure class="image is-48x48">
                    <img v-if="repo.orgImage" :src="repo.orgImage" :alt="repo.org">
                    <span v-else class="icon is-large"><i class="fa fa-book"></i></span>
                  </figure>
              </div>
              <div class="media-content">
                  <p class="title is-4">
                    <a :href="repo.url"
                      rel="noopener"
                      target="_blank">
                      {{ repo.name }}
                    </a>
                  </p>
                  <p class="subtitle is-6">
                    <a :href="repo.orgLink"
                      class="org-link"
                      rel="noopener"
                      target="_blank">
                      {{ repo.org }}
                    </a>| <small>{{ formatDate(repo.date) }}</small>
                  </p>
              </div>
            </div>

            <div class="content">
              <p class="description" v-html="repo.description.trim()"></p>
              <a v-if="repo.repoUrl"
                :href="repo.repoUrl"
                target="_blank"
                rel="noopener">
                <span class="icon">
                  <i class="fa" :class="repo.repoUrl.includes('://gitlab.') ? 'fa-gitlab' : 'fa-github'"></i>
                </span>
              </a>
              <span class="tag"
                v-for="tag in repo.tags"
                :key="tag">
                  {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import moment from 'moment';
import { mapState } from 'vuex';

export default {
  name: 'repoModal',
  data() {
    return {
      scrollPos: 0,
    };
  },
  computed: {
    ...mapState({
      repo: 'modalData',
    }),
    repoImgUrl() {
      return cl.url(this.repo.imageSrc);
    },
  },
  methods: {
    formatDate(date) {
      return moment(date).format('MMM YYYY');
    },
    closeModal() {
      this.$store.commit('setModalData', null);
    },
  },
  watch: {
    repo(repo) {
      if (repo) {
        this.scrollPos = window.scrollY;
        setTimeout(() => document.body.classList.add('modal-open'), 500);
      } else {
        document.body.classList.remove('modal-open');
        window.scrollTo(0, this.scrollPos);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '~vars';
  .modal {
    display: block;
  }

  .modal-background {
    background-color: $white;
    padding: 10vh 0;
    overflow: auto;
  }

  .modal-close {
    transition: background-color 0.25s ease;
    max-height: 40px;
    max-width: 40px;
    z-index: 999;

    &:before,
    &:after {
      background-color: $grey;
    }

    &:hover,
    &:focus {
      background-color: rgba(10, 10, 10, 0.15);
    }
  }

  .card {
    background-color: transparent;
    box-shadow: none;
    max-width: 45%;
    margin: 0 auto;

    @media screen and (max-width: $desktop) {
      max-width: 70%;
    }

    @media screen and (max-width: $tablet) {
      max-width: 85%;
    }
  }

  .image {
    img {
      max-height: 100%;
      max-width: 100%;
      height: auto;
      width: auto;
      margin: auto;
    }
  }

  .media {
    .image {
      display: flex;
    }
  }

  .org-link {
    color: $grey;
  }

  .description {
    white-space: pre-line;
  }

  .tag {
    margin-right: 0.2rem;
  }

  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all .3s ease;
  }

  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(25px);
    opacity: 0;
  }
</style>
