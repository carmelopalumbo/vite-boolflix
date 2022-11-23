import { reactive } from 'vue'

export const store = reactive({
   moviesData: [],
   tvSeriesData: [],
   isLoadFilm: false,
   isLoadTV: false,
   apiUrlMovies: '',
   apiUrlSeries: '',
   api_key: '10bde6ce278b4530139da29ead0c56de',
   query: '',
   language: 'it-IT',
   default: true,
});