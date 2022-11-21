<script>
export default {
  name: "AppFooter",
};
</script>

<template>
  <footer>
    <div class="container mt-5">
      <div class="row">
        <h4 class="text-center py-4">Made with &hearts; by Carmelo Palumbo</h4>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../style/partials/var" as *;
footer {
  color: $primary-color;
  .container {
    border-top: 2px solid $primary-color;
  }
}
</style>
