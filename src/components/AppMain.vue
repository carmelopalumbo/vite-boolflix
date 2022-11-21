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
    <div class="container pt-5">
      <h2 class="ps-4 fs-1 py-2">FILM</h2>
      <div class="row">
        <div
          class="col-3 py-4"
          v-for="(card, index) in store.moviesData"
          :key="index"
        >
          <AppCard :image="card.poster_path" />
        </div>
      </div>
    </div>

    <div class="container pt-5">
      <h2 class="ps-4 fs-1 py-2">TV SERIES</h2>
      <div class="row">
        <div
          class="col-3 py-4"
          v-for="(card, index) in store.tvSeriesData"
          :key="index"
        >
          <AppCard :image="card.poster_path" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../style/partials/var" as *;
main {
  color: $primary-color;
  -webkit-text-stroke: 0.5px white;
}
</style>
