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
      return "https://image.tmdb.org/t/p/original/" + slide.poster_path;
    },
  },
};
</script>

<template>
  <div class="cp-container py-4 d-none d-lg-block">
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
        v-for="(slide, index) in store.moviesData"
        :key="index"
        v-show="slide.poster_path"
      >
        <img :src="getImg(slide)" alt="" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
.cp-container {
  width: 80%;
  margin: 0 auto;
  img {
    width: 100%;
    height: 500px;
  }
}
</style>
