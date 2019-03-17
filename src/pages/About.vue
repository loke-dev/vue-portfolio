<template>
  <Layout>
    <div class="container">
      <div class="header">
        <h1 class="title">Hey there!</h1>
        <p>dasdas</p>
      </div>
      <div class="content">
        <img class="profile-image" src="../assets/img/profile.png" />
        <div class="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit perferendis in aut delectus ullam autem minima, laudantium quod eum! Perspiciatis fugiat reiciendis accusamus soluta, ad tenetur nisi alias. Unde, quasi.
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

  .title
    font-size: 3rem
    margin: 0 0 4rem 0
    padding: 0

.content
  display: flex
  flex-direction: column

.profile-image
  height: 200px
  width: 200px
  border-radius: 200px
  border: 3px solid #26a69a
  margin: 0 auto

.about-text
  padding-top: 2rem
</style>

