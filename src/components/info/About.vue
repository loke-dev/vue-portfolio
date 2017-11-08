<template>
  <div id='about'>
    <h4>
      Hello!
    </h4>
    <p>
      Here is about information going to be written! Soon...
    </p>

    <ul class="list-inline list-social">
      <li class="socialmedia-item social-twitter">
        <a href="https://twitter.com/Loke_Carlsson">
          <i class="fa fa-twitter"></i>
        </a>
      </li>
      <li class="socialmedia-item social-facebook">
        <a href="https://www.facebook.com/lokecarlsson1">
          <i class="fa fa-facebook"></i>
        </a>
      </li>
      <li class="socialmedia-item social-google-plus">
        <a href="https://plus.google.com/+LokeCarlsson">
          <i class="fa fa-google-plus"></i>
        </a>
      </li>
      <li class="socialmedia-item social-github">
        <a href="https://github.com/LokeCarlsson">
          <i class="fa fa-github"></i>
        </a>
      </li>
      <li class="socialmedia-item social-linkedin">
        <a href="https://www.linkedin.com/in/loke-carlsson/">
          <i class="fa fa-linkedin"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
$brand-twitter = #1da1f2
$brand-facebook = #3b5998
$brand-google-plus = #dd4b39
$brand-github = #000
$brand-linkedin = #0077B5

.socialmedia-item
  display: inline-block

.socialmedia-item:not(:last-child)
  margin-right: 10px

ul.list-social
  margin-bottom: 0
  li
    a
      font-size: 40px
      line-height: 80px
      display: block
      width: 80px
      height: 80px
      color: white
      border-radius: 100%
    &.social-twitter
      a
        background-color: $brand-twitter
        &:hover
          background-color: darken($brand-twitter, 20%)
    &.social-facebook
      a
        background-color: $brand-facebook
        &:hover
          background-color: darken($brand-facebook, 20%)
    &.social-google-plus
      a
        background-color: $brand-google-plus
        &:hover
          background-color: darken($brand-google-plus, 20%)
    &.social-github
      a
        background-color: $brand-github
        &:hover
          background-color: lighten($brand-github, 20%)
    &.social-linkedin
      a
        background-color: $brand-linkedin
        &:hover
          background-color: darken($brand-linkedin, 20%)
</style>
