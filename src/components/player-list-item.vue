<template>
  <v-flex d-flex xs12 sm6 lg4>
    <v-card class="player">
      <v-layout row>
        <v-flex xs5>
          <v-img height='150px' contain :src="playerImagePath( player.id )"></v-img>
        </v-flex>
        <v-flex d-flex align-center xs7>
          <div class='information'>
            <p :class='classes.position'>{{ player.position }}</p>
            <p :class='classes.name'>{{ playerName( player.name )}}</p>
            <p :class='classes.kana'>{{ playerNameKana( player.kana ) }}</p>
          </div>
        </v-flex>
      </v-layout>
    </v-card>
  </v-flex>
</template>

<style lang="sass" scoped>
.player
  text-align: center
  .information
    text-align: center
    width: 100%
</style>

<script>
export default {
  props: [ 'player' ],
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
    playerImagePath: function( id ) {
      return require( '@/assets/images/players/' + id.toString() + '.jpg' )
    },
    playerName: function( name ) {
      return name.family + ' ' + name.first
    },
    playerNameKana: function( kana ) {
      return kana.first + ' ' + kana.family.toUpperCase()
    }
  }
}
</script>
