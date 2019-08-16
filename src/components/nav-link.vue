<template>
  <router-link :to="to" class="nav-link">{{ label }}</router-link>
</template>

<style lang="sass" scoped>
.nav-link
  margin: 0 0.5rem
  font-weight: bold
</style>

<script>
export default {
  props: [ "to", "label" ]
}
</script>
