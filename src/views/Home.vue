<template>
  <div>
    <mainHeader text="BRANDINGSのホームページへようこそ！" />
    <p>準備中です...</p>
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

export default {
  components: { mainHeader, navLink },
}
</script>
