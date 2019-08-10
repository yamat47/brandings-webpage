<template>
  <div id="nav" :class="klass">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  props: [ "klass" ]
};
</script>

