<template>
  <v-list-item three-line class="schedule-feed-item">
    <v-list-item-content>
      <v-list-item-title class="mt-1 font-weight-bold">{{ eventTitle( event ) }}</v-list-item-title>
      <v-list-item-subtitle class="mt-2 mb-1">
        <v-icon>calendar_today</v-icon>
        <span class="event-info ml-2">{{ eventPeriod( event ) }}</span>
      </v-list-item-subtitle>
      <v-list-item-subtitle class="mt-1">
        <v-icon>place</v-icon>
        <span class="event-info ml-2">{{ eventPlace( event ) }}</span>
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<style lang="sass" scoped>
.event-info
  vertical-align: sub
</style>

<script>
export default {
  props: [ "event" ],
  methods: {
    eventTitle( event ) {
      return event.name;
    },
    eventPeriod( event ) {
      const startTime     = new Date( event.start_time ),
            finishTime    = new Date( event.finish_time ),
            year          = startTime.getFullYear(),
            month         = ( "0" + ( startTime.getMonth() + 1 ) ).slice( -2 ),
            day           = ( "0" + startTime.getDate() ).slice( -2 ),
            startHour     = ( "0" + startTime.getHours() ).slice( -2 ),
            startMinutes  = ( "0" + startTime.getMinutes() ).slice( -2 ),
            finishHour    = ( "0" + finishTime.getHours() ).slice( -2 ),
            finishMinutes = ( "0" + finishTime.getMinutes() ).slice( -2 );

      return `${year}/${month}/${day} ${startHour}:${startMinutes} - ${finishHour}:${finishMinutes}`;
    },
    eventPlace( event ) {
      return event.place;
    }
  }
}
</script>
