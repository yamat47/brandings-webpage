<template>
  <p class='py-4 text-right'>
    <v-btn large color='primary' class='pr-3' @click='$router.push( href )' >
      <span class='font-weight-bold'>{{ label }}</span>
      <v-icon>keyboard_arrow_right</v-icon>
    </v-btn>
  </p>
</template>

<script>
export default {
  props: [ 'href', 'label' ]
}
</script>
