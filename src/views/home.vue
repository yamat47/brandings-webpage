<template>
  <div>
    <mainHeader text="BRANDINGSのホームページへようこそ！" />
    <subHeader icon="fas fa-football-ball" text="BRANDINGSって？" />
    <p>私たち<teamName/>は多摩川の河川敷を拠点に活動するアマチュアのアメリカンフットボールチームです。</p>
    <p>日本プライベートフットボール協会（通称JPFF）に所属し、ハーバーボウルやオーシャンボウルといったボウルゲームでの勝利を目指して日々練習や試合に取り組んでいます。</p>
    <p>「アメフトはしたいけど週何日も練習に参加できない...。」「学生の頃ほどのきつい練習ではなく楽しくプレーしたい！」といった方にはぴったりのチームです。ぜひホームページでチームの雰囲気を感じていただき少しでも興味を持ってもらえると嬉しいです！</p>
    <navButton label="入部案内" to="join_us" />
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
import blogFeed from "@/components/blog-feed";

export default {
  components: { mainHeader, subHeader, teamName, navButton, blogFeed },
}
</script>
