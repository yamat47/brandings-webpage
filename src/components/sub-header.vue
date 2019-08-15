<template>
  <h3>
    <v-icon>whatshot</v-icon>
    <span class='ml-2'>{{ text }}</span>
  </h3>
</template>

<style lang='sass' scoped>
h3
  padding: 1rem 0 0.5rem
  margin-bottom: 1.5rem
  border-bottom: 2px solid #222222
span
  vertical-align: sub
</style>

<script>
export default {
  props: [ 'icon', 'text' ]
}
</script>
