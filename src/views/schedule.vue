<template>
  <div>
    <mainHeader :text="'スケジュール'" />
    <div class="text-center my-8" v-show="loading">
      <v-progress-circular indeterminate color="primary" />
    </div>
    <v-list class="transparent pt-0 mb-6" v-show="!loading">
      <template v-for="( item, i ) in items">
        <scheduleFeedItem :event="item" :key="item._id" />
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

import Calendar from "@/calendar"

export default {
  components: { mainHeader, navLink, scheduleFeedItem },
  data () {
    return { items: [], loading: true }
  },
  mounted () {
    Calendar
      .getEvents()
      .then( ( response ) => {
        this.items = response.data.items.slice( 0, 5 ).reverse()
        this.loading = false;
      } );
  }
}
</script>
