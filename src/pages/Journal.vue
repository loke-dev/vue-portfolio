<template>
  <Layout>
    <div class="container">
      <div class="header">
        <h1 class="title">Journal</h1>
        <p>A wise person once said...</p>
      </div>
    </div>

      <g-link 
        :to="item.node.path"
        v-for="item in $page.posts.edges" 
        :key="item.node.id"
        class="journal-post"
      >
        <div class="journal">
          <h2 class="journal-title">{{ item.node.title }}</h2>
          <p class="journal-excerpt">{{ item.node.excerpt }}</p>
        </div>
      </g-link>
  </Layout>
</template>

<page-query>
query Journal {
	posts: allJournalPost {
    edges {
      node {
        id
        path
        title
        excerpt
      }
    }
  }
}
</page-query>

<script>
export default {
}
</script>

<style lang="sass" scoped>
.header
  padding: 2rem 0 1rem 0

  .title
    font-size: 3rem
    margin: 0 0 4rem 0
    padding: 0

.journal
  max-width: 960px
  margin: 0 auto
  padding: 0 2rem

.journal-header
  font-size: 3rem
  margin: 0 0 4rem 0
  padding: 0

.journal-post 
  display: block
  padding: 2rem 0
  text-decoration: none
  transition: background 0.5s ease

.journal-post > * 
  transition: transform 0.5s ease

.journal-post:hover 
  background-color: var(--color-base-1)

.journal-post:hover > * 
  transform: translateX(4rem)

.journal-post h1,
.journal-post h2 
  margin: 0
  padding: 0

.journal-title 
  font-size: 2rem
  color: var(--color-contrast)

.journal-excerpt 
  color: var(--color-contrast-1)

@media (min-width: 560px) 
  .journal-post 
    padding: 3rem 0

@media (min-width: 860px)
  .journal-post 
    padding: 5rem 0
</style>
