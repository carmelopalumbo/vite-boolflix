<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import AppMain from "./components/AppMain.vue";
import axios from "axios";
import { store } from "./data/store.js";

export default {
  name: "App",
  components: {
    AppFooter,
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    };
  },

  methods: {
    getApis(isWelcome) {
      store.isLoadFilm = false;
      store.isLoadTV = false;
      if (isWelcome) {
        store.apiUrlMovies = "https://api.themoviedb.org/3/movie/popular";
        store.apiUrlSeries = "https://api.themoviedb.org/3/tv/popular";
        store.default = true;
      } else if (store.query != "") {
        store.apiUrlMovies = "https://api.themoviedb.org/3/search/movie";
        store.apiUrlSeries = "https://api.themoviedb.org/3/search/tv";
        store.default = false;
      }

      //movies
      axios
        .get(store.apiUrlMovies, {
          params: {
            api_key: store.api_key,
            query: store.query,
            language: store.language,
          },
        })
        .then((result) => {
          store.query = "";
          store.moviesData = [];
          store.moviesData = result.data.results;
          store.isLoadFilm = true;
        })

        .catch((error) => {
          console.log("ERROR!");
        });

      //tvseries
      axios
        .get(store.apiUrlSeries, {
          params: {
            api_key: store.api_key,
            query: store.query,
            language: store.language,
          },
        })
        .then((result) => {
          store.tvSeriesData = [];
          store.tvSeriesData = result.data.results;
          store.isLoadTV = true;
        })

        .catch((error) => {
          console.log("ERROR!");
        });
    },
  },

  mounted() {
    this.getApis(true);
  },
};
</script>

<template>
  <AppHeader @searchButton="getApis(false)" @defaultButton="getApis(true)" />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
