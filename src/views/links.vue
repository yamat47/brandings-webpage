<template>
  <div>
    <mainHeader :text="'リンク集'" />
    <subHeader :icon="'link'" :text="'チーム公式SNS'" />
    <v-simple-table class="link-table">
      <thead>
        <tr>
          <th>名前</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="link in links.sns" :key="link.id">
          <td class="text-no-wrap">
            <v-icon v-if="link.faIcon" class="fa-icon">{{ link.faIcon }}</v-icon>
            {{ link.name }}
          </td>
          <td class="text-no-wrap"><openInNewLink :url="link.url" :label="link.url" :faIcon="link.faIcon" /></td>
        </tr>
      </tbody>
    </v-simple-table>
    <subHeader :icon="'link'" :text="'フットボール協会'" />
    <v-simple-table class="link-table">
      <thead>
        <tr>
          <th>名前</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="link in links.association" :key="link.id">
          <td class="text-no-wrap">{{ link.name }}</td>
          <td class="text-no-wrap"><openInNewLink :url="link.url" :label="link.url" /></td>
        </tr>
      </tbody>
    </v-simple-table>
    <subHeader :icon="'link'" :text="'JPFF東日本支部加盟チーム'" />
    <v-simple-table class="link-table">
      <thead>
        <tr>
          <th>チーム名</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="link in links.jpff" :key="link.id">
          <td class="text-no-wrap">{{ link.name }}</td>
          <td class="text-no-wrap"><openInNewLink :url="link.url" :label="link.url" /></td>
        </tr>
      </tbody>
    </v-simple-table>
    <subHeader :icon="'link'" :text="'その他チーム関係者のリンク'" />
    <v-simple-table class="link-table">
      <thead>
        <tr>
          <th>チーム名</th>
          <th>URL</th>
          <th>メモ</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="link in links.others" :key="link.id">
          <td class="text-no-wrap">{{ link.name }}</td>
          <td class="text-no-wrap"><openInNewLink :url="link.url" :label="link.url" /></td>
          <td class="text-no-wrap">{{ link.note }}</td>
        </tr>
      </tbody>
    </v-simple-table>
    <p class="mt-4">以前のホームページよりリンク先を引き継いでいます。リンクに関する問い合わせはチーム関係者までご連絡ください。</p>
  </div>
</template>

<style lang="sass" scoped>
.link-table
  background-color: inherit
i.fa-icon
  margin-right: .3rem
  font-size: inherit
</style>

<script>
import mainHeader from "@/components/main-header";
import subHeader from "@/components/sub-header";
import openInNewLink from "@/components/open-in-new-link";

import links from "@/config/links";

export default {
  data() {
    return { links }
  },
  components: { mainHeader, subHeader, openInNewLink },
}
</script>
