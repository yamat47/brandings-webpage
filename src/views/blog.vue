<template>
  <div>
    <mainHeader :text="'BRANDINGSチームブログ'" />
    <p>練習や試合のたびに選手・スタッフが持ち回りで記事を更新しています！（最近少しサボり気味...）</p>
    <p class="red--text">※記事をクリックすると別タブでブログを開きます。</p>
    <div class="text-center my-8" v-show="loading">
      <v-progress-circular indeterminate color="primary" />
    </div>
    <v-card
      class="mb-6"
      v-for="( item, i ) in items" :key="i"
      :href="item.link"
      target="_blank"
    >
      <v-img height="150px" :src="feedImagePath( item )" />
      <v-card-title class="font-weight-bold">{{ feedTitle( item ) }}</v-card-title>
      <v-card-text>{{ item.contentSnippet }}</v-card-text>
    </v-card>
    <navButton label="アメブロで全部の記事を見る" href="https://ameblo.jp/brandings/" />
  </div>
</template>

<style lang="sass" scoped>
</style>

<script>
const FEED_URL = "https://rss.app/feeds/snymP4nvS73euZij.xml";

import Parser from "rss-parser";

import mainHeader from "@/components/main-header";
import navButton from "@/components/nav-button";

export default {
  data () {
    return { items: [], loading: true }
  },
  components: { mainHeader, navButton },
  created: function() {
    let parser = new Parser();

    parser.parseURL( FEED_URL, ( _, feed ) => {
      this.items = feed.items;
      this.loading = false;
    });
  },
  methods: {
    feedImagePath( item ) {
      const regExp = /src="(.+\.jpg)"/g,
            DUMMY_IMAGE_PATH = require( "@/assets/images/dummy_feed_image.jpeg" );

      return regExp.exec( item.content )[ 1 ] || DUMMY_IMAGE_PATH;
    },
    feedTitle( item ) {
      const regExp = /ブランディングス：(.*)$/g;

      return regExp.exec( item.title )[ 1 ];
    }
  }
}
</script>
