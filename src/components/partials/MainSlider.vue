<script setup lang="ts">
import { ref } from "vue";
import BookCard from "../cards/BookCard.vue";
import AuthorCard from "../cards/AuthorCard.vue";
import Title from "../ui/Title.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const props = defineProps({
  title: String,
  sliderType: String,
  data: Array,
});
const modules = ref([Navigation]);
</script>

<template>
  <section
    class="main_slider slider-total-class overflow-x-hidden w-full pb-10 md:pb-16 xl:pb-20"
  >
    <div class="container">
      <Title :text="props.title" />
      <div class="px-5px lg:px-[6px] xl:px-2">
        <swiper
          :navigation="true"
          :loop="true"
          :breakpoints="{
            '0': {
              slidesPerView: 2,
              spaceBetween: 8,
              centeredSlides: 'true',
            },
            '640': {
              slidesPerView: 3,
              spaceBetween: 8,
            },
            '768': {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            '1024': {
              slidesPerView: 5,
              spaceBetween: 12,
            },
            '1280': {
              slidesPerView: 6,
              spaceBetween: 16,
            },
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide
            v-for="(item, index) in props.data"
            :key="index + '-caroucel-book-item'"
          >
            <BookCard v-if="props.sliderType === 'book'" :data="item" />
            <AuthorCard v-else :data="item" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style>
.slider-total-class .swiper-button-prev,
.slider-total-class .swiper-button-next {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0;
  transition: 0.2s;
}
.mySwiper:hover .swiper-button-prev,
.mySwiper:hover .swiper-button-next {
  opacity: 1;
}
.slider-total-class .swiper-button-prev::after,
.slider-total-class .swiper-button-next::after {
  font-size: 14px;
  color: #00000095;
  font-weight: bold;
}
.slider-total-class .swiper-button-prev {
  left: 1.5rem;
  right: auto;
}
.slider-total-class .swiper-button-next {
  left: auto;
  right: 1.5rem;
}

@media screen and (max-width: 768px) {
  .slider-total-class .swiper-button-prev,
  .slider-total-class .swiper-button-next {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  .slider-total-class .swiper-button-prev::after,
  .slider-total-class .swiper-button-next::after {
    font-size: 10px;
  }
  .slider-total-class .swiper-button-prev {
    left: 0.5rem;
  }
  .slider-total-class .swiper-button-next {
    right: 0.5rem;
  }
}
</style>
