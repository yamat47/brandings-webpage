<template>
  <div id="app">
    <AppHeader :klass="classes.header"></AppHeader>
    <AppNav :klass="classes.nav"></AppNav>
    <main :class="classes.main">
      <router-view/>
    </main>
  </div>
</template>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

  .app-header
    height: 56px
  .app-nav
    margin-top: 56px
    height: 30px

</style>

<script>
import AppHeader from "@/components/app-header";
import AppNav from "@/components/app-nav";

export default {
  components: { AppHeader, AppNav },
  data() {
    return {
      classes: {
        header: "app-header",
        nav: "app-nav",
        main: "app-main"
      }
    }
  }
};
</script>
