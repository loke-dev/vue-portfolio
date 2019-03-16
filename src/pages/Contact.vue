<template>
  <Layout>
    <div class="container">
      <div class="contact-header">
        <h1 class="contact-title">Say hello!</h1>
        <p>Looking for exiting development opportunties and friendly greets! 👋</p>
      </div>

      <form 
        name="contact"
        method="post"
        v-on:submit.prevent="handleSubmit"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>
        <div class="sender-info">
          <div>
            <label for="name" class="label" >Your name</label>
            <input type="text" name="name" v-model="formData.name" />
          </div>
          <div>
            <label for="email" class="label">Your email</label>
            <input type="email" name="email" v-model="formData.email" />
          </div>
        </div>

        <div class="message-wrapper">
          <label for="message" class="label">Message</label>
          <textarea name="message" v-model="formData.message"></textarea>
        </div>

        <button type="submit" class="submit-button">Submit form</button>
      </form>
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      formData: {},
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    handleSubmit(e) {
      e.preventDefault()
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': 'contact',
          ...this.formData,
        }),
      })
      .then(() => this.$router.push('/success'))
      .catch(error => alert(error))
    }
  }
}
</script>

<style lang="sass" scoped>
.contact-header
  padding: 2rem 0 4rem 0

.contact-title
  font-size: 3rem
  margin: 0 0 4rem 0
  padding: 0

.sender-info
  display: flex
  flex-wrap: wrap
  margin-bottom: 2rem

.sender-info > div
  flex: 1
  margin-right: 4rem

.sender-info > div:last-of-type
  margin: 0

input:focus,
textarea:focus
  border-color: var(--color-contrast-1)

input,
textarea
  background: transparent
  border: 1px solid var(--color-base-1)
  outline: none
  border-radius: 0.3rem
  padding: 0.8rem 1rem
  color: inherit
  font-size: 1rem
  width: 100%

textarea
  resize: none
  height: 140px

.submit-button
  color: var(--color-base)
  background: var(--color-contrast)
  outline: none
  border: 0
  font-size: 0.8rem
  padding: 0.8rem 1.6rem
  border-radius: 0.3rem
  margin-top: 2rem
  cursor: pointer
  transition: opacity 0.25s ease
  font-size: 500
  letter-spacing: 0.035em

.submit-button:hover
  opacity: 0.6

.submit-button:focus
  border: 1px solid var(--color-base-1)
</style>

