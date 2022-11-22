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
  <main v-if="store.isLoadFilm && store.isLoadTV">
    <!-- movies -->
    <div class="container pt-5" v-if="store.moviesData.length > 0">
      <h2 class="ps-4 fs-1 py-2" v-if="!store.default">
        HO TROVATO {{ store.moviesData.length }} FILM
      </h2>
      <h2 class="ps-4 fs-1 py-2" v-else>FILM POPOLARI ADESSO!</h2>
      <div class="row">
        <div
          class="col-3 py-4"
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
          class="col-3 py-4"
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
    <span class="loader"></span>
    <h4 class="py-4">CERCANDO TRA UNIVERSI CINEMATOGRAFICI . . .</h4>
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

.load-container {
  .loader {
    width: 48px;
    height: 48px;
    border: 3px solid #fff;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
  .loader::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-bottom-color: $primary-color;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  h4 {
    color: $primary-color;
  }
}
</style>
