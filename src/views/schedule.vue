<template>
  <div>
    <mainHeader :text="'スケジュール'" />
    <div class="text-center my-8" v-show="loading">
      <v-progress-circular indeterminate color="primary" />
    </div>
    <v-list class="transparent pt-0 mb-6" v-show="!loading">
      <template v-for="( item, i ) in items">
        <scheduleFeedItem :event="item" :key="item.name" />
        <v-divider :key="i" v-if="i + 1 < items.length" />
      </template>
    </v-list>
    <p>練習見学などご希望の方はお気軽に<navLink to="contact" label="こちら" />からお問い合わせください！</p>
  </div>
</template>

<style lang="sass" scoped>
.nav-link
  margin: 0 0.5rem
  font-weight: bold
</style>

<script>
import mainHeader from "@/components/main-header";
import navLink from "@/components/nav-link";
import scheduleFeedItem from "@/components/schedule-feed-item";

import axios from "axios";

export default {
  components: { mainHeader, navLink, scheduleFeedItem },
  data () {
    return { items: [], loading: true }
  },
  mounted () {
    axios
      .get( "https://jsonbox.io/box_brandings_schedule_v1" )
      .then( ( response ) => {
        this.items = response.data.slice( 0, 5 );
        this.loading = false;
      } );
  }
}
</script>
