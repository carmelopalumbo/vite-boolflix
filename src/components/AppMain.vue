<script>
import AppCard from "./AppCard.vue";
import AppLoader from "./AppLoader.vue";
import { store } from "../data/store.js";
export default {
  name: "AppMain",
  components: {
    AppCard,
    AppLoader,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <main v-if="store.isLoadFilm && store.isLoadTV">
    <!-- movies -->
    <div class="container pt-5" v-if="store.moviesData.length > 0">
      <h2 class="ps-4 fs-1 py-2" v-if="!store.default">
        HO TROVATO {{ store.moviesData.length }} FILM
      </h2>
      <h2 class="ps-4 fs-1 py-2" v-else>FILM POPOLARI ADESSO!</h2>
      <div class="row">
        <div
          class="col d-flex justify-content-between py-4"
          v-for="(card, index) in store.moviesData"
          :key="index"
        >
          <AppCard :card="card" />
        </div>
      </div>
    </div>

    <!-- tv series -->
    <div class="container pt-5" v-if="store.tvSeriesData.length > 0">
      <h2 class="ps-4 fs-1 py-2" v-if="!store.default">
        HO TROVATO {{ store.tvSeriesData.length }} SERIE TV
      </h2>
      <h2 class="ps-4 fs-1 py-2" v-else>SERIE TV POPOLARI ADESSO!</h2>
      <div class="row">
        <div
          class="col d-flex justify-content-between py-4"
          v-for="(card, index) in store.tvSeriesData"
          :key="index"
        >
          <AppCard :card="card" />
        </div>
      </div>
    </div>

    <!-- no results found -->
    <div
      class="container"
      v-if="store.moviesData.length === 0 && store.tvSeriesData.length === 0"
    >
      <div class="row text-center py-5">
        <h2>NESSUN RISULTATO TROVATO!</h2>
      </div>
    </div>
  </main>

  <!-- loading -->
  <div class="load-container text-center py-5" v-else>
    <AppLoader />
  </div>
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
