<template>
  <v-app>
    <AppHeader/>
    <AppNav/>
    <v-content>
      <div class="container">
        <router-view/>
      </div>
    </v-content>
    <AppFooter/>
  </v-app>
</template>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
</style>

<script>
import AppHeader from "@/components/app-header";
import AppNav from "@/components/app-nav";
import AppFooter from "@/components/app-footer";

export default {
  components: { AppHeader, AppNav, AppFooter },
};
</script>
