<template>
  <div>
    <mainHeader :text="'BRANDINGSチームブログ'" />
    <p>練習や試合のたびに選手・スタッフが持ち回りで記事を更新しています！（最近少しサボり気味...）</p>
    <p class="red--text">※記事をクリックすると別タブでブログを開きます。</p>
    <blogFeed />
    <navButton label="アメブロで全部の記事を見る" href="https://ameblo.jp/brandings/" />
  </div>
</template>

<script>
import mainHeader from "@/components/main-header";
import navButton from "@/components/nav-button";
import blogFeed from "@/components/blog-feed";

export default {
  components: { mainHeader, navButton, blogFeed },
}
</script>
