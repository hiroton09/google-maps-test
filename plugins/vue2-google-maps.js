import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyC81m3NgAWEObiPaxCUG5RrCmQOY6xAUvo',
        libraries: 'places',
    },
})