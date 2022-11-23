<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import { store } from "../data/store.js";

export default {
  name: "AppJumbotron",
  data() {
    return {
      store,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
  methods: {
    getImg(slide) {
      return "https://image.tmdb.org/t/p/original/" + slide.backdrop_path;
    },
    getSlider() {},
  },
};
</script>

<template>
  <div
    class="cp-container py-5 d-none d-lg-block"
    v-if="store.moviesData.length > 0"
  >
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'2'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(slide, index) in store.moviesData.slice(0, 10)"
        :key="index"
        v-show="slide.backdrop_path"
      >
        <img :src="getImg(slide)" alt="" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/var.scss" as *;
.cp-container {
  img {
    width: 100%;
    height: 500px;
    border-radius: 10px;
    box-shadow: 0px 0px 30px 2px $primary-color;
  }
}
</style>
