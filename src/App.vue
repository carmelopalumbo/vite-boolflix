<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  name: "App",
  components: {
    AppFooter,
    AppHeader,
  },
};
</script>

<template>
  <AppHeader />
  <h1>APP</h1>
  <AppFooter />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
