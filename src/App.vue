<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import axios from "axios";
import { store } from "./data/store.js";

export default {
  name: "App",
  components: {
    AppFooter,
    AppHeader,
  },
  data() {
    return {
      store,
    };
  },

  methods: {
    getApiMovies() {
      store.moviesData = [];
      axios
        .get(store.apiUrlMovies, {
          params: {
            api_key: store.api_key,
            query: store.query,
          },
        })
        .then((result) => {
          store.moviesData = result.data.results;
        });
    },
    getApiSeries() {
      store.tvSeriesData = [];
      axios
        .get(store.apiUrlSeries, {
          params: {
            api_key: store.api_key,
            query: store.query,
          },
        })
        .then((result) => {
          store.tvSeriesData = result.data.results;
        });
    },
  },

  mounted() {
    //this.getApiMovies();
  },
};
</script>

<template>
  <AppHeader />
  <div class="container">
    <div class="row text-white">
      <ul>
        <li v-for="(movie, index) in store.moviesData" :key="index">
          {{ movie.title }}
        </li>
      </ul>
    </div>
  </div>
  <AppFooter />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
