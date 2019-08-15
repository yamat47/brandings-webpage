<template>
  <a :href="url" target="_blank">
    <span class="link-label">{{ label }}</span>
    <v-icon class="open-in-new">open_in_new</v-icon>
  </a>
</template>

<style lang="sass" scoped>
a
  text-decoration: none
  span.link-label
    text-decoration: underline
  i.open-in-new
    margin-left: .3rem
    font-size: inherit
</style>

<script>
export default {
  props: [ "url", "label" ]
}
</script>
