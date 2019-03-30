<template>
  <Layout>
    <div class="container">
      <div class="header">
        <h1 class="title">Frontend Developer with the Users in Mind ✌️</h1>
      </div>
      <div class="content">
        <img class="profile-image" src="../assets/img/profile.png">
        <div class="about-text">
          <p>
            As a frontend developer, Loke Carlsson focuses on solving problems. 
            He values his own word, putting an emphasis on loyalty and honest with his clients and fellow team members. 
            Passionate about the JAM stack, he strives for intuitiveness in all the frontend work that he does, 
            doing everything that he can to make users' experiences smooth, easy, and comfortable.
          </p>
          <p>
            Loke has worked in both Vue.js and React.js, 
            and he uses these packages to the best of his ability in order to bring his and his clients' UI visions to life. 
            His preferred CSS preprocesor is Sass, and his ability to style the pages and platforms that he develops is noteworthy, 
            his technical skills complemented nicely by his fashionable eye. 
            Considering at all times what will make his interfaces attractive and what will make them efficient, 
            he develops in a way that plays to users' expectations – while also surprising them pleasantly with unique and different ideas.
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
.header
  padding: 2rem 0 1rem 0
  text-align: center

  .title
    font-size: 3rem
    font-weight: 400
    margin: 0 0 4rem 0
    padding: 0

.content
  display: flex
  flex-direction: column

.profile-image
  height: 200px
  width: 200px
  border-radius: 200px
  border: 3px solid var(--color-theme)
  margin: 0 auto

.about-text
  padding-top: 2rem
  margin: 0 auto
  max-width: 780px
</style>

