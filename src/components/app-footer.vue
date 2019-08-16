<template>
  <div>
    <v-footer>
      <a v-for="link in links.sns" :key="link.id" :href="link.url" target="_blank" class="snsLink">
        <v-icon class="primary--text">{{ link.faIcon }}</v-icon>
        <span class="d-none d-sm-inline font-weight-bold">{{ link.name }}</span>
      </a>
      <v-spacer></v-spacer>
      <span class="primary--text font-weight-bold">&copy; {{ new Date().getFullYear() }} BRANDINGS</span>
    </v-footer>
    <v-footer>
      <v-spacer></v-spacer>
      <span class="primary--text">Powered by <a href="https://twitter.com/yamat47" target="_blank">@yamat47</a></span>
      <v-spacer></v-spacer>
    </v-footer>
  </div>
</template>

<style lang="sass" scoped>
a.snsLink
  text-decoration: none
  margin-right: 1rem
  i
    margin-right: .5rem
</style>

<script>
import links from "@/config/links";

export default {
  data() {
    return { links }
  }
}
</script>
