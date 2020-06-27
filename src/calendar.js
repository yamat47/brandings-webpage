const CALENDAR_ID = "brandings.1.2.3@gmail.com"
const API_KEY = "AIzaSyAdmVoL9eTtYYgJExurnGNzAMedLc1ylZ0"
const PUBLIC_EVENT_MARKER = "🏈"

import axios from "axios"

function url () {
  return `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&q=${PUBLIC_EVENT_MARKER}`
}

function constructParams ( extraParams = {} ) {
  const params = {
    singleEvents: true,
    orderBy: "startTime"
  }

  Object.keys( extraParams ).forEach( ( key ) => {
    params[ key ] = extraParams[ key ]
  })

  return params
}

export default {
  eventName( summary ) {
    return summary.replace( PUBLIC_EVENT_MARKER, "" ).trim()
  },
  getEvents ( extraParams = {} ) {
    const params = constructParams( extraParams )

    return axios.get( url(), { params } )
  },
  getLatestEvent () {
    const now = new Date().toISOString()

    return this.getEvents( { maxResults: 1, timeMin: now } )
  }
}
