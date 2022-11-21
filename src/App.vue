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
    getApis() {
      //movies
      axios
        .get(store.apiUrlMovies, {
          params: {
            api_key: store.api_key,
            query: store.query,
          },
        })
        .then((result) => {
          store.moviesData = [];
          store.moviesData = result.data.results;
        });

      //tvseries
      axios
        .get(store.apiUrlSeries, {
          params: {
            api_key: store.api_key,
            query: store.query,
          },
        })
        .then((result) => {
          store.tvSeriesData = [];
          store.tvSeriesData = result.data.results;
        });
    },
  },

  mounted() {
    //this.getApis();
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
