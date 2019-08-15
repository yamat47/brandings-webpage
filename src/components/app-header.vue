<template>
  <v-img :class="klass" :src="headerImagePath()" :maxHeight="'350px'" :aspect-ratio="1" >
    <v-container fill-height>
      <v-layout align-center>
        <v-flex text-xs-center>
          <h1 class='white--text font-weight-black display-1 pb-4'>BRANDINGS</h1>
          <h2 class='white--text font-weight-black'>American Football Team</h2>
        </v-flex>
      </v-layout>
    </v-container>
  </v-img>
</template>

<style lang='sass' scoped>
h1, h2
  text-align: center
  text-shadow: 1px 1px 5px black
</style>

<script>
export default {
  props: [ "klass" ],
  methods: {
    headerImagePath: () => require( "@/assets/images/header.jpeg" )
  }
};
</script>
