<template>
  <div>
    <mainHeader text="入部案内" />
    <subHeader :icon="icon" text="「あなた」の入部を待っています！" />
    <p>私たちと<teamName/>で一緒にアメフトをしませんか？大学生、新社会人、ブランクがある経験者など年齢・経験問わず新たな仲間を大募集中です！もちろんプレーヤーだけでなくマネージャーやスタッフも募集しています！</p>
    <p>年末のハーバーボウル（東日本支部代表決定戦）やオーシャンボウル（日本一決定戦）を目指して毎週楽しく全力でアメフトをしています。アメフト好きな「あなた」の参加を心からお待ちしています！</p>
    <subHeader :icon="icon" text="どんな経歴の人が所属しているの？" />
    <p>学生アメフトで名を挙げた人もいれば未経験で入部した人もいるという多様な経歴のメンバーが在籍しています。もちろん全員「大のアメフト好き」です！</p>
    <p>出身リーグはこちら: 関東学生アメフトリーグ（TOP8、BIG8、2部、3部）、関西学生アメフトリーグ、医科歯科リーグ（1部、2部）、KCFF、Xリーグ（X1、X2、X3）、JPFF WEST、UFL、...などなどです。</p>
    <subHeader :icon="icon" text="練習の見学をするには？" />
    <p>少しでも<teamName/>に興味を持ってくださったら、ぜひ一度練習の見学や体験にいらしてください！</p>
    <p>合同練習や練習試合などで時間や場所が変わっていることもあります。スムーズに進めるためにも<navLink to="contact" label="こちら" />から事前に見学や体験を希望する旨をお伝えいただけると嬉しいです！</p>
    <p class="red--text">※高校生ならびに未成年の方のチーム加入にあたっては保護者の方の同意を確認しております。アメフトは大きな怪我が起きる可能性が比較的高いコンタクトスポーツですが、チームとしては各人の怪我などの責任は負いかねます。そのため保護者のご了承をいただいた上での参加をお願いしております。</p>
    <subHeader :icon="icon" text="練習日時" />
    <p>毎週日曜日の9:30から12:00に練習をしています。リーグ戦の開幕前には他チームとの合同練習や練習試合をさせていただくことも多いです。</p>
    <p>詳しい練習日程は<navLink to="schedule" label="こちら" />をご覧ください！</p>
    <subHeader :icon="icon" text="練習場所" />
    <p>普段は二子玉川駅や多摩川駅近くの多摩川の河川敷で練習をしています。</p>
    <iframe
      src="https://maps.google.com/?ll=35.598356%2C139.648536&spn=0.005269%2C0.01502&ie=UTF8&z=16&t=hybrid&sll=35.598356%2C139.648536&sspn=0.005269%2C0.01502&q=35.598598%2C139.644481%20(%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AB%E3%81%AA%E3%81%97%E3%81%AE%E5%A0%B4%E6%89%80)&output=embed"
      frameborder="0"
      allowfullscreen>
    </iframe>
    <p>電車でいらっしゃる場合は二子玉川駅（東急田園都市線）か多摩川駅（東急東横線、東急多摩川線）が最寄の駅です。東急バス（玉11）を利用して「玉堤小学校」にて下車していただくと練習場所の目の前に着きます。</p>
    <p>車でいらっしゃる場合は練習場所近くの民間のパーキングをご利用ください。練習場所まで徒歩5分以内のエリアにいくつかあります。下図の赤線がパーキングからの経路です。</p>
    <v-img :src="require( '@/assets/images/navigation.jpg' )" />
    <subHeader :icon="icon" text="年間のスケジュール" />
    <v-timeline :dense="timelineDense">
      <yearlyScheduleTimelineItem v-for="( event, i ) in events" :key="i" :event="event" />
    </v-timeline>
    <subHeader :icon="icon" text="入部後の費用" />
    <p>入部後はチームの活動費として部費をお支払いいただいています。社会人は年間15,000円、学生は5,000円です（選手のみ、マネージャーは不要）。ボールやテーピングなどの備品を購入したりミーティングの会場使用料などに使っています。</p>
    <p>その他リーグへの登録費用（2019年度は17,500円）や試合用のユニフォーム代、防具の購入・保守代を負担していただきます。</p>
  </div>
</template>

<style lang="sass" scoped>
iframe
  width: 100%
  height: 450px
  margin-bottom: 2rem
</style>

<script>
import mainHeader from "@/components/main-header";
import subHeader from "@/components/sub-header";
import teamName from "@/components/team-name";
import navLink from "@/components/nav-link";
import yearlyScheduleTimelineItem from "@/components/yearly-schedule-timeline-item";

const events = [
  { month: "3月",       title: "新シーズンスタート", content: "昨シーズン終了の余韻に浸る間もなく3月から新シーズンをスタートします。年明けのボウルゲームに向けて練習開始です！" },
  { month: "5月",       title: "バーベキュー大会",   content: "多摩川河川敷のバーベキュー場で楽しく食べ、楽しく飲みます！家族が一緒に参加することも多く大所帯なイベントです。" },
  { month: "6月〜7月",  title: "オープン戦",         content: "出身チームのツテをたどったりしてJPFFやKCFFなどのチームと試合を組みます！" },
  { month: "7月",       title: "オールスター",       content: "JPFFオールスター vs. KCFFオールスター、学生には負けていられません！" },
  { month: "8月",       title: "審判講習会",         content: "JPFFはXリーグやKCFAとは異なり各チームの選手たちで審判をします。試合で適切な判定ができるように経験豊富な方々に講習会を開いていただきます。" },
  { month: "9月〜11月", title: "リーグ戦",           content: "早ければ8月末にリーグ戦が開幕します。プレーオフ進出を目指し暑さに負けず戦い続けます！" },
  { month: "12月〜1月", title: "プレーオフ",         content: "6チームないし5チームで戦うリーグ戦を突破するとプレーオフへと進出します。ライスボウルの興奮に負けないくらい熱い戦いが繰り広げられます。" },
  { month: "2月",       title: "オーシャンボウル",   content: "プレーオフを突破するとJPFF日本一を決める戦い、オーシャンボウルへと進出します。東西の王者が相見えるJPFF最高峰の戦いです。" },
  { month: "2月",       title: "納会、シーズン終了", content: "納会では今年のハイライトを観て盛り上がったり新シーズンの幹部の発表があったりします。ここからチームは少しだけオフに入ります。" },
];

export default {
  data() {
    return { icon: "person_add", events };
  },
  components: { mainHeader, subHeader, teamName, navLink, yearlyScheduleTimelineItem },
  computed: {
    timelineDense: function() {
      const breakpoint = this.$vuetify.breakpoint.name;

      return breakpoint === "xs" || breakpoint === "sm";
    }
  }
}
</script>
