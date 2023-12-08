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
  <section class="test_slider overflow-x-hidden w-full pb-20">
    <div class="container">
      <Title :text="props.title" />
      <div class="px-[10px]">
        <swiper
          :breakpoints="{
            '0': {
              slidesPerView: 2,
              spaceBetween: 8,
              centeredSlides: 'true',
            },
            '640': {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            '768': {
              slidesPerView: 3,
              spaceBetween: 8,
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
.test_slider .swiper-pagination {
  width: auto;
  bottom: 15px;
  top: auto;
  display: flex;
  align-items: center;
}
.test_slider .swiper-pagination .swiper-pagination-bullet {
  background-color: #fff;
  width: 12px;
  height: 12px;
  opacity: 1;
  margin-right: 16px;
}
.test_slider .swiper-pagination .swiper-pagination-bullet-active {
  background-color: #95bef3;
  width: 20px;
  height: 20px;
}
</style>
