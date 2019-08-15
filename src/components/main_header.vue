<template>
  <h2 class="header">{{ text }}</h2>
</template>

<style lang="sass">
h2.header
  text-align: center
  padding: 28px 0
</style>

<script>
export default {
  props: [ "text" ]
}
</script>
