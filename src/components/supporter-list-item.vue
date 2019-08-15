<template>
  <v-flex d-flex xs12 sm6 lg4>
    <v-card class="supporter">
      <v-layout row>
        <v-flex xs5>
          <v-img height='150px' contain :src="supporterImagePath( supporter.id )"></v-img>
        </v-flex>
        <v-flex d-flex align-center xs7>
          <div class='information'>
            <p :class='classes.position'>{{ supporter.position }}</p>
            <p :class='classes.name'>{{ supporterName( supporter.name )}}</p>
            <p :class='classes.kana'>{{ supporterNameKana( supporter.kana ) }}</p>
          </div>
        </v-flex>
      </v-layout>
    </v-card>
  </v-flex>
</template>

<style lang="sass" scoped>
.supporter
  text-align: center
  .information
    text-align: center
    width: 100%
</style>

<script>
export default {
  props: [ 'supporter' ],
  data() {
    return {
      classes: {
        position: 'my-2',
        name: 'my-2 title font-weight-bold',
        kana: 'my-2'
      }
    }
  },
  methods: {
    supporterImagePath: function( id ) {
      return require( '@/assets/images/supporters/' + id.toString() + '.jpg' )
    },
    supporterName: function( name ) {
      return name.family + ' ' + name.first
    },
    supporterNameKana: function( kana ) {
      return kana.first + ' ' + kana.family.toUpperCase()
    }
  }
}
</script>
