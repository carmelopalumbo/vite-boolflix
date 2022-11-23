<script>
import StarRating from "vue-star-rating";
import axios from "axios";
import { store } from "../data/store.js";
export default {
  name: "AppCard",
  data() {
    return {
      actors: [],
    };
  },
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
      if (this.card.original_language === "en") return "fi fi-gb";
      else if (this.card.original_language === "it") return "fi fi-it";
      else if (this.card.original_language === "fr") return "fi fi-fr";
      else if (this.card.original_language === "es") return "fi fi-es";
      else if (this.card.original_language === "de") return "fi fi-de";
      else if (this.card.original_language === "ja") return "fi fi-jp";
      else return "fi fi-xx";
    },
    getActors() {
      if (this.card.title) {
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${this.card.id}/credits?api_key=${store.api_key}&language=${store.language}`
          )
          .then((result) => {
            this.actors = result.data.cast;
          })
          .catch((error) => {
            console.log("ERROR!");
          });
      } else {
        axios
          .get(
            `https://api.themoviedb.org/3/tv/${this.card.id}/credits?api_key=${store.api_key}&language=${store.language}`
          )
          .then((result) => {
            this.actors = result.data.cast;
          })
          .catch((error) => {
            console.log("ERROR!");
          });
      }
    },
  },
};
</script>

<template>
  <div class="cp-card" @mouseover="getActors()">
    <img :src="getImg()" alt="" />
    <div class="info-box">
      <p><strong>Titolo:</strong>{{ card.title || card.original_name }}</p>

      <p v-show="card.original_title">
        <strong>Titolo originale:</strong>{{ card.original_title }}
      </p>

      <div class="main-actors" v-if="actors.length != 0">
        <strong>Attori principali:</strong>
        <ul>
          <li
            v-for="(actor, index) in actors.slice(0, 5)"
            :key="index"
            class="text-white"
          >
            {{ actor.name }}
          </li>
        </ul>
      </div>
      <!-- white flag if flag doesn't exists -->
      <strong>
        LINGUA:
        <span :class="getFlags()"></span>
      </strong>

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

      <!-- to add a little padding bottom -->
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
    box-shadow: 0px 0px 17px 5px white;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:hover img {
    box-shadow: none;
  }

  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
    box-shadow: 0px 0px 17px 5px $primary-color;
    border-radius: 7px;
  }
  .info-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: darken($secondary-color, 5%);
    border-radius: 7px;
    cursor: pointer;
    opacity: 0;
    transition: 0.3s all;
    padding: 20px;
    overflow-y: auto;
    strong {
      color: $primary-color;
      padding-right: 5px;
    }
    p {
      color: white;
    }
    .main-actors {
      ul {
        list-style: none;
        li {
          font-size: 0.8rem;
          &::before {
            content: "🔻";
          }
        }
      }
    }
  }
}

@media (max-width: 780px) {
  .cp-card {
    width: 200px;
    height: 350px;
  }
}
</style>
