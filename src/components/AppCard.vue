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
    <div class="info-box">
      <p><strong>Titolo:</strong> TEST</p>
      <p><strong>Titolo originale:</strong> TEST</p>
      <p><strong>Voto:</strong> TEST</p>
      <p><strong>Trama:</strong> TEST</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/var" as *;
.cp-card {
  width: 250px;
  height: 400px;
  position: relative;
  &:hover .info-box {
    opacity: 0.97;
  }
  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
    border: 2px solid $primary-color;
    border-radius: 7px;
  }
  .info-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 250px;
    height: 400px;
    background-color: darken($secondary-color, 5%);
    border: 2px solid $primary-color;
    border-radius: 7px;
    cursor: pointer;
    opacity: 0;
    transition: 0.3s all;
  }
}
</style>
