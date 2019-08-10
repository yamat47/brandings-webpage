<template>
  <v-app-bar
    absolute
    dark
    :class="klass"
  >
    <v-toolbar-title>BRANDINGS</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  props: [ "klass" ]
};
</script>
