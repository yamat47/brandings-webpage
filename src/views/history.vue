<template>
  <div id="history">
    <mainHeader :text="'ヒストリー'" />
    <subHeader :icon="'star'" :text="'発展途中なブランディングス'" />
    <p>ブランディングスは{{ BRANDINGS_BIRTH_YEAR }}年に発足し、{{ thisYear }}年は創部{{ lastingYears }}年を迎えます。所属しているJPFFの中には50年もの歴史を誇るチームもあり、リーグの中では比較的歴史の浅いチームです。</p>
    <p>2005年には人数不足のため休部の危機に瀕しました。しかしチーム発足時のメンバーを中心にチームを立て直し、これまで活動を継続することができています。</p>
    <p>その時々のメンバーがチームを盛り上げてきた結果、これまでJPFFの東日本決勝戦（ハーバーボウル）へと5度出場することができました。しかしボウルゲームを制したことはなく、まだまだ発展途中なチームです。</p>
    <subHeader :icon="'star'" :text="'チーム名の由来'" />
    <p>私たちのチーム名である<span class="team-name">BRANDINGS</span>のBRANDには商標や銘柄といった意味がありますが、古くはカウボーイが自分の所有する牛に記した「焼印」に由来します。また「燃え盛る炎（を伴う剣）」の意味もあり、BRANDINGは「心に焼きつく」という意味も持っています。</p>
    <p>私たち<span class="team-name">BRANDINGS</span>は一人ひとりがフットボールに対する情熱を熱く燃え上がらせて、見る人の心に焼きつくようなチームでありたいと、この名称を名乗っています。</p>
    <subHeader :icon="'star'" :text="' BRANDINGS年表'" />
  </div>
</template>

<script>
const BRANDINGS_BIRTH_YEAR = 1997,
      thisYear = ( new Date() ).getFullYear();

import mainHeader from "@/components/main_header";
import subHeader from "@/components/sub_header";

export default {
  data() {
    return { BRANDINGS_BIRTH_YEAR, thisYear };
  },
  components: { mainHeader, subHeader },
  computed: {
    lastingYears: () => thisYear - BRANDINGS_BIRTH_YEAR
  }
}
</script>
