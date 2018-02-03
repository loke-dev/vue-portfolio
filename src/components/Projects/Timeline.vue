<template>
  <div class="event-timeline">
    <b-dropdown v-model="filterBy">
      <button class="button" slot="trigger">
          <span>{{ filterBy }}</span>
          <b-icon icon="caret-down" size="is-small"></b-icon>
      </button>

      <b-dropdown-option value="All" icon="star">All</b-dropdown-option>
      <b-dropdown-option value="Career" icon="code-fork">Career</b-dropdown-option>
      <b-dropdown-option value="Personal" icon="book">Personal</b-dropdown-option>
    </b-dropdown>
    <hr>
    <p class="event-item"
      v-for="project in filter(projects)"
      :key="project.name">

      <template v-if="project.type === 'career'">
        <b-icon class="icon-item-type" icon="code-fork" size="is-small" />
        <a href="#" v-scroll-to="'#about'">Sam</a>
        worked with
        <a :href="project.orgLink" target="_blank" rel="noopener"> {{ project.org }}</a>
        on
        <a :href="project.url" target="_blank" rel="noopener"> {{ project.name }}</a>
        <small>{{ timeAgo(project.date) }}</small>
      </template>

      <template v-else>
        <b-icon class="icon-item-type" icon="book" size="is-small" />
        <a :href="project.orgLink" target="_blank" rel="noopener"> {{ project.org }}</a>
        worked on
        <a :href="project.url" target="_blank" rel="noopener"> {{ project.name }}</a>
        <small>{{ timeAgo(project.date) }}</small>
      </template>

    </p>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'timeline',
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      filterBy: 'All',
    };
  },
  methods: {
    filter(events) {
      switch (this.filterBy) {
        case 'Career':
          return events.slice().filter(e => (e.type === 'career'));
        case 'Personal':
          return events.slice().filter(e => (e.type === 'personal'));
        default:
          return events.slice().sort((a, b) => (a.date > b.date ? -1 : 1));
      }
    },
    timeAgo(date) {
      return moment(date).fromNow();
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '~vars';

  .option .icon .fa {
    font-size: $size-7;
  }

  .dropdown .box .option.is-selected {
    color: $primary;
    background: transparent !important;
  }

  .event-item {
    padding: 10px 10px 10px 0;
    border-bottom: 1px solid #f1f1f1;
  }

  .icon-item-type {
    display: inline-block;
    padding: 6px 24px 6px 6px;
    color: #bbbbbb;
  }
</style>
