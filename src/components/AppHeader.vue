<script>
import { store } from "../data/store.js";

export default {
  name: "AppHeader",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <header>
    <div class="container">
      <div class="row d-flex align-items-center py-5">
        <div class="col-lg-7 col-md-5 col-sm-5">
          <img src="/logo-boolflix.png" alt="logo" />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-5">
          <div class="input-group flex-nowrap">
            <input
              type="text"
              class="form-control"
              placeholder="Cerca Film & Serie TV . . ."
              aria-label="Username"
              aria-describedby="addon-wrapping"
              v-model.trim="store.query"
              @keyup.enter="$emit('searchButton')"
            />
          </div>
        </div>
        <div class="col-lg-1 col-md-2 text-center col-sm-1">
          <button type="button" class="btn" @click="$emit('searchButton')">
            CERCA
          </button>
        </div>
        <div class="col-lg-1 col-md-1 d-sm-none d-md-inline-block">
          <button type="button" class="btn" @click="$emit('defaultButton')">
            POPOLARI
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../style/partials/var" as *;
header {
  img {
    width: 200px;
  }
  .form-control:focus {
    border-color: $primary-color;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(255, 0, 0, 0.6);
  }
  button {
    background-color: $primary-color;
    color: white;
    &:hover {
      background-color: lighten($primary-color, 10%);
    }
  }
}
</style>
