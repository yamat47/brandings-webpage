<template>
  <div>
    <mainHeader :text="'スケジュール'" />
    <p>準備中です... 練習見学などご希望の方はお気軽に<router-link to="contact" class="nav-link">こちら</router-link>からお問い合わせください！</p>
  </div>
</template>

<style lang="sass" scoped>
.nav-link
  margin: 0 0.5rem
  font-weight: bold
</style>

<script>
import mainHeader from "@/components/main-header";

export default {
  components: { mainHeader },
}
</script>
