<template>
  <div>
    <v-footer flex row>
        <div class="px-0 col-4 col-sm-6 col-md-4">
          <a v-for="link in links.sns" :key="link.id" :href="link.url" target="_blank" class="snsLink">
            <v-icon class="primary--text">{{ link.faIcon }}</v-icon>
            <span class="d-none d-sm-inline font-weight-bold">{{ link.name }}</span>
          </a>
        </div>
        <span class="primary--text px-0 font-weight-bold col-8 col-sm-6 col-md-4 text-right text-md-center">&copy; {{ new Date().getFullYear() }} BRANDINGS</span>
        <span class="primary--text px-0 col-12 col-md-4 text-center text-md-right">Powered by <a href="https://twitter.com/yamat47" target="_blank">@yamat47</a></span>
    </v-footer>
  </div>
</template>

<style lang="sass" scoped>
a.snsLink
  text-decoration: none
  margin-right: 1rem
  &:last-child
    margin-right: 0
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
