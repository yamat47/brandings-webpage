<template>
  <div>
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
  </div>
</template>

<script>
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
const FEED_URL = "https://rss.app/feeds/snymP4nvS73euZij.xml";

import Parser from "rss-parser";

export default {
  props: [ "limit" ],
  data () {
    return { items: [], loading: true }
  },
  created: function() {
    let parser = new Parser();

    parser.parseURL( CORS_PROXY + FEED_URL, ( _, feed ) => {
      this.items = feed.items.slice( 0, this.feedLimit() );
      this.loading = false;
    });
  },
  methods: {
    feedLimit() {
      return this.limit || 5
    },
    feedImagePath( item ) {
      const regExp = /src="(.+\.jpg)"/g,
            DUMMY_IMAGE_PATH = require( "@/assets/images/dummy_feed_image.jpeg" ),
            match = regExp.exec( item.content );

      if ( match == null ) {
        return DUMMY_IMAGE_PATH;
      }
      else {
        return match[ 1 ] || DUMMY_IMAGE_PATH;
      }
    },
    feedTitle( item ) {
      const regExp = /ブランディングス：(.*)$/g;

      return regExp.exec( item.title )[ 1 ];
    }
  },
  computed: {
  }
}
</script>
