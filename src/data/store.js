import { reactive } from 'vue'

export const store = reactive({
   moviesData: [],
   tvSeriesData: [],
   isLoad: false,
   apiUrlMovies: 'https://api.themoviedb.org/3/search/movie',
   apiUrlSeries: 'https://api.themoviedb.org/3/search/tv?',
   api_key: '10bde6ce278b4530139da29ead0c56de',
   query: '',
   language: 'it-IT'
});