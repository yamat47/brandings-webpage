<template>
  <div id="contact">
    <mainHeader :text="'お問い合わせ'"></mainHeader>
    <p>練習の見学や合同練習/練習試合などのお申し込みは<span class="mail">brandings_team_mail@yahoo.co.jp</span>へとご連絡ください。チームの担当者からご連絡いたします！</p>
    <p class="notice red--text">※メールの受信設定やメールアドレスへの入力間違えにより返信できないケースが生じています。3日ほど経って返信がない場合は、お手数ですが再度ご連絡をお願いいたします。</p>
  </div>
</template>

<style lang="sass">
#contact
  p
    margin-bottom: 1em

  span.mail
    margin: 0 0.5rem
    font-weight: bold
</style>

<script>
import mainHeader from "@/components/main_header";

export default {
  components: { mainHeader }
}
</script>
