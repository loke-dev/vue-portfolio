<template>
  <section id="do" class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-10 is-offset-1 has-text-centered">
          <h1 class="title is-2">What I Do</h1>
          <separator></separator>
          <h2 class="subtitle is-5">I am a professional web developer and student.</h2>
        </div>
      </div>
      <div class="columns">
        <div class="column do-col"
          v-for="panel in panels"
          :class="`is-${12 / panels.length}`">
          <div class="panel">
            <div class="panel-block">
              <p class="has-text-centered">
                <i class="fa icon-block" :class="panel.icon"></i>
              </p>
              <br>
              <h1 class="title is-5">{{ panel.title }}</h1>
              <p>{{ panel.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'do',
  data() {
    return {
      panels: [
        {
          icon: 'fa-graduation-cap',
          title: 'Student',
          text: 'As a Computer Scientist, I get to learn about code on a deeper level such as algorithms and data structures which complements my primary interest in software and higher-level development.',
        }, {
          icon: 'fa-code',
          title: 'Developer',
          text: 'My strengths lie in the front-end development. I have extensive experience with the full stack. Most recently, I have focused on creating progressive web applications build using React and Vue.',
        }, {
          icon: 'fa-pencil',
          title: 'Designer',
          text: 'My interest in graphic design lead me to become a software engineer. Excellent design is essential in crafting elegant and viable solutions.',
        }, {
          icon: 'fa-rocket',
          title: 'Technology',
          text: 'I am passionate about technology and how it .',
        },
      ],
    };
  },
  mounted() {
    sr.reveal('.do-col', 250);
  },
};
</script>

<style lang="scss" scoped>
  @import '~vars';

  .panel-block {
    flex-flow: column nowrap;
    border: none;

    p {
      font-size: 17px;
      line-height: 1.4;
    }

    i {
      color: $secondary;
      font-size: 5em;
    }
  }
</style>
