<template>
  <v-app-bar
    absolute
    dark
    :class="klass"
  >
    <v-toolbar-title class="header-title">
      BRANDINGS
      <img class="team-logo" :src='logoImagePath()' />
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

  img.team-logo
    width: 40px
    margin-left: 1rem
</style>

<script>
export default {
  props: [ "klass" ],
  methods: {
    logoImagePath: () => require( "@/assets/images/logo.png" )
  }
};
</script>
