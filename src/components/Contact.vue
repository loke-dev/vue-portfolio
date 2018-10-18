<template>
  <section id="contact" class="section">
    <div class="container has-text-centered">
      <h2 class="title is-2">Contact</h2>
      <separator></separator>
      <h5 class="subtitle reveal is-5">
        Looking for exiting development opportunties and friendly greets 👋
      </h5>
      <div class="block reveal">
        <a class="button grow is-dark"
          :href="`mailto:${email}`">
            <span>Ping me</span>
            <b-icon icon="terminal" size="is-small" />
        </a>
      </div>
    </div>
    <form name="contact" method="POST" netlify>
      <label>Your Name: <input type="text" name="name" /></label>   
      <button type="submit">Send</button>
    </form>
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
    sr.reveal('#contact .reveal', 250);
  },
};
</script>
