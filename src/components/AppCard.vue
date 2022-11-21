<script>
export default {
  name: "AppCard",
  props: {
    image: String,
    titleSeries: String,
    titleMovies: String,
    originalTitle: String,
    overview: String,
    language: String,
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
      <p v-if="titleSeries"><strong>Titolo:</strong>{{ titleSeries }}</p>
      <p v-else><strong>Titolo:</strong>{{ titleMovies }}</p>
      <p v-show="originalTitle">
        <strong>Titolo originale:</strong>{{ originalTitle }}
      </p>

      <!-- else not working -->
      <strong>
        LINGUA: <span v-if="language" :class="'fi fi-' + language"></span>
        <span v-else>unknown</span>
      </strong>

      <p><strong>Voto:</strong> TEST</p>
      <p><strong>Trama:</strong> {{ overview }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/var" as *;
.cp-card {
  width: 250px;
  height: 400px;
  position: relative;
  transition: 0.3s all;
  &:hover .info-box {
    opacity: 0.97;
  }
  &:hover {
    transform: scale(1.05);
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
    padding: 30px;
    overflow-y: auto;
    strong {
      color: $primary-color;
      padding-right: 5px;
    }
    p {
      color: white;
    }
  }
}
</style>
