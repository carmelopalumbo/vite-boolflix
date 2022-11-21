<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <header>
    <div class="container">
      <div class="row d-flex align-items-center pt-5">
        <div class="col-7">
          <img src="/logo-boolflix.png" alt="logo" />
        </div>
        <div class="col-3">
          <div class="input-group flex-nowrap">
            <input
              type="text"
              class="form-control"
              placeholder="Search movie and TV Series . . ."
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
        </div>
        <div class="col-2">
          <button type="button" class="btn">SEARCH</button>
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
