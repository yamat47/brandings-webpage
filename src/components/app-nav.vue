<template>
  <v-tabs
    centered
    grow
    id="nav"
    :class="klass"
  >
    <v-tab
      v-for="route in routes"
      :key="route.name"
      :to="route.path"
    >{{ route.name }}</v-tab>
  </v-tabs>
</template>

<script>
import routes from "@/config/routes";

export default {
  props: [ "klass" ],
  data() {
    return { routes };
  }
};
</script>

