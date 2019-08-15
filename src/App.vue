<template>
  <v-app>
    <div id="app">
      <AppHeader/>
      <AppNav/>
      <main class="container">
        <router-view/>
      </main>
      <AppFooter/>
    </div>
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
