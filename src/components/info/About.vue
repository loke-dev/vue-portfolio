<template>
  <div id='about'>
    <h4>
      Picture here!
    </h4>
    <p>
      Here is about information going to be written! Soon...
    </p>

    <q-card>
      <q-card-title>Skills and interests</q-card-title>
      <q-card-main>
        <q-chip class="chips" color="primary">Linux</q-chip>
        <q-chip class="chips" color="primary">Javascript</q-chip>
        <q-chip class="chips" color="primary">CSS3</q-chip>
        <q-chip class="chips" color="primary">HTML5</q-chip>
        <q-chip class="chips" color="primary">Node</q-chip>
        <q-chip class="chips" color="primary">MongoDB</q-chip>
        <q-chip class="chips" color="primary">MySQL</q-chip>
        <q-chip class="chips" color="primary">Vue</q-chip>
        <q-chip class="chips" color="primary">React</q-chip>
        <q-chip class="chips" color="primary">Git</q-chip>
        <q-chip class="chips" color="primary">Sass</q-chip>
        <q-chip class="chips" color="primary">Stylus</q-chip>
        <q-chip class="chips" color="primary">Babel</q-chip>
        <q-chip class="chips" color="primary">Webpack</q-chip>
        <q-chip class="chips" color="primary">C#</q-chip>
        <q-chip class="chips" color="primary">PHP</q-chip>
        <q-chip class="chips" color="primary">Java</q-chip>
        <q-chip class="chips" color="primary">Magento</q-chip>
      </q-card-main>
    </q-card>

    

    <div class="socialMediaSection">
      <ul class="list-social">
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
  </div>
</template>

<script>
import {
  QChip,
  QCard,
  QCardMain,
  QCardTitle,
  QCardSeparator
} from 'quasar'

export default {
  components: {
    QChip,
    QCard,
    QCardMain,
    QCardTitle,
    QCardSeparator
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="stylus">
$twitter = #1da1f2
$facebook = #3b5998
$google-plus = #dd4b39
$github = #000
$linkedin = #0077B5
  
.chips
  margin: 2%;

.socialMediaSection
  padding-top: 20px

.socialmedia-item
  display: inline-block

.socialmedia-item:not(:last-child)
  margin-right: 10px

ul.list-social
  margin-bottom: 0
i
  color: white
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
      background-color: $twitter
      &:hover 
        background-color: darken($twitter, 20%)
  &.social-facebook 
    a 
      background-color: $facebook
      &:hover 
        background-color: darken($facebook, 20%)
  &.social-google-plus 
    a 
      background-color: $google-plus
      &:hover 
        background-color: darken($google-plus, 20%)
  &.social-github 
    a 
      background-color: $github
      &:hover 
        background-color: lighten($github, 20%)
  &.social-linkedin 
    a 
      background-color: $linkedin
      &:hover
        background-color: darken($linkedin, 20%)
</style>
