<template>
  <section id="contact" class="section">
    <div class="container has-text-centered">
      <h2 class="title is-2">Contact</h2>
      <separator></separator>
      <h5 class="subtitle is-5">
        Looking for cool development opportunties and friendly hello's 👋
      </h5>
      <div class="block reveal">
        <a class="button grow is-dark"
          :href="`mailto:${email}`">
            <span>Ping me</span>
            <b-icon icon="terminal" size="is-small" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'contact',
  data() {
    return {
      email: 'carlssonloke@gmail.com',
    };
  },
  mounted() {
    sr.reveal('#contact .block', 100);
  },
};
</script>
