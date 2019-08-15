<template>
  <v-app>
    <div id="app">
      <AppHeader :klass="classes.header"></AppHeader>
      <AppHeaderImage :klass="classes.headerImage" />
      <AppNav :klass="classes.nav"></AppNav>
      <main :class="classes.main">
        <router-view/>
      </main>
    </div>
  </v-app>
</template>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

  .app-header
    height: 56px
  .app-header-image
    margin-top: 56px

</style>

<script>
import AppHeader from "@/components/app-header";
import AppHeaderImage from "@/components/app-header-image";
import AppNav from "@/components/app-nav";

export default {
  components: { AppHeader, AppNav, AppHeaderImage },
  data() {
    return {
      classes: {
        header: "app-header",
        headerImage: "app-header-image",
        nav: "app-nav",
        main: "app-main container"
      }
    }
  }
};
</script>
