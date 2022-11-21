<script>
export default {
  name: "AppCard",
  props: {
    image: String,
  },
  methods: {
    getImg() {
      if (this.image == null) {
        return "https://upload.wikimedia.org/wikipedia/commons/b/b9/No_Cover.jpg";
      }
      return "https://image.tmdb.org/t/p/w300/" + this.image;
    },
  },
};
</script>

<template>
  <div class="cp-card">
    <img :src="getImg()" alt="" />
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/var" as *;
.cp-card {
  width: 250px;
  height: 400px;
  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
    border: 2px solid $primary-color;
    border-radius: 7px;
  }
}
</style>
