<template>
  <v-timeline-item small>
    <template v-slot:opposite>
      <span
        class="font-weight-bold"
        v-text="event.month"
      ></span>
    </template>
    <v-card class="elevation-2">
      <v-card-title class="title font-weight-bold d-none d-md-block">{{ event.title }}</v-card-title>
      <v-card-title class="title font-weight-bold d-md-none">{{ event.month }}: {{ event.title }}</v-card-title>
      <v-card-text>{{ event.content }}</v-card-text>
    </v-card>
  </v-timeline-item>
</template>

<script>
export default {
  props: [ "event" ]
}
</script>
