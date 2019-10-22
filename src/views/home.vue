<template>
  <div>
    <mainHeader text="BRANDINGSのホームページへようこそ！" />
    <subHeader icon="fas fa-football-ball" text="BRANDINGSって？" />
    <p>私たち<teamName/>は多摩川の河川敷を拠点に活動するアマチュアのアメリカンフットボールチームです。</p>
    <p>日本プライベートフットボール協会（通称JPFF）に所属し、ハーバーボウルやオーシャンボウルといったボウルゲームでの勝利を目指して日々練習や試合に取り組んでいます。</p>
    <p>「アメフトはしたいけど週何日も練習に参加できない...。」「学生の頃ほどのきつい練習ではなく楽しくプレーしたい！」といった方にはぴったりのチームです。ぜひホームページでチームの雰囲気を感じていただき少しでも興味を持ってもらえると嬉しいです！</p>
    <navButton label="入部案内" to="join_us" />
    <subHeader icon="fas fa-football-ball" text="次回の練習・試合の予定" />
    <div class="text-center my-8" v-show="scheduleLoading">
      <v-progress-circular indeterminate color="primary" />
    </div>
    <template v-show="!scheduleLoading">
      <v-list class="transparent pt-0" v-if="latestEventExists()">
        <scheduleFeedItem :event="latestEvent" />
      </v-list>
      <p v-show="typeof latestEvent === 'undefined'">まだ登録されていません、すみません...。</p>
    </template>
    <navButton label="BRANDINGSスケジュール" to="schedule" />
    <subHeader icon="fas fa-football-ball" text="チームブログの最新記事" />
    <blogFeed :limit="3" />
    <navButton label="BRANDINGSチームブログ" to="blog" />
  </div>
</template>

<style lang="sass" scoped>
.nav-link
  margin: 0 0.5rem
  font-weight: bold
</style>

<script>
import mainHeader from "@/components/main-header";
import subHeader from "@/components/sub-header";
import teamName from "@/components/team-name";
import navButton from "@/components/nav-button";
import scheduleFeedItem from "@/components/schedule-feed-item";
import blogFeed from "@/components/blog-feed";

import axios from "axios";

export default {
  components: { mainHeader, subHeader, teamName, navButton, scheduleFeedItem, blogFeed },
  data () {
    return { latestEvent: false, scheduleLoading: true }
  },
  mounted () {
    axios
      .get( "https://jsonbox.io/box_brandings_schedule_v1" )
      .then( ( response ) => {
        this.latestEvent = response.data.filter( event => new Date ( event.start_time ) > new Date () ).pop();
        this.scheduleLoading = false;
      } );
  },
  methods: {
    latestEventExists() {
      return !!this.latestEvent;
    }
  }
}
</script>
