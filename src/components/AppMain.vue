<script>
import AppCard from "./AppCard.vue";
import { store } from "../data/store.js";
export default {
  name: "AppMain",
  components: {
    AppCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <main>
    <!-- movies -->
    <div class="container pt-5">
      <h2 class="ps-4 fs-1 py-2">FILM</h2>
      <div class="row">
        <div
          class="col-3 py-4"
          v-for="(card, index) in store.moviesData"
          :key="index"
        >
          <AppCard
            :image="card.poster_path"
            :originalTitle="card.original_title"
            :titleMovies="card.title"
            :overview="card.overview"
          />
        </div>
      </div>
    </div>

    <!-- tv series -->
    <div class="container pt-5">
      <h2 class="ps-4 fs-1 py-2">SERIE TV</h2>
      <div class="row">
        <div
          class="col-3 py-4"
          v-for="(card, index) in store.tvSeriesData"
          :key="index"
        >
          <AppCard
            :image="card.poster_path"
            :titleSeries="card.original_name"
            :overview="card.overview"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../style/partials/var" as *;
main {
  h2 {
    color: $primary-color;
    -webkit-text-stroke: 0.5px white;
  }
}
</style>
