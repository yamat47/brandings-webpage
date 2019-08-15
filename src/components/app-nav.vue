<template>
  <v-tabs
    grow
    dark
    show-arrows
    id="nav"
    :background-color="'primary'"
  >
    <v-tabs-slider color="#c17171"></v-tabs-slider>
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
  data() {
    return { routes };
  }
};
</script>

