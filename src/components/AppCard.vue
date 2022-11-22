<script>
import StarRating from "vue-star-rating";
export default {
  name: "AppCard",
  components: {
    StarRating,
  },
  props: {
    card: Object,
  },
  methods: {
    getImg() {
      if (this.card.poster_path == null) {
        return "https://upload.wikimedia.org/wikipedia/commons/b/b9/No_Cover.jpg";
      }
      return "https://image.tmdb.org/t/p/original/" + this.card.poster_path;
    },
    getRating() {
      return this.card.vote_average / 2;
    },
    getFlags() {
      if (this.card.language === "en") return "fi fi-gb";
      else if (this.card.language === "it") return "fi fi-it";
      else if (this.card.language === "de") return "fi fi-de";
      else if (this.card.language === "fr") return "fi fi-fr";
      else return "fi fi-xx";
    },
  },
};
</script>

<template>
  <div class="cp-card">
    <img :src="getImg()" alt="" />
    <div class="info-box">
      <p><strong>Titolo:</strong>{{ card.title || card.original_name }}</p>

      <p v-show="card.original_title">
        <strong>Titolo originale:</strong>{{ card.original_title }}
      </p>

      <!-- white flag if flag doesn't exists -->
      <strong> LINGUA: <span :class="getFlags()"></span> </strong>

      <div class="rating-stars d-flex">
        <p class="pt-3"><strong>Voto:</strong></p>
        <star-rating
          :star-size="15"
          :rating="getRating()"
          :read-only="true"
          :increment="0.5"
          :active-color="['#DC1A28']"
          :show-rating="false"
          :glow="2"
          inactive-color="white"
        >
        </star-rating>
      </div>

      <p><strong>Trama:</strong> {{ card.overview || "NON PRESENTE" }}</p>
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
