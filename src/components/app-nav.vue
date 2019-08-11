<template>
  <v-tabs id="nav" :class="klass">
    <v-tab :to="'/'">Home</v-tab>
    <v-tab :to="'/about'">About</v-tab>
  </v-tabs>
</template>

<script>
export default {
  props: [ "klass" ]
};
</script>

