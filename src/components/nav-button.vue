<template>
  <p class='py-4 text-right'>
    <v-btn large color='primary' class='pr-3' :to="to" :href="href" :target="href ? '_blank' : undefined">
      <span class='font-weight-bold'>{{ label }}</span>
      <v-icon>keyboard_arrow_right</v-icon>
    </v-btn>
  </p>
</template>

<script>
export default {
  props: [ 'to', 'href', 'label' ]
}
</script>
