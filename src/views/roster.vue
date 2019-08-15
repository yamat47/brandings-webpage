<template>
  <div>
    <mainHeader :text="'ロスター'" />
    <v-container grid-list-xl>
      <v-layout row wrap>
        <playerListItem v-for='player in players' :key='player.id' :player='player'></playerListItem>
      </v-layout>
      <v-layout row wrap>
        <supporterListItem v-for='supporter in supporters' :key='supporter.id' :supporter='supporter'></supporterListItem>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import mainHeader from "@/components/main-header";
import playerListItem from "@/components/player-list-item";
import supporterListItem from "@/components/supporter-list-item";

import players from "@/config/players"
import supporters from "@/config/supporters"

export default {
  data() {
    return { players, supporters }
  },
  components: { mainHeader, playerListItem, supporterListItem },
}
</script>
