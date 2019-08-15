<template>
  <v-app-bar
    absolute
    dark
    :class="klass"
  >
    <v-toolbar-title class="header-title">
      JPFF BRANDINGS
    </v-toolbar-title>
  </v-app-bar>
</template>

<style lang="sass">
.header-title
  width: 100%
  display: flex
  justify-content: center
  align-items: center
  font-weight: bold
  cursor: default
</style>

<script>
export default {
  props: [ "klass" ],
  methods: {
    logoImagePath: () => require( "@/assets/images/logo.png" )
  }
};
</script>
