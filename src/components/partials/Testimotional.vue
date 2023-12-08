<script setup lang="ts">
import { ref } from "vue";
import TestCard from "@/components/cards/TestCard.vue";
import Title from "../ui/Title.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const props = defineProps({
  title: String,
});
const modules = ref([Navigation]);
const tests = [1, 2, 3, 4, 5, 6];
</script>

<template>
  <section
    class="test_slider slider-total-class overflow-x-hidden w-full pb-8 sm:pb-20"
  >
    <div class="container">
      <Title :text="props.title" />
      <div class="px-5px lg:px-[6px] xl:px-2">
        <swiper
          :navigation="true"
          :breakpoints="{
            '0': {
              slidesPerView: 1,
              spaceBetween: 4,
            },
            '640': {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            '768': {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            '1024': {
              slidesPerView: 3,
              spaceBetween: 12,
            },
            '1280': {
              slidesPerView: 3,
              spaceBetween: 16,
            },
          }"
          :pagination="{
            clickable: true,
          }"
          :loop="true"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide
            v-for="(item, index) in tests"
            :key="index + '-caroucel-book-item'"
          >
            <TestCard />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style>
.test_slider.slider-total-class .swiper-button-prev,
.test_slider.slider-total-class .swiper-button-next {
  border: 1px solid rgb(179, 178, 178);
}
.test_slider.slider-total-class .swiper-button-prev::after,
.test_slider.slider-total-class .swiper-button-next::after {
  color: #00000095;
}
@media screen and (max-width: 768px) {
  .test_slider.slider-total-class .swiper-button-prev {
    left: 0.5rem;
  }
  .test_slider.slider-total-class .swiper-button-next {
    right: 0.5rem;
  }
}
</style>
